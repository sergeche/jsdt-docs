/**
 * function addEventListener(Stirng type, Function listener, Boolean useCapture) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @param {String} type
 * @param {Function} listener
 * @param {Boolean} useCapture
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Document.prototype.addEventListener=function(type, listener, useCapture){}; 
/**
 * function attachEvent(String type, Function listener) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @param {String} type
 * @param {Function} listener
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Document.prototype.attachEvent=function(type, listener){}; 
/**
 * function detachEvent(String type, Function listener) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @param {String} type
 * @param {Function} listener
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Document.prototype.detachEvent=function(type, listener){}; 
/**
 * function dispatchEvent(Object event) 
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html 
 * 
 * @param {Object} event
 * @returns {Boolean}
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.    
 */
Document.prototype.dispatchEvent=function(event){return false;}; 

/**
 * function createElement(tagName)  
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * 
 * @param {String} tagName
 * @returns {HTMLElement}
 * @throws DOMException
 * @since Standard ECMA-262 3rd. Edition 
 * @since Level 2 Document Object Model Core Definition.  
 * @see HTMLElement  
 */  
Document.prototype.createElement=function(tagName){return new HTMLElement();}; 

HTMLElement.prototype.outerHTML = '';

var JSON = {
	/** 
	 * Parses JSON string into object
	 * @param {String} str
	 * @returns {Object}
	 */
	parse: function(str) {
		return {};
	},
	
	/**
	 * Serializes JavaScript object into string
	 * @param {Object} obj
	 * @returns {String}
	 */
	stringify: function(obj) {
		return '';
	}
};