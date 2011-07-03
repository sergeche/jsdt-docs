/**
 * jQuery API to JSDoc parser, uses Node.js
 * @author Sergey Chikuyonok (serge.che@gmail.com)
 * @link http://chikuyonok.ru
 */

/** API location */
//var API_LOCATION = 'http://api.jquery.com/api/';
var API_LOCATION = 'http://localhost:8015/jquery-parser/api.xml';

/**
 * Target jQuery version. Use keyword 'latest' to generate JSDoc for latest
 * jQuery version or specify precise version number, like '1.2'. All API
 * methods greater than specified version will be omitted
 */
var TARGET_VERSION = 'latest';

/** Generate JSDoc for Eclipse JSDT (it has some quirks and limitations) */
var ECLIPSE_JSDT = true;

/** Store methods with the same name in different files */
var MULTIPLE_FILES = true;

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
	'Deferred': '__jQueryDeferred',
	'Integer': 'Number',
	'XMLDocument': 'Document',
	'boolean': 'Boolean'
};

var promiseMethods = "done fail isResolved isRejected promise then always pipe".split( " " );
var promiseHash = {};
for (var i = 0, il = promiseMethods.length; i < il; i++) {
	promiseHash[promiseMethods[i]] = 1;
}

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
	}

	return type.replace(/,\s+/g, '|');
}

/**
 * Returns XML node content (with inner tags too)
 * @param node
 * @returns String
 */
function nodeContent(node, do_escape) {
	if (!node)
		return '';

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
function JSDocEntry(elem, signature) {
	this._elem = elem;
	this._signature = signature;

	this.args = [];
	// parse arguments
	if (signature)
		this.args = signature.find('argument').map(function(n, j) {
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
	 * Returns attribute value
	 * @param {String} name
	 * @returns {String}
	 */
	getAttribute: function(name) {
		var attr = this._elem.attr(name);
		return attr !== null ? attr.value() : '';
	},

	/**
	 * Returns method name
	 * @returns {String}
	 */
	getName: function() {
		return this.getAttribute('name') + '';
	},

	/**
	 * Returns base name (i.e. 'get' in 'jQuery.prototype.get')
	 * @returns {String}
	 */
	getBaseName: function() {
		var name = this.getName().split('.');
		if (name[0] != 'jQuery')
			return this.getName();

		return name[name.length - 1];
	},

	/**
	 * Returns element type
	 * @returns {String}
	 */
	getType: function() {
		return this.getAttribute('type');
	},

	/**
	 * Returns method definition
	 * @returns {String}
	 */
	getDefinition: function() {
		/** @type String */
		var name = this.getName() || '';
		var prefix = DEFINITION_PREFIX;
		if (name.indexOf('.') != -1) {
			var n = name.split('.');

			if (n[0] == 'deferred' && n[1] in promiseHash)
				n[0] = 'Promise';

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
		return getType(processType(this.getAttribute('return')));
	},

	/**
	 * Returns library version since this method is available
	 * @returns {String}
	 */
	getVersion: function() {
		var def_version = '1.0';
		if (this._signature) {
			var v = this._signature.get('added');
			return v ? v.text() : def_version;
		}

		return def_version;
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

		if (type == 'method' && this.getReturnType() != 'undefined')
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
	},

	toString: function() {
		return this.dump();
	}
};

function createFile(ix, data) {
	var fname = OUTPUT;
	if (ix != null)
		fname = OUTPUT.replace(/(\.\w+$)/, '-' + (ix + 1) + '$1');

	fs.open(fname, 'w', function(err, fd) {
		if (!err) {
			if (!ix) {
				fs.readFile('__header.js', 'utf8', function(err1, header) {
					writeFile(fd, header + data.join('\n\n'));
				});
			} else {
				writeFile(fd, data.join('\n\n'));
			}
		} else {
			console.log(err);
		}
	});
}

function writeFile(fd, str) {
	var buf = new Buffer(str);
	fs.write(fd, buf, 0, buf.length, function() {
		fs.close(fd);
	});
}

console.log('Loading API');
request({uri: API_LOCATION}, function(error, response, body) {
	if (!error && response.statusCode == 200) {
		var xmlDoc = libxmljs.parseXmlString(body);
		var method_map = {};

		var result = [];
		var multifile = [];

		xmlDoc.find('//entries/entry[@type = "method" or @type = "property"]').forEach(function(item) {
			var signatures = item.find('signature');
			if (!signatures.length)
				signatures.push(null);

			signatures.forEach(function(signature) {
				var jsdoc = new JSDocEntry(item, signature);
				// use base name as key since JSDT fails to resolve static and
				// prototype methods, i.e. $.get and $.prototype.get will be
				// treated as one method definition
				var name = jsdoc.getBaseName();
				if (name && name != 'jQuery' && (TARGET_VERSION == 'latest' || jsdoc.getVersion() <= TARGET_VERSION)) {
					if (!(name in method_map)) {
						method_map[name] = -1;
					}

					method_map[name]++;
					if (!multifile[method_map[name]]) {
						multifile[method_map[name]] = [];
					}

					var dump = jsdoc.dump();
					multifile[method_map[name]].push(dump);
					result.push(dump);
				}
			});
		});

		if (MULTIPLE_FILES) {
			for (var j = 0, jl = multifile.length; j < jl; j++) {
				createFile(j, multifile[j]);
			}
		}

		createFile(null, result);
	}
});
