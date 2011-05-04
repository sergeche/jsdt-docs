/**
 * jQuery API to JSDoc parser, uses Node.js
 * @author Sergey Chikuyonok (serge.che@gmail.com)
 * @link http://chikuyonok.ru
 */

/** API location */
var API_LOCATION = 'http://api.jquery.com/api/';
//var API_LOCATION = 'http://localhost:8015/jsdt-docs/jquery-parser/api.xml';

/** 
 * Target jQuery version. Use keyword 'latest' to generate JSDoc for latest
 * jQuery version or specify precise version number, like '1.2'. All API
 * methods greater than specified version will be omitted
 */
var TARGET_VERSION = 'latest';

/** Generate JSDoc for Eclipse JSDT (it has some quirks and limitations) */
var ECLIPSE_JSDT = true;

/** Where to save generated JSDoc */
var OUTPUT = './jquery-jsdoc.js';

/** Header file to be prepended to generated JSDoc */
var HEADER = '__header.js';

var DEFINITION_PREFIX = 'jQuery.prototype';

var prefix_map = {
	'deferred': '__jQueryDeferred.prototype',
	'Promise': '__jQueryPromise.prototype',
	'event': '__jQueryEvent.prototype'
};

var class_map = {
	'Promise': '__jQueryPromise',
	'Integer': 'Number',
	'XMLDocument': 'Document',
	'boolean': 'Boolean'
};

/** @type NodeHttpModule */
var request = require('request');
/** @type NodeFsModule */
var fs = require('fs');
var libxmljs = require("libxmljs");

/**
 * Processes return type definition
 * @param {String} type
 * @returns String
 */
function processType(type) {
	if (ECLIPSE_JSDT) {
		// Eclipse JSDT supports only one return type, so I have to remove 
		// other types from definition using split() method
		return type.split(',')[0];
	} else {
		return type.replace(/,\s+/g, '|');
	}
}

/**
 * Returns XML node content (with inner tags too)
 * @param node
 * @returns String
 */
function nodeContent(node, do_escape) {
	var re_name = new RegExp('<\\/?' + node.name() + '>|<\\!\\[CDATA\\[|\\]\\]>', 'ig');
	var result = node.toString().replace(re_name, '');
	return do_escape ? escapeForJS(result) : result;
}

/**
 * Escape unsafe JS tokens
 * @param {String} str
 * @returns {String}
 */
function escapeForJS(str) {
	return str.replace(/\/\*/g, '/ *').replace(/\*\//g, '* /');
}

/**
 * Returns object type to be used in JS
 * @param {String} type
 * @returns {String}
 */
function getType(type) {
	return type in class_map ? class_map[type] : type;
}

/**
 * Creates JSDoc entry for parsed XML element
 * @constructor
 */
function JSDocEntry(elem) {
	this._elem = elem;
	
	// parse arguments
	this.args = elem.find('signature[1]/argument').map(function(n, i) {
		var name = n.attr('name').value().replace(/\(.*?\)/g, '');
		var type = getType(processType(n.attr('type').value()));
		
		if (name == 'function')
			name = 'fn';
		else if (name == 'false' || name == 'true' || name == 'switch')
			name = '_' + name;
		else if (name == 'jQuery object') {
			name = 'jq';
			type = 'jQuery';
		} else if (name.charAt(0) == '-') {
			name = 'neg_' + name.substring(1);
		}
		
		return {
			name: name,
			type: type,
			desc: nodeContent(n.get('desc'))
		};
	});
}

JSDocEntry.prototype = {
	/**
	 * Returns method name
	 * @returns {String}
	 */
	getName: function() {
		return this._elem.attr('name').value();
	},
	
	/**
	 * Returns element type
	 * @returns {String}
	 */
	getType: function() {
		return this._elem.attr('type').value();
	},
	
	/**
	 * Returns method definition
	 * @returns {String}
	 */
	getDefinition: function() {
		/** @type String */
		var name = this._elem.attr('name').value();
		var prefix = DEFINITION_PREFIX;
		if (name.indexOf('.') != -1) {
			var n = name.split('.');
			if (n[0] in prefix_map)
				prefix = prefix_map[n[0]];
			else
				prefix = n[0];
			name = n[1];
		}
		return prefix ? prefix + '.' + name : name;
	},
	
	/**
	 * Returns formatted method's return type
	 * @returns {String}
	 */
	getReturnType: function() {
		return getType(processType(this._elem.attr('return').value()));
	},
	
	/**
	 * Returns library version since this method is available 
	 * @returns {String}
	 */
	getVersion: function() {
		var v = this._elem.get('signature[1]/added');
		return v ? v.text() : '1.0';
	},
	
	/**
	 * Returns short description of method
	 * @returns {String}
	 */
	getShortDescription: function() {
		return  nodeContent(this._elem.get('desc'), true);
	},
	
	/**
	 * Returns long description of method
	 * @returns {String}
	 */
	getLongDescription: function() {
		return nodeContent(this._elem.get('longdesc'), true);
	},
	
	/**
	 * Returns JSDoc definition of arguments
	 * @returns {Array}
	 */
	getJSDocArguments: function() {
		return this.args.map(function(arg) {
			return '@param {' + arg.type + '} ' + arg.name + ' ' + arg.desc + '\n';
		});
	},
	
	/**
	 * Returns list of method examples for JSDoc
	 * @returns {Array}
	 */
	getJSDocExamples: function() {
		return this._elem.find('example').map(function(example) {
			return '@example\n<p>' + nodeContent(example.get('desc'), true) + '</p>\n'
				+ '<pre><code>' + nodeContent(example.get('code'), true) + '</code></pre>\n';
		});
	},
	
	/**
	 * Dump formatted JSDoc 
	 * @returns {String}
	 */
	dumpJSDoc: function() {
		var type = this.getType();
		var lines = [this.getShortDescription()];
		
		if (type == 'method')
			lines.push('\n\n', this.getLongDescription());
		
		var examples = this.getJSDocExamples();
		if (examples.length) {
			lines.push('\n');
			lines = lines.concat(examples);
		}
		
		if (this.args.length) {
			lines.push('\n');
			lines = lines.concat(this.getJSDocArguments());
		}
		
		lines.push('\n@since ' + this.getVersion());
		
		if (type == 'method')
			lines.push('\n@returns {' + this.getReturnType() + '}');
		else
			lines.push('\n@type ' + this.getReturnType());
			
		
		// normalize and format lines of code
		lines = lines.join('').split(/\r?\n/g);
		return '/' + '**\n' + lines.map(function(line) {return ' * ' + line;}).join('\n') + '\n**' + '/';
	},
	
	/**
	 * Dump method definition
	 * @returns {String}
	 */
	dumpDefinition: function() {
		var type = this.getType(), kw = '';
		var result = this.getDefinition() + ' = ';
		
		if (type == 'method') {
			result += 'function(' + this.args.map(function(arg) {return arg.name;}).join(', ') + ') {';
			kw = 'return ';
		}
		
		
		if (ECLIPSE_JSDT && this.getReturnType() != 'undefined') {
			switch (this.getReturnType()) {
				case 'undefined':
				case '':
					if (type == 'property')
						result += '{}';
					break;
				case 'String':
					result += kw + '"";';
					break;
				case 'Number':
					result += kw + '0;';
					break;
				default:
					result += kw + 'new ' + this.getReturnType() + '();';
			}
		}
		
		return result + (type == 'method' ? '};' : '');
	},
	
	dump: function() {
		return this.dumpJSDoc() + '\n' + this.dumpDefinition();
	}
};

console.log('Loading API');
request({uri: API_LOCATION}, function(error, response, body) {
	if (!error && response.statusCode == 200) {
		var xmlDoc = libxmljs.parseXmlString(body);
		var elems = xmlDoc.find('//entries/entry[@type = "method"]');
		
		var result = [];
		xmlDoc.find('//entries/entry[@type = "method" or @type = "property"]').forEach(function(item) {
			var jsdoc = new JSDocEntry(item);
			if (jsdoc.getName() != 'jQuery' && (TARGET_VERSION == 'latest' || jsdoc.getVersion() <= TARGET_VERSION))
				result.push(jsdoc.dump());
			jsdoc = null;
		});
		
		fs.open(OUTPUT, 'w', function(err, fd) {
			if (!err) {
				fs.readFile('__header.js', 'utf8', function(err, data) {
					var buf = new Buffer(data + result.join('\n\n'));
					fs.write(fd, buf, 0, buf.length, function() {
						console.log('Done creating file');
					});
				});
			}
		});
	}
});