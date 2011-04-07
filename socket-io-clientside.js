/**
 * @namespace
 */
var io = {};

io.version = '0.6.2';

/** Location of SWF socket */
var WEB_SOCKET_SWF_LOCATION = '/socket.io/lib/vendor/web-socket-js/WebSocketMain.swf';

/**
 * Creates socket object
 * 
 * @param {String}
 *            host
 * @param {Object}
 *            options
 * @param {Boolean}
 *            options.secure
 * @param {HTMLDocument}
 *            options.document
 * @param {Number}
 *            options.port
 * @param {String}
 *            options.resource
 * @param {Array}
 *            options.transports
 * @param {Object}
 *            options.transportOptions
 * @param {Number}
 *            options.connectTimeout
 * @param {Boolean}
 *            options.tryTransportsOnConnectTimeout
 * @param {Boolean}
 *            options.rememberTransport
 * @constructor
 */
io.Socket = function(host, options) {};

/**
 * Returns transport used to exchange data between client and server
 * @param override
 * @returns {Object}
 */
io.Socket.prototype.getTransport = function(override){return {};};

/**
 * Connect to server
 * @returns {io.Socket}
 */
io.Socket.prototype.connect = function(){return this;};

/**
 * Send data to server
 * @param {Object} data
 * @returns {io.Socket}
 */
io.Socket.prototype.send = function(data) {return this;};

/**
 * Disconnect from server
 * @returns {io.Socket}
 */
io.Socket.prototype.disconnect = function(){return this;};

/**
 * Add listener to specified event
 * @param {String} name
 * @param {Function} fn
 * @returns {io.Socket}
 */
io.Socket.prototype.on = function(name, fn){return this;};

/**
 * Emit specified event to listeners
 * @param {String} name Event name
 * @param {Array} args Additional arguments
 * @returns {io.Socket}
 */
io.Socket.prototype.emit = function(name, args){return this;};

/**
 * Remove event listener
 * @param {String} name
 * @param {Function} fn
 * @returns {io.Socket}
 */
io.Socket.prototype.removeEvent = function(name, fn){return this;};

/**
 * Emit specified event to listeners
 * @param {String} name Event name
 * @param {Array} args Additional arguments
 * @returns {io.Socket}
 */
io.Socket.prototype.fire = function(name, args){return this;};

/**
 * Add listener to specified event
 * @param {String} name
 * @param {Function} fn
 * @returns {io.Socket}
 */
io.Socket.prototype.addListener = function(name, fn){return this;};

/**
 * Add listener to specified event
 * @param {String} name
 * @param {Function} fn
 * @returns {io.Socket}
 */
io.Socket.prototype.addEvent = function(name, fn){return this;};

/**
 * Add listener to specified event
 * @param {String} name
 * @param {Function} fn
 * @returns {io.Socket}
 */
io.Socket.prototype.addEventListener = function(name, fn){return this;};
