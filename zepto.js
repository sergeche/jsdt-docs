/**
 * Zepto.js is a minimalist framework for mobile WebKit browsers, with a Zepto-compatible chaining syntax.
 * @type Zepto
 * @constructor
 */
function Zepto(){}

Zepto.prototype = new Array;

/**
 * Access a single matched element.
 * @param {Number} num Element's index in array
 * @return {HTMLElement}
 */
Zepto.prototype.get = function(num){ return new HTMLElement(); };

/**
 * The number of elements currently matched.
 * @return {Number}
 */
Zepto.prototype.size = function(){return 0;};

/**
 * Execute a function within the context of every matched element.
 * @param {Function} fn
 * @return {Zepto}
 */
Zepto.prototype.each = function(fn){ return new Zepto; };

/**
 * Searches every matched element for the object and returns the index of the element, if found, starting with zero.
 * @param {Element} subject
 * @return {Number}
 */
Zepto.prototype.index = function(subject){return 0;};

/**
 * Returns new collection containing only the first matched element
 * @return {Zepto}
 */
Zepto.prototype.first = function(){return new Zepto;};

/**
 * Returns new collection containing only the last matched element
 * @return {Zepto}
 */
Zepto.prototype.last = function(){return new Zepto;};

/**
 * Searches for all elements that match the specified expression.
 * @param {String} expr
 * @return {Zepto}
 */
Zepto.prototype.find = function(expr){return new Zepto;};

/**
 * Get the first ancestor element that matches the selector, beginning at the current element and progressing up through the DOM tree.
 * @param {String} selector A string containing a selector expression to match elements against
 * @return {Zepto}
 */
Zepto.prototype.closest = function(selector){return new Zepto;};

/**
 * Get a set of elements containing the unique ancestors of the matched set of elements (except for the root element).
 * @param {String} expr
 * @return {Zepto}
 */
Zepto.prototype.parents = function(expr){return new Zepto;};

/**
 * Get a set of elements containing the unique parents of the matched set of elements.
 * @param {String} expr
 * @return {Zepto}
 */
Zepto.prototype.parent = function(expr){return new Zepto;};

/**
 * Get a set of elements containing all of the unique children of each of the matched set of elements.
 * @param {String} expr
 * @return {Zepto}
 */
Zepto.prototype.children = function(expr){return new Zepto;};

/**
 * Get a set of elements containing all of the unique siblings of each of the matched set of elements.
 * @param {String} expr
 * @return {Zepto}
 */
Zepto.prototype.siblings = function(expr){return new Zepto;};

/**
 * Get a set of elements containing the unique next siblings of each of the matched set of elements.
 * @param {String} expr
 * @return {Zepto}
 */
Zepto.prototype.next = function(expr){return new Zepto;};

/**
 * Get a set of elements containing the unique previous siblings of each of the matched set of elements.
 * @param {String} expr
 * @return {Zepto}
 */
Zepto.prototype.prev = function(expr){return new Zepto;};

/**
 * Checks the current selection against an expression and returns true, if at least one element of the selection fits the given expression.
 * @param {String} expr
 * @return {Boolean}
 */
Zepto.prototype.is = function(expr){return true;};

/**
 * Removes the specified Element from the set of matched elements.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>not</b>(<b>expr</b>: String) : Zepto<br>
 * <br>
 * Removes elements matching the specified expression from the set of matched elements.<br>
 * <br>
 * <b>not</b>(<b>elems</b>: Zepto) : Zepto<br>
 * <br>
 * Removes any elements inside the array of elements from the set of matched elements.<br>
 * <br>
 * @param {String} expr
 * @return {Zepto}
 */
Zepto.prototype.not = function(expr){return new Zepto;};

/**
 * Removes all matched elements from the DOM.
 * @return {Zepto}
 */
Zepto.prototype.remove = function(){return new Zepto;};

/**
 * Get the html contents of the first matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>html</b>(<b>value</b>: String) : Zepto<br>
 * <br>
 * Set the html contents of every matched element.<br>
 * <br>
 * @param {String} value New value
 * @return {String}
 */
Zepto.prototype.html = function(value){return '';};

/**
 * Get the text contents of all matched elements.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>text</b>(<b>val</b>: String) : String<br>
 * <br>
 * Set the text contents of all matched elements.<br>
 * @param {String} value
 * @return {String}
 */
Zepto.prototype.text = function(value){return '';};

/**
 * Append content to the inside of every matched element.
 * @param {Element} content
 * @return {Zepto}
 */
Zepto.prototype.append = function(content){return new Zepto;};

/**
 * Prepend content to the inside of every matched element.
 * @param {Element} content
 * @return {Zepto}
 */
Zepto.prototype.prepend = function(content){return new Zepto;};

/**
 * Insert content before each of the matched elements.
 * @param {Element} content
 * @return {Zepto}
 */
Zepto.prototype.before = function(content){return new Zepto;};

/**
 * Insert content after each of the matched elements.
 * @param {Element} content
 * @return {Zepto}
 */
Zepto.prototype.after = function(content){return new Zepto;};

/**
 * Displays each of the set of matched elements if they are hidden.
 * @return {Zepto}
 */
Zepto.prototype.show = function(){return new Zepto;};

/**
 * Hides each of the set of matched elements if they are shown.
 * @return {Zepto}
 */
Zepto.prototype.hide = function(){return new Zepto;};

/**
 * Get the current offset of the first matched element relative to the viewport.
 * The returned object contains two integer properties, <code>top</code> and 
 * <code>left</code>. The method works only with visible elements.
 */
Zepto.prototype.offset = function(){ return {top: 0, left: 0};};

/**
 * Get the current computed, pixel, height of the first matched element.
 * @return {Number}
 */
Zepto.prototype.height = function(){return 0;};

/**
 * Get the current computed, pixel, width of the first matched element.
 * @return {Number}
 */
Zepto.prototype.width = function(){return 0;};

/**
 * Access a property on the first matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>attr</b>(<b>properties</b>: Map) : Zepto<br>
 * <br>
 * Set a key/value object as properties to all matched elements.<br>
 * <br>
 * <b>attr</b>(<b>key</b>: String, <b>value</b>: Object) : Zepto<br>
 * <br>
 * Set a single property to a value, on all matched elements.<br>
 * <br>
 * <b>attr</b>(<b>key</b>: String, <b>value</b>: Function) : Zepto<br>
 * <br>
 * Set a single property to a computed value, on all matched elements.<br>
 * <br>
 * @param {String} name
 * @param {String} value
 * @return {Zepto}
 */
Zepto.prototype.attr = function(name, value){return new Zepto;};

/**
 * Access a style property on the first matched element.
 * <br>
 * <br><b>Alternatives</b><br>
 * <br>
 * <b>css</b>(<b>properties</b>: Map) : Zepto<br>
 * <br>
 * Set a key/value object as style properties to all matched elements.<br>
 * <br>
 * <b>css</b>(<b>key</b>: String, <b>value</b>: String|Number) : Zepto<br>
 * <br>
 * Set a single style property to a value, on all matched elements.<br>
 * <br>
 * @param {String} name
 * @param {String} value
 * @return {Zepto}
 */
Zepto.prototype.css = function(name, value){return new Zepto;};

/**
 * Adds the specified class(es) to each of the set of matched elements.
 * @param {String} className
 * @return {Zepto}
 */
Zepto.prototype.addClass = function(className){return new Zepto;};

/**
 * Removes all or the specified class(es) from the set of matched elements.
 * @param {String} className
 * @return {Zepto}
 */
Zepto.prototype.removeClass = function(className){return new Zepto;};

/**
 * Adds the specified class if it is not present, removes it if it is present.
 * @param {String} className
 * @param {Function} switchFn
 * @return {Zepto}
 */
Zepto.prototype.toggleClass = function(className, switchFn){return new Zepto;};

/**
 * Checks the current selection against a class and returns true, if at least one element of the selection has the given class.
 * @param {String} className
 * @return {Boolean}
 */
Zepto.prototype.hasClass = function(className){return false;};

/**
 * Binds a handler to a particular event (like click) for each matched element.
 * @param {String} type
 * @param {Function} fn
 * @param {Object} data
 * @return {Zepto}
 */
Zepto.prototype.bind = function(type, fn){return new Zepto;};

/**
 * Binds a handler to a particular event (like click) for each matched element.
 * @param {String} selector A selector to filter the elements that trigger the event.
 * @param {String} eventType A string containing one or more space-separated JavaScript event types, such as "click" or "keydown," or custom event names.
 * @param {Function} selector handler A function to execute at the time the event is triggered.
 * @return {Zepto}
 */
Zepto.prototype.delegate = function(selector, eventType, handler){return new Zepto;};

/**
 * Binds a handler to a particular event (like click) for each matched element.
 * @param {String} type
 * @param {Function} fn
 * @param {Object} data
 * @return {Zepto}
 */
Zepto.prototype.one = function(type, fn){return new Zepto;};

/**
 * The opposite of bind, removes a bound event from each of the matched elements.
 * @param {String} type
 * @param {Function} fn
 * @return {Zepto}
 */
Zepto.prototype.unbind = function(type, fn){return new Zepto;};

/**
 * The opposite of delegate, removes a delegated event from each of the matched elements.
 * @param {String} selector A selector to filter the elements that trigger the event.
 * @param {String} type
 * @param {Function} fn
 * @return {Zepto}
 */
Zepto.prototype.undelegate = function(selector, type, fn){return new Zepto;};

/**
 * Trigger a type of event on every matched element.
 * @param {String} type
 * @return {Zepto}
 */
Zepto.prototype.trigger = function(type){return new Zepto;};

/**
 * Return property for each element e.g. <code>pluck('innerHTML')</code> returns 
 * an array of all <code>innerHTML</code> properties of all elements found
 * @param {String} property
 * @return {Zepto}
 */
Zepto.prototype.pluck = function(property){return new Zepto;};

/**
 * Use <code>-webkit-transform</code>/<code>opacity</code> and do an animation,
 * optionally supply a callback method to be executed after the animation is complete
 * @param {String} transform
 * @param {Number} opacity
 * @param {Number} duration Animation duration (in seconds)
 * @param {Function} callback
 * @return {Zepto}
 */
Zepto.prototype.anim = function(transform, opacity, duration, callback){return new Zepto;};

/**
 * Bind a function to the tap event of each matched element.
 * @param {Function} fn
 * @return {Zepto}
 */
Zepto.prototype.tap = function(fn){return new Zepto;};

/**
 * Bind a function to the double tap event of each matched element.
 * @param {Function} fn
 * @return {Zepto}
 */
Zepto.prototype.doubleTap = function(fn){return new Zepto;};

/**
 * Bind a function to the swipe tap event of each matched element.
 * @param {Function} fn
 * @return {Zepto}
 */
Zepto.prototype.swipe = function(fn){return new Zepto;};


/**
 * Bind a function to the swipe left tap event of each matched element.
 * @param {Function} fn
 * @return {Zepto}
 */
Zepto.prototype.swipeLeft = function(fn){return new Zepto;};

/**
 * Bind a function to the swipe right tap event of each matched element.
 * @param {Function} fn
 * @return {Zepto}
 */
Zepto.prototype.swipeRight = function(fn){return new Zepto;};

/**
 * Load JSON data using an HTTP GET request.
 * @param {String} url
 * @param {Object} params
 * @param {Function} callback
 * @return {XMLHttpRequest}
 */
Zepto.getJSON = function(url, params, callback){return new XMLHttpRequest;};

/**
 * Load a remote page using an HTTP GET request.
 * @param {String} url
 * @param {Object} params
 * @param {Function} callback
 * @return {XMLHttpRequest}
 */
Zepto.get = function(url, params, callback){return new XMLHttpRequest;};

/**
 * Load a remote page using an HTTP POST request.
 * @param {String} url
 * @param {Object} params
 * @param {Function} callback
 * @return {XMLHttpRequest}
 */
Zepto.post = function(url, params, callback){return new XMLHttpRequest};

/**
 * Load a remote page using an HTTP request.
 * @param {Object} properties
 * @return {XMLHttpRequest}
 */
Zepto.ajax = function(properties){return new XMLHttpRequest;};

/**
 * Zepto.js is a minimalist framework for mobile WebKit browsers, with a Zepto-compatible chaining syntax.
 * @param {String} selector
 * @return {Zepto}
 */
function $(selector){return new Zepto();};
//$.prototype = new Zepto;