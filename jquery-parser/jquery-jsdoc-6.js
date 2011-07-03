/**
 * Returns value at named data store for the first element in the jQuery collection, as set by data(name, value).
 * 
 * 
 * <p>The <code>.data()</code> method allows us to attach data of any type to DOM elements in a way that is safe from circular references and therefore from memory leaks. We can retrieve several distinct values for a single element one at a time, or as a set:</p>
 * <pre>
 * alert($('body').data('foo'));
 * alert($('body').data());
 * </pre>
 * <p>The above lines alert the data values that were set on the <code>body</code> element. If no data at all was set on that element, <code>undefined</code> is returned.</p>
 * <pre>
 * alert( $("body").data("foo")); //undefined
 * $("body").data("bar", "foobar");
 * alert( $("body").data("foobar")); //foobar
 * </pre>
 * <p><strong>HTML 5 data- Attributes</strong></p>
 * <p>As of jQuery 1.4.3 <a href="http://ejohn.org/blog/html-5-data-attributes/">HTML 5 data- attributes</a> will be automatically pulled in to jQuery's data object. The treatment of attributes with embedded dashes was changed in jQuery 1.6 to conform to the <a href="http://www.w3.org/TR/html5/elements.html#embedding-custom-non-visible-data-with-the-data-attributes">W3C HTML5 specification</a>.</p>
 * 
 * <p>For example, given the following HTML:</p>
 * 
 * <pre>&lt;div data-role="page" data-last-value="43" data-hidden="true" data-options='{"name":"John"}'&gt;&lt;/div&gt;</pre>
 * 
 * <p>All of the following jQuery code will work.</p>
 * 
 * <pre>$("div").data("role") === "page";
 * $("div").data("lastValue") === 43;
 * $("div").data("hidden") === true;
 * $("div").data("options").name === "John";</pre>
 * 
 * <p>Every attempt is made to convert the string to a JavaScript value (this includes booleans, numbers, objects, arrays, and null) otherwise it is left as a string. To retrieve the value's attribute as a string without any attempt to convert it, use the <code><a href="/attr/">attr()</a></code> method. When the data attribute is an object (starts with '{') or array (starts with '[') then <code>jQuery.parseJSON</code> is used to parse the string; it must follow <a href="http://en.wikipedia.org/wiki/JSON#Data_types.2C_syntax_and_example">valid JSON syntax</a> <em>including quoted property names</em>. The data- attributes are pulled in the first time the data property is accessed and then are no longer accessed or mutated (all data values are then stored internally in jQuery).</p>
 * <p>Calling <code>.data()</code> with no parameters retrieves all of the values as a JavaScript object. This object can be safely cached in a variable as long as a new object is not set with <code>.data(obj)</code>. Using the object directly to get or set values is faster than making individual calls to <code>.data()</code> to get or set each value:</p>
 * <pre>
 * var mydata = $("#mydiv").data();
 * if ( mydata.count &lt; 9 ) {
 *     mydata.count = 43;
 *     mydata.status = "embiggened";
 * }
 * </pre>
 * 
 * @example
 * <p>Get the data named "blah" stored at for an element.</p>
 * <pre><code>
 * $("button").click(function(e) {
 *   var value;
 * 
 *   switch ($("button").index(this)) {
 *     case 0 :
 *       value = $("div").data("blah");
 *       break;
 *     case 1 :
 *       $("div").data("blah", "hello");
 *       value = "Stored!";
 *       break;
 *     case 2 :
 *       $("div").data("blah", 86);
 *       value = "Stored!";
 *       break;
 *     case 3 :
 *       $("div").removeData("blah");
 *       value = "Removed!";
 *       break;
 *   }
 * 
 *   $("span").text("" + value);
 * });
 * 
 * </code></pre>
 * 
 * @param {String} key Name of the data stored.
 * 
 * @since 1.2.3
 * @returns {Object}
**/
jQuery.prototype.data = function(key) {return new Object();};

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
 * @param {Function} callback The new function to add to the queue, with a function to call that will dequeue the next item.
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.queue = function(queueName, callback) {return new jQuery();};