/**
 * The global namespace object. In browsers, the top-level scope is the global
 * scope. That means that in browsers if you're in the global scope var
 * something will define a global variable. In Node this is different. The
 * top-level scope is not the global scope; var something inside a Node module
 * will be local to that module.
 * 
 * @namespace
 */
var global = {};

/**
 * @namespace
 */
var exports = {};

/**
 * The process object.
 */
var process = {};

/**
 * To require modules.
 * @param {String} module_name
 */
function require(module_name){}

/**
 * Use the internal require() machinery to look up the location of a module, but
 * rather than loading the module, just return the resolved filename.
 */
require.resolve = function() {};

/**
 * An array of search paths for require(). This array can be modified to add
 * custom paths.
 * 
 * @example
 * Add a new path to the beginning of the search list:
 * require.paths.unshift('/usr/local/node');
 */
require.paths = [];

/**
 * The filename of the script being executed. This is the absolute path, and not
 * necessarily the same filename passed in as a command line argument.
 * 
 * @example
 * Example: running node example.js from /Users/mjr
 * console.log(__filename);
 * // /Users/mjr/example.js
 */
var __filename = "";

/**
 * The dirname of the script being executed. 
 * 
 * @example
 * Example: running node example.js from /Users/mjr
 * console.log(__dirname); // /Users/mjr
 */
var __dirname = "";

/**
 * A reference to the current module. In particular <code>module.exports</code>
 * is the same as the <code>exports</code> object. See src/node.js for more
 * information.
 */
var module = {};

/**
 * Execute a function each <code>delay</code> milliseconds.
 * 
 * @param {Function|String}
 *            func Function you want to be called repeatedly
 * @param {Number}
 *            delay Number of milliseconds (thousandths of a second) that the
 *            <code>setInterval()</code> function should wait before each call
 *            to <code>func</code>.
 * @return {Number} <code>interval_id</code> to use with
 *         <code>clearInterval()</code>
 */
function setInterval(func, interval){}

/**
 * Executes a code snippet or a function after specified delay.
 * 
 * @param {Function}
 *            func Function you want to execute after <code>delay</code>
 *            milliseconds
 * @param {Number}
 *            delay Number of milliseconds (thousandths of a second) that the
 *            function call should be delayed by
 * @return {Number} <code>timeout_id</code> to use with
 *         <code>clearTimeout()</code>
 */
function setTimeout(func, delay){}

/**
 * Cancels the repeated execution set using <code>setInterval</code>.
 * 
 * @param {Number}
 *            interval_id
 */
function clearInterval(interval_id) {}

/**
 * Clears the delay set by <code>window.setTimeout()</code>.
 * 
 * @param {Number}
 *            timeout_id ID of the timeout you wish you clear, as returned by
 *            <code>window.setTimeout()</code>.
 */
function clearTimeout(timeout_id){}

/**
 * When an EventEmitter instance experiences an error, the typical action is to emit an 'error' event. Error events are treated as a special case in node. If there is no listener for it, then the default action is to print a stack trace and exit the program.

All EventEmitters emit the event 'newListener' when new listeners are added.
 * @constructor
 * @requires event module 
 */
function EventEmitter() {
	
}

EventEmitter.prototype = {
	/**
	 * Adds a listener to the end of the listeners array for the specified event.
	 * @param {String} event
	 * @param {Function} listener
	 * 
	 * @example
	 * server.on('connection', function (stream) {
	 * 	console.log('someone connected!');
	 * });
	 */
	addListener: function(event, listener) {},
	
	/**
	 * Adds a listener to the end of the listeners array for the specified event.
	 * @param {String} event
	 * @param {Function} listener
	 * 
	 * @example
	 * server.on('connection', function (stream) {
	 * 	console.log('someone connected!');
	 * });
	 */
	on: function(event, listener) {},
	
	/**
	 * Adds a one time listener for the event. The listener is invoked only the
	 * first time the event is fired, after which it is removed.
	 * 
	 * @param {String}
	 *            event
	 * @param {Function}
	 *            listener
	 */
	once: function(event, listener) {},
	
	/**
	 * Remove a listener from the listener array for the specified event. Caution: changes array indices in the listener array behind the listener.
	 * @param {String} event
	 * @param {Function} listener
	 */
	removeListener: function(event, listener) {},
	
	/**
	 * Removes all listeners from the listener array for the specified event.
	 * @param {String} event
	 */
	removeAllListeners: function(event){},
	
	/**
	 * By default EventEmitters will print a warning if more than 10 listeners
	 * are added to it. This is a useful default which helps finding memory
	 * leaks. Obviously not all Emitters should be limited to 10. This function
	 * allows that to be increased. Set to zero for unlimited.
	 * 
	 * @param {Number} n
	 */
	setMaxListeners: function(sn) {},

	/**
	 * Returns an array of listeners for the specified event. This array can be
	 * manipulated, e.g. to remove listeners.
	 * 
	 * @param {String} event
	 * 
	 * @example 
	 * server.on('connection', function (stream) { 
	 * 	console.log('someone connected!');
	 * });
	 * console.log(util.inspect(server.listeners('connection')); // [[Function]]
	 * 
	 * @returns Array
	 */
	listeners: function(event) {return [];},
	

	/**
	 * Execute each of the listeners in order with the supplied arguments.
	 * @param {String} event
	 * @param {Object} args
	 */
	emit: function(event, args){}
};

/**
 * The HTTP interfaces in Node are designed to support many features of the
 * protocol which have been traditionally difficult to use. In particular,
 * large, possibly chunk-encoded, messages. The interface is careful to never
 * buffer entire requests or responses--the user is able to stream data.
 * 
 * HTTP message headers are represented by an object like this:
 * <code>{'content-length': '123', 'content-type': 'text/plain'}</code> 
 * Keys are lowercased. Values are not modified.
 * 
 * In order to support the full spectrum of possible HTTP applications, Node's
 * HTTP API is very low-level. It deals with stream handling and message parsing
 * only. It parses a message into headers and body but it does not parse the
 * actual headers or the body.
 * 
 * @constructor
 */
function NodeHttpModule(){};

/**
 * Returns a new web server object.
 * @param {Function} requestListener a function which is automatically added to the 'request' event.
 * @memberOf NodeHttpModule
 * @returns http.Server
 */
NodeHttpModule.prototype.createServer = function(requestListener){};

/**
 * <p>
 * Node maintains several connections per server to make HTTP requests. This
 * function allows one to transparently issue requests.
 * </p>
 * <p>
 * <code>http.request()</code> returns an instance of the
 * {@link http.ClientRequest} class. The <code>ClientRequest</code> instance
 * is a writable stream. If one needs to upload a file with a POST request, then
 * write to the <code>ClientRequest</code> object.
 * </p>
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * var options = {
 * 	host : 'www.google.com',
 * 	port : 80,
 * 	path : '/upload',
 * 	method : 'POST'
 * };
 * 
 * var req = http.request(options, function(res) {
 * 	console.log('STATUS: ' + res.statusCode);
 * 	console.log('HEADERS: ' + JSON.stringify(res.headers));
 * 	res.setEncoding('utf8');
 * 	res.on('data', function(chunk) {
 * 		console.log('BODY: ' + chunk);
 * 	});
 * });
 * 
 * // write data to request body
 * req.write('datan');
 * req.write('datan');
 * req.end();
 * </pre>
 * 
 * <p>
 * Note that in the example <code>req.end()</code> was called. With
 * <code>http.request()</code> one must always call <code>req.end()</code>
 * to signify that you're done with the request - even if there is no data being
 * written to the request body.
 * </p>
 * <p>
 * If any error is encountered during the request (be that with DNS resolution,
 * TCP level errors, or actual HTTP parse errors) an 'error' event is emitted on
 * the returned request object.
 * </p>
 * <p>
 * There are a few special headers that should be noted.
 * </p>
 * 
 * <ul>
 * <li>Sending a 'Connection: keep-alive' will notify Node that the connection
 * to the server should be persisted until the next request.</li>
 * <li>Sending a 'Content-length' header will disable the default chunked
 * encoding.</li>
 * <li>Sending an 'Expect' header will immediately send the request headers.
 * Usually, when sending 'Expect: 100-continue', you should both set a timeout
 * and listen for the continue event. See RFC2616 Section 8.2.3 for more
 * information.</li>
 * </ul>
 * 
 * @param {Object}
 *            options
 * @param {String}
 *            options.host A domain name or IP address of the server to issue
 *            the request to.
 * @param {Number}
 *            options.port Port of remote server.
 * @param {String}
 *            options.method: A string specifying the HTTP request method.
 *            Possible values: 'GET' (default), 'POST', 'PUT', and 'DELETE'.
 * @param {String}
 *            options.path Request path. Should include query string and
 *            fragments if any. E.g. '/index.html?page=12'
 * @param {Object}
 *            options.headers An object containing request headers.
 * @param {Function}
 *            callback
 * @returns http.ClientRequest
 * 
 */
NodeHttpModule.prototype.request = function(options, callback){return new http.ClientRequest;};

/**
 * <p>
 * Since most requests are GET requests without bodies, Node provides this
 * convenience method. The only difference between this method and
 * http.request() is that it sets the method to GET and calls req.end()
 * automatically.
 * </p>
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * var options = {
 * 	host : 'www.google.com',
 * 	port : 80,
 * 	path : '/index.html'
 * };
 * 
 * http.get(options, function(res) {
 * 	console.log(&quot;Got response: &quot; + res.statusCode);
 * }).on('error', function(e) {
 * 	console.log(&quot;Got error: &quot; + e.message);
 * });
 * </pre>
 * 
 * @param {Object}
 *            options
 * @param {String}
 *            options.host A domain name or IP address of the server to issue
 *            the request to.
 * @param {Number}
 *            options.port Port of remote server.
 * @param {String}
 *            options.method: A string specifying the HTTP request method.
 *            Possible values: 'GET' (default), 'POST', 'PUT', and 'DELETE'.
 * @param {String}
 *            options.path Request path. Should include query string and
 *            fragments if any. E.g. '/index.html?page=12'
 * @param {Object}
 *            options.headers An object containing request headers.
 * @param {Function}
 *            callback
 * @returns http.ClientRequest
 * 
 */
NodeHttpModule.prototype.get = function(options, callback){return new http.ClientRequest;};

var http = new NodeHttpModule;

/**
 * HTTP server. Works with following events:<br>
 * <br>
 * <b>request</b> : <code>function (request, response) { }</code> — Emitted
 * each time there is request. Note that there may be multiple requests per
 * connection (in the case of keep-alive connections).<br>
 * <br>
 * <b>connection</b> : <code>function (stream) { }</code> — When a new TCP
 * stream is established. stream is an object of type {@link net.Stream}.
 * Usually users will not want to access this event. The stream can also be
 * accessed at <code>request.connection</code>.<br>
 * <br>
 * <b>close</b> : <code>function (errno) { }</code> — Emitted when the server
 * closes.<br>
 * <br>
 * <b>checkContinue</b> : <code>function (request, response) {}</code> —
 * Emitted each time a request with an http Expect: 100-continue is received. If
 * this event isn't listened for, the server will automatically respond with a
 * 100 Continue as appropriate.<br>
 * <br>
 * Handling this event involves calling response.writeContinue if the client
 * should continue to send the request body, or generating an appropriate HTTP
 * response (e.g., 400 Bad Request) if the client should not continue to send
 * the request body. <br>
 * Note that when this event is emitted and handled, the request event will not
 * be emitted.<br>
 * <br>
 * <b>upgrade</b> : <code>function (request, socket, head)</code> — Emitted
 * each time a client requests a http upgrade. If this event isn't listened for,
 * then clients requesting an upgrade will have their connections closed.<br>
 * <br>
 * <b>clientError</b> : <code>function (exception) {}</code> — If a client
 * connection emits an 'error' event - it will forwarded here.<br>
 * 
 * @augments EventEmitter
 * @type http.Server
 * @constructor
 */
http.Server = function() {};
http.Server.prototype = new EventEmitter;

/**
 * Begin accepting connections on the specified <code>port</code> and <code>hostname</code>. If the
 * <code>hostname</code> is omitted, the server will accept connections directed to any IPv4
 * address (<code>INADDR_ANY</code>).
 * 
 * To listen to a unix socket, supply a filename instead of port and hostname.
 * 
 * This function is asynchronous. The last parameter <code>callback</code> will be called
 * when the server has been bound to the <code>port</code>.
 * 
 * @param {Number} port
 * @param {String} hostname
 * @param {Function} callback
 */
http.Server.prototype.listen = function(port, hostname, callback){};

/**
 * Stops the server from accepting new connections.
 */
http.Server.prototype.close = function() {};

/**
 * This object is created internally by a HTTP server -- not by the user -- and
 * passed as the first argument to a 'request' listener.<br>
 * <br>
 * This is an <code>EventEmitter</code> with the following events:<br>
 * <br>
 * <b>data</b> : <code>function (chunk) { }</code> — Emitted when a piece of
 * the message body is received.<br>
 * 
 * Example: A chunk of the body is given as the single argument. The
 * transfer-encoding has been decoded. The body chunk is a string. The body
 * encoding is set with <code>request.setBodyEncoding()</code>.<br>
 * <br>
 * <b>end</b> : <code>function () { }</code> — Emitted exactly once for each
 * message. No arguments. After emitted no other events will be emitted on the
 * request.
 * 
 * @augments EventEmitter
 * @type http.ServerRequest
 * @constructor
 */
http.ServerRequest = function() {};
http.ServerRequest.prototype = new EventEmitter;

/**
 * The request method as a string. Read only. Example: 'GET', 'DELETE'.
 */
http.ServerRequest.prototype.method = "GET";

/**
 * Request URL string. This contains only the URL that is present in the actual
 * HTTP request. If the request is:
 * 
 * <pre>
 * GET /status?name=ryan HTTP/1.1\r\n
 *  Accept: text/plain\r\n
 *  \r\n
 * </pre>
 * 
 * Then request.url will be:
 * 
 * <code>'/status?name=ryan'</code> If you would like to parse the URL into
 * its parts, you can use <code>require('url').parse(request.url)</code>.
 * Example:
 * 
 * <pre>
 *  require('url').parse('/status?name=ryan')
 *  { href: '/status?name=ryan',
 *  search: '?name=ryan',
 *  query: 'name=ryan',
 *  pathname: '/status' }
 * </pre>
 * 
 * If you would like to extract the params from the query string, you can use
 * the <code>require('querystring').parse</code> function, or pass true as the
 * second argument to <code>require('url').parse</code>. Example:
 * 
 * <pre>
 *  require('url').parse('/status?name=ryan', true)
 *  { href: '/status?name=ryan',
 *  search: '?name=ryan',
 *  query: { name: 'ryan' },
 *  pathname: '/status' }
 * </pre>
 */
http.ServerRequest.prototype.url = "";

http.ServerRequest.prototype.headers = "";

/**
 * Read only; HTTP trailers (if present). Only populated after the 'end' event.
 */
http.ServerRequest.prototype.trailers = "";

/**
 * The HTTP protocol version as a string. Read only. Examples: '1.1', '1.0'.
 * Also <code>request.httpVersionMajor</code> is the first integer and
 * <code>request.httpVersionMinor</code> is the second.
 */
http.ServerRequest.prototype.httpVersion = "";
http.ServerRequest.prototype.httpVersionMajor = 1;
http.ServerRequest.prototype.httpVersionMinor = 1;

/**
 * Set the encoding for the request body. Either 'utf8' or 'binary'. Defaults to
 * null, which means that the 'data' event will emit a {@link Buffer} object.
 * @param {String} encoding
 */
http.ServerRequest.prototype.setEncoding = function(encoding){};

/**
 * Pauses request from emitting events. Useful to throttle back an upload.
 */
http.ServerRequest.prototype.pause = function(){};

/**
 * Resumes a paused request.
 */
http.ServerRequest.prototype.resume = function() {};

/**
 * The {@link net.Stream} object associated with the connection. With HTTPS
 * support, use <code>request.connection.verifyPeer()</code> and
 * <code>request.connection.getPeerCertificate()</code> to obtain the client's
 * authentication details.
 * @type net.Stream
 */
http.ServerRequest.prototype.connection = new net.Stream;

/**
 * This object is created internally by a HTTP server--not by the user. It is
 * passed as the second parameter to the 'request' event. It is a {@link WritableStream}.
 * @constructor
 * @augments WritableStream
 * @type http.ServerResponse
 */
http.ServerResponse = function() {};
http.ServerResponse.prototype = new WritableStream;

/**
 * Sends a HTTP/1.1 100 Continue message to the client, indicating that the
 * request body should be sent. See the <code>checkContinue</code> event on {@link http.Server}.
 */
http.ServerResponse.prototype.writeContinue = function(){};

/**
 * Sends a response header to the request.<br>
 * <br>
 * Example:
 * 
 * <pre>
 * var body = 'hello world';
 * response.writeHead(200, {
 * 	'Content-Length' : body.length,
 * 	'Content-Type' : 'text/plain'
 * });
 * </pre>
 * 
 * <p>
 * This method must only be called once on a message and it must be called
 * before response.end() is called.
 * </p>
 * <p>
 * If you call <code>response.write()</code> or <code>response.end()</code>
 * before calling this, the implicit/mutable headers will be calculated and call
 * this function for you.
 * </p>
 * 
 * 
 * @param {Number}
 *            statusCode A 3-digit HTTP status code, like 404
 * @param {String}
 *            reasonPhrase Optional human-readable reason phrase
 * @param {Object}
 *            headers Response headers
 */
http.ServerResponse.prototype.writeHead = function(statusCode, reasonPhrase, headers){};

/**
 * When using implicit headers (not calling <code>response.writeHead()</code>
 * explicitly), this property controls the status code that will be send to the
 * client when the headers get flushed.
 * 
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * response.statusCode = 404;
 * </pre>
 */
http.ServerResponse.prototype.statusCode = 200;


/**
 * <p>
 * Sets a single header value for implicit headers. If this header already
 * exists in the to-be-sent headers, it's value will be replaced. Use an array
 * of strings here if you need to send multiple headers with the same name.
 * </p>
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * response.setHeader(&quot;Content-Type&quot;, &quot;text/html&quot;);
 * </pre>
 * 
 * <p>
 * or
 * </p>
 * 
 * <pre>
 * response.setHeader(&quot;Set-Cookie&quot;, [ &quot;type=ninja&quot;, &quot;language=javascript&quot; ]);
 * </pre>
 * 
 */
http.ServerResponse.prototype.setHeader = function(name, value){};

/**
 * <p>
 * Reads out a header that's already been queued but not sent to the client.
 * Note that the name is case insensitive. This can only be called before
 * headers get implicitly flushed.
 * </p>
 * 
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * var contentType = response.getHeader('content-type');
 * </pre>
 * @returns {String}
 */
http.ServerResponse.prototype.getHeader = function(name){return "";};

/**
 * <p>
 * Removes a header that's queued for implicit sending.
 * </p>
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * response.removeHeader(&quot;Content-Encoding&quot;);
 * </pre>
 * 
 */
http.ServerResponse.prototype.removeHeader = function(name){};

/**
 * <p>
 * If this method is called and <code>response.writeHead()</code> has not been
 * called, it will switch to implicit header mode and flush the implicit
 * headers.
 * </p>
 * <p>
 * This sends a chunk of the response body. This method may be called multiple
 * times to provide successive parts of the body.
 * </p>
 * <p>
 * <code>chunk</code> can be a string or a buffer. If chunk is a string, the
 * second parameter specifies how to encode it into a byte stream. By default
 * the <code>encoding</code> is 'utf8'.
 * </p>
 * <p>
 * Note: This is the raw HTTP body and has nothing to do with higher-level
 * multi-part body encodings that may be used.
 * </p>
 * <p>
 * The first time <code>response.write()</code> is called, it will send the
 * buffered header information and the first body to the client. The second time
 * <code>response.write()</code> is called, Node assumes you're going to be
 * streaming data, and sends that separately. That is, the response is buffered
 * up to the first chunk of body.
 * </p>
 * 
 * @param {String} chunk
 * @param {String} encoding
 */
http.ServerResponse.prototype.write = function(chunk, encoding){};

/**
 * <p>
 * This method adds HTTP trailing headers (a header but at the end of the
 * message) to the response.
 * </p>
 * <p>
 * Trailers will only be emitted if chunked encoding is used for the response;
 * if it is not (e.g., if the request was HTTP/1.0), they will be silently
 * discarded.
 * </p>
 * <p>
 * Note that HTTP requires the Trailer header to be sent if you intend to emit
 * trailers, with a list of the header fields in its value. E.g.,
 * </p>
 * 
 * <pre>
 * response.writeHead(200, {
 * 	'Content-Type' : 'text/plain',
 * 	'Trailer' : 'TraceInfo'
 * });
 * response.write(fileData);
 * response.addTrailers({
 * 	'Content-MD5' : &quot;7895bf4b8828b55ceaf47747b4bca667&quot;
 * });
 * response.end();
 * </pre>
 * 
 */
http.ServerResponse.prototype.addTrailers = function(headers){};

/**
 * <p>
 * This method signals to the server that all of the response headers and body
 * has been sent; that server should consider this message complete. The method,
 * <code>response.end()</code>, <b>MUST</b> be called on each response.
 * </p>
 * <p>
 * If data is specified, it is equivalent to calling
 * <code>response.write(data, encoding)</code> followed by
 * <code>response.end()</code>.
 * </p>
 */
http.ServerResponse.prototype.end = function(data, encoding){};

/**
<p>This object is created internally and returned from http.request(). It represents an in-progress request whose header has already been queued. The header is still mutable using the setHeader(name, value), getHeader(name), removeHeader(name) API. The actual header will be sent along with the first data chunk or when closing the connection.</p>
<p>To get the response, add a listener for 'response' to the request object. 'response' will be emitted from the request object when the response headers have been received. The 'response' event is executed with one argument which is an instance of http.ClientResponse.</p>
<p>During the 'response' event, one can add listeners to the response object; particularly to listen for the 'data' event. Note that the 'response' event is called before any part of the response body is received, so there is no need to worry about racing to catch the first part of the body. As long as a listener for 'data' is added during the 'response' event, the entire body will be caught.</p>

<pre>
// Good
request.on('response', function (response) {
	response.on('data', function (chunk) {
		console.log('BODY: ' + chunk);
	});
});

// Bad - misses all or part of the body
request.on('response', function (response) {
	setTimeout(function () {
		response.on('data', function (chunk) {
			console.log('BODY: ' + chunk);
		});
	}, 10);
});
</pre>
<p>This is an EventEmitter with the following events:</p>
<p><b>response</b> : <code>function (response) { }</code> — Emitted when a response is received to this request. This event is emitted only once. The response argument will be an instance of {@link http.ClientResponse}.</p>
 * @constructor
 * @augments EventEmitter
 */
http.ClientRequest = function() {};
http.ClientRequest.prototype = new EventEmitter;

/**
 * Sends a chunk of the body. By calling this method many times, the user can
 * stream a request body to a server--in that case it is suggested to use the
 * ['Transfer-Encoding', 'chunked'] header line when creating the request.
 * 
 * @param {String}
 *            chunk Array of integers or a string.
 * @param {String}
 *            encoding Optional; only applies when chunk is a {@link String}
 * 
 */
http.ClientRequest.prototype.write = function(chunk, encoding){};

/**
 * <p>
 * Finishes sending the request. If any parts of the body are unsent, it will
 * flush them to the stream. If the request is chunked, this will send the
 * terminating '0\r\n\r\n'.
 * </p>
 * <p>
 * If data is specified, it is equivalent to calling
 * <code>request.write(data, encoding)</code> followed by
 * <code>request.end()</code>.
 * </p>
 * 
 */
http.ClientRequest.prototype.end = function(data, encoding){};

/**
 * Aborts a request.
 * 
 * @since v0.3.8
 */
http.ClientRequest.prototype.abort = function(){};

/**
 * <p>
 * This object is created when making a request with http.request(). It is
 * passed to the 'response' event of the request object.
 * </p>
 * <p>
 * The response implements the Readable Stream interface.
 * </p>
 * <p>
 * Events:
 * </p>
 * <ul>
 * <li><b>data</b> : <code>function (chunk) {}</code> — Emitted when a piece
 * of the message body is received.</li>
 * <li><b>end</b> : <code>function () {}</code> — Emitted exactly once for
 * each message. No arguments. After emitted no other events will be emitted on
 * the response.</li>
 * </ul>
 * 
 * @constructor
 */
http.ClientResponse = function() {};

/**
 * The 3-digit HTTP response status code. E.G. 404.
 */
http.ClientResponse.prototype.statusCode = 200;

/**
 * The HTTP version of the connected-to server. Probably either '1.1' or '1.0'.
 * Also <code>response.httpVersionMajor</code> is the first integer and
 * <code>response.httpVersionMinor</code> is the second.
 */
http.ClientResponse.prototype.httpVersion = "1.1";
http.ClientResponse.prototype.httpVersionMajor = 1;
http.ClientResponse.prototype.httpVersionMinor = 1;

/**
 * The response headers object.
 */
http.ClientResponse.prototype.headers = new Object;

/**
 * The response trailers object. Only populated after the 'end' event.
 */
http.ClientResponse.prototype.trailers = new Object;

/**
 * Set the encoding for the response body. Either 'utf8', 'ascii', or 'base64'.
 * Defaults to <code>null</code>, which means that the 'data' event will emit a Buffer
 * object.
 * @param {String} encoding
 */
http.ClientResponse.prototype.setEncoding = function(encoding){};

/**
 * Pauses response from emitting events. Useful to throttle back a download.
 */
http.ClientResponse.prototype.pause = function(){};

/**
 * Resumes a paused response.
 */
http.ClientResponse.prototype.resume = function(){};

/**
 * These functions are in the module 'util'. Use require('util') to access them.
 */
function NodeUtilModule(){};

/**
 * A synchronous output function. Will block the process and output string
 * immediately to <code>stderr</code>.
 * @example
 * <pre>require('util').debug('message on stderr');</pre>
 * @param {String} str
 */
NodeUtilModule.prototype.debug = function(str){};

/**
 * Output with timestamp on stdout.
 * @example
 * <pre>require('util').log('Timestmaped message.');</pre>
 * @param {String} str
 */
NodeUtilModule.prototype.log = function(str){};

/**
 * <p>
 * Return a string representation of object, which is useful for debugging.
 * </p>
 * <p>
 * Example of inspecting all properties of the util object:
 * </p>
 * 
 * <pre>
 * var util = require('util');
 * console.log(util.inspect(util, true, null));
 * </pre>
 * 
 * @param {Object}
 *            object Object to inspect
 * @param {Boolean}
 *            showHidden If <code>true</code>, then the object's
 *            non-enumerable properties will be shown too.
 * @param {Number}
 *            depth Tells inspect how many times to recurse while formatting the
 *            object. This is useful for inspecting large complicated objects.
 *            The default is to only recurse twice. To make it recurse
 *            indefinitely, pass in <code>null</code> for depth.
 * @returns Object           
 */
NodeUtilModule.prototype.inspect = function(object, showHidden, depth){};

/**
 * <p>
 * <b>Experimental</b>
 * </p>
 * <p>
 * Read the data from <code>readableStream</code> and send it to the
 * <code>writableStream</code>. When <code>writableStream.write(data)</code>
 * returns false <code>readableStream</code> will be paused until the drain
 * event occurs on the <code>writableStream</code>.<br>
 * <code>callback</code> gets an error as its only argument and is called when
 * <code>writableStream</code> is closed or when an error occurs.
 * </p>
 * @param {ReadableStream} readableStream
 * @param {WriteableStream} writableStream
 * @param {Function} callback
 */
NodeUtilModule.prototype.pump = function(readableStream, writableStream, callback){};

/**
 * <p>
 * Inherit the prototype methods from one constructor into another. The
 * <code>prototype</code> of constructor will be set to a new object created
 * from <code>superConstructor</code>.
 * </p>
 * <p>
 * As an additional convenience, <code>superConstructor</code> will be
 * accessible through the <code>constructor.super_</code> property.
 * </p>
 * 
 * <pre>
 * var util = require(&quot;util&quot;);
 * var events = require(&quot;events&quot;);
 * 
 * function MyStream() {
 * 	events.EventEmitter.call(this);
 * }
 * 
 * util.inherits(MyStream, events.EventEmitter);
 * 
 * MyStream.prototype.write = function(data) {
 * 	this.emit(&quot;data&quot;, data);
 * }
 * 
 * var stream = new MyStream();
 * 
 * console.log(stream instanceof events.EventEmitter); // true
 * console.log(MyStream.super_ === events.EventEmitter); // true
 * 
 * stream.on(&quot;data&quot;, function(data) {
 * 	console.log('Received data: &quot;' + data + '&quot;');
 * })
 * stream.write(&quot;It works!&quot;); // Received data: &quot;It works!&quot;
 * </pre>
 * 
 * @returns any
 */
NodeUtilModule.prototype.inherits = function(constructor, superConstructor){ return {};};

/**
 * @type NodeUtilModule
 */
var util = new NodeUtilModule;

/**
 * <p>
 * Pure Javascript is Unicode friendly but not nice to binary data. When dealing
 * with TCP streams or the file system, it's necessary to handle octet streams.
 * Node has several strategies for manipulating, creating, and consuming octet
 * streams.
 * </p>
 * <p>
 * Raw data is stored in instances of the Buffer class. A Buffer is similar to
 * an array of integers but corresponds to a raw memory allocation outside the
 * V8 heap. A Buffer cannot be resized.
 * </p>
 * <p>
 * Converting between Buffers and JavaScript string objects requires an explicit
 * encoding method. Here are the different string encodings;
 * </p>
 * <ul>
 * <li><b>ascii</b> - for 7 bit ASCII data only. This encoding method is very
 * fast, and will strip the high bit if set.</li>
 * <li><b>utf8</b> - Multi byte encoded Unicode characters. Many web pages and
 * other document formats use UTF-8.</li>
 * <li><b>ucs2</b> - 2-bytes, little endian encoded Unicode characters. It can
 * encode only BMP(Basic Multilingual Plane, U+0000 - U+FFFF).</li>
 * <li><b>base64</b> - Base64 string encoding.</li>
 * <li><b>binary</b> - A way of encoding raw binary data into strings by using
 * only the first 8 bits of each character. This encoding method is deprecated
 * and should be avoided in favor of Buffer objects where possible. This
 * encoding will be removed in future versions of Node.</li>
 * </ul>
 * 
 * @param {Object} data Possible values:<br><br>
 * {@link Number} — Allocates a new buffer of <code>number</code> octets.<br>
 * {@link Array} — Allocates a new buffer using an <code>array</code> of octets.<br>
 * {@link String} — Allocates a new buffer containing the given str.
 * @param {String} encoding Data encoding, default if 'utf8'
 * @augments Array
 * @constructor
 */
function Buffer(data, encoding) {
	
}

/**
 * <p>
 * Writes <code>string</code> to the buffer at <code>offset</code> using the
 * given <code>encoding</code>. Returns number of octets written. If buffer
 * did not contain enough space to fit the entire string, it will write a
 * partial amount of the string. In the case of 'utf8' encoding, the method will
 * not write partial characters.
 * </p>
 * <p>
 * Example: write a utf8 string into a buffer, then print it
 * </p>
 * 
 * <pre>
 * buf = new Buffer(256);
 * len = buf.write('\u00bd + \u00bc = \u00be', 0);
 * console.log(len + &quot; bytes: &quot; + buf.toString('utf8', 0, len));
 * </pre>
 * @param {String} string
 * @param {Number} offset
 * @param {String} encoding
 * @returns Number
 */
Buffer.prototype.write = function(string, offset, encoding){ return 0;};

/**
 * <p>
 * Decodes and returns a string from buffer data encoded with
 * <code>encoding</code> beginning at <code>start</code> and ending at
 * <code>end</code>.
 * </p>
 * <p>
 * See {@link Buffer#write} example
 * </p>
 * 
 * @see Buffer.prototype.write
 * 
 * 
 * @param {String}
 *            encoding
 * @param {Number}
 *            start
 * @param {Number}
 *            end
 * @returns String
 */
Buffer.prototype.toString = function(encoding, start, end){};

/**
 * Tests if <code>obj</code> is a {@link Buffer}.
 * @param {Object} obj
 * @returns Boolean
 */
Buffer.isBuffer = function(obj){return true;};

/**
 * <p>
 * Gives the actual byte length of a <code>string</code>. This is not the
 * same as <code>String.prototype.length</code> since that returns the number
 * of characters in a string.
 * </p>
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * str = '\u00bd + \u00bc = \u00be';
 * 
 * console.log(str + &quot;: &quot; + str.length + &quot; characters, &quot;
 * 		+ Buffer.byteLength(str, 'utf8') + &quot; bytes&quot;);
 * // ВЅ + Вј = Вѕ: 9 characters, 12 bytes
 * </pre>
 * @param {String} string
 * @param {String} encoding
 */
Buffer.byteLength = function(string, encoding){return 0;};

/**
 * <p>
 * The size of the buffer in bytes. Note that this is not necessarily the size
 * of the contents. <code>length</code> refers to the amount of memory
 * allocated for the buffer object. It does not change when the contents of the
 * buffer are changed.
 * </p>
 * 
 * <pre>
 * buf = new Buffer(1234);
 * 
 * console.log(buf.length);
 * buf.write(&quot;some string&quot;, &quot;ascii&quot;, 0);
 * console.log(buf.length);
 * 
 * // 1234
 * // 1234
 * </pre>
 */
Buffer.prototype.length = 0;

/**
 * <p>
 * Does a <code>memcpy()</code> between buffers.
 * </p>
 * <p>
 * Example: build two Buffers, then copy buf1 from byte 16 through byte 19 into
 * buf2, starting at the 8th byte in buf2.
 * </p>
 * 
 * <pre>
 * buf1 = new Buffer(26);
 * buf2 = new Buffer(26);
 * 
 * for ( var i = 0; i &lt; 26; i++) {
 * 	buf1[i] = i + 97; // 97 is ASCII a
 * 	buf2[i] = 33; // ASCII !
 * }
 * 
 * buf1.copy(buf2, 8, 16, 20);
 * console.log(buf2.toString('ascii', 0, 25));
 * 
 * // !!!!!!!!qrst!!!!!!!!!!!!!
 * </pre>
 * 
 * @param {Buffer}
 *            targetBuffer
 * @param {Number}
 *            targetStart
 * @param {Number}
 *            sourceStart
 * @param {Number}
 *            sourceEnd
 */
Buffer.prototype.copy = function(targetBuffer, targetStart, sourceStart, sourceEnd){};

/**
 * <p>
 * Returns a new buffer which references the same memory as the old, but offset
 * and cropped by the <code>start</code> and <code>end</code> indexes.
 * </p>
 * <p>
 * Modifying the new buffer slice will modify memory in the original buffer!
 * </p>
 * <p>
 * Example: build a Buffer with the ASCII alphabet, take a slice, then modify
 * one byte from the original Buffer.
 * </p>
 * 
 * <pre>
 * var buf1 = new Buffer(26);
 * 
 * for ( var i = 0; i &lt; 26; i++) {
 * 	buf1[i] = i + 97; // 97 is ASCII a
 * }
 * 
 * var buf2 = buf1.slice(0, 3);
 * console.log(buf2.toString('ascii', 0, buf2.length));
 * buf1[0] = 33;
 * console.log(buf2.toString('ascii', 0, buf2.length));
 * 
 * // abc
 * // !bc
 * </pre>
 * @param {Number} start
 * @param {Number} end
 */
Buffer.prototype.slice = function(start, end){return new Buffer;};

/**
 * A stream is an abstract interface implemented by various objects in Node. For
 * example a request to an HTTP server is a stream, as is stdout. Streams are
 * readable, writable, or both. All streams are instances of
 * {@link EventEmitter}.
 * <p>
 * Events:
 * </p>
 * <ul>
 * <li><b>data</b> : <code>function (data) { }</code> — The 'data' event
 * emits either a Buffer (by default) or a string if setEncoding() was used.</li>
 * <li><b>end</b> : <code>function () { }</code> — Emitted when the stream
 * has received an EOF (FIN in TCP terminology). Indicates that no more 'data'
 * events will happen. If the stream is also writable, it may be possible to
 * continue writing.</li>
 * <li><b>error</b> : <code>function (exception) { }</code> — Emitted if
 * there was an error receiving data.</li>
 * <li><b>close</b> : <code>function () { }</code> — Emitted when the
 * underlying file descriptor has been closed. Not all streams will emit this.
 * (For example, an incoming HTTP request will not emit 'close'.)</li>
 * <li><b>fd</b> : <code>function (fd) { }</code> — Emitted when a file
 * descriptor is received on the stream. Only UNIX streams support this
 * functionality; all others will simply never emit this event.</li>
 * </ul>
 * 
 * @augments EventEmitter
 * @constructor
 */
function ReadableStream() {}
ReadableStream.prototype = new EventEmitter;

/**
 * A boolean that is true by default, but turns false after an 'error' occurred,
 * the stream came to an 'end', or destroy() was called.
 */
ReadableStream.prototype.readable = true;

/**
 * Makes the data event emit a {@link String} instead of a {@link Buffer}.
 * 
 * @param {String}
 *            encoding Can be 'utf8', 'ascii', or 'base64'.
 */
ReadableStream.prototype.setEncoding = function(encoding){};

/**
 * Pauses the incoming 'data' events.
 */
ReadableStream.prototype.pause = function(){};

/**
 * Resumes the incoming 'data' events after a pause().
 */
ReadableStream.prototype.resume = function(){};

/**
 * Closes the underlying file descriptor. Stream will not emit any more events.
 */
ReadableStream.prototype.destroy = function(){};

/**
 * After the write queue is drained, close the file descriptor.
 */
ReadableStream.prototype.destroySoon = function(){};

/**
 * 
 * <p>
 * Connects this read stream to <code>destination</code> WriteStream. Incoming
 * data on this stream gets written to destination. The destination and source
 * streams are kept in sync by pausing and resuming as necessary.
 * </p>
 * <p>
 * Emulating the Unix cat command:
 * </p>
 * 
 * <pre>
 * process.stdin.resume();
 * process.stdin.pipe(process.stdout);
 * </pre>
 * 
 * <p>
 * By default <code>end()</code> is called on the destination when the source
 * stream emits end, so that <code>destination</code> is no longer writable.
 * Pass <code>{ end: false }</code> as options to keep the
 * <code>destination</code> stream open.
 * </p>
 * <p>
 * This keeps <code>process.stdout</code> open so that "Goodbye" can be
 * written at the end.
 * </p>
 * 
 * <pre>
 * process.stdin.resume();
 * process.stdin.pipe(process.stdout, {
 * 	end : false
 * });
 * 
 * process.stdin.on(&quot;end&quot;, function() {
 * 	process.stdout.write(&quot;Goodbye\n&quot;);
 * });
 * </pre>
 * 
 * <p>
 * NOTE: If the source stream does not support <code>pause()</code> and
 * <code>resume()</code>, this function adds simple definitions which simply
 * emit 'pause' and 'resume' events on the source stream.
 * </p>
 * 
 * @param {WriteableStream}
 *            destination
 * @param {Object}
 *            options
 */
ReadableStream.prototype.pipe = function(destination, options){};

/**
 * A stream is an abstract interface implemented by various objects in Node. For
 * example a request to an HTTP server is a stream, as is stdout. Streams are
 * readable, writable, or both. All streams are instances of
 * {@link EventEmitter}.
 * <p>
 * Events:
 * </p>
 * <ul>
 * <li><b>drain</b> : <code>function () { }</code> — Emitted after a
 * <code>write()</code> method was called that returned false to indicate that
 * it is safe to write again.</li>
 * <li><b>error</b> : <code>function (exception) { }</code> — Emitted on
 * error with the exception exception.</li>
 * <li><b>close</b> : <code>function () { }</code> — Emitted when the
 * underlying file descriptor has been closed.</li>
 * <li><b>pipe</b> : <code>function (src) { }</code> — Emitted when the
 * stream is passed to a readable stream's pipe method.</li>
 * </ul>
 * @augments EventEmitter
 * @constructor
 */
function WritableStream() {}
WritableStream.prototype = new EventEmitter;

/**
 * A boolean that is <code>true</code> by default, but turns
 * <code>false</code> after an 'error' occurred or <code>end()</code> /
 * <code>destroy()</code> was called.
 */
WritableStream.prototype.writable = true;

/**
 * <p>
 * Writes string with the given encoding to the stream. Returns
 * <code>true</code> if the string has been flushed to the kernel buffer.
 * Returns <code>false</code> to indicate that the kernel buffer is full, and
 * the data will be sent out in the future. The 'drain' event will indicate when
 * the kernel buffer is empty again. The encoding defaults to 'utf8'.
 * </p>
 * <p>
 * If the optional fd parameter is specified, it is interpreted as an integral
 * file descriptor to be sent over the stream. This is only supported for UNIX
 * streams, and is silently ignored otherwise. When writing a file descriptor in
 * this manner, closing the descriptor before the stream drains risks sending an
 * invalid (closed) FD.
 * </p>
 * @param {String} data String data of {@link Buffer}
 * @param {String} encoding
 * @param {Object} fd
 * @returns Boolean
 */
WritableStream.prototype.write = function(data, encoding, fd){return true;};

/**
 * Terminates the stream with EOF or FIN. If arguments passed, sends string with
 * the given encoding and terminates the stream with EOF or FIN. This is useful
 * to reduce the number of packets sent.
 * @param {String} data String data or {@link Buffer}
 * @param {String} encoding
 */
WritableStream.prototype.end = function(string, encoding) {};

/**
 * Closes the underlying file descriptor. Stream will not emit any more events.
 */
WritableStream.prototype.destroy = function(){};

/**
 * After the write queue is drained, close the file descriptor.
 * <code>destroySoon()</code> can still destroy straight away, as long as
 * there is no data left in the queue for writes.
 */
WritableStream.prototype.destroySoon = function(){};

/**
 * The <code>net</code> module provides you with an asynchronous network
 * wrapper. It contains methods for creating both servers and clients (called
 * streams). You can include this module with <code>require("net")</code>;
 * @constructor
 * @type NodeNetModule
 */
function NodeNetModule(){};

/**
 * Creates a new TCP server. The <code>connectionListener</code> argument is
 * automatically set as a listener for the 'connection' event.
 * @param {Object} options
 * @param {Boolean} options.allowHalfOpen If <code>true</code>, then the socket won't automatically send FIN packet when the other end of the socket sends a FIN packet. The socket becomes non-readable, but still writable. You should call the end() method explicitly. See 'end' event for more information.
 * @param {Function} connectionListener
 */
NodeNetModule.prototype.createServer = function(options, connectionListener){};

/**
 * Construct a new socket object and opens a socket to the given location. When
 * the socket is established the 'connect' event will be emitted.
 * 
 * @param {Number}
 *            port TCP connection on specified port. If {@link String} is
 *            passed, creates unix socket connection to <code>path</code>
 * @param {String}
 *            host TCP connection on specified host. If omitted,
 *            <code>localhost</code> will be assumed.
 * @returns net.Server
 */
NodeNetModule.prototype.createConnection = function(port, host){return new net.Server;};

/**
 * Tests if input is an IP address.
 * @param {String} input 
 * @returns {Number} <b>0</b> for invalid strings, <b>4</b> for
 * IP version 4 addresses, and <b>6</b> for IP version 6 addresses.
 */
NodeNetModule.prototype.isIP = function(input){return 0;};

/**
 * Returns <code>true</code> if <code>input</code> is a version 4 IP address, otherwise returns <code>false</code>.
 * @param {String} input
 * @returns Boolean
 */
NodeNetModule.prototype.isIPv4 = function(input){return true;};

/**
 * Returns <code>true</code> if <code>input</code> is a version 6 IP address, otherwise returns <code>false</code>.
 * @param {String} input
 * @returns Boolean
 */
NodeNetModule.prototype.isIPv6 = function(input){return true;};

/**
 * @type NodeNetModule
 */
var net = new NodeNetModule;

/**
 * This class is used to create a TCP or UNIX server.
 * <p>
 * Events:
 * </p>
 * <ul>
 * <li><b>connection</b> : <code>function (socket) {}</code> — Emitted when
 * a new connection is made. socket is an instance of {@link net.Socket}.</li>
 * <li><b>close</b> : <code>function () {}</code> — Emitted when the server
 * closes.</li>
 * </ul>
 * <p>
 * Example of a echo server which listens for connections on port 8124:
 * </p>
 * 
 * <pre>
 * var net = require('net');
 * var server = net.createServer(function(c) {
 * 	c.write('hello\r\n');
 * 	c.pipe(c);
 * });
 * server.listen(8124, 'localhost');
 * </pre>
 * 
 * <p>
 * Test this by using telnet:
 * </p>
 * 
 * <pre>
 * telnetlocalhost8124
 * </pre>
 * 
 * <p>
 * To listen on the socket /tmp/echo.sock the last line would just be changed to
 * </p>
 * 
 * <pre>
 * server.listen('/tmp/echo.sock');
 * </pre>
 * 
 * <p>
 * Use nc to connect to a UNIX domain socket server:
 * </p>
 * 
 * <pre>
 * nc - U / tmp / echo.sock
 * </pre>
 * 
 * @augments EventEmitter
 * @type net.Server
 * @constructor
 */
net.Server = function() {};
net.Server.prototype = new EventEmitter;

/**
 * <p>
 * Begin accepting connections on the specified <code>port</code> and <code>host</code>. If the <code>host</code> is
 * omitted, the server will accept connections directed to any IPv4 address
 * (INADDR_ANY).
 * </p>
 * <p>
 * This function is asynchronous. The last parameter <code>callback</code> will be called
 * when the server has been bound.
 * </p>
 * <p>
 * One issue some users run into is getting EADDRINUSE errors. Meaning another
 * server is already running on the requested port. One way of handling this
 * would be to wait a second and the try again. This can be done with
 * </p>
 * 
 * <pre>
 * server.on('error', function(e) {
 * 	if (e.code == 'EADDRINUSE') {
 * 		console.log('Address in use, retrying...');
 * 		setTimeout(function() {
 * 			server.close();
 * 			server.listen(PORT, HOST);
 * 		}, 1000);
 * 	}
 * });
 * </pre>
 * 
 * <p>
 * (Note: All sockets in Node are set SO_REUSEADDR already)
 * </p>
 * @param {Number} port TCP port. If {@link String} is passed, assumed you're connecting to UNIX socket
 * @param {String} host
 * @param {Function} callback
 */
net.Server.prototype.listen = function(port, host, callback){};

/**
 * <p>
 * Start a server listening for connections on the given file descriptor.
 * </p>
 * <p>
 * This file descriptor must have already had the bind(2) and listen(2) system
 * calls invoked on it.
 * </p>
 * @param {Object} fd
 */
net.Server.prototype.listenFD = function(fd){};

/**
 * Stops the server from accepting new connections. This function is
 * asynchronous, the server is finally closed when the server emits a 'close'
 * event.
 */
net.Server.prototype.close = function(){};

/**
 * Returns the bound address of the server as seen by the operating system.
 * Useful to find which port was assigned when giving getting an OS-assigned
 * address
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * var server = net.createServer(function(socket) {
 * 	socket.end(&quot;goodbye\n&quot;);
 * });
 * 
 * // grab a random port.
 * server.listen(function() {
 * 	address = server.address();
 * 	console.log(&quot;opened server on %j&quot;, address);
 * });
 * </pre>
 * @returns String
 */
net.Server.prototype.address = function(){return '';};

/**
 * Set this property to reject connections when the server's connection count
 * gets high.
 */
net.Server.prototype.maxConnections = 1;

/**
 * The number of concurrent connections on the server.
 */
net.Server.prototype.connections = 1;

/**
 * This object is an abstraction of of a TCP or UNIX socket.
 * <code>net.Socket</code> instances implement a duplex Stream interface. They
 * can be created by the user and used as a client (with <code>connect()</code>)
 * or they can be created by Node and passed to the user through the
 * 'connection' event of a server.
 * 
 * <p>
 * Events:
 * </p>
 * <ul>
 * <li><b>connect</b> : <code>function () { }</code> — Emitted when a socket
 * connection successfully is established. See connect().</li>
 * <li><b>data</b> : <code>function (data) { }</code> — Emitted when data is
 * received. The argument data will be a Buffer or String. Encoding of data is
 * set by socket.setEncoding(). (See the {@link ReadableStream} for more
 * information.)</li>
 * <li><b>end</b> : <code>function () { }</code> — Emitted when the other
 * end of the socket sends a FIN packet. By default (allowHalfOpen == false) the
 * socket will destroy its file descriptor once it has written out its pending
 * write queue. However, by setting allowHalfOpen == true the socket will not
 * automatically end() its side allowing the user to write arbitrary amounts of
 * data, with the caveat that the user is required to end() their side now.</li>
 * <li><b>timeout</b> : <code>function () { }</code> — Emitted if the socket
 * times out from inactivity. This is only to notify that the socket has been
 * idle. The user must manually close the connection. See also:
 * <code>socket.setTimeout()</code></li>
 * <li><b>drain</b> : <code>function () { }</code> — Emitted when the write
 * buffer becomes empty. Can be used to throttle uploads.</li>
 * <li><b>error</b> : <code>function (exception) { }</code> — Emitted when
 * an error occurs. The 'close' event will be called directly following this
 * event.</li>
 * <li><b>close</b> : <code>function (had_error) { }</code> — Emitted once
 * the socket is fully closed. The argument had_error is a boolean which says if
 * the socket was closed due to a transmission error.</li>
 * </ul>
 * 
 * @param {Object}
 *            options
 * @param {Object}
 *            options.fd Allows you to specify the existing file descriptor of
 *            socket.
 * @param {String}
 *            options.type Specified underlying protocol. It can be 'tcp4',
 *            'tcp6', or 'unix'.
 * @param {Boolean}
 *            options.allowHalfOpen If <code>true</code>, then the socket
 *            won't automatically send FIN packet when the other end of the
 *            socket sends a FIN packet. The socket becomes non-readable, but
 *            still writable. You should call the end() method explicitly. See
 *            'end' event for more information.
 * @augments EventEmitter
 * @type net.Socket
 * @constructor
 */
net.Socket = function(options) {};
net.Socket.prototype = new EventEmitter;

/**
 * <p>
 * Opens the connection for a given socket. If <code>port</code> and <code>host</code> are given, then the
 * socket will be opened as a TCP socket, if <code>host</code> is omitted, localhost will be
 * assumed. If a <code>path</code> is given, the socket will be opened as a unix socket to
 * that path.
 * </p>
 * <p>
 * Normally this method is not needed, as {@link net.createConnection} opens the socket.
 * Use this only if you are implementing a custom Socket or if a Socket is
 * closed and you want to reuse it to connect to another server.
 * </p>
 * <p>
 * This function is asynchronous. When the 'connect' event is emitted the socket
 * is established. If there is a problem connecting, the 'connect' event will
 * not be emitted, the 'error' event will be emitted with the exception.
 * </p>
 * <p>
 * The <code>callback</code> parameter will be added as an listener for the 'connect' event.
 * </p>
 * @param {Number} port TCP port. If {@link String} is passed, assumed you're connecting to UNIX socket
 * @param {String} host
 * @param {Function} callback
 */
net.Socket.prototype.connect = function(port, host, callback){};

/**
 * <p>
 * <code>net.Socket</code> has the property that <code>socket.write()</code>
 * always works. This is to help users get up an running quickly. The computer
 * cannot necessarily keep up with the amount of data that is written to a
 * socket — the network connection simply might be too slow. Node will
 * internally queue up the data written to a socket and send it out over the
 * wire when it is possible. (Internally it is polling on the socket's file
 * descriptor for being writable).
 * </p>
 * <p>
 * The consequence of this internal buffering is that memory may grow. This
 * property shows the number of characters currently buffered to be written.
 * (Number of characters is approximately equal to the number of bytes to be
 * written, but the buffer may contain strings, and the strings are lazily
 * encoded, so the exact number of bytes is not known.)
 * </p>
 * <p>
 * Users who experience large or growing <code>bufferSize</code> should
 * attempt to "throttle" the data flows in their program with
 * <code>pause()</code> and <code>resume()</code>.
 * </p>
 * 
 */
net.Socket.prototype.bufferSize = 0;

/**
 * Sets the encoding for data that is received.
 * @param {String} encoding Either 'ascii', 'utf8', or 'base64'
 */
net.Socket.prototype.setEncoding = function(encoding){};

/**
 * This function has been removed in v0.3. It used to upgrade the connection to
 * SSL/TLS. See the TLS section for the new API.
 * @deprecated since v0.3
 */
net.Socket.prototype.setSecure = function(){};

/**
 * <p>
 * Sends data on the socket. The second parameter specifies the encoding in the
 * case of a string--it defaults to UTF8 encoding.
 * </p>
 * 
 * <p>
 * The optional <code>callback</code> parameter will be executed when the data
 * is finally written out - this may not be immediately.
 * </p>
 * 
 * @param {String}
 *            data
 * @param {String}
 *            encoding
 * @param {Function}
 *            callback
 * @returns Boolean Returns <code>true</code> if the entire data was flushed
 *          successfully to the kernel buffer. Returns <code>false</code> if
 *          all or part of the data was queued in user memory. 'drain' will be
 *          emitted when the buffer is again free.
 */
net.Socket.prototype.write = function(data, encoding, callback){return true;};

/**
 * <p>
 * Half-closes the socket. I.E., it sends a FIN packet. It is possible the
 * server will still send some data.
 * </p>
 * <p>
 * If <code>data</code> is specified, it is equivalent to calling
 * <code>socket.write(data, encoding)</code> followed by
 * <code>socket.end()</code>.
 * </p>
 * @param {String}
 *            data
 * @param {String}
 *            encoding
 */
net.Socket.prototype.end = function(data, encoding){};

/**
 * Ensures that no more I/O activity happens on this socket. Only necessary in
 * case of errors (parse error or so).
 */
net.Socket.prototype.destroy = function(){};

/**
 * Pauses the reading of data. That is, 'data' events will not be emitted.
 * Useful to throttle back an upload.
 */
net.Socket.prototype.pause = function(){};

/**
 * Resumes reading after a call to pause().
 */
net.Socket.prototype.resume = function(){};

/**
 * <p>
 * Sets the socket to timeout after <code>timeout</code> milliseconds of inactivity on the
 * socket. By default {@link net.Socket} do not have a timeout.
 * </p>
 * <p>
 * When an idle timeout is triggered the socket will receive a 'timeout' event
 * but the connection will not be severed. The user must manually end() or
 * destroy() the socket.
 * </p>
 * <p>
 * If <code>timeout</code> is 0, then the existing idle timeout is disabled.
 * </p>
 * <p>
 * The optional callback parameter will be added as a one time listener for the
 * 'timeout' event.
 * </p>
 * @param {Number} timeout
 * @param {Function} callback
 */
net.Socket.prototype.setTimeout = function(timeout, callback){};

/**
 * Disables the Nagle algorithm. By default TCP connections use the Nagle
 * algorithm, they buffer data before sending it off. Setting <code>noDelay</code> will
 * immediately fire off data each time <code>socket.write()</code> is called.
 * @param {Boolean} noDelay
 */
net.Socket.prototype.setNoDelay = function(noDelay){};

/**
 * 
 * Enable/disable keep-alive functionality, and optionally set the initial delay
 * before the first keepalive probe is sent on an idle socket. Set <code>initialDelay</code>
 * (in milliseconds) to set the delay between the last data packet received and
 * the first keepalive probe. Setting 0 for <code>initialDelay</code> will leave the value
 * unchanged from the default (or previous) setting.
 * 
 * @param {Boolean} enable
 * @param {Number} initialDelay
 */
net.Socket.prototype.setKeepAlive = function(enable, initialDelay){};

/**
 * The string representation of the remote IP address. For example,
 * '74.125.127.100' or '2001:4860:a005::68'. This member is only present in
 * server-side connections.
 */
net.Socket.prototype.remoteAddress = "";

/**
 * File I/O is provided by simple wrappers around standard POSIX functions. To
 * use this module do <code>require('fs')</code>. All the methods have
 * asynchronous and synchronous forms.
 * <br><br>
 * The asynchronous form always take a completion callback as its last argument.
 * The arguments passed to the completion callback depend on the method, but the
 * first argument is always reserved for an exception. If the operation was
 * completed successfully, then the first argument will be <code>null</code>
 * or <code>undefined</code>.
 * <br><br>
 * In busy processes, the programmer is <b>strongly encouraged</b> to use the
 * asynchronous versions of these calls. The synchronous versions will block the
 * entire process until they complete--halting all connections.
 */
function NodeFsModule() {}

/**
 * Asynchronous rename(2). No arguments other than a possible exception are
 * given to the completion callback.
 * 
 * @param {String} path1
 * @param {String} path2
 * @param {Function} callback
 */
NodeFsModule.prototype.rename = function(path1, path2, callback){};

/**
 * Synchronous rename(2).
 * 
 * @param {String} path1
 * @param {String} path2
 */
NodeFsModule.prototype.renameSync = function(path1, path2){};

/**
 * Asynchronous ftruncate(2). No arguments other than a possible exception are
 * given to the completion callback.
 * 
 * @param {Object} fd
 * @param {Number} len
 * @param {Function} callback
 */
NodeFsModule.prototype.truncate = function(fd, len, callback){};

/**
 * Synchronous ftruncate(2).
 * 
 * @param {Object} fd
 * @param {Number} len
 */
NodeFsModule.prototype.truncateSync = function(fd, len){};

/**
 * Asynchronous chmod(2). No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * @param {String} path
 * @param {Number} mode
 * @param {Function} callback
 */
NodeFsModule.prototype.chmod = function(path, mode, callback){};

/**
 * Synchronous chmod(2).
 * 
 * @param {String} path
 * @param {Number} mode
 */
NodeFsModule.prototype.chmodSync = function(path, mode){};

/**
 * Asynchronous stat(2). The callback gets two arguments (err, stats) where
 * stats is a {@link fs.Stats} object. It looks like this:
 * 
 * <pre>
 * {
 * 	dev : 2049,
 * 	ino : 305352,
 * 	mode : 16877,
 * 	nlink : 12,
 * 	uid : 1000,
 * 	gid : 1000,
 * 	rdev : 0,
 * 	size : 4096,
 * 	blksize : 4096,
 * 	blocks : 8,
 * 	atime : '2009-06-29T11:11:55Z',
 * 	mtime : '2009-06-29T11:11:40Z',
 * 	ctime : '2009-06-29T11:11:40Z'
 * }
 * </pre>
 * 
 * @param {String}
 *            path
 * @param {Function}
 *            callback
 */
NodeFsModule.prototype.stat = function(path, callback){};

/**
 * Asynchronous lstat(2). The callback gets two arguments (err, stats) where
 * stats is a {@link fs.Stats} object. lstat() is identical to stat(), except that if
 * path is a symbolic link, then the link itself is stat-ed, not the file that
 * it refers to.
 * 
 * @param {String} path
 * @param {Function} callback
 */
NodeFsModule.prototype.lstat = function(path, callback){};

/**
 * Asynchronous fstat(2). The callback gets two arguments (err, stats) where
 * stats is a {@link fs.Stats} object.
 * 
 * @param {Object} fd
 * @param {Function} callback
 */
NodeFsModule.prototype.fstat = function(fd, callback){};

/**
 * Synchronous stat(2)
 * 
 * @param {String} path
 * @returns {fs.Stats}
 */
NodeFsModule.prototype.statSync = function(path){return new fs.Stats;};

/**
 * Synchronous lstat(2).
 * 
 * @param {String} path
 * @returns {fs.Stats}
 */
NodeFsModule.prototype.lstatSync = function(path){return new fs.Stats;};

/**
 * Synchronous fstat(2)
 * 
 * @param {Object} fd
 * @returns {fs.Stats}
 */
NodeFsModule.prototype.fstatSync = function(fd){return new fs.Stats;};

/**
 * Asynchronous link(2). No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * @param {String} srcpath
 * @param {String} dstpath
 * @param {Function} callback
 */
NodeFsModule.prototype.link = function(srcpath, dstpath, callback){};

/**
 * Synchronous link(2).
 * 
 * @param {String} srcpath
 * @param {String} dstpath
 */
NodeFsModule.prototype.linkSync = function(srcpath, dstpath){};

/**
 * Asynchronous symlink(2). No arguments other than a possible exception are
 * given to the completion callback.
 * 
 * @param {String} linkdata
 * @param {String} path
 * @param {Function} callback
 */
NodeFsModule.prototype.symlink = function(linkdata, path, callback){};

/**
 * Synchronous symlink(2).
 * 
 * @param {String} linkdata
 * @param {String} path
 */
NodeFsModule.prototype.symlinkSync = function(linkdata, path){};

/**
 * Asynchronous readlink(2). The callback gets two arguments (<code>err</code>,
 * <code>resolvedPath</code>).
 * 
 * @param {String} path
 * @param {Function} callback
 */
NodeFsModule.prototype.readlink = function(path, callback){};

/**
 * Synchronous readlink(2). 
 * 
 * @param {String} path
 * @returns {String} resolved path
 */
NodeFsModule.prototype.readlinkSync = function(path){return "";};

/**
 * Asynchronous realpath(2). The callback gets two arguments (<code>err</code>,
 * <code>resolvedPath</code>).
 * 
 * @param {String} path
 * @param {Function} callback
 */
NodeFsModule.prototype.realpath = function(path, callback){};

/**
 * Synchronous realpath(2)
 * 
 * @param {String} path
 * @returns {String} resolved path
 */
NodeFsModule.prototype.realpathSync = function(path){return "";};

/**
 * Asynchronous unlink(2). No arguments other than a possible exception are
 * given to the completion callback.
 * 
 * @param {String} path
 * @param {Function} callback
 */
NodeFsModule.prototype.unlink = function(path, callback){};

/**
 * Synchronous unlink(2).
 * 
 * @param {String} path
 */
NodeFsModule.prototype.unlinkSync = function(path){};

/**
 * Asynchronous rmdir(2). No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * @param {String} path
 * @param {Function} callback
 */
NodeFsModule.prototype.rmdir = function(path, callback){};

/**
 * Synchronous rmdir(2).
 * 
 * @param {String} path
 */
NodeFsModule.prototype.rmdirSync = function(path){};

/**
 * Asynchronous mkdir(2). No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * @param {String} path
 * @param {Number} mode
 * @param {Function} callback
 */
NodeFsModule.prototype.mkdir = function(path, mode, callback){};

/**
 * Synchronous mkdir(2).
 * 
 * @param {String} path
 * @param {Number} mode
 */
NodeFsModule.prototype.mkdirSync = function(path, mode){};

/**
 * Asynchronous readdir(3). Reads the contents of a directory. The
 * <code>callback</code> gets two arguments (<code>err</code>,
 * <code>files</code>) where files is an array of the names of the files in
 * the directory excluding '.' and '..'.
 * 
 * @param {String} path
 * @param {Function} callback
 */
NodeFsModule.prototype.readdir = function(path, callback){};

/**
 * Synchronous readdir(3). Returns an array of filenames excluding '.' and '..'.
 * 
 * @param {String} path
 * @returns {Array}
 */
NodeFsModule.prototype.readdirSync = function(path){return [];};

/**
 * Asynchronous close(2). No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * @param {Object} fd
 * @param {Function} callback
 */
NodeFsModule.prototype.close = function(fd, callback){};

/**
 * Synchronous close(2).
 * 
 * @param {Object} fd
 */
NodeFsModule.prototype.closeSync = function(fd){};

/**
 * Asynchronous file open. See open(2). The <code>callback</code> gets two 
 * arguments (<code>err</code>, <code>fd</code>).
 * 
 * @param {String} path
 * @param {String} flags can be 'r', 'r+', 'w', 'w+', 'a' or 'a+'
 * @param {Number} mode defaults to 0666
 * @param {Function} callback
 */
NodeFsModule.prototype.open = function(path, flags, mode, callback){};

/**
 * Synchronous open(2).
 * 
 * @param {String} path
 * @param {String} flags can be 'r', 'r+', 'w', 'w+', 'a' or 'a+'
 * @param {Number} mode defaults to 0666
 * @returns {Object}
 */
NodeFsModule.prototype.openSync = function(path, flags, mode){return {};};

/**
 * Write buffer to the file specified by fd. Note that it is unsafe to use
 * fs.write multiple times on the same file without waiting for the callback.
 * For this scenario, fs.createWriteStream is strongly recommended.
 * 
 * @param {Object}
 *            fd
 * @param {Buffer}
 *            buffer
 * @param {Number}
 *            offset Beginning of part of <code>buffer</code> to be written
 * @param {Number}
 *            length Length of part of <code>buffer</code> to be written
 * @param {Number}
 *            position Offset from the beginning of the file where this data
 *            should be written. If position is <code>null</code>, the data
 *            will be written at the current position. See pwrite(2).
 * @param {Function}
 *            callback will be given three arguments (<code>err</code>,
 *            <code>written</code>, <code>buffer</code>) where
 *            <code>written</code> specifies how many bytes were written into
 *            buffer.
 */
NodeFsModule.prototype.write = function(fd, buffer, offset, length, position, callback){};

/**
 * Synchronous version of buffer-based fs.write(). Returns the number of bytes
 * written.<br><br>
 * <p><b>Alternative:</b></p>
 * <code>writeSync(fd, str, position, encoding)</code>
 * 
 * @param {Object}
 *            fd
 * @param {Buffer}
 *            buffer
 * @param {Number}
 *            offset Beginning of part of <code>buffer</code> to be written
 * @param {Number}
 *            length Length of part of <code>buffer</code> to be written
 * @param {Number}
 *            position Offset from the beginning of the file where this data
 *            should be written. If position is <code>null</code>, the data
 *            will be written at the current position. See pwrite(2).
 *            
 * @returns {Number} number of bytes written
 */
NodeFsModule.prototype.writeSync = function(fd, buffer, offset, length, position){};

/**
 * Read data from the file specified by <code>fd</code>.
 * 
 * @param {Object}
 *            fd
 * @param {Buffer}
 *            buffer The data will be written to
 * @param {Number}
 *            offset Offset within the buffer where writing will start
 * @param {Number}
 *            length Number of bytes to read
 * @param {Number}
 *            position Where to begin reading from in the file. If
 *            <code>position</code> is null, data will be read from the
 *            current file position.
 * @param {Function}
 *            callback Function with three arguments: (<code>err</code>,
 *            <code>bytesRead</code>, <code>buffer</code>).
 */
NodeFsModule.prototype.read = function(fd, buffer, offset, length, position, callback){};

/**
 * Synchronous version of buffer-based {@link NodeFsModule#read}
 * <p><b>Alternative:</b></p>
 * <code>readSync(fd, length, position, encoding)</code>
 * 
 * @param {Object}
 *            fd
 * @param {Buffer}
 *            buffer The data will be written to
 * @param {Number}
 *            offset Offset within the buffer where writing will start
 * @param {Number}
 *            length Number of bytes to read
 * @param {Number}
 *            position Where to begin reading from in the file. If
 *            <code>position</code> is null, data will be read from the
 *            current file position.
 * 
 * @returns {Number} number of bytes read.
 */
NodeFsModule.prototype.readSync = function(fd, buffer, offset, length, position){return 0;};

/**
 * <p>
 * Asynchronously reads the entire contents of a file. Example:
 * </p>
 * 
 * <pre>
 * fs.readFile('/etc/passwd', function(err, data) {
 * 	if (err)
 * 		throw err;
 * 	console.log(data);
 * });
 * </pre>
 * 
 * <p>
 * The callback is passed two arguments (<code>err</code>, <code>data</code>),
 * where <code>data</code> is the contents of the file.
 * </p>
 * <p>
 * If no <code>encoding</code> is specified, then the raw buffer is returned.
 * </p>
 * 
 * @param {String} filename
 * @param {String} encoding
 * @param {Function} callback
 */
NodeFsModule.prototype.readFile = function(filename, encoding, callback){};

/**
 * Synchronous version of {@link NodeFsModule#readFile}
 * 
 * @param {String}
 *            filename
 * @param {String}
 *            encoding
 * @returns {String} contents of the filename. If <code>encoding</code> is
 *          specified then this function returns a string. Otherwise it returns
 *          a buffer.
 */
NodeFsModule.prototype.readFileSync = function(filename, encoding){};

/**
 * <p>
 * Asynchronously writes data to a file, replacing the file if it already
 * exists. data can be a string or a buffer.
 * </p>
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * fs.writeFile('message.txt', 'Hello Node', function(err) {
 * 	if (err)
 * 		throw err;
 * 	console.log('It\'s saved!');
 * });
 * </pre>
 * @param {String} filename
 * @param {String} data
 * @param {String} encoding
 * @param {Function} callback
 */
NodeFsModule.prototype.writeFile = function(filename, data, encoding, callback){};

/**
 * The synchronous version of {@link NodeFsModule#writeFile}
 * 
 * @param {String} filename
 * @param {String} data
 * @param {String} encoding
 */
NodeFsModule.prototype.writeFileSync = function(filename, data, encoding){};

/**
 * Watch for changes on filename. The callback listener will be called each time
 * the file is accessed.
 * 
 * <pre>
 * fs.watchFile(f, function(curr, prev) {
 * 	console.log('the current mtime is: ' + curr.mtime);
 * 	console.log('the previous mtime was: ' + prev.mtime);
 * });
 * </pre>
 * 
 * <p>
 * These stat objects are instances of {@link fs.Stat}.
 * </p>
 * <p>
 * If you want to be notified when the file was modified, not just accessed you
 * need to compare <code>curr.mtime</code> and <code>prev.mtime</code>.
 * </p>
 * 
 * @param {String}
 *            filename
 * @param {Object}
 *            options Optional. Should be an object containing two members a
 *            boolean, <code>persistent</code>, and <code>interval</code>,
 *            a polling value in milliseconds. The default is
 *            <code>{ persistent: true, interval: 0 }</code>.
 * @param {Function}
 *            listener Gets two arguments: the current stat object and the
 *            previous stat object
 */
NodeFsModule.prototype.watchFile = function(filename, options, listener){};

/**
 * Stop watching for changes on filename.
 * 
 * @param {String} filename
 */
NodeFsModule.prototype.unwatchFile = function(filename){};

/**
 * Returns a new {@link ReadableStream} object
 * <p>
 * <code>options</code> can include <code>start</code> and <code>end</code>
 * values to read a range of bytes from the file instead of the entire file.
 * Both <code>start</code> and <code>end</code> are inclusive and
 * <code>start</code> at 0. When used, both the limits must be specified
 * always.
 * </p>
 * <p>
 * An example to read the last 10 bytes of a file which is 100 bytes long:
 * </p>
 * 
 * <pre>
 * fs.createReadStream('sample.txt', {
 * 	start : 90,
 * 	end : 99
 * });
 * </pre>
 * 
 * @param {String}
 *            path
 * @param {Object}
 *            options
 * @param {String}
 *            options.flags Default 'r' 
 * @param {String}
 *            options.encoding
 * @param {Object}
 *            options.fd
 * @param {Number}
 *            options.mode Default 0666
 * @param {Number}
 *            options.bufferSize Default 64 * 1024
 * @returns ReadableStream
 */
NodeFsModule.prototype.createReadStream = function(path, options){ return new ReadableStream; };

/**
 * Returns a new WriteStream object (See Writable Stream).
 * @param {String}
 *            path
 * @param {Object}
 *            options
 * @param {String}
 *            options.flags Default 'w' 
 * @param {String}
 *            options.encoding
 * @param {Number}
 *            options.mode Default 0666
 * @returns WritableStream
 */
NodeFsModule.prototype.createWriteStream = function(path, options){ return new WritableStream; };

/**
 * @type NodeFsModule
 */
var fs = new NodeFsModule;

/**
 * File stats object
 * @type fs.Stats
 */
fs.Stats = function() {};
fs.Stats.prototype = {
	dev : 2049,
	ino : 305352,
	mode : 16877,
	nlink : 12,
	uid : 1000,
	gid : 1000,
	rdev : 0,
	size : 4096,
	blksize : 4096,
	blocks : 8,
	atime : '2009-06-29T11:11:55Z',
	mtime : '2009-06-29T11:11:40Z',
	ctime : '2009-06-29T11:11:40Z',
	/** @returns Boolean */
	isFile: function(){return true;},
	/** @returns Boolean */
	isDirectory: function(){return true;},
	/** @returns Boolean */
	isBlockDevice: function(){return true;},
	/** @returns Boolean */
	isCharacterDevice: function(){return true;},
	/** @returns Boolean */
	isSymbolicLink: function(){return true;},
	/** @returns Boolean */
	isFIFO: function(){return true;},
	/** @returns Boolean */
	isSocket: function(){return true;}
};
/**
 * This module contains utilities for dealing with file paths. Use
 * require('path') to use it.
 * 
 * @constructor
 */
function NodePathModule() {};

/**
 * Normalize a string path, taking care of '..' and '.' parts. When multiple
 * slashes are found, they're replaces by a single one; when the path contains a
 * trailing slash, it is preserved. On windows backslashes are used.
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * path.normalize('/foo/bar//baz/asdf/quux/..')
 * // returns '/foo/bar/baz/asdf'
 * </pre>
 * 
 * @param {String}
 *            p
 * @returns {String}
 */
NodePathModule.prototype.normalize = function(p){return "";};

/**
 * <p>
 * Join all arguments together and normalize the resulting path.
 * </p>
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * require('path').join('/foo', 'bar', 'baz/asdf', 'quux', '..')
 * '/foo/bar/baz/asdf'
 * </pre>
 * @param {String} paths
 * @returns {String}
 */
NodePathModule.prototype.join = function(paths){return "";};

/**
 * <p>
 * Resolves to an absolute path.
 * </p>
 * <p>
 * If to isn't already absolute from arguments are prepended in right to left
 * order, until an absolute path is found. If after using all from paths still
 * no absolute path is found, the current working directory is used as well. The
 * resulting path is normalized, and trailing slashes are removed unless the
 * path gets resolved to the root directory.
 * </p>
 * <p>
 * Another way to think of it is as a sequence of cd commands in a shell.
 * </p>
 * 
 * <pre>
 * path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')
 * </pre>
 * 
 * <p>
 * Is similar to:
 * </p>
 * 
 * <pre>
 * cd foo/bar
 * cd /tmp/file/
 * cd ..
 * cd a/../subfile
 * pwd
 * </pre>
 * 
 * <p>
 * The difference is that the different paths don't need to exist and may also
 * be files.
 * </p>
 * <p>
 * Examples:
 * </p>
 * 
 * <pre>
 * path.resolve('/foo/bar', './baz')
 * // returns
 * '/foo/bar/baz'
 * 
 * path.resolve('/foo/bar', '/tmp/file/')
 * // returns
 * '/tmp/file'
 * 
 * path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
 * // if currently in /home/myself/node, it returns
 * '/home/myself/node/wwwroot/static_files/gif/image.gif'
 * </pre>
 * 
 * @param {String}
 *            from
 * @param {String}
 *            to
 * @returns {String}
 */
NodePathModule.prototype.resolve = function(from, to){return "";};

/**
 * <p>
 * Return the directory name of a path. Similar to the Unix dirname command.
 * </p>
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * path.dirname('/foo/bar/baz/asdf/quux')
 * // returns '/foo/bar/baz/asdf'
 * </pre>
 * 
 * @param {String} p
 * @returns {String}
 */
NodePathModule.prototype.dirname = function(p){return "";};

/**
 * <p>
 * Return the last portion of a <code>path</code>. Similar to the Unix
 * <code>basename</code> command.
 * </p>
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * path.basename('/foo/bar/baz/asdf/quux.html')
 * // returns
 * 'quux.html'
 * 
 * path.basename('/foo/bar/baz/asdf/quux.html', '.html')
 * // returns
 * 'quux'
 * </pre>
 * @param {String} path
 * @param {String} ext
 * @returns {String}
 */
NodePathModule.prototype.basename = function(path, ext){return "";};

/**
 * Return the extension of the path. Everything after the last '.' in the last
 * portion of the path. If there is no '.' in the last portion of the path or
 * the only '.' is the first character, then it returns an empty string.
 * Examples:
 * 
 * <pre>
 * path.extname('index.html')
 * // returns
 * '.html'
 * 
 * path.extname('index')
 * // returns
 * ''
 * </pre>
 * @param {String} p
 */
NodePathModule.prototype.extname = function(p){return "";};

/**
 * Test whether or not the given path exists. Then, call the callback argument
 * with either true or false. Example:
 * 
 * <pre>
 * path.exists('/etc/passwd', function(exists) {
 * 	util.debug(exists ? &quot;it's there&quot; : &quot;no passwd!&quot;);
 * });
 * </pre>
 * 
 */

NodePathModule.prototype.exists = function(p, callback){};
/**
 * Synchronous version of {@link NodePathModule#exists}
 * @param {String} p
 * @returns Boolean
 */
NodePathModule.prototype.existsSync = function(p){return true;};

var path = new NodePathModule;

/**
 * This module has utilities for URL resolution and parsing. Call
 * <code>require('url')</code> to use it.
 * 
 * @constructor
 */
function NodeUrlModule() {};

/**
 * Take a URL string, and return an object. Pass <code>true</code> as the
 * second argument to also parse the query string using the
 * <code>querystring</code> module.
 * 
 * @param {String} url
 * @param {Boolean} parseQueryString
 * @returns NodeUrlParsedObject
 */
NodeUrlModule.prototype.parse = function(url, parseQueryString){return new NodeUrlParsedObject;};

/**
 * Take a parsed URL object, and return a formatted URL string.
 * @param {NodeUrlParsedObject} urlObj
 * @returns {String}
 */
NodeUrlModule.prototype.format = function(urlObj){return "";};

/**
 * Take a base URL, and a href URL, and resolve them as a browser would for an
 * anchor tag.
 * 
 * @param {String} from
 * @param {String} to
 * @returns {String}
 */
NodeUrlModule.prototype.resolve = function(from, to){return "";};

/**
 * Parsed URL object
 * @private
 */
function NodeUrlParsedObject() {}

NodeUrlParsedObject.prototype = {
	/**
	 * The full URL that was originally parsed.
	 */
	href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash',
	
	/**
	 * The request protocol
	 */
	protocol: 'http:',
	
	/**
	 * The full host portion of the URL, including port and authentication information.
	 */
	host: 'user:pass@host.com:8080',

	/**
	 * The authentication information portion of a URL.
	 */
	auth: 'user:pass',
	
	/**
	 * Just the hostname portion of the host.
	 */
	hostname: 'host.com',
	
	/**
	 * The port number portion of the host.
	 */
	port: 8080,
	
	/**
	 * The path section of the URL, that comes after the host and before the
	 * query, including the initial slash if present.
	 */
	pathname: '/p/a/t/h',
	
	/**
	 * The 'query string' portion of the URL, including the leading question
	 * mark.
	 */
	search: '?query=string',
	
	/**
	 * Either the 'params' portion of the query string, or a querystring-parsed
	 * object (like <code>{'query':'string'}</code>).
	 * @type {Object}
	 */
	query: new Object,
	
	/**
	 * The 'fragment' portion of the URL including the pound-sign.
	 */
	hash: '#hash'
};

/**
 * This module provides utilities for dealing with query strings.
 * Call <code>require('querystring')</code> to use it.
 * @constructor
 */
function NodeQuerystringModule() {};

/**
 * <p>
 * Serialize an object to a query string. Optionally override the default
 * separator and assignment characters.
 * </p>
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * querystring.stringify({
 * 	foo : 'bar'
 * })
 * // returns
 * 'foo=bar'
 * 
 * querystring.stringify({
 * 	foo : 'bar',
 * 	baz : 'bob'
 * }, ';', ':')
 * // returns
 * 'foo:bar;baz:bob'
 * </pre>
 * @param {Object} obj
 * @param {String} sep
 * @param {String} eq
 * @returns {String}
 */
NodeQuerystringModule.prototype.stringify = function(obj, sep, eq){return "";};

/**
 * <p>
 * Deserialize a query string to an object. Optionally override the default
 * separator and assignment characters.
 * </p>
 * <p>
 * Example:
 * </p>
 * 
 * <pre>
 * querystring.parse('a=b&amp;b=c')
 * // returns
 * { a: 'b', b: 'c' }
 * </pre>
 * @param {String} str
 * @param {String} se
 * @param {String} eq
 * @returns {Object}
 */
NodeQuerystringModule.prototype.parse = function(str, se, eq){return {};};

/**
 * The escape function used by {@link NodeQuerystringModule#stringify},
 * provided so that it could be overridden if necessary.
 * @param {String} str
 * @returns {String}
 */
NodeQuerystringModule.prototype.escape = function(str) {return "";};

/**
 * The unescape function used by {@link NodeQuerystringModule#parse}, provided so that it could be
 * overridden if necessary.
 * @param {String} str
 * @returns {String}
 */
NodeQuerystringModule.prototype.unescape = function(str) {return "";};