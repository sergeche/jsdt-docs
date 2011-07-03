/**
 * Remove a handler from the event for all elements which match the current selector, now or in the future, based upon a specific set of root elements.
 * 
 * 
 *   <p>Undelegate is a way of removing event handlers that have been bound using <a href="/delegate">.delegate()</a>. It works virtually identically to <a href="/die">.die()</a> with the addition of a selector filter argument (which is required for delegation to work).</p>
 * 
 * @example
 * <p>Can bind and unbind events to the colored button.</p>
 * <pre><code>
 * function aClick() {
 *   $("div").show().fadeOut("slow");
 * }
 * $("#bind").click(function () {
 *   $("body").delegate("#theone", "click", aClick)
 *     .find("#theone").text("Can Click!");
 * });
 * $("#unbind").click(function () {
 *   $("body").undelegate("#theone", "click", aClick)
 *     .find("#theone").text("Does nothing...");
 * });
 * </code></pre>
 * @example
 * <p>To unbind all delegated events from all paragraphs, write:</p>
 * <pre><code>$("p").undelegate()</code></pre>
 * @example
 * <p>To unbind all delegated click events from all paragraphs, write:</p>
 * <pre><code>$("p").undelegate( "click" )</code></pre>
 * @example
 * <p>To undelegate just one previously bound handler, pass the function in as the third argument:</p>
 * <pre><code>var foo = function () {
 * // code to handle some kind of event
 * };
 * 
 * // ... now foo will be called when paragraphs are clicked ...
 * $("body").delegate("p", "click", foo);
 * 
 * 
 * // ... foo will no longer be called.
 * $("body").undelegate("p", "click", foo); </code></pre>
 * @example
 * <p>To unbind all delegated events by their namespace:</p>
 * <pre><code>var foo = function () {
 * // code to handle some kind of event
 * };
 * 
 * // delegate events under the ".whatever" namespace
 * $("form").delegate("click.whatever", ":button", foo);
 * 
 * $("form").delegate("keypress.whatever", ":text", foo); 
 * 
 * // unbind all events delegated under the ".whatever" namespace
 * 
 * $("form").undelegate(".whatever");</code></pre>
 * 
 * @param {String} namespace A string containing a namespace to unbind all events from.
 * 
 * @since 1.6
 * @returns {jQuery}
**/
jQuery.prototype.undelegate = function(namespace) {return new jQuery();};

/**
 * Store arbitrary data associated with the matched elements.
 * 
 * <p>The <code>.data()</code> method allows us to attach data of any type to DOM elements in a way that is safe from circular references and therefore from memory leaks.</p>
 * <p> We can set several distinct values for a single element and retrieve them later:</p>
 * <pre>
 * $('body').data('foo', 52);
 * $('body').data('bar', { myType: 'test', count: 40 });
 * 
 * $('body').data('foo'); // 52
 * $('body').data(); // {foo: 52, bar: { myType: 'test', count: 40 }}
 * </pre>
 * <p>In jQuery 1.4.3 setting an element's data object with <code>.data(obj)</code> extends the data previously stored with that element. jQuery itself uses the <code>.data()</code> method to save information under the names 'events' and 'handle', and also reserves any data name starting with an underscore ('_') for internal use.</p>
 * <p>Prior to jQuery 1.4.3 (starting in jQuery 1.4) the .data() method completely replaced all data, instead of just extending the data object. If you are using third-party plugins it may not be advisable to completely replace the element's data object, since plugins may have also set data.</p>
 * <p>Due to the way browsers interact with plugins and external code, the <code>.data()</code> method cannot be used on <code>&lt;object&gt;</code> (unless it's a Flash plugin), <code>&lt;applet&gt;</code> or <code>&lt;embed&gt;</code> elements.</p>
 * 
 * @example
 * <p>Store then retrieve a value from the div element.</p>
 * <pre><code>
 * $("div").data("test", { first: 16, last: "pizza!" });
 * $("span:first").text($("div").data("test").first);
 * $("span:last").text($("div").data("test").last);
 * </code></pre>
 * 
 * @param {Object} obj An object of key-value pairs of data to update.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.data = function(obj) {return new jQuery();};

/**
 * Manipulate the queue of functions to be executed on the matched elements.
 * 
 * <p>Every element can have one to many queues of functions attached to it by jQuery. In most applications, only one queue (called <code>fx</code>) is used. Queues allow a sequence of actions to be called on an element asynchronously, without halting program execution. The typical example of this is calling multiple animation methods on an element. For example:</p>
 * 				<pre>$('#foo').slideUp().fadeIn();</pre>
 * 				<p>When this statement is executed, the element begins its sliding animation immediately, but the fading transition is placed on the <code>fx</code> queue to be called only once the sliding transition is complete.</p>
 * 				<p>The <code>.queue()</code> method allows us to directly manipulate this queue of functions. Calling <code>.queue()</code> with a callback is particularly useful; it allows us to place a new function at the end of the queue.</p>
 * 				<p>This feature is similar to providing a callback function with an animation method, but does not require the callback to be given at the time the animation is performed.</p>
 * <pre>$('#foo').slideUp();
 * $('#foo').queue(function() {
 *   alert('Animation complete.');
 *   $(this).dequeue();
 * });</pre>
 * <p>This is equivalent to:</p>
 * <pre>$('#foo').slideUp(function() {
 *   alert('Animation complete.');
 * });</pre>
 * <p>Note that when adding a function with <code>.queue()</code>, we should ensure that <code>.dequeue()</code> is eventually called so that the next function in line executes.</p>
 * <p>In jQuery 1.4 the function that's called is passed in another function, as the first argument, that when called automatically dequeues the next item and keeps the queue moving. You would use it like so:</p>
 * <pre>$("#test").queue(function(next) {
 *     // Do some stuff...
 *     next();
 * });</pre>
 * @example
 * <p>Queue a custom function.</p>
 * <pre><code>$(document.body).click(function () {
 *       $("div").show("slow");
 *       $("div").animate({left:'+=200'},2000);
 *       $("div").queue(function () {
 *         $(this).addClass("newcolor");
 *         $(this).dequeue();
 *       });
 *       $("div").animate({left:'-=200'},500);
 *       $("div").queue(function () {
 *         $(this).removeClass("newcolor");
 *         $(this).dequeue();
 *       });
 *       $("div").slideUp();
 *     });</code></pre>
 * @example
 * <p>Set a queue array to delete the queue.</p>
 * <pre><code>$("#start").click(function () {
 *       $("div").show("slow");
 *       $("div").animate({left:'+=200'},5000);
 *       $("div").queue(function () {
 *         $(this).addClass("newcolor");
 *         $(this).dequeue();
 *       });
 *       $("div").animate({left:'-=200'},1500);
 *       $("div").queue(function () {
 *         $(this).removeClass("newcolor");
 *         $(this).dequeue();
 *       });
 *       $("div").slideUp();
 *     });
 *     $("#stop").click(function () {
 *       $("div").queue("fx", []);
 *       $("div").stop();
 *     });</code></pre>
 * 
 * @param {String} queueName A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @param {Array} newQueue An array of functions to replace the current queue contents.
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.queue = function(queueName, newQueue) {return new jQuery();};

/**
 * Gets an array of all the elements and selectors matched against the current element up through the DOM tree.
 * 
 * <p>This method is primarily meant to be used internally or by plugin authors.</p>
 * @example
 * <p>Show how event delegation can be done with closest.</p>
 * <pre><code>
 *   var close = $("li:first").closest(["ul", "body"]);
 *   $.each(close, function(i){
 *   $("li").eq(i).html( this.selector + ": " + this.elem.nodeName );
 *   });</code></pre>
 * 
 * @param {Array} selectors An array or string containing a selector expression to match elements against (can also be a jQuery object).
 * @param {Element} context A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.
 * 
 * @since 1.4
 * @returns {Array}
**/
jQuery.prototype.closest = function(selectors, context) {return new Array();};

/**
 * Add elements to the set of matched elements.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.add()</code> method constructs a new jQuery object from the union of those elements and the ones passed into the method. The argument to <code>.add()</code> can be pretty much anything that  <code>$()</code> accepts, including a jQuery selector expression, references to DOM elements, or an HTML snippet.</p>
 * <p>The updated set of elements can be used in a following (chained) method, or assigned to a variable for later use. For example:</p>
 * <pre>
 * $("p").add("div").addClass("widget");
 * var pdiv = $("p").add("div");
 * </pre>
 * <p>The following will <em>not</em> save the added elements, because the <code>.add()</code> method creates a new set and leaves the original set in pdiv unchanged:</p>
 * <pre>
 * var pdiv = $("p");
 * pdiv.add("div");  // WRONG, pdiv will not change
 * </pre>
 * <p>Consider a page with a simple list and a paragraph following it:</p>
 * <pre>&lt;ul&gt;
 *   &lt;li&gt;list item 1&lt;/li&gt;
 *   &lt;li&gt;list item 2&lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 * &lt;/ul&gt;
 * &lt;p&gt;a paragraph&lt;/p&gt;</pre>
 * <p>We can select the list items and then the paragraph by using either a selector or a reference to the DOM element itself as the <code>.add()</code> method's argument:</p>
 * <pre>$('li').add('p').css('background-color', 'red');</pre>
 * <p>Or:</p>
 * <pre>$('li').add(document.getElementsByTagName('p')[0])
 *   .css('background-color', 'red');</pre>
 * <p>The result of this call is a red background behind all four elements.
 * Using an HTML snippet as the <code>.add()</code> method's argument (as in the third version), we can create additional elements on the fly and add those elements to the matched set of elements. Let's say, for example, that we want to alter the background of the list items along with a newly created paragraph:</p>
 * <pre>$('li').add('&lt;p id="new"&gt;new paragraph&lt;/p&gt;')
 *   .css('background-color', 'red');</pre>
 * <p>Although the new paragraph has been created and its background color changed, it still does not appear on the page. To place it on the page, we could add one of the insertion methods to the chain.</p>
 * <p>As of jQuery 1.4 the results from .add() will always be returned in document order (rather than a simple concatenation).</p>
 * 
 * @example
 * <p>Finds all divs and makes a border.  Then adds all paragraphs to the jQuery object to set their backgrounds yellow.</p>
 * <pre><code>
 * 
 * $("div").css("border", "2px solid red")
 *         .add("p")
 *         .css("background", "yellow");
 * </code></pre>
 * @example
 * <p>Adds more elements, matched by the given expression, to the set of matched elements.</p>
 * <pre><code>$("p").add("span").css("background", "yellow");</code></pre>
 * @example
 * <p>Adds more elements, created on the fly, to the set of matched elements.</p>
 * <pre><code>$("p").clone().add("<span>Again</span>").appendTo(document.body);</code></pre>
 * @example
 * <p>Adds one or more Elements to the set of matched elements.</p>
 * <pre><code>$("p").add(document.getElementById("a")).css("background", "yellow");</code></pre>
 * @example
 * <p>Demonstrates how to add (or push) elements to an existing collection</p>
 * <pre><code>var collection = $("p");
 * // capture the new collection
 * collection = collection.add(document.getElementById("a"));
 * collection.css("background", "yellow");</code></pre>
 * 
 * @param {Selector} selector A string representing a selector expression to find additional elements to add to the set of matched elements.
 * @param {Element} context The point in the document at which the selector should begin matching; similar to the context argument of the <code>$(selector, context)</code> method.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.add = function(selector, context) {return new jQuery();};