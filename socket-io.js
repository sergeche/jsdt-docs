/**
 * * The Socket.IO server provides seamless support for a variety of transports
 * intended for realtime communication.
 * 
 * <ul>
 * <li>WebSocket</li>
 * <li>WebSocket over Flash (+ XML security policy support)</li>
 * <li>XHR Polling</li>
 * <li>XHR Multipart Streaming</li>
 * <li>Forever Iframe</li>
 * <li>JSONP Polling (for cross domain)</li>
 * </ul>
 * 
 * <p>
 * Events:
 * </p>
 * 
 * <ul>
 * <li><code>clientConnect(client)</code> — Fired when a client is connected.
 * Receives the Client instance as parameter.</li>
 * <li><code>clientMessage(message, client)</code> — Fired when a message
 * from a client is received. Receives the message and Client instance as
 * parameters.</li>
 * <li><code>clientDisconnect(client)</code> — Fired when a client is
 * disconnected. Receives the Client instance as a parameter.</li>
 * </ul>
 * 
 * @returns {NodeSocketIoModule}
 */
function NodeSocketIoModule() {}

/**
 * @param {http.Server}
 *            server
 * @param {Object}
 *            options
 * @param {String}
 *            options.resource
 * @param {Boolean}
 *            options.flashPolicyServer
 * @param {Array}
 *            options.transports
 * @param {Object}
 *            options.transportOptions
 * @param {Function}
 *            options.log
 *            
 * @returns SocketIoListener
 */
NodeSocketIoModule.prototype.listen = function(server, options) {return new SocketIoListener;};

/**
 * @constructor
 * @augments EventEmitter
 */
function SocketIoListener() {};

SocketIoListener.prototype = new EventEmitter;

SocketIoListener.prototype.server = new http.Server;

/** The passed-in options, combined with the defaults. */
SocketIoListener.prototype.options = {
	resource: 'socket.io',
	flashPolicyServer: true,
	transports: ['websocket', 'flashsocket', 'htmlfile', 'xhr-multipart', 'xhr-polling', 'jsonp-polling'],
	transportOptions: {},
	log: function() {}
};

/** An object of clients, indexed by session ID. */
SocketIoListener.prototype.clients = {};

/**
 * Broadcasts a message to all clients. Optionally, you can pass a single
 * session ID or array of session IDs to avoid broadcasting to, as the second
 * argument.
 * @param {String} message
 * @param {Array} except
 */
SocketIoListener.prototype.broadcast = function(message, except) {};

/**
 * @constructor
 * @augments EventEmitter
 */
function SocketIoClient() {}
SocketIoClient.prototype = new EventEmitter;

/**
 * The Listener instance to which this client belongs.
 */
SocketIoClient.prototype.listener = new SocketIoListener;

/**
 * Whether the client is connected.
 */
SocketIoClient.prototype.connected = true;

/**
 * Sends a message to the client
 * @param {String} message
 */
SocketIoClient.prototype.send = function(message) {};

/**
 * Sends a message to all other clients. Equivalent to {@link SocketIOListener#broadcast}
 * @param {String} message
 */
SocketIoClient.prototype.broadcast = function(message) {};
