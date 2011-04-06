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
 * To require modules. See the Modules section.
 */
function require(){}

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
 * @namespace
 * @type http
 */
var http = {};

/**
 * Returns a new web server object.
 * @param {Function} requestListener a function which is automatically added to the 'request' event.
 * @returns http.Server
 */
http.createServer = function(requestListener){};

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
http.request = function(options, callback){return new http.ClientRequest;};

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
http.get = function(options, callback){return new http.ClientRequest;};

/**
 * HTTP server. Works with following events:<br>
 * <br>
 * <b>request</b> : <code>function (request, response) { }</code> — Emitted
 * each time there is request. Note that there may be multiple requests per
 * connection (in the case of keep-alive connections).<br>
 * <br>
 * <b>connection</b> : <code>function (stream) { }</code> — When a new TCP
 * stream is established. stream is an object of type <code>net.Stream</code>.
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
 * This object is created internally by a HTTP server -- not by the user -- and passed as the first argument to a 'request' listener.<br><br>
 * This is an <code>EventEmitter</code> with the following events:<br><br>
 * <b>data</b> : <code>function (chunk) { }</code> — Emitted when a piece of the message body is received.<br>

Example: A chunk of the body is given as the single argument. The transfer-encoding has been decoded. The body chunk is a string. The body encoding is set with <code>request.setBodyEncoding()</code>.<br><br>
<b>end</b> : <code>function () { }</code> — Emitted exactly once for each message. No arguments. After emitted no other events will be emitted on the request.
 * @augments EventEmitter
 * @constructor
 */
http.ServerRequest = function() {};

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
 * passed as the second parameter to the 'request' event. It is a <code>Writable Stream</code>.
 * @constructor
 */
http.ServerResponse = function() {};

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
 * @namespace
 */
var util = {};

/**
 * A synchronous output function. Will block the process and output string
 * immediately to <code>stderr</code>.
 * @example
 * <pre>require('util').debug('message on stderr');</pre>
 * @param {String} str
 */
util.debug = function(str){};

/**
 * Output with timestamp on stdout.
 * @example
 * <pre>require('util').log('Timestmaped message.');</pre>
 * @param {String} str
 */
util.log = function(str){};

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
util.inspect = function(object, showHidden, depth){};

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
util.pump = function(readableStream, writableStream, callback){};

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
util.inherits = function(constructor, superConstructor){ return {};};

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
function ReadableStream() {
	
}

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