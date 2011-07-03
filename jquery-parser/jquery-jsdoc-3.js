/**
 * Set one or more properties for the set of matched elements.
 * 
 * <p>The <code>.prop()</code> method is a convenient way to set the value of properties—especially when setting multiple properties or using values returned by a function. Properties generally affect the dynamic state of a DOM element without changing the serialized HTML attribute. Examples include the <code>value</code> property of input elements, the <code>disabled</code> property of inputs and buttons, or the <code>checked</code> property of a checkbox. Most often, <code>.prop()</code> should be used to set disabled and checked instead of the <code><a href="http://api.jquery.com/attr">.attr()</a></code> method. The <code><a href="http://api.jquery.com/val">.val()</a></code> method should be used for getting and setting value.</p>
 * <pre>
 * $("input").prop("disabled", false);
 * $("input").prop("checked", true);
 * $("input").val("someValue");
 * </pre>
 * <p>Also note that the <code><a href="http://api.jquery.com/removeProp">.removeProp()</a></code> method should not be used to set these properties to false. Once a native property is removed, it cannot be added again. See <code><a href="http://api.jquery.com/removeProp">.removeProp()</a></code> for more information.</p>
 * 
 * @example
 * <p>Disable all checkboxes on the page.</p>
 * <pre><code>
 * $("input[type='checkbox']").prop({
 *   disabled: true
 * });
 * </code></pre>
 * 
 * @param {Map} map A map of property-value pairs to set.
 * 
 * @since 1.6
 * @returns {jQuery}
**/
jQuery.prototype.prop = function(map) {return new jQuery();};

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
 * @param {String} selector A selector which will be used to filter the event results.
 * @param {String} eventType A string containing a JavaScript event type, such as "click" or "keydown"
 * @param {Function} handler A function to execute at the time the event is triggered.
 * 
 * @since 1.4.2
 * @returns {jQuery}
**/
jQuery.prototype.undelegate = function(selector, eventType, handler) {return new jQuery();};

/**
 * Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.
 * 
 * 
 *   <p>Delegate is an alternative to using the <a href="/live">.live()</a> method, allowing for each binding of event delegation to specific DOM elements. For example the following delegate code:</p>
 * 
 * <pre>$("table").delegate("td", "hover", function(){
 * 	$(this).toggleClass("hover");
 * });</pre>
 * 
 * <p>Is equivalent to the following code written using <code>.live()</code>:</p>
 * 
 * <pre>$("table").each(function(){
 * 	$("td", this).live("hover", function(){
 * 		$(this).toggleClass("hover");
 * 	});
 * });</pre>
 * 
 * <p>See also the <a href="/undelegate">.undelegate()</a> method for a way of removing event handlers added in <a href="/delegate">.delegate()</a>.</p>
 * <p>Passing and handling event data works <a href="http://api.jquery.com/bind/#passing-event-data">the same way as it does for .bind()</a>.</p>
 * 
 * @example
 * <p>Click a paragraph to add another. Note that .delegate() binds the click event to all paragraphs - even new ones.</p>
 * <pre><code>
 *     $("body").delegate("p", "click", function(){
 *       $(this).after("<p>Another paragraph!</p>");
 *     });
 * </code></pre>
 * @example
 * <p>To display each paragraph's text in an alert box whenever it is clicked:</p>
 * <pre><code>$("body").delegate("p", "click", function(){
 *   alert( $(this).text() );
 * });</code></pre>
 * @example
 * <p>To cancel a default action and prevent it from bubbling up, return false:</p>
 * <pre><code>$("body").delegate("a", "click", function() { return false; })</code></pre>
 * @example
 * <p>To cancel only the default action by using the preventDefault method.</p>
 * <pre><code>$("body").delegate("a", "click", function(event){
 *   event.preventDefault();
 * });</code></pre>
 * @example
 * <p>Can bind custom events too.</p>
 * <pre><code>
 * 
 *     $("body").delegate("p", "myCustomEvent", function(e, myName, myValue){
 *       $(this).text("Hi there!");
 *       $("span").stop().css("opacity", 1)
 *                .text("myName = " + myName)
 *                .fadeIn(30).fadeOut(1000);
 *     });
 *     $("button").click(function () {
 *       $("p").trigger("myCustomEvent");
 *     });
 * 
 * </code></pre>
 * 
 * @param {String} selector A selector to filter the elements that trigger the event.
 * @param {Map} events A map of one or more event types and functions to execute for them.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.delegate = function(selector, events) {return new jQuery();};

/**
 * Returns value at named data store for the element, as set by <code>jQuery.data(element, name, value)</code>, or the full data store for the element.
 * 
 * <p><strong>Note:</strong> This is a low-level method; a more convenient <code><a href="/data">.data()</a></code> is also available.</p>
 * <p><strong>Regarding HTML5 data-* attributes:</strong> This low-level method does NOT retrieve the <code>data-*</code> attributes unless the more convenient <code><a href="/data">.data()</a></code> method has already retrieved them.</p>
 * <p>The <code>jQuery.data()</code> method allows us to attach data of any type to DOM elements in a way that is safe from circular references and therefore from memory leaks. We can retrieve several distinct values for a single element one at a time, or as a set:</p>
 * <pre>alert(jQuery.data( document.body, 'foo' ));
 * alert(jQuery.data( document.body ));</pre>
 * <p>The above lines alert the data values that were set on the <code>body</code> element. If nothing was set on that element, an empty string is returned.</p>
 * <p>Calling <code>jQuery.data(element)</code> retrieves all of the element's associated values as a JavaScript object. Note that jQuery itself uses this method to store data for internal use, such as event handlers, so do not assume that it contains only data that your own code has stored.</p>
 * <p><em>Note:</em> this method currently does not provide cross-platform support for setting data on XML documents, as Internet Explorer does not allow data to be attached via expando properties.</p>
 * 
 * 
 * @example
 * <p>Get the data named "blah" stored at for an element.</p>
 * <pre><code>
 * $("button").click(function(e) {
 *   var value, div = $("div")[0];
 * 
 *   switch ($("button").index(this)) {
 *     case 0 :
 *       value = jQuery.data(div, "blah");
 *       break;
 *     case 1 :
 *       jQuery.data(div, "blah", "hello");
 *       value = "Stored!";
 *       break;
 *     case 2 :
 *       jQuery.data(div, "blah", 86);
 *       value = "Stored!";
 *       break;
 *     case 3 :
 *       jQuery.removeData(div, "blah");
 *       value = "Removed!";
 *       break;
 *   }
 * 
 *   $("span").text("" + value);
 * });
 * 
 * </code></pre>
 * 
 * @param {Element} element The DOM element to query for the data.
 * 
 * @since 1.4
 * @returns {Object}
**/
jQuery.data = function(element) {return new Object();};

/**
 * Manipulate the queue of functions to be executed on the matched element.
 * 
 * <p><strong>Note:</strong> This is a low-level method, you should probably use <code><a href="/queue">.queue()</a></code> instead.</p>
 * 	<p>Every element can have one or more queues of functions attached to it by jQuery. In most applications, only one queue (called <code>fx</code>) is used. Queues allow a sequence of actions to be called on an element asynchronously, without halting program execution.</p>
 * 	<p>The <code>jQuery.queue()</code> method allows us to directly manipulate this queue of functions. Calling <code>jQuery.queue()</code> with a callback is particularly useful; it allows us to place a new function at the end of the queue.</p>
 * 	<p>Note that when adding a function with <code>jQuery.queue()</code>, we should ensure that <code>jQuery.dequeue()</code> is eventually called so that the next function in line executes.</p>
 * @example
 * <p>Queue a custom function.</p>
 * <pre><code>
 *    $(document.body).click(function () {
 *       $("div").show("slow");
 *       $("div").animate({left:'+=200'},2000);
 *       jQuery.queue( $("div")[0], "fx", function () {
 *         $(this).addClass("newcolor");
 *         jQuery.dequeue( this );
 *       });
 *       $("div").animate({left:'-=200'},500);
 *       jQuery.queue( $("div")[0], "fx", function () {
 *         $(this).removeClass("newcolor");
 *         jQuery.dequeue( this );
 *       });
 *       $("div").slideUp();
 *     });</code></pre>
 * @example
 * <p>Set a queue array to delete the queue.</p>
 * <pre><code>
 *    $("#start").click(function () {
 *       $("div").show("slow");
 *       $("div").animate({left:'+=200'},5000);
 *       jQuery.queue( $("div")[0], "fx", function () {
 *         $(this).addClass("newcolor");
 *         jQuery.dequeue( this );
 *       });
 *       $("div").animate({left:'-=200'},1500);
 *       jQuery.queue( $("div")[0], "fx", function () {
 *         $(this).removeClass("newcolor");
 *         jQuery.dequeue( this );
 *       });
 *       $("div").slideUp();
 *     });
 *     $("#stop").click(function () {
 *       jQuery.queue( $("div")[0], "fx", [] );
 *       $("div").stop();
 *     });
 * </code></pre>
 * 
 * @param {Element} element A DOM element on which to add a queued function.
 * @param {String} queueName A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @param {Function} callback The new function to add to the queue.
 * 
 * @since 1.3
 * @returns {jQuery}
**/
jQuery.queue = function(element, queueName, callback) {return new jQuery();};

/**
 * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('keydown', handler)</code> in the first and second variations, and <code>.trigger('keydown')</code> in the third.</p>
 * <p>The <code>keydown</code> event is sent to an element when the user first presses a key on the keyboard. It can be attached to any element, but the event is only sent to the element that has the focus. Focusable elements can vary between browsers, but form elements can always get focus so are reasonable candidates for this event type.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 *   &lt;input id="target" type="text" value="Hello there" /&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 * <p>The event handler can be bound to the input field:</p>
 * <pre>$('#target').keydown(function() {
 *   alert('Handler for .keydown() called.');
 * });</pre>
 * <p>Now when the insertion point is inside the field, pressing a key displays the alert:</p>
 * <p><span class="output">Handler for .keydown() called.</span></p>
 * <p>To trigger the event manually, apply <code>.keydown()</code> without an argument:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').keydown();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>If key presses anywhere need to be caught (for example, to implement global shortcut keys on a page), it is useful to attach this behavior to the <code>document</code> object. Because of event bubbling, all key presses will make their way up the DOM to the <code>document</code> object unless explicitly stopped.</p>
 * <p>To determine which key was pressed, examine the <a href="http://api.jquery.com/category/events/event-object/">event object</a> that is passed to the handler function. While browsers use differing properties to store this information, jQuery normalizes the <code>.which</code> property so you can reliably use it to retrieve the key code. This code corresponds to a key on the keyboard, including codes for special keys such as arrows. For catching actual text entry, <code>.keypress()</code> may be a better choice.</p>
 * 
 * @example
 * <p>Show the event object for the keydown handler when a key is pressed in the input.</p>
 * <pre><code>
 * var xTriggered = 0;
 * $('#target').keydown(function(event) {
 *   if (event.keyCode == '13') {
 *      event.preventDefault();
 *    }
 *    xTriggered++;
 *    var msg = 'Handler for .keydown() called ' + xTriggered + ' time(s).';
 *   $.print(msg, 'html');
 *   $.print(event);
 * });
 * 
 * $('#other').click(function() {
 *   $('#target').keydown();
 * });</code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.keydown = function() {return new jQuery();};

/**
 * Search for a given element from among the matched elements.
 * 
 * <h4>Return Values</h4>
 * <p>If no argument is passed to the <code>.index()</code> method, the return value is an integer indicating the position of the first element within the jQuery object relative to its sibling elements.</p>
 * <p>If <code>.index()</code> is called on a collection of elements and a DOM element or jQuery object is passed in, <code>.index()</code> returns an integer indicating the position of the passed element relative to the original collection.</p>
 * <p>If a selector string is passed as an argument, <code>.index()</code> returns an integer indicating the position of the original element relative to the elements matched by the selector. If the element is not found, <code>.index()</code> will return -1.</p>
 * <h4>Detail</h4>
 * <p>The complementary operation to <code>.get()</code>, which accepts an index and returns a DOM node, <code>.index()</code> can take a DOM node and returns an index. Suppose we have a simple unordered list on the page:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li id="foo"&gt;foo&lt;/li&gt;
 *   &lt;li id="bar"&gt;bar&lt;/li&gt;
 *   &lt;li id="baz"&gt;baz&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>If we retrieve one of the three list items (for example, through a DOM function or as the context to an event handler), <code>.index()</code> can search for this list item within the set of matched elements:</p>
 * <pre>
 * var listItem = document.getElementById('bar');
 * alert('Index: ' + $('li').index(listItem));
 * We get back the zero-based position of the list item:
 * </pre>
 * <p><span class="output">Index: 1</span></p>
 * <p>Similarly, if we retrieve a jQuery object consisting of one of the three list items, <code>.index()</code> will search for that list item:</p>
 * <pre>
 * var listItem = $('#bar');
 * alert('Index: ' + $('li').index(listItem));
 * </pre>
 * <p>We get back the zero-based position of the list item:</p>
 * <p><span class="output">Index: 1</span></p>
 * <p>Note that if the jQuery collection used as the <code>.index()</code> method's argument contains more than one element, the first element within the matched set of elements will be used.</p>
 * <pre>
 * var listItems = $('li:gt(0)');
 * alert('Index: ' + $('li').index(listItems));
 * </pre>
 * <p>We get back the zero-based position of the first list item within the matched set:</p>
 * <p><span class="output">Index: 1</span></p>
 * <p>If we use a string as the <code>.index()</code> method's argument, it is interpreted as a jQuery selector string. The first element among the object's matched elements which also matches this selector is located.</p>
 * <pre>
 * var listItem = $('#bar');
 * alert('Index: ' + listItem.index('li'));
 * </pre>
 * <p>We get back the zero-based position of the list item:</p>
 * <p><span class="output">Index: 1</span></p>
 * <p>If we omit the argument, <code>.index()</code> will return the position of the first element within the set of matched elements in relation to its siblings:</p>
 * <pre>alert('Index: ' + $('#bar').index();</pre>
 * <p>Again, we get back the zero-based position of the list item:</p>
 * <p><span class="output">Index: 1</span></p>
 * 
 * 
 * @example
 * <p>On click, returns the index (based zero) of that div in the page.</p>
 * <pre><code>
 * $("div").click(function () {
 *   // this is the dom element clicked
 *   var index = $("div").index(this);
 *   $("span").text("That was div index #" + index);
 * });
 * </code></pre>
 * @example
 * <p>Returns the index for the element with ID bar.</p>
 * <pre><code>var listItem = $('#bar');
 *     $('div').html( 'Index: ' + $('li').index(listItem) );</code></pre>
 * @example
 * <p>Returns the index for the first item in the jQuery collection.</p>
 * <pre><code>var listItems = $('li:gt(0)');
 * $('div').html( 'Index: ' + $('li').index(listItems) );
 * </code></pre>
 * @example
 * <p>Returns the index for the element with ID bar in relation to all &lt;li&gt; elements.</p>
 * <pre><code>$('div').html('Index: ' +  $('#bar').index('li') );</code></pre>
 * @example
 * <p>Returns the index for the element with ID bar in relation to its siblings.</p>
 * <pre><code>var barIndex = $('#bar').index();
 * $('div').html( 'Index: ' +  barIndex );</code></pre>
 * @example
 * <p>Returns -1, as there is no element with ID foobar.</p>
 * <pre><code>var foobar = $("li").index( $('#foobar') );
 * $('div').html('Index: ' + foobar);</code></pre>
 * 
 * @param {Element} element The DOM element or first element within the jQuery object to look for.
 * 
 * @since 1.0
 * @returns {Number}
**/
jQuery.prototype.index = function(element) {return 0;};

/**
 * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('scroll', handler)</code> in the first and second variations, and <code>.trigger('scroll')</code> in the third.</p>
 * <p>The <code>scroll</code> event is sent to an element when the user scrolls to a different place in the element. It applies to <code>window</code> objects, but also to scrollable frames and elements with the <code>overflow </code>CSS property set to <code>scroll</code> (or <code>auto</code> when the element's explicit height or width is less than the height or width of its contents).</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="target" style="overflow: scroll; width: 200px; height: 100px;"&gt;
 *   Lorem ipsum dolor sit amet, consectetur adipisicing elit,
 *   sed do eiusmod tempor incididunt ut labore et dolore magna
 *   aliqua. Ut enim ad minim veniam, quis nostrud exercitation
 *   ullamco laboris nisi ut aliquip ex ea commodo consequat.
 *   Duis aute irure dolor in reprehenderit in voluptate velit
 *   esse cillum dolore eu fugiat nulla pariatur. Excepteur
 *   sint occaecat cupidatat non proident, sunt in culpa qui
 *   officia deserunt mollit anim id est laborum.
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * &lt;div id="log"&gt;&lt;/div&gt;</pre>
 * <p>The style definition is present to make the target element small enough to be scrollable:</p>
 *  
 * <p class="image"><img src="/images/0042_05_11.png" alt=""/>
 * </p>
 * <p>The <code>scroll</code> event handler can be bound to this element:</p>
 * <pre>$('#target').scroll(function() {
 *   $('#log').append('&lt;div&gt;Handler for .scroll() called.&lt;/div&gt;');
 * });</pre>
 * <p>Now when the user scrolls the text up or down, one or more messages are appended to <code>&lt;div id="log"&gt;&lt;/div&gt;</code>:</p>
 * <p><span class="output">Handler for .scroll() called.</span></p>
 * <p>To trigger the event manually, apply <code>.scroll()</code> without an argument:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').scroll();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also append the message.</p>
 * <p>A <code>scroll</code> event is sent whenever the element's scroll position changes, regardless of the cause. A mouse click or drag on the scroll bar, dragging inside the element, pressing the arrow keys, or using the mouse's scroll wheel could cause this event.</p>
 * 
 * @example
 * <p>To do something when your page is scrolled:</p>
 * <pre><code>
 *     $("p").clone().appendTo(document.body);
 *     $("p").clone().appendTo(document.body);
 *     $("p").clone().appendTo(document.body);
 *     $(window).scroll(function () { 
 *       $("span").css("display", "inline").fadeOut("slow"); 
 *     });
 * 
 * </code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.scroll = function() {return new jQuery();};

/**
 * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('resize', handler)</code> in the first and second variations, and <code>.trigger('resize')</code> in the third.</p>
 * <p>The <code>resize</code> event is sent to the <code>window</code> element when the size of the browser window changes:</p>
 * <pre>$(window).resize(function() {
 *   $('#log').append('&lt;div&gt;Handler for .resize() called.&lt;/div&gt;');
 * });
 * </pre>
 * <p>Now whenever the browser window's size is changed, the message is appended to &lt;div id="log"&gt; one or more times, depending on the browser.</p>
 * <p>Code in a <code>resize</code> handler should never rely on the number of times the handler is called. Depending on implementation, <code>resize</code> events can be sent continuously as the resizing is in progress (the typical behavior in Internet Explorer and WebKit-based browsers such as Safari and Chrome), or only once at the end of the resize operation (the typical behavior in Firefox).</p>
 * 
 * @example
 * <p>To see the window width while (or after) it is resized, try:</p>
 * <pre><code>
 * $(window).resize(function() {
 *   $('body').prepend('<div>' + $(window).width() + '</div>');
 * });
 *   </code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.resize = function() {return new jQuery();};

/**
 * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('keyup', handler)</code> in the first two variations, and <code>.trigger('keyup')</code> in the third.</p>
 * <p>The <code>keyup</code> event is sent to an element when the user releases a key on the keyboard. It can be attached to any element, but the event is only sent to the element that has the focus. Focusable elements can vary between browsers, but form elements can always get focus so are reasonable candidates for this event type.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 *   &lt;input id="target" type="text" value="Hello there" /&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 * <p>The event handler can be bound to the input field:</p>
 * <pre>$('#target').keyup(function() {
 *   alert('Handler for .keyup() called.');
 * });
 * </pre>
 * <p>Now when the insertion point is inside the field and a key is pressed and released, the alert is displayed:</p>
 * <p><span class="output">Handler for .keyup() called.</span></p>
 * <p>To trigger the event manually, apply <code>.keyup()</code> without arguments:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').keyup();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>If key presses anywhere need to be caught (for example, to implement global shortcut keys on a page), it is useful to attach this behavior to the <code>document</code> object. Because of event bubbling, all key presses will make their way up the DOM to the <code>document</code> object unless explicitly stopped.</p>
 * <p>To determine which key was pressed, examine the event object that is passed to the handler function. While browsers use differing properties to store this information, jQuery normalizes the <code>.which</code> property so you can reliably use it to retrieve the key code. This code corresponds to a key on the keyboard, including codes for special keys such as arrows. For catching actual text entry, <code>.keypress()</code> may be a better choice.</p>
 * 
 * @example
 * <p>Show the event object for the keyup handler when a key is released in the input.</p>
 * <pre><code>
 * var xTriggered = 0;
 * $('#target').keyup(function(event) {
 *   if (event.keyCode == '13') {
 *      event.preventDefault();
 *    }
 *    xTriggered++;
 *    var msg = 'Handler for .keyup() called ' + xTriggered + ' time(s).';
 *   $.print(msg, 'html');
 *   $.print(event);
 * });
 * 
 * $('#other').click(function() {
 *   $('#target').keyup();
 * });</code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.keyup = function() {return new jQuery();};

/**
 * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p><strong>Note:</strong> as the <code>keypress</code> event isn't covered by any official specification, the actual behavior encountered when using it may differ across browsers, browser versions, and platforms.</p>
 * <p>This method is a shortcut for <code>.bind('keypress', handler)</code> in the first two variations, and <code>.trigger('keypress')</code> in the third.</p>
 * <p>The <code>keypress</code> event is sent to an element when the browser registers keyboard input. This is similar to the <code>keydown</code> event, except in the case of key repeats. If the user presses and holds a key, a <code>keydown </code>event is triggered once, but separate <code>keypress</code> events are triggered for each inserted character. In addition, modifier keys (such as Shift) trigger <code>keydown</code> events but not <code>keypress</code> events.</p>
 * <p>A <code>keypress</code> event handler can be attached to any element, but the event is only sent to the element that has the focus. Focusable elements can vary between browsers, but form elements can always get focus so are reasonable candidates for this event type.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 * 	&lt;fieldset&gt;
 *   	&lt;input id="target" type="text" value="Hello there" /&gt;
 * 	&lt;/fieldset&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 * <p>The event handler can be bound to the input field:</p>
 * <pre>$('#target').keypress(function() {
 *   alert('Handler for .keypress() called.');
 * });</pre>
 * <p>Now when the insertion point is inside the field, pressing a key displays the alert:</p>
 * <p><span class="output">Handler for .keypress() called.</span></p>
 * <p>The message repeats if the key is held down. To trigger the event manually, apply <code>.keypress()</code> without an argument::</p>
 * <pre>$('#other').click(function() {
 *   $('#target').keypress();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>If key presses anywhere need to be caught (for example, to implement global shortcut keys on a page), it is useful to attach this behavior to the <code>document</code> object. Because of event bubbling, all key presses will make their way up the DOM to the <code>document</code> object unless explicitly stopped.</p>
 * <p>To determine which character was entered, examine the <code>event</code> object that is passed to the handler function. While browsers use differing properties to store this information, jQuery normalizes the <code>.which</code> property so you can reliably use it to retrieve the character code.</p>
 * <p>Note that <code>keydown</code> and <code>keyup</code> provide a code indicating which key is pressed, while <code>keypress</code> indicates which character was entered. For example, a lowercase "a" will be reported as 65 by <code>keydown</code> and <code>keyup</code>, but as 97 by <code>keypress</code>. An uppercase "A" is reported as 65 by all events. Because of this distinction, when catching special keystrokes such as arrow keys, <code>.keydown()</code> or <code>.keyup()</code> is a better choice.</p>
 * 
 * @example
 * <p>Show the event object for the keypress handler when a key is pressed in the input.</p>
 * <pre><code>
 * var xTriggered = 0;
 * $('#target').keypress(function(event) {
 *   if (event.which == '13') {
 *      event.preventDefault();
 *    }
 *    xTriggered++;
 *    var msg = 'Handler for .keypress() called ' + xTriggered + ' time(s).';
 *   $.print(msg, 'html');
 *   $.print(event);
 * });
 * 
 * $('#other').click(function() {
 *   $('#target').keypress();
 * });</code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.keypress = function() {return new jQuery();};

/**
 * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('submit', handler)</code> in the first variation, and <code>.trigger('submit')</code> in the third.</p>
 * <p>The <code>submit</code> event is sent to an element when the user is attempting to submit a form. It can only be attached to <code>&lt;form&gt;</code> elements. Forms can be submitted either by clicking an explicit <code>&lt;input type="submit"&gt;</code>, <code>&lt;input type="image"&gt;</code>, or <code>&lt;button type="submit"&gt;</code>, or by pressing <kbd>Enter</kbd> when certain form elements have focus.</p>
 * <blockquote><p>Depending on the browser, the Enter key may only cause a form submission if the form has exactly one text field, or only when there is a submit button present. The interface should not rely on a particular behavior for this key unless the issue is forced by observing the keypress event for presses of the Enter key.</p></blockquote>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form id="target" action="destination.html"&gt;
 *   &lt;input type="text" value="Hello there" /&gt;
 *   &lt;input type="submit" value="Go" /&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 * <p>The event handler can be bound to the form:</p>
 * <pre>$('#target').submit(function() {
 *   alert('Handler for .submit() called.');
 *   return false;
 * });</pre>
 * <p>Now when the form is submitted, the message is alerted. This happens prior to the actual submission, so we can cancel the submit action by calling <code>.preventDefault()</code> on the event object or by returning <code>false</code> from our handler. We can trigger the event manually when another element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').submit();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also display the message. In addition, the default <code>submit</code> action on the form will be fired, so the form will be submitted.</p>
 * <p>The JavaScript <code>submit</code> event does not bubble in Internet Explorer. However, scripts that rely on event delegation with the <code>submit</code> event will work consistently across browsers as of jQuery 1.4, which has normalized the event's behavior. </p>
 * 
 * 
 * @example
 * <p>If you'd like to prevent forms from being submitted unless a flag variable is set, try:</p>
 * <pre><code>
 * 
 *     $("form").submit(function() {
 *       if ($("input:first").val() == "correct") {
 *         $("span").text("Validated...").show();
 *         return true;
 *       }
 *       $("span").text("Not valid!").show().fadeOut(1000);
 *       return false;
 *     });
 * </code></pre>
 * @example
 * <p>If you'd like to prevent forms from being submitted unless a flag variable is set, try:</p>
 * <pre><code>$("form").submit( function () {
 *   return this.some_flag_variable;
 * } );</code></pre>
 * @example
 * <p>To trigger the submit event on the first form on the page, try:</p>
 * <pre><code>$("form:first").submit();</code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.submit = function() {return new jQuery();};

/**
 * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('select', handler)</code> in the first two variations, and <code>.trigger('select')</code> in the third.</p>
 * <p>The <code>select</code> event is sent to an element when the user makes a text selection inside it. This event is limited to <code>&lt;input type="text"&gt;</code> fields and <code>&lt;textarea&gt;</code> boxes.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 *   &lt;input id="target" type="text" value="Hello there" /&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 * <p>The event handler can be bound to the text input:</p>
 * <pre>$('#target').select(function() {
 *   alert('Handler for .select() called.');
 * });</pre>
 * <p>Now when any portion of the text is selected, the alert is displayed. Merely setting the location of the insertion point will not trigger the event. To trigger the event manually, apply <code>.select()</code> without an argument:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').select();
 * });</pre>
 * <p>After this code executes, clicks on the Trigger button will also alert the message:</p>
 * <p><span class="output">Handler for .select() called.</span></p>
 * <p>In addition, the default <code>select</code> action on the field will be fired, so the entire text field will be selected.</p>
 * <blockquote><p>The method for retrieving the current selected text differs from one browser to another. A number of jQuery plug-ins offer cross-platform solutions.</p></blockquote>
 * 
 * @example
 * <p>To do something when text in input boxes is selected:</p>
 * <pre><code>
 *     $(":input").select( function () { 
 *       $("div").text("Something was selected").show().fadeOut(1000); 
 *     });
 * </code></pre>
 * @example
 * <p>To trigger the select event on all input elements, try:</p>
 * <pre><code>$("input").select();</code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.select = function() {return new jQuery();};

/**
 * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('change', handler)</code> in the first two variations, and <code>.trigger('change')</code> in the third.</p>
 * <p>The <code>change</code> event is sent to an element when its value changes. This event is limited to <code>&lt;input&gt;</code> elements, <code>&lt;textarea&gt;</code> boxes and <code>&lt;select&gt;</code> elements. For select boxes, checkboxes, and radio buttons, the event is fired immediately when the user makes a selection with the mouse, but for the other element types the event is deferred until the element loses focus.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 *   &lt;input class="target" type="text" value="Field 1" /&gt;
 *   &lt;select class="target"&gt;
 *     &lt;option value="option1" selected="selected"&gt;Option 1&lt;/option&gt;
 *     &lt;option value="option2"&gt;Option 2&lt;/option&gt;
 *   &lt;/select&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 * <p>The event handler can be bound to the text input and the select box:</p>
 * <pre>$('.target').change(function() {
 *   alert('Handler for .change() called.');
 * });</pre>
 * <p>Now when the second option is selected from the dropdown, the alert is displayed. It is also displayed if you change the text in the field and then click away. If the field loses focus without the contents having changed, though, the event is not triggered. To trigger the event manually, apply <code>.change()</code> without arguments:</p>
 * <pre>$('#other').click(function() {
 *   $('.target').change();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message. The message will display twice, because the handler has been bound to the <code>change</code> event on both of the form elements.</p>
 * <p>As of jQuery 1.4, the <code>change</code> event bubbles in Internet Explorer, behaving consistently with the event in other modern browsers.</p>
 * 
 * @example
 * <p>Attaches a change event to the select that gets the text for each selected option and writes them in the div.  It then triggers the event for the initial text draw.</p>
 * <pre><code>
 *     $("select").change(function () {
 *           var str = "";
 *           $("select option:selected").each(function () {
 *                 str += $(this).text() + " ";
 *               });
 *           $("div").text(str);
 *         })
 *         .change();
 * </code></pre>
 * @example
 * <p>To add a validity test to all text input elements:</p>
 * <pre><code>$("input[type='text']").change( function() {
 *   // check input ($(this).val()) for validity here
 * });</code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.change = function() {return new jQuery();};

/**
 * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('blur', handler)</code> in the first two variations, and <code>.trigger('blur')</code> in the third.</p>
 * <p>The <code>blur</code> event is sent to an element when it loses focus. Originally, this event was only applicable to form elements, such as <code>&lt;input&gt;</code>. In recent browsers, the domain of the event has been extended to include all element types. An element can lose focus via keyboard commands, such as the Tab key, or by mouse clicks elsewhere on the page.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 *   &lt;input id="target" type="text" value="Field 1" /&gt;
 *   &lt;input type="text" value="Field 2" /&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * The event handler can be bound to the first input field:
 * $('#target').blur(function() {
 *   alert('Handler for .blur() called.');
 * });</pre>
 * <p>Now if the first field has the focus, clicking elsewhere or tabbing away from it displays the alert:</p>
 * <p><span class="output">Handler for .blur() called.</span></p>
 * <p>To trigger the event programmatically, apply <code>.blur()</code> without an argument:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').blur();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>The <code>blur</code> event does not bubble in Internet Explorer. Therefore, scripts that rely on event delegation with the <code>blur</code> event will not work consistently across browsers. As of version 1.4.2, however, jQuery works around this limitation by mapping <code>blur</code> to the <code>focusout</code> event in its event delegation methods, <a href="http://api.jquery.com/live/"><code>.live()</code></a> and <a href="http://api.jquery.com/delegate/"><code>.delegate()</code></a>.</p>
 * 
 * @example
 * <p>To trigger the blur event on all paragraphs:</p>
 * <pre><code>$("p").blur();</code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.blur = function() {return new jQuery();};

/**
 * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <ul>
 * <li>This method is a shortcut for <code>.bind('focus', handler)</code> in the first and second variations, and <code>.trigger('focus')</code> in the third.</li>
 * <li>The <code>focus</code> event is sent to an element when it gains focus. This event is implicitly applicable to a limited set of elements, such as  form elements (<code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, etc.) and links (<code>&lt;a href&gt;</code>). In recent browser versions, the event can be extended to include all element types by explicitly setting the element's <code>tabindex</code> property. An element can gain focus via keyboard commands, such as the Tab key, or by mouse clicks on the element.</li>
 * <li>Elements with focus are usually highlighted in some way by the browser, for example with a dotted line surrounding the element. The focus is used to determine which element is the first to receive keyboard-related events.</li>
 * </ul>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 *   &lt;input id="target" type="text" value="Field 1" /&gt;
 *   &lt;input type="text" value="Field 2" /&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * </pre>
 * <p>The event handler can be bound to the first input field:</p>
 * <pre>$('#target').focus(function() {
 *   alert('Handler for .focus() called.');
 * });</pre>
 * <p>Now clicking on the first field, or tabbing to it from another field, displays the alert:</p>
 * <p><span class="output">Handler for .focus() called.</span></p>
 * <p>We can trigger the event when another element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').focus();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>The <code>focus</code> event does not bubble in Internet Explorer. Therefore, scripts that rely on event delegation with the <code>focus</code> event will not work consistently across browsers. As of version 1.4.2, however, jQuery works around this limitation by mapping <code>focus</code> to the <code>focusin</code> event in its event delegation methods, <a href="http://api.jquery.com/live/"><code>.live()</code></a> and <a href="http://api.jquery.com/delegate/"><code>.delegate()</code></a>.</p>
 * <blockquote><p>Triggering the focus on hidden elements causes an error in Internet Explorer. Take care to only call <code>.focus()</code> without parameters on elements that are visible.</p></blockquote>
 * 
 * @example
 * <p>Fire focus.</p>
 * <pre><code>
 *     $("input").focus(function () {
 *          $(this).next("span").css('display','inline').fadeOut(1000);
 *     });
 * </code></pre>
 * @example
 * <p>To stop people from writing in text input boxes, try:</p>
 * <pre><code>$("input[type=text]").focus(function(){
 *   $(this).blur();
 * });</code></pre>
 * @example
 * <p>To focus on a login input box with id 'login' on page startup, try:</p>
 * <pre><code>$(document).ready(function(){
 *   $("#login").focus();
 * });</code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.focus = function() {return new jQuery();};

/**
 * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mousemove', handler)</code> in the first two variations, and <code>.trigger('mousemove')</code> in the third.</p>
 * <p>The <code>mousemove</code> event is sent to an element when the mouse pointer moves inside the element. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="target"&gt;
 *   Move here
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * &lt;div id="log"&gt;&lt;/div&gt;</pre>
 *  
 * <p>The event handler can be bound to the target:</p>
 * <pre>$("#target").mousemove(function(event) {
 *   var msg = "Handler for .mousemove() called at ";
 *   msg += event.pageX + ", " + event.pageY;
 *   $("#log").append("&lt;div&gt;" + msg + "&lt;/div&gt;");
 * });</pre>
 * <p>Now when the mouse pointer moves within the target button, the messages are appended to &lt;div id="log"&gt;:</p>
 * <p>
 * <span class="output">Handler for .mousemove() called at (399, 48)</span><br/>
 * <span class="output">Handler for .mousemove() called at (398, 46)</span><br/>
 * <span class="output">Handler for .mousemove() called at (397, 44)</span><br/>
 * <span class="output">Handler for .mousemove() called at (396, 42)</span><br/>
 * </p>
 * <p>To trigger the event manually, apply <code>.mousemove()</code> without an argument:</p>
 * <pre>$("#other").click(function() {
 *   $("#target").mousemove();
 * });</pre>
 * <p>After this code executes, clicks on the Trigger button will also append the message:</p>
 * <p><span class="output">Handler for .mousemove() called at (undefined, undefined)</span></p>
 * <p>When tracking mouse movement, you usually need to know the actual position of the mouse pointer. The event object that is passed to the handler contains some information about the mouse coordinates. Properties such as <code>.clientX</code>, <code>.offsetX</code>, and <code>.pageX</code> are available, but support for them differs between browsers. Fortunately, jQuery normalizes the <code>.pageX</code> and <code>.pageY</code> properties so that they can be used in all browsers. These properties provide the X and Y coordinates of the mouse pointer relative to the top-left corner of the document, as illustrated in the example output above.</p>
 * <p>Keep in mind that the <code>mousemove</code> event is triggered whenever the mouse pointer moves, even for a pixel. This means that hundreds of events can be generated over a very small amount of time. If the handler has to do any significant processing, or if multiple handlers for the event exist, this can be a serious performance drain on the browser. It is important, therefore, to optimize <code>mousemove </code>handlers as much as possible, and to unbind them as soon as they are no longer needed.</p>
 * <p>A common pattern is to bind the <code>mousemove</code> handler from within a <code>mousedown</code> hander, and to unbind it from a corresponding <code>mouseup</code> handler. If implementing this sequence of events, remember that the <code>mouseup</code> event might be sent to a different HTML element than the <code>mousemove</code> event was. To account for this, the <code>mouseup</code> handler should typically be bound to an element high up in the DOM tree, such as <code>&lt;body&gt;</code>.</p>
 * 
 * @example
 * <p>Show the mouse coordinates when the mouse is moved over the yellow div.  Coordinates are relative to the window, which in this case is the iframe.</p>
 * <pre><code>
 *     $("div").mousemove(function(e){
 *       var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
 *       var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
 *       $("span:first").text("( e.pageX, e.pageY ) - " + pageCoords);
 *       $("span:last").text("( e.clientX, e.clientY ) - " + clientCoords);
 *     });
 * 
 * </code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mousemove = function() {return new jQuery();};

/**
 * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mouseleave', handler)</code> in the first two variations, and <code>.trigger('mouseleave')</code> in the third.</p>
 * <p>The <code>mouseleave</code> JavaScript event is proprietary to Internet Explorer. Because of the event's general utility, jQuery simulates this event so that it can be used regardless of browser. This event is sent to an element when the mouse pointer leaves the element. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="outer"&gt;
 *   Outer
 *   &lt;div id="inner"&gt;
 *     Inner
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * &lt;div id="log"&gt;&lt;/div&gt;</pre> 
 * <p class="image"><img src="/images/0042_05_09.png" alt=""/>
 * </p>
 * <p>The event handler can be bound to any element:</p>
 * <pre>$('#outer').mouseleave(function() {
 *   $('#log').append('&lt;div&gt;Handler for .mouseleave() called.&lt;/div&gt;');
 * });</pre>
 * <p>Now when the mouse pointer moves out of the <span class="output">Outer</span> <code>&lt;div&gt;</code>, the message is appended to <code>&lt;div id="log"&gt;</code>. You can also trigger the event when another element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#outer').mouseleave();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also append the message.</p>
 * <p>The <code>mouseleave</code> event differs from <code>mouseout</code> in the way it handles event bubbling. If <code>mouseout</code> were used in this example, then when the mouse pointer moved out of the <span class="output">Inner</span> element, the handler would be triggered. This is usually undesirable behavior. The <code>mouseleave</code> event, on the other hand, only triggers its handler when the mouse leaves the element it is bound to, not a descendant. So in this example, the handler is triggered when the mouse leaves the <span class="output">Outer</span> element, but not the <span class="output">Inner</span> element.</p>
 * 
 * @example
 * <p>Show number of times mouseout and mouseleave events are triggered.
 * <code>mouseout</code> fires when the pointer moves out of child element as well, while <code>mouseleave</code> fires only when the pointer moves out of the bound element.</p>
 * <pre><code>
 *     var i = 0;
 *     $("div.overout").mouseover(function(){
 *       $("p:first",this).text("mouse over");
 *     }).mouseout(function(){
 *       $("p:first",this).text("mouse out");
 *       $("p:last",this).text(++i);
 *     });
 * 
 *     var n = 0;
 *     $("div.enterleave").mouseenter(function(){
 *       $("p:first",this).text("mouse enter");
 *     }).mouseleave(function(){
 *       $("p:first",this).text("mouse leave");
 *       $("p:last",this).text(++n);
 *     });
 * 
 * </code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mouseleave = function() {return new jQuery();};

/**
 * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mouseenter', handler)</code> in the first two variations, and <code>.trigger('mouseenter')</code> in the third.</p>
 * <p>The <code>mouseenter</code> JavaScript event is proprietary to Internet Explorer. Because of the event's general utility, jQuery simulates this event so that it can be used regardless of browser. This event is sent to an element when the mouse pointer enters the element. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="outer"&gt;
 *   Outer
 *   &lt;div id="inner"&gt;
 *     Inner
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * &lt;div id="log"&gt;&lt;/div&gt;</pre>
 *  
 * <p class="image"><img src="/images/0042_05_08.png" alt=""/>
 * </p>
 * <p>The event handler can be bound to any element:</p>
 * <pre>$('#outer').mouseenter(function() {
 *   $('#log').append('&lt;div&gt;Handler for .mouseenter() called.&lt;/div&gt;');
 * });</pre>
 * <p>Now when the mouse pointer moves over the <span class="output">Outer</span> <code>&lt;div&gt;</code>, the message is appended to <code>&lt;div id="log"&gt;</code>. You can also trigger the event when another element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#outer').mouseenter();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also append the message.</p>
 * <p>The <code>mouseenter</code> event differs from <code>mouseover</code> in the way it handles event bubbling. If <code>mouseover</code> were used in this example, then when the mouse pointer moved over the <span class="output">Inner</span> element, the handler would be triggered. This is usually undesirable behavior. The <code>mouseenter</code> event, on the other hand, only triggers its handler when the mouse enters the element it is bound to, not a descendant. So in this example, the handler is triggered when the mouse enters the <span class="output">Outer</span> element, but not the <span class="output">Inner</span> element.</p>
 * 
 * @example
 * <p>Show texts when mouseenter and mouseout event triggering.
 * <code>mouseover</code> fires when the pointer moves into the child element as well, while <code>mouseenter</code> fires only when the pointer moves into the bound element.</p>
 * <pre><code>
 *     var i = 0;
 *     $("div.overout").mouseover(function(){
 *       $("p:first",this).text("mouse over");
 *       $("p:last",this).text(++i);
 *     }).mouseout(function(){
 *       $("p:first",this).text("mouse out");
 *     });
 * 
 *     var n = 0;
 *     $("div.enterleave").mouseenter(function(){
 *       $("p:first",this).text("mouse enter");
 *       $("p:last",this).text(++n);
 *     }).mouseleave(function(){
 *       $("p:first",this).text("mouse leave");
 *     });
 * 
 * </code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mouseenter = function() {return new jQuery();};

/**
 * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mouseout', handler)</code> in the first two variation, and <code>.trigger('mouseout')</code> in the third.</p>
 * <p>The <code>mouseout</code> event is sent to an element when the mouse pointer leaves the element. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="outer"&gt;
 *   Outer
 *   &lt;div id="inner"&gt;
 *     Inner
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * &lt;div id="log"&gt;&lt;/div&gt;</pre> 
 * <p class="image"><img src="/images/0042_05_07.png" alt=""/>
 * </p>
 * <p>The event handler can be bound to any element:</p>
 * <pre>$('#outer').mouseout(function() {
 *   $('#log').append('Handler for .mouseout() called.');
 * });</pre>
 * <p>Now when the mouse pointer moves out of the <span class="output">Outer</span> <code>&lt;div&gt;</code>, the message is appended to <code>&lt;div id="log"&gt;</code>. To trigger the event manually, apply <code>.mouseout()</code> without an argument::</p>
 * <pre>$('#other').click(function() {
 *   $('#outer').mouseout();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also append the message.</p>
 * <p>This event type can cause many headaches due to event bubbling. For instance, when the mouse pointer moves out of the <span class="output">Inner</span> element in this example, a <code>mouseout</code> event will be sent to that, then trickle up to <span class="output">Outer</span>. This can trigger the bound <code>mouseout</code> handler at inopportune times. See the discussion for <code>.<a href="/mouseleave">mouseleave</a>()</code> for a useful alternative.</p>
 * 
 * @example
 * <p>Show the number of times mouseout and mouseleave events are triggered.
 * <code>mouseout</code> fires when the pointer moves out of the child element as well, while <code>mouseleave</code> fires only when the pointer moves out of the bound element.</p>
 * <pre><code>
 *     var i = 0;
 *     $("div.overout").mouseout(function(){
 *       $("p:first",this).text("mouse out");
 *       $("p:last",this).text(++i);
 *     }).mouseover(function(){
 *       $("p:first",this).text("mouse over");
 *     });
 * 
 *     var n = 0;
 *     $("div.enterleave").bind("mouseenter",function(){
 *       $("p:first",this).text("mouse enter");
 *     }).bind("mouseleave",function(){
 *       $("p:first",this).text("mouse leave");
 *       $("p:last",this).text(++n);
 *     });
 * 
 * </code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mouseout = function() {return new jQuery();};

/**
 * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mouseover', handler)</code> in the first two variations, and <code>.trigger('mouseover')</code> in the third.</p>
 * <p>The <code>mouseover</code> event is sent to an element when the mouse pointer enters the element. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="outer"&gt;
 *   Outer
 *   &lt;div id="inner"&gt;
 *     Inner
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * &lt;div id="log"&gt;&lt;/div&gt;</pre>
 *  
 * <p class="image"><img src="/images/0042_05_06.png" alt=""/>
 * </p>
 * <p>The event handler can be bound to any element:</p>
 * <pre>$('#outer').mouseover(function() {
 *   $('#log').append('&lt;div&gt;Handler for .mouseover() called.&lt;/div&gt;');
 * });</pre>
 * <p>Now when the mouse pointer moves over the <span class="output">Outer</span> <code>&lt;div&gt;</code>, the message is appended to <code>&lt;div id="log"&gt;</code>. We can also trigger the event when another element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#outer').mouseover();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also append the message.</p>
 * <p>This event type can cause many headaches due to event bubbling. For instance, when the mouse pointer moves over the <span class="output">Inner</span> element in this example, a <code>mouseover</code> event will be sent to that, then trickle up to <span class="output">Outer</span>. This can trigger our bound <code>mouseover</code> handler at inopportune times. See the discussion for <code>.mouseenter()</code> for a useful alternative.</p>
 * 
 * @example
 * <p>Show the number of times mouseover and mouseenter events are triggered.
 * <code>mouseover</code> fires when the pointer moves into the child element as well, while <code>mouseenter</code> fires only when the pointer moves into the bound element.</p>
 * <pre><code>
 *   var i = 0;
 *   $("div.overout").mouseover(function() {
 *     i += 1;
 *     $(this).find("span").text( "mouse over x " + i );
 *   }).mouseout(function(){
 *     $(this).find("span").text("mouse out ");
 *   });
 * 
 *   var n = 0;
 *   $("div.enterleave").mouseenter(function() {
 *     n += 1;
 *     $(this).find("span").text( "mouse enter x " + n );
 *   }).mouseleave(function() {
 *     $(this).find("span").text("mouse leave");
 *   });
 * 
 * </code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mouseover = function() {return new jQuery();};

/**
 * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('dblclick', handler)</code> in the first two variations, and <code>.trigger('dblclick')</code> in the third.
 * The <code>dblclick</code> event is sent to an element when the element is double-clicked. Any HTML element can receive this event.
 * For example, consider the HTML:</p>
 * <pre>&lt;div id="target"&gt;
 *   Double-click here
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 *  
 * <p class="image"><img src="/images/0042_05_04.png" alt=""/>
 * </p>
 * <p>The event handler can be bound to any <code>&lt;div&gt;</code>:</p>
 * <pre>$('#target').dblclick(function() {
 *   alert('Handler for .dblclick() called.');
 * });</pre>
 * <p>Now double-clicking on this element displays the alert:</p>
 * <p><span class="output">Handler for .dblclick() called.</span></p>
 * <p>To trigger the event manually, apply <code>.dblclick()</code> without an argument:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').dblclick();
 * });</pre>
 * <p>After this code executes, (single) clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>The <code>dblclick</code> event is only triggered after this exact series of events:</p>
 * <ul>
 * <li>The mouse button is depressed while the pointer is inside the element.</li>
 * <li>The mouse button is released while the pointer is inside the element.</li>
 * <li>The mouse button is depressed again while the pointer is inside the element, within a time window that is system-dependent.</li>
 * <li>The mouse button is released while the pointer is inside the element.</li>
 * </ul>
 * <p>It is inadvisable to bind handlers to both the <code>click</code> and <code>dblclick</code> events for the same element. The sequence of events triggered varies from browser to browser, with some receiving two <code>click</code> events before the <code>dblclick</code> and others only one. Double-click sensitivity (maximum time between clicks that is detected as a double click) can vary by operating system and browser, and is often user-configurable.
 * </p>
 * 
 * @example
 * <p>To bind a "Hello World!" alert box the dblclick event on every paragraph on the page:</p>
 * <pre><code>$("p").dblclick( function () { alert("Hello World!"); });</code></pre>
 * @example
 * <p>Double click to toggle background color.</p>
 * <pre><code>
 *     var divdbl = $("div:first");
 *     divdbl.dblclick(function () { 
 *       divdbl.toggleClass('dbl'); 
 *     });
 * 
 * </code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.dblclick = function() {return new jQuery();};

/**
 * Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('click', handler)</code> in the first two variations, and <code>.trigger('click')</code> in the third.</p>
 * <p>The <code>click</code> event is sent to an element when the mouse pointer is over the element, and the mouse button is pressed and released. Any HTML element can receive this event.</p>
 * <pre>For example, consider the HTML:
 * &lt;div id="target"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 *  
 * <p class="image"><img src="/images/0042_05_03.png" alt=""/></p>
 * <p>The event handler can be bound to any <code>&lt;div&gt;</code>:</p>
 * <pre>$('#target').click(function() {
 *   alert('Handler for .click() called.');
 * });</pre>
 * <p>Now if we click on this element, the alert is displayed:</p>
 * <p><span class="output">Handler for .click() called.</span></p>
 * <p>We can also trigger the event when a different element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').click();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>The <code>click</code> event is only triggered after this exact series of events:</p>
 * <ul>
 *   <li>The mouse button is depressed while the pointer is inside the element.</li>
 *   <li>The mouse button is released while the pointer is inside the element.</li>
 * </ul>
 * <p>This is usually the desired sequence before taking an action. If this is not required, the <code>mousedown</code> or <code>mouseup</code> event may be more suitable.</p>
 * 
 * @example
 * <p>To hide paragraphs on a page when they are clicked:</p>
 * <pre><code>
 *     $("p").click(function () { 
 *       $(this).slideUp(); 
 *     });
 *     $("p").hover(function () {
 *       $(this).addClass("hilite");
 *     }, function () {
 *       $(this).removeClass("hilite");
 *     });
 * </code></pre>
 * @example
 * <p>To trigger the click event on all of the paragraphs on the page:</p>
 * <pre><code>$("p").click();</code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.click = function() {return new jQuery();};

/**
 * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mouseup', handler)</code> in the first variation, and <code>.trigger('mouseup')</code> in the second.</p>
 * <p>The <code>mouseup</code> event is sent to an element when the mouse pointer is over the element, and the mouse button is released. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="target"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * </pre> 
 * <p class="image"><img src="/images/0042_05_02.png" alt=""/></p>
 * <p>The event handler can be bound to any <code>&lt;div&gt;</code>:</p>
 * <pre>$('#target').mouseup(function() {
 *   alert('Handler for .mouseup() called.');
 * });
 * </pre>
 * <p>Now if we click on this element, the alert is displayed:</p>
 * <p><span class="output">Handler for .mouseup() called.</span></p>
 * <p>We can also trigger the event when a different element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').mouseup();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>If the user clicks outside an element, drags onto it, and releases the button, this is still counted as a <code>mouseup</code> event. This sequence of actions is not treated as a button press in most user interfaces, so it is usually better to use the <code>click</code> event unless we know that the <code>mouseup</code> event is preferable for a particular situation.</p>
 * 
 * @example
 * <p>Show texts when mouseup and mousedown event triggering.</p>
 * <pre><code>
 *     $("p").mouseup(function(){
 *       $(this).append('<span style="color:#F00;">Mouse up.</span>');
 *     }).mousedown(function(){
 *       $(this).append('<span style="color:#00F;">Mouse down.</span>');
 *     });
 * 
 * </code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mouseup = function() {return new jQuery();};

/**
 * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mousedown', handler)</code> in the first variation, and <code>.trigger('mousedown')</code> in the second.</p>
 * <p>The <code>mousedown</code> event is sent to an element when the mouse pointer is over the element, and the mouse button is pressed. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="target"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 *  
 * <p class="image"><img src="/images/0042_05_01.png" alt=""/></p>
 * <p>The event handler can be bound to any <code>&lt;div&gt;</code>:</p>
 * <pre>$('#target').mousedown(function() {
 *   alert('Handler for .mousedown() called.');
 * });</pre>
 * <p>Now if we click on this element, the alert is displayed:</p>
 * <p><span class="output">Handler for .mousedown() called.</span></p>
 * <p>We can also trigger the event when a different element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').mousedown();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>The <code>mousedown</code> event is sent when any mouse button is clicked. To act only on specific buttons, we can use the event object's <code>which </code>property. Not all browsers support this property (Internet Explorer uses button instead), but jQuery normalizes the property so that it is safe to use in any browser. The value of <code>which</code> will be 1 for the left button, 2 for the middle button, or 3 for the right button.</p>
 * <p>This event is primarily useful for ensuring that the primary button was used to begin a drag operation; if ignored, strange results can occur when the user attempts to use a context menu. While the middle and right buttons can be detected with these properties, this is not reliable. In Opera and Safari, for example, right mouse button clicks are not detectable by default.</p>
 * <p>If the user clicks on an element, drags away from it, and releases the button, this is still counted as a <code>mousedown</code> event. This sequence of actions is treated as a "canceling" of the button press in most user interfaces, so it is usually better to use the <code>click</code> event unless we know that the <code>mousedown</code> event is preferable for a particular situation.</p>
 * 
 * 
 * @example
 * <p>Show texts when mouseup and mousedown event triggering.</p>
 * <pre><code>
 *     $("p").mouseup(function(){
 *       $(this).append('<span style="color:#F00;">Mouse up.</span>');
 *     }).mousedown(function(){
 *       $(this).append('<span style="color:#00F;">Mouse down.</span>');
 *     });
 * 
 * </code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mousedown = function() {return new jQuery();};

/**
 * Bind an event handler to the "error" JavaScript event.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('error', handler)</code>.</p>
 * <p>The <code>error</code> event is sent to elements, such as images, that are referenced by a document and loaded by the browser. It is called if the element was not loaded correctly.</p>
 * <p>For example, consider a page with a simple image element:</p>
 * <pre>&lt;img alt="Book" id="book" /&gt;</pre>
 * <p>The event handler can be bound to the image:</p>
 * <pre>$('#book')
 *   .error(function() {
 *     alert('Handler for .error() called.')
 *   })
 *   .attr("src", "missing.png");
 * </pre>
 * <p>If the image cannot be loaded (for example, because it is not present at the supplied URL), the alert  is displayed:</p>
 * <p><span class="output">Handler for .error() called.</span></p>
 * <blockquote><p>The event handler <em>must</em> be attached before the browser fires the error event, which is why the example sets the src attribute after attaching the handler. Also, the error event may not be correctly fired when the page is served locally; <code>error</code> relies on HTTP status codes and will generally not be triggered if the URL uses the <code>file:</code> protocol.</p>
 * </blockquote>
 * <p>Note: A jQuery error event handler should not be attached to the window object. The browser fires the window's error event when a script error occurs. However, the window error event receives different arguments and has different return value requirements than conventional event handlers. Use <code>window.onerror</code> instead.
 * </p>
 * 
 * @example
 * <p>To hide the "broken image" icons for IE users, you can try:</p>
 * <pre><code>$("img")
 *   .error(function(){
 *     $(this).hide();
 *   })
 *   .attr("src", "missing.png");</code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.error = function(eventData, handler) {return new jQuery();};

/**
 * Remove an event handler previously attached using <code>.live()</code> from the elements.
 * 
 * 
 * <p>Any handler that has been attached with <code>.live()</code> can be removed with <code>.die()</code>. This method is analogous to <code>.unbind()</code>, which is used to remove handlers attached with <code>.bind()</code>.
 * See the discussions of <code>.live()</code> and <code>.unbind()</code> for further details.</p>
 * <p><strong>Note:</strong> In order for <code>.die()</code> to function correctly, the selector used with it must match exactly the selector initially used with <code>.live()</code>.</p>
 * 
 * @example
 * <p>Can bind and unbind events to the colored button.</p>
 * <pre><code>
 * 
 * function aClick() {
 *   $("div").show().fadeOut("slow");
 * }
 * $("#bind").click(function () {
 *   $("#theone").live("click", aClick)
 *               .text("Can Click!");
 * });
 * $("#unbind").click(function () {
 *   $("#theone").die("click", aClick)
 *               .text("Does nothing...");
 * });
 * 
 * </code></pre>
 * @example
 * <p>To unbind all live events from all paragraphs, write:</p>
 * <pre><code>$("p").die()</code></pre>
 * @example
 * <p>To unbind all live click events from all paragraphs, write:</p>
 * <pre><code>$("p").die( "click" )</code></pre>
 * @example
 * <p>To unbind just one previously bound handler, pass the function in as the second argument:</p>
 * <pre><code>var foo = function () {
 * // code to handle some kind of event
 * };
 * 
 * $("p").live("click", foo); // ... now foo will be called when paragraphs are clicked ...
 * 
 * $("p").die("click", foo); // ... foo will no longer be called.</code></pre>
 * 
 * @param {Map} eventTypes A map of one or more event types, such as <code>click</code> or <code>keydown</code> and their corresponding functions that are no longer to be executed.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.die = function(eventTypes) {return new jQuery();};

/**
 * Attach a handler to the event for all elements which match the current selector, now and in the future.
 * 
 * 
 *   <p>This method is a variation on the basic <code>.bind()</code> method for attaching event handlers to elements. When <code>.bind()</code> is called, the elements that the jQuery object refers to get the handler attached; elements that get introduced later do not, so they would require another <code>.bind()</code> call. For instance, consider the HTML:</p>
 * <pre>&lt;body&gt;
 *   &lt;div class="clickme"&gt;
 *     Click here
 *   &lt;/div&gt;
 * &lt;/body&gt;
 * </pre>
 *   <p>To bind a simple click handler to this element:</p>
 * <pre>$('.clickme').bind('click', function() {
 *   // Bound handler called.
 * });
 * </pre>
 *   <p>When the element is clicked, the handler is called. However, suppose that after this, another element is added:
 *   </p>
 *   <pre>$('body').append('&lt;div class="clickme"&gt;Another target&lt;/div&gt;');</pre>
 *   <p>This new element also matches the selector <code>.clickme</code>, but since it was added after the call to <code>.bind()</code>, clicks on it will do nothing.</p>
 *   <p>The <code>.live()</code> method provides an alternative to this behavior. To bind a click handler to the target element using this method:</p>
 * <pre>$('.clickme').live('click', function() {
 *   // Live handler called.
 * });</pre>
 *   <p>And then later add a new element:</p>
 *   <pre>$('body').append('&lt;div class="clickme"&gt;Another target&lt;/div&gt;');</pre>
 *   <p>Then clicks on the new element will also trigger the handler.</p>
 *   <p>To <em>unbind</em> the click handlers from all <code>&lt;div class="clickme"&gt;</code> that were bound using <code>.live()</code>, use the <code><a href="http://api.jquery.com/die/">.die()</a></code> method:</p>
 * <pre>$(".clickme").die("click");</pre>
 *   <h4 id="event-delegation">Event Delegation</h4>
 *   <p>The <code>.live()</code> method is able to affect elements that have not yet been added to the DOM through the use of event delegation: a handler bound to an ancestor element is responsible for events that are triggered on its descendants. The handler passed to <code>.live()</code> is never bound to an element; instead, <code>.live()</code> binds a special handler to the root of the DOM tree. In the example above, when the new element is clicked, the following steps occur:</p>
 *   <ol>
 *     <li>A click event is generated and passed to the <code>&lt;div&gt;</code> for handling.</li>
 *     <li>No handler is directly bound to the <code>&lt;div&gt;</code>, so the event bubbles up the DOM tree.</li>
 *     <li>The event bubbles up until it reaches the root of the tree, which is where <code>.live()</code> binds its special handlers by default. <br/><em>* As of jQuery 1.4, event bubbling can optionally stop at a DOM element "context".</em></li>
 *     <li>The special <code>click</code> handler bound by <code>.live()</code> executes.</li>
 *     <li>This handler tests the <code>target</code> of the event object to see whether it should continue. This test is performed by checking if <code>$(event.target).closest(".clickme")</code> is able to locate a matching element.</li>
 *     <li>If a matching element is found, the original handler is called on it.</li>
 *   </ol>
 *   <p>Because the test in step 5 is not performed until the event occurs, elements can be added at any time and still respond to events.</p>
 *   <p>See the discussion for <code><a href="/bind">.bind()</a></code> for more information on event binding.</p>
 * 
 *   <h4 id="multiple-events">Multiple Events</h4>
 *   <p>As of jQuery 1.4.1 <code>.live()</code> can accept multiple, space-separated events, similar to the functionality provided in <a href="/bind">.bind()</a>. For example, you can "live bind" the <code>mouseover</code> and <code>mouseout</code> events at the same time like so: </p>
 * <pre>$(".hoverme").live("mouseover mouseout", function(event) {
 *   if ( event.type == "mouseover" ) {
 *     // do something on mouseover
 *   } else {
 *     // do something on mouseout
 *   }
 * });</pre>
 *   <p>As of jQuery 1.4.3, you can bind multiple live event handlers simultaneously by passing a map of event type/handler pairs:</p>
 * 
 * <pre>$("a").live({
 *   click: function() {
 *     // do something on click
 *   },
 *   mouseover: function() {
 *     // do something on mouseover
 *   }
 * });</pre>
 *   <h4 id="event-data">Event Data</h4>
 *   <p>As of jQuery 1.4, the optional <code>eventData</code> parameter is available for passing additional information to the handler. One handy use of this parameter is to work around issues caused by closures. See the <code>.bind()</code> method's "<a href="/bind/#passing-event-data">Passing Event Data</a>" discussion for more information.</p>
 *   <h4 id="event-context">Event Context</h4>
 *   <p>As of jQuery 1.4, live events can be bound to a DOM element "context" rather than to the default document root. To set this context, use the <a href="http://api.jquery.com/jquery/#selector-context"><code>jQuery()</code> function's second argument</a>, passing in a single DOM element (as opposed to a jQuery collection or a selector).</p>
 * <pre>$("div.clickme", $("#container")[0]).live("click", function() {
 *   // Live handler called.
 * });</pre>
 *   <p>The live handler in this example is called only when <code>&lt;div class="clickme"&gt;</code> is a descendant of an element with an ID of "container."</p>
 *   <h4 id="caveats">Caveats</h4>
 *   <p>The <code>.live()</code> technique is useful, but due to its special approach cannot be simply substituted for <code>.bind()</code> in all cases. Specific differences include:</p>
 *   <ul>
 *     <li>DOM traversal methods are not supported for finding elements to send to <code>.live()</code>. Rather, the <code>.live()</code> method should always be called directly after a selector, as in the example above.</li>
 *     <li>To stop further handlers from executing after one bound using <code>.live()</code>, the handler must return <code>false</code>. Calling <code>.stopPropagation()</code> will not accomplish this.</li>
 *     <li>The <code>paste</code> and <code>reset</code> events, in addition to <code>change</code> when used with inputs of type "file," are not fully supported by the <code>.live()</code> method, due to issues with simulating event bubbling in Internet Explorer. In these cases, the <code>.bind()</code> method can be used instead.</li>
 *     <li>In <b>jQuery 1.3.x</b> only the following JavaScript events (in addition to custom events) could be bound with <code>.live()</code>: <code>click</code>, <code>dblclick</code>, <code>keydown</code>, <code>keypress</code>, <code>keyup</code>, <code>mousedown</code>, <code>mousemove</code>, <code>mouseout</code>, <code>mouseover</code>, and <code>mouseup</code>.</li>
 *   </ul>
 *   <blockquote>
 *     <ul>
 *       <li>As of <b>jQuery 1.4</b> the <code>.live()</code> method supports custom events as well as all <em>JavaScript events that bubble</em>.</li>
 *       <li>As of <b>jQuery 1.4.1</b> even <code>focus</code> and <code>blur</code> work with live (mapping to the more appropriate, bubbling, events <code>focusin</code> and <code>focusout</code>).</li>
 *       <li>As of <b>jQuery 1.4.1</b> the <code>hover</code> event can be specified (mapping to <code>mouseenter</code> and  <code>mouseleave</code>, which, in turn, are mapped to <code>mouseover</code> and <code>mouseout</code>).</li>
 *     </ul>
 *   </blockquote>
 * 
 * @example
 * <p>Click a paragraph to add another. Note that .live() binds the click event to all paragraphs - even new ones.</p>
 * <pre><code>
 * $("p").live("click", function(){
 *   $(this).after("<p>Another paragraph!</p>");
 * });
 * </code></pre>
 * @example
 * <p>Cancel a default action and prevent it from bubbling up by returning false.</p>
 * <pre><code>$("a").live("click", function() { return false; })</code></pre>
 * @example
 * <p>Cancel only the default action by using the preventDefault method.</p>
 * <pre><code>$("a").live("click", function(event){
 *   event.preventDefault();
 * });</code></pre>
 * @example
 * <p>Bind custom events with .live().</p>
 * <pre><code>
 * $("p").live("myCustomEvent", function(e, myName, myValue) {
 *   $(this).text("Hi there!");
 *   $("span").stop().css("opacity", 1)
 *            .text("myName = " + myName)
 *            .fadeIn(30).fadeOut(1000);
 * });
 * $("button").click(function () {
 *   $("p").trigger("myCustomEvent");
 * });
 * </code></pre>
 * @example
 * <p>Use a map to bind multiple live event handlers. Note that .live() binds the click, mouseover, and mouseout events to all paragraphs — even new ones.</p>
 * <pre><code>
 * $("p").live({
 *   click: function() {
 *     $(this).after("<p>Another paragraph!</p>");
 *   },
 *   mouseover: function() {
 *     $(this).addClass("over");
 *   },
 *   mouseout: function() {
 *     $(this).removeClass("over");
 *   }
 * });
 * </code></pre>
 * 
 * @param {Object} events A map of one or more JavaScript event types and functions to execute for them.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.live = function(events) {return new jQuery();};

/**
 * Remove a previously-attached event handler from the elements.
 * 
 * 
 *     <p>Any handler that has been attached with <code>.bind()</code> can be removed with <code>.unbind()</code>. In the simplest case, with no arguments, <code>.unbind()</code> removes all handlers attached to the elements:</p>
 * <pre>$('#foo').unbind();</pre>
 * <p>This version removes the handlers regardless of type. To be more precise, we can pass an event type:</p>
 * <pre>$('#foo').unbind('click');</pre>
 * <p>By specifying the <code>click</code> event type, only handlers for that event type will be unbound. This approach can still have negative ramifications if other scripts might be attaching behaviors to the same element, however. Robust and extensible applications typically demand the two-argument version for this reason:</p>
 * <pre>var handler = function() {
 *   alert('The quick brown fox jumps over the lazy dog.');
 * };
 * $('#foo').bind('click', handler);
 * $('#foo').unbind('click', handler);
 * </pre>
 * <p>By naming the handler, we can be assured that no other functions are caught in the crossfire. Note that the following will <em>not</em> work:</p>
 * <pre>$('#foo').bind('click', function() {
 *   alert('The quick brown fox jumps over the lazy dog.');
 * });
 * 
 * // will NOT work
 * $('#foo').unbind('click', function() {
 *   alert('The quick brown fox jumps over the lazy dog.');
 * });</pre>
 * <p>Even though the two functions are identical in content, they are created separately and so JavaScript is free to keep them as distinct function objects. To unbind a particular handler, we need a reference to that function and not a different one that happens to do the same thing.</p>
 * <blockquote><p><strong>Note: </strong>Because the <code><a href="http://api.jquery.com/live/">.live()</a></code> method binds event handlers to <code>document</code> by default, calling .unbind() on <code>document</code> will unbind the handlers bound by <code>.live()</code>, as well. For example, <code>$(document).unbind('click');</code> will remove not only <code>$(document).bind('click', fn1)</code> <br/>but also <br/> <code>$('a.foo').live('click', fn2)</code>.</p></blockquote>
 * <h4>Using Namespaces</h4>
 * <p>Instead of maintaining references to handlers in order to unbind them, we can namespace the events and use this capability to narrow the scope of our unbinding actions. As shown in the discussion for the <code>.bind()</code> method, namespaces are defined by using a period (<code>.</code>) character when binding a handler:</p>
 * <pre>$('#foo').bind('click.myEvents', handler);</pre>
 * <p>When a handler is bound in this fashion, we can still unbind it the normal way:</p>
 * <pre>$('#foo').unbind('click');</pre>
 * <p>However, if we want to avoid affecting other handlers, we can be more specific:</p>
 * <pre>$('#foo').unbind('click.myEvents');</pre>
 * <p>If multiple namespaced handlers are bound, we can unbind them at once:</p>
 * <pre>$('#foo').unbind('click.myEvents.yourEvents');</pre>
 * <p>This syntax is similar to that used for CSS class selectors; they are not hierarchical. This method call is thus the same as:</p>
 * <pre>$('#foo').unbind('click.yourEvents.myEvents');</pre>
 * <p>We can also unbind all of the handlers in a namespace, regardless of event type:</p>
 * <pre>$('#foo').unbind('.myEvents');</pre>
 * <p>It is particularly useful to attach namespaces to event bindings when we are developing plug-ins or otherwise writing code that may interact with other event-handling code in the future.</p>
 * <h4>Using the Event Object</h4>
 * <p>The third form of the <code>.unbind()</code> method is used when we wish to unbind a handler from within itself. For example, suppose we wish to trigger an event handler only three times:</p>
 * <pre>var timesClicked = 0;
 * $('#foo').bind('click', function(event) {
 *   alert('The quick brown fox jumps over the lazy dog.');
 *   timesClicked++;
 *   if (timesClicked &gt;= 3) {
 *     $(this).unbind(event);
 *   }
 * });
 * </pre>
 * <p>The handler in this case must take a parameter, so that we can capture the event object and use it to unbind the handler after the third click. The event object contains the context necessary for <code>.unbind()</code> to know which handler to remove.
 * This example is also an illustration of a closure. Since the handler refers to the <code>timesClicked</code> variable, which is defined outside the function, incrementing the variable has an effect even between invocations of the handler.</p>
 * 
 * @example
 * <p>Can bind and unbind events to the colored button.</p>
 * <pre><code>
 * 
 * function aClick() {
 * $("div").show().fadeOut("slow");
 * }
 * $("#bind").click(function () {
 * // could use .bind('click', aClick) instead but for variety...
 * $("#theone").click(aClick)
 *   .text("Can Click!");
 * });
 * $("#unbind").click(function () {
 * $("#theone").unbind('click', aClick)
 *   .text("Does nothing...");
 * });
 * 
 * </code></pre>
 * @example
 * <p>To unbind all events from all paragraphs, write:</p>
 * <pre><code>$("p").unbind()</code></pre>
 * @example
 * <p>To unbind all click events from all paragraphs, write:</p>
 * <pre><code>$("p").unbind( "click" )</code></pre>
 * @example
 * <p>To unbind just one previously bound handler, pass the function in as the second argument:</p>
 * <pre><code>var foo = function () {
 * // code to handle some kind of event
 * };
 * 
 * $("p").bind("click", foo); // ... now foo will be called when paragraphs are clicked ...
 * 
 * $("p").unbind("click", foo); // ... foo will no longer be called.</code></pre>
 * 
 * @param {Object} event A JavaScript event object as passed to an event handler.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.unbind = function(event) {return new jQuery();};

/**
 * Attach a handler to an event for the elements.
 * 
 * <p>The <code>.bind()</code> method is the primary means of attaching behavior to a document. All JavaScript event types, such as <code>focus</code>, <code>mouseover</code>, and <code>resize</code>, are allowed for <code>eventType.</code> (The <code>beforeunload</code> and <code>error</code> events on the <code>window</code> object use nonstandard conventions and are not supported by jQuery; attach a handler directly to the <code>window</code> object instead.) </p>
 * <p>The jQuery library provides shortcut methods for binding the standard event types, such as <code>.click()</code> for <code>.bind('click')</code>. A description of each can be found in the discussion of its shortcut method: <a href="/blur">blur</a>, <a href="/focus">focus</a>, <a href="/focusin">focusin</a>, <a href="/focusout">focusout</a>, <a href="/load-event">load</a>, <a href="/resize">resize</a>, <a href="/scroll">scroll</a>, <a href="/unload">unload</a>, <a href="/click">click</a>, <a href="/dblclick">dblclick</a>, <a href="/mousedown">mousedown</a>, <a href="/mouseup">mouseup</a>, <a href="/mousemove">mousemove</a>, <a href="/mouseover">mouseover</a>, <a href="/mouseout">mouseout</a>, <a href="/mouseenter">mouseenter</a>, <a href="/mouseleave">mouseleave</a>, <a href="/change">change</a>, <a href="/select">select</a>, <a href="/submit">submit</a>, <a href="/keydown">keydown</a>, <a href="/keypress">keypress</a>, <a href="/keyup">keyup</a>,  <a href="/error">error</a></p>
 * 
 * <p>Any string is legal for <code>eventType</code>; if the string is not the name of a native JavaScript event, then the handler is bound to a custom event. These events are never called by the browser, but may be triggered manually from other JavaScript code using <code>.trigger()</code> or <code>.triggerHandler()</code>.</p>
 * <p>If the <code>eventType</code> string contains a period (<code>.</code>) character, then the event is namespaced. The period character separates the event from its namespace. For example, in the call <code>.bind('click.name', handler)</code>, the string <code>click</code> is the event type, and the string <code>name</code> is the namespace. Namespacing allows us to unbind or trigger some events of a type without affecting others. See the discussion of <code>.unbind()</code> for more information.</p>
 * <p>When an event reaches an element, all handlers bound to that event type for the element are fired. If there are multiple handlers registered, they will always execute in the order in which they were bound. After all handlers have executed, the event continues along the normal event propagation path.</p>
 * <p>A basic usage of <code>.bind()</code> is:</p>
 * <pre>
 * $('#foo').bind('click', function() {
 *   alert('User clicked on "foo."');
 * });
 * </pre>
 * <p>This code will cause the element with an ID of <code>foo</code> to respond to the <code>click</code> event. When a user clicks inside this element thereafter, the alert will be shown.</p>
 * <h4 id="multiple-events">Multiple Events</h4>
 * <p>Multiple event types can be bound at once by including each one separated by a space:</p>
 * <pre>
 * $('#foo').bind('mouseenter mouseleave', function() {
 *   $(this).toggleClass('entered');
 * });
 * </pre>
 * <p>The effect of this on <code>&lt;div id="foo"&gt;</code> (when it does not initially have the "entered" class) is to add the "entered" class when the mouse enters the <code>&lt;div&gt;</code> and remove the class when the mouse leaves. </p>
 * <p>As of jQuery 1.4 we can bind multiple event handlers simultaneously by passing a map of event type/handler pairs:</p>
 * <pre>
 * $('#foo').bind({
 *   click: function() {
 *     // do something on click
 *   },
 *   mouseenter: function() {
 *     // do something on mouseenter
 *   }
 * });
 * </pre>
 * <h4 id="event-handlers">Event Handlers</h4>
 * <p>The <code>handler</code> parameter takes a callback function, as shown above. Within the handler, the keyword <code>this</code> refers to the DOM element to which the handler is bound. To make use of the element in jQuery, it can be passed to the normal <code>$()</code> function. For example:</p>
 * <pre>$('#foo').bind('click', function() {
 *   alert($(this).text());
 * });
 * </pre>
 * <p>After this code is executed, when the user clicks inside the element with an ID of <code>foo</code>, its text contents will be shown as an alert.
 * </p>
 * <p>As of jQuery 1.4.2 duplicate event handlers can be bound to an element instead of being discarded. For example:</p>
 * <pre>function test(){ alert("Hello"); }
 * $("button").click( test );
 * $("button").click( test );</pre>
 * <p>The above will generate two alerts when the button is clicked.</p>
 * 
 * <p>In jQuery 1.4.3 you can now pass in 'false' in place of an event handler. This will bind an event handler that's equivalent to: <code>function(){ return false; }</code>. This function can be removed at a later time by calling: <code>.unbind( eventName, false )</code>.</p>
 * 
 * <h4 id="event-object"><a href="/category/events/event-object/">The Event object</a></h4>
 * <p>The <code>handler</code> callback function can also take parameters. When the function is called, the JavaScript event object will be passed to the first parameter.</p>
 * <p>The event object is often unnecessary and the parameter omitted, as sufficient context is usually available when the handler is bound to know exactly what needs to be done when the handler is triggered. However, at times it becomes necessary to gather more information about the user's environment at the time the event was initiated. <a href="/category/events/event-object/">View the full Event Object</a>.</p>
 * 
 * <p>Returning <code>false</code> from a handler is equivalent to calling both <code>.preventDefault()</code> and <code>.stopPropagation()</code> on the event object.</p>
 * <p>Using the event object in a handler looks like this:</p>
 * <pre>$(document).ready(function() {
 *   $('#foo').bind('click', function(event) {
 *     alert('The mouse cursor is at ('
 *       + event.pageX + ', ' + event.pageY + ')');
 *   });
 * });
 * </pre>
 * <p>Note the parameter added to the anonymous function. This code will cause a click on the element with ID <code>foo</code> to report the page coordinates of the mouse cursor at the time of the click.</p>
 * 
 * <h4 id="passing-event-data">Passing Event Data</h4>
 * <p>The optional <code>eventData</code> parameter is not commonly used. When provided, this argument allows us to pass additional information to the handler. One handy use of this parameter is to work around issues caused by closures. For example, suppose we have two event handlers that both refer to the same external variable:</p>
 * <pre>var message = 'Spoon!';
 * $('#foo').bind('click', function() {
 *   alert(message);
 * });
 * message = 'Not in the face!';
 * $('#bar').bind('click', function() {
 *   alert(message);
 * });
 * </pre>
 * <p>Because the handlers are closures that both have <code>message</code> in their environment, both will display the message <span class="output">Not in the face!</span> when triggered. The variable's value has changed. To sidestep this, we can pass the message in using <code>eventData</code>:
 * </p>
 * <pre>var message = 'Spoon!';
 * $('#foo').bind('click', {msg: message}, function(event) {
 *   alert(event.data.msg);
 * });
 * message = 'Not in the face!';
 * $('#bar').bind('click', {msg: message}, function(event) {
 *   alert(event.data.msg);
 * });
 * </pre>
 * <p>This time the variable is not referred to directly within the handlers; instead, the variable is passed in <em>by value</em> through <code>eventData</code>, which fixes the value at the time the event is bound. The first handler will now display <span class="output">Spoon!</span> while the second will alert <span class="output">Not in the face!</span>
 * </p>
 * <blockquote>
 *   <p>Note that objects are passed to functions <em>by reference</em>, which further complicates this scenario.</p>
 * </blockquote>
 * <p>If <code>eventData</code> is present, it is the second argument to the <code>.bind()</code> method; if no additional data needs to be sent to the handler, then the callback is passed as the second and final argument.</p>
 * <blockquote><p>See the <code>.trigger()</code> method reference for a way to pass data to a handler at the time the event happens rather than when the handler is bound.</p></blockquote>
 * 
 * <p>As of jQuery 1.4 we can no longer attach data (and thus, events) to object, embed, or applet elements because critical errors occur when attaching data to Java applets.</p>
 * <p><strong>Note: </strong>Although demonstrated in the next example, it is inadvisable to bind handlers to both the <code>click</code> and <code>dblclick</code> events for the same element. The sequence of events triggered varies from browser to browser, with some receiving two click events before the <code>dblclick</code> and others only one. Double-click sensitivity (maximum time between clicks that is detected as a double click) can vary by operating system and browser, and is often user-configurable.</p>
 * 
 * @example
 * <p>Handle click and double-click for the paragraph.  Note: the coordinates are window relative, so in this case relative to the demo iframe.</p>
 * <pre><code>
 * $("p").bind("click", function(event){
 * var str = "( " + event.pageX + ", " + event.pageY + " )";
 * $("span").text("Click happened! " + str);
 * });
 * $("p").bind("dblclick", function(){
 * $("span").text("Double-click happened in " + this.nodeName);
 * });
 * $("p").bind("mouseenter mouseleave", function(event){
 * $(this).toggleClass("over");
 * });
 * 
 * </code></pre>
 * @example
 * <p>To display each paragraph's text in an alert box whenever it is clicked:</p>
 * <pre><code>$("p").bind("click", function(){
 * alert( $(this).text() );
 * });</code></pre>
 * @example
 * <p>You can pass some extra data before the event handler:</p>
 * <pre><code>function handler(event) {
 * alert(event.data.foo);
 * }
 * $("p").bind("click", {foo: "bar"}, handler)</code></pre>
 * @example
 * <p>Cancel a default action and prevent it from bubbling up by returning <code>false</code>:</p>
 * <pre><code>$("form").bind("submit", function() { return false; })</code></pre>
 * @example
 * <p>Cancel only the default action by using the .preventDefault() method.</p>
 * <pre><code>$("form").bind("submit", function(event) {
 * event.preventDefault();
 * });</code></pre>
 * @example
 * <p>Stop an event from bubbling without preventing the default action by using the .stopPropagation() method.</p>
 * <pre><code>$("form").bind("submit", function(event) {
 *   event.stopPropagation();
 * });</code></pre>
 * @example
 * <p>Bind custom events.</p>
 * <pre><code>
 * 
 * $("p").bind("myCustomEvent", function(e, myName, myValue){
 * $(this).text(myName + ", hi there!");
 * $("span").stop().css("opacity", 1)
 * .text("myName = " + myName)
 * .fadeIn(30).fadeOut(1000);
 * });
 * $("button").click(function () {
 * $("p").trigger("myCustomEvent", [ "John" ]);
 * });
 * 
 * </code></pre>
 * @example
 * <p>Bind multiple events simultaneously.</p>
 * <pre><code>$("div.test").bind({
 *   click: function(){
 *     $(this).addClass("active");
 *   },
 *   mouseenter: function(){
 *     $(this).addClass("inside");
 *   },
 *   mouseleave: function(){
 *     $(this).removeClass("inside");
 *   }
 * });</code></pre>
 * 
 * @param {Object} events A map of one or more JavaScript event types and functions to execute for them.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.bind = function(events) {return new jQuery();};

/**
 * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.find()</code> method allows us to search through the descendants of these elements in the DOM tree and construct a new jQuery object from the matching elements. The <code>.find()</code> and <code>.children()</code> methods are similar, except that the latter only travels a single level down the DOM tree.</p>
 *   <p>The first signature for the <code>.find()</code>method accepts a selector expression of the same type that we can pass to the <code>$()</code> function. The elements will be filtered by testing whether they match this selector.</p>
 *   <p>Consider a page with a basic nested list on it:</p>
 * <pre>
 * &lt;ul class="level-1"&gt;
 *   &lt;li class="item-i"&gt;I&lt;/li&gt;
 *   &lt;li class="item-ii"&gt;II
 *     &lt;ul class="level-2"&gt;
 *       &lt;li class="item-a"&gt;A&lt;/li&gt;
 *       &lt;li class="item-b"&gt;B
 *         &lt;ul class="level-3"&gt;
 *           &lt;li class="item-1"&gt;1&lt;/li&gt;
 *           &lt;li class="item-2"&gt;2&lt;/li&gt;
 *           &lt;li class="item-3"&gt;3&lt;/li&gt;
 *         &lt;/ul&gt;
 *       &lt;/li&gt;
 *       &lt;li class="item-c"&gt;C&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 *   &lt;li class="item-iii"&gt;III&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 *   <p>If we begin at item II, we can find list items within it:</p>
 *   <pre>$('li.item-ii').find('li').css('background-color', 'red');</pre>
 *   <p>The result of this call is a red background on items A, B, 1, 2, 3, and C. Even though item II matches the selector expression, it is not included in the results; only descendants are considered candidates for the match.</p>
 *   <blockquote><p>Unlike in the rest of the tree traversal methods, the selector expression is required in a call to <code>.find()</code>. If we need to retrieve all of the descendant elements, we can pass in the universal selector <code>'*'</code> to accomplish this.</p></blockquote>
 *   <p><a href="http://api.jquery.com/jquery/#selector-context">Selector context</a> is implemented with the <code>.find()</code> <code>method;</code> therefore, <code>$('li.item-ii').find('li')</code> is equivalent to <code>$('li', 'li.item-ii')</code>.</p>
 *   <p><strong>As of jQuery 1.6</strong>, we can also filter the selection with a given jQuery collection or element. With the same nested list as above, if we start with:</p>
 *   <pre>var $allListElements = $('li');</pre>
 *   <p>And then pass this jQuery object to find:</p>
 *   <pre>$('li.item-ii').find( $allListElements );</pre>
 *   <p>This will return a jQuery collection which contains only the list elements that are descendants of item II.</p>
 *   <p>Similarly, an element may also be passed to find:</p>
 * <pre>
 * var item1 = $('li.item-1')[0];
 * $('li.item-ii').find( item1 ).css('background-color', 'red');
 * </pre>
 *   <p>The result of this call would be a red background on item 1.</p>
 * 
 * @example
 * <p>Starts with all paragraphs and searches for descendant span elements, same as $("p span")</p>
 * <pre><code>
 *   $("p").find("span").css('color','red');
 * </code></pre>
 * @example
 * <p>A selection using a jQuery collection of all span tags. Only spans within p tags are changed to red while others are left blue.</p>
 * <pre><code>
 *   var $spans = $('span');
 *   $("p").find( $spans ).css('color','red');
 * </code></pre>
 * @example
 * <p>Add spans around each word then add a hover and italicize words with the letter <strong>t</strong>.</p>
 * <pre><code>
 *   var newText = $("p").text().split(" ").join("</span> <span>");
 *   newText = "<span>" + newText + "</span>";
 * 
 *   $("p").html( newText )
 *     .find('span')
 *     .hover(function() { 
 *       $(this).addClass("hilite"); 
 *     },
 *       function() { $(this).removeClass("hilite"); 
 *     })
 *   .end()
 *     .find(":contains('t')")
 *     .css({"font-style":"italic", "font-weight":"bolder"});
 * 
 * </code></pre>
 * 
 * @param {Element} element An element to match elements against.
 * 
 * @since 1.6
 * @returns {jQuery}
**/
jQuery.prototype.find = function(element) {return new jQuery();};

/**
 * Get the first ancestor element that matches the selector, beginning at the current element and progressing up through the DOM tree.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.closest()</code> method allows us to search through these elements and their ancestors in the DOM tree and construct a new jQuery object from the matching elements. The <code>.parents()</code> and <code>.closest()</code> methods are similar in that they both traverse up the DOM tree. The differences between the two, though subtle, are significant:</p>
 * 
 *   <table>
 *     <thead>
 *       <tr>
 *         <th>.closest()</th>
 *         <th>.parents()</th>
 *       </tr>
 *     </thead>
 *     <tbody>
 *       <tr>
 *         <td>Begins with the current element</td>
 *         <td>Begins with the parent element</td></tr>
 *       <tr>
 *         <td>Travels up the DOM tree until it finds a match for the supplied selector</td>
 *         <td>Travels up the DOM tree to the document's root element, adding each ancestor element to a temporary collection; it then filters that collection based on a selector if one is supplied </td>
 *       </tr>
 *       <tr>
 *         <td>The returned jQuery object contains zero or one element</td>
 *         <td>The returned jQuery object contains zero, one, or multiple elements</td>
 *       </tr>
 *     </tbody>
 *   </table>
 * 
 * <pre>
 * &lt;ul id="one" class="level-1"&gt;
 *   &lt;li class="item-i"&gt;I&lt;/li&gt;
 *   &lt;li id="ii" class="item-ii"&gt;II
 *   &lt;ul class="level-2"&gt;
 *     &lt;li class="item-a"&gt;A&lt;/li&gt;
 *     &lt;li class="item-b"&gt;B
 *       &lt;ul class="level-3"&gt;
 *         &lt;li class="item-1"&gt;1&lt;/li&gt;
 *         &lt;li class="item-2"&gt;2&lt;/li&gt;
 *         &lt;li class="item-3"&gt;3&lt;/li&gt;
 *       &lt;/ul&gt;
 *     &lt;/li&gt;
 *     &lt;li class="item-c"&gt;C&lt;/li&gt;
 *   &lt;/ul&gt;
 *   &lt;/li&gt;
 *   &lt;li class="item-iii"&gt;III&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * 
 * <p>Suppose we perform a search for <code>&lt;ul&gt;</code> elements starting at item A:</p>
 * <pre>
 * $('li.item-a').closest('ul')
 *   .css('background-color', 'red');
 * </pre>
 * <p>This will change the color of the level-2 <code>&lt;ul&gt;</code>, since it is the first encountered when traveling up the DOM tree.</p>
 * <p>Suppose we search for an <code>&lt;li&gt;</code> element instead:</p>
 * <pre>$('li.item-a').closest('li')
 *   .css('background-color', 'red');
 * </pre>
 * <p>This will change the color of list item A. The <code>.closest()</code> method begins its search with the element itself before progressing up the DOM tree, and stops when item A matches the selector.</p>
 * <p>We can pass in a DOM element as the context within which to search for the closest element.</p>
 * <pre>var listItemII = document.getElementById('ii');
 * $('li.item-a').closest('ul', listItemII)
 *   .css('background-color', 'red');
 * $('li.item-a').closest('#one', listItemII)
 *   .css('background-color', 'green');</pre>
 * <p>This will change the color of the level-2 <code>&lt;ul&gt;</code>, because it is both the first <code>&lt;ul&gt;</code> ancestor of list item A and a descendant of list item II. It will not change the color of the level-1 <code>&lt;ul&gt;</code>, however, because it is not a descendant of list item II.</p>
 * 
 * @example
 * <p>Show how event delegation can be done with closest. The closest list element toggles a yellow background when it or its descendent is clicked.</p>
 * <pre><code>
 *   $( document ).bind("click", function( e ) {
 *     $( e.target ).closest("li").toggleClass("hilight");
 *   });
 * </code></pre>
 * @example
 * <p>Pass a jQuery object to closest. The closest list element toggles a yellow background when it or its descendent is clicked.</p>
 * <pre><code>
 *   var $listElements = $("li").css("color", "blue");
 *   $( document ).bind("click", function( e ) {
 *     $( e.target ).closest( $listElements ).toggleClass("hilight");
 *   });
 * </code></pre>
 * 
 * @param {jQuery} jq A jQuery object to match elements against.
 * 
 * @since 1.6
 * @returns {jQuery}
**/
jQuery.prototype.closest = function(jq) {return new jQuery();};

/**
 * Load data from the server and place the returned HTML into the matched element.
 * 
 * 
 *     <p>This method is the simplest way to fetch data from the server. It is roughly equivalent to <code>$.get(url, data, success)</code> except that it is a method rather than global function and it has an implicit callback function.  When a successful response is detected (i.e. when <code>textStatus</code> is "success" or "notmodified"), <code>.load()</code> sets the HTML contents of the matched element to the returned data. This means that most uses of the method can be quite simple:</p>
 *     <pre>$('#result').load('ajax/test.html');</pre>
 *     <p>The provided callback, if any, is executed after this post-processing has been performed:</p>
 *     <pre>$('#result').load('ajax/test.html', function() {
 *   alert('Load was performed.');
 * });</pre>
 *     <p>In the two examples above, if the current document does not contain an element with an ID of "result," the <code>.load()</code> method is not executed.</p>
 *     <p>The POST method is used if data is provided as an object; otherwise, GET is assumed.</p>
 * 
 *     <blockquote><p>Note: The event handling suite also has a method named <code><a href="/load-event">.load()</a></code>. Which one is fired depends on the set of arguments passed.</p></blockquote>
 *     <h4>Loading Page Fragments</h4>
 *     <p>The <code>.load()</code> method, unlike <code><a href="/jQuery.get">$.get()</a></code>, allows us to specify a portion of the remote document to be inserted. This is achieved with a special syntax for the <code>url</code> parameter. If one or more space characters are included in the string, the portion of the string following the first space is assumed to be a jQuery selector that determines the content to be loaded.   </p>
 *     <p>We could modify the example above to use only part of the document that is fetched:</p>
 *     <pre>$('#result').load('ajax/test.html #container');</pre>
 *     <p>When this method executes, it retrieves the content of <code>ajax/test.html</code>, but then jQuery parses the returned document to find the element with an ID of <code>container</code>. This element, along with its contents, is inserted into the element with an ID of <code>result</code>, and the rest of the retrieved document is discarded.</p>
 * <p>jQuery uses the browser's <code>.innerHTML</code> property to parse the retrieved document and insert it into the current document. During this process, browsers often filter elements from the document such as <code>&lt;html&gt;</code>, <code>&lt;title&gt;</code>, or <code>&lt;head&gt;</code> elements. As a result, the elements retrieved by <code>.load()</code> may not be exactly the same as if the document were retrieved directly by the browser.</p>
 *   
 * @example
 * <p>Load the main page's footer navigation into an ordered list.</p>
 * <pre><code>
 *   $("#new-nav").load("/ #jq-footerNavigation li");
 * </code></pre>
 * @example
 * <p>Display a notice if the Ajax request encounters an error.</p>
 * <pre><code>
 * $("#success").load("/not-here.php", function(response, status, xhr) {
 *   if (status == "error") {
 *     var msg = "Sorry but there was an error: ";
 *     $("#error").html(msg + xhr.status + " " + xhr.statusText);
 *   }
 * });
 *   </code></pre>
 * @example
 * <p>Load the feeds.html file into the div with the ID of feeds.</p>
 * <pre><code>$("#feeds").load("feeds.html");</code></pre>
 * @example
 * <p>pass arrays of data to the server.</p>
 * <pre><code>$("#objectID").load("test.php", { 'choices[]': ["Jon", "Susan"] } );</code></pre>
 * @example
 * <p>Same as above, but will POST the additional parameters to the server and a callback that is executed when the server is finished responding.</p>
 * <pre><code>$("#feeds").load("feeds.php", {limit: 25}, function(){
 * alert("The last 25 entries in the feed have been loaded");
 * });</code></pre>
 * 
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} data A map or string that is sent to the server with the request.
 * @param {Function} complete A callback function that is executed when the request completes.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.load = function(url, data, complete) {return new jQuery();};

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
 * @param {HTML} html An HTML fragment to add to the set of matched elements.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.add = function(html) {return new jQuery();};

/**
 * Remove elements from the set of matched elements.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.not()</code> method constructs a new jQuery object from a subset of the matching elements. The supplied selector is tested against each element; the elements that don't match the selector will be included in the result.</p>
 * <p>Consider a page with a simple list on it:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li&gt;list item 1&lt;/li&gt;
 *   &lt;li&gt;list item 2&lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 *   &lt;li&gt;list item 4&lt;/li&gt;
 *   &lt;li&gt;list item 5&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>We can apply this method to the set of list items:</p>
 * <pre>$('li').not(':even').css('background-color', 'red');</pre>
 * <p>The result of this call is a red background for items 2 and 4, as they do not match the selector (recall that :even and :odd use 0-based indexing).</p>
 * <h4>Removing Specific Elements</h4>
 * <p>The second version of the <code>.not()</code> method allows us to remove elements from the matched set, assuming we have found those elements previously by some other means. For example, suppose our list had an id applied to one of its items:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li&gt;list item 1&lt;/li&gt;
 *   &lt;li&gt;list item 2&lt;/li&gt;
 *   &lt;li id="notli"&gt;list item 3&lt;/li&gt;
 *   &lt;li&gt;list item 4&lt;/li&gt;
 *   &lt;li&gt;list item 5&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>We can fetch the third list item using the native JavaScript <code>getElementById()</code> function, then remove it from a jQuery object:</p>
 * <pre>
 * $('li').not(document.getElementById('notli'))
 *   .css('background-color', 'red');
 * </pre>
 * <p>This statement changes the color of items 1, 2, 4, and 5. We could have accomplished the same thing with a simpler jQuery expression, but this technique can be useful when, for example, other libraries provide references to plain DOM nodes.</p>
 * <p>As of jQuery 1.4, the <code>.not()</code> method can take a function as its argument in the same way that <code>.filter()</code> does. Elements for which the function returns <code>true</code> are excluded from the filtered set; all other elements are included.</p>
 * @example
 * <p>Adds a border to divs that are not green or blue.</p>
 * <pre><code>
 *     $("div").not(".green, #blueone")
 *             .css("border-color", "red");
 * 
 * </code></pre>
 * @example
 * <p>Removes the element with the ID "selected" from the set of all paragraphs.</p>
 * <pre><code>$("p").not( $("#selected")[0] )</code></pre>
 * @example
 * <p>Removes the element with the ID "selected" from the set of all paragraphs.</p>
 * <pre><code>$("p").not("#selected")</code></pre>
 * @example
 * <p>Removes all elements that match "div p.selected" from the total set of all paragraphs.</p>
 * <pre><code>$("p").not($("div p.selected"))</code></pre>
 * 
 * @param {Function} fn A function used as a test for each element in the set. <code>this</code> is the current DOM element.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.not = function(fn) {return new jQuery();};

/**
 * Display or hide the matched elements.
 * 
 * <p>With no parameters, the <code>.toggle()</code> method simply toggles the visibility of elements:</p>
 * <pre>$('.target').toggle();
 * </pre>
 * <p>The matched elements will be revealed or hidden immediately, with no animation, by changing the CSS <code>display</code> property. If the element is initially displayed, it will be hidden; if hidden, it will be shown. The <code>display</code> property is saved and restored as needed. If an element has a <code>display</code> value of <code>inline</code>, then is hidden and shown, it will once again be displayed <code>inline</code>.</p>
 * <p>When a duration is provided, <code>.toggle()</code> becomes an animation method. The <code>.toggle()</code> method animates the width, height, and opacity of the matched elements simultaneously. When these properties reach 0 after a hiding animation, the <code>display</code> style property is set to <code>none</code> to ensure that the element no longer affects the layout of the page.</p>
 * <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively.</p>
 * <blockquote><p>Note: The event handling suite also has a method named <a href="http://api.jquery.com/toggle-event/">.toggle()</a>. Which one is fired depends on the set of arguments passed.</p></blockquote>
 *     <p>As of jQuery 1.4.3, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 * <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 * <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;
 * </pre>
 * <p>We will cause <code>.toggle()</code> to be called when another element is clicked:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').toggle('slow', function() {
 *     // Animation complete.
 *   });
 * });
 * </pre>
 * <p>With the element initially shown, we can hide it slowly with the first click:
 * </p>
 * <p class="image four-across"> 
 * <img src="/images/0042_06_09.png" alt=""/>
 * <img src="/images/0042_06_10.png" alt=""/>
 * <img src="/images/0042_06_11.png" alt=""/>
 * <img src="/images/0042_06_12.png" alt=""/>
 * </p>
 * <p>A second click will show the element once again:</p>
 * <p class="image four-across"><img src="/images/0042_06_13.png" alt=""/>
 * <img src="/images/0042_06_14.png" alt=""/>
 * <img src="/images/0042_06_15.png" alt=""/>
 * <img src="/images/0042_06_16.png" alt=""/>
 * </p>
 * <p>The second version of the method accepts a Boolean parameter. If this parameter is <code>true</code>, then the matched elements are shown; if <code>false</code>, the elements are hidden. In essence, the statement:
 * </p>
 * <pre>$('#foo').toggle(showOrHide);</pre>
 * <p>is equivalent to:</p>
 * <pre>if ( showOrHide == true ) {
 *   $('#foo').show();
 * } else if ( showOrHide == false ) {
 *   $('#foo').hide();
 * }
 * </pre>
 * @example
 * <p>Toggles all paragraphs.</p>
 * <pre><code>
 * 
 * $("button").click(function () {
 * $("p").toggle();
 * });
 * </code></pre>
 * @example
 * <p>Animates all paragraphs to be shown if they are hidden and hidden if they are visible, completing the animation within 600 milliseconds.</p>
 * <pre><code>
 * $("button").click(function () {
 * $("p").toggle("slow");
 * });    
 * </code></pre>
 * @example
 * <p>Shows all paragraphs, then hides them all, back and forth.</p>
 * <pre><code>
 * 
 * var flip = 0;
 * $("button").click(function () {
 * $("p").toggle( flip++ % 2 == 0 );
 * });
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {String} easing A string indicating which easing function to use for the transition.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.toggle = function(duration, easing, callback) {return new jQuery();};

/**
 * Hide the matched elements.
 * 
 * 
 * <p>With no parameters, the <code>.hide()</code> method is the simplest way to hide an element:</p>
 * <pre>$('.target').hide();
 * </pre>
 * <p>The matched elements will be hidden immediately, with no animation. This is roughly equivalent to calling <code>.css('display', 'none')</code>, except that the value of the <code>display</code> property is saved in jQuery's data cache so that <code>display</code> can later be restored to its initial value. If an element has a <code>display</code> value of <code>inline</code>, then is hidden and shown, it will once again be displayed <code>inline</code>.</p>
 * <p>When a duration is provided, <code>.hide()</code> becomes an animation method. The <code>.hide()</code> method animates the width, height, and opacity of the matched elements simultaneously. When these properties reach 0, the <code>display</code> style property is set to <code>none</code> to ensure that the element no longer affects the layout of the page.</p>
 * <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively.</p>
 *     <p>As of jQuery 1.4.3, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 * <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 * <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;
 * With the element initially shown, we can hide it slowly:
 * $('#clickme').click(function() {
 *   $('#book').hide('slow', function() {
 *     alert('Animation complete.');
 *   });
 * });</pre>
 * 
 * <p class="image four-across"> 
 *   <img src="/images/0042_06_05.png" alt=""/> 
 *   <img src="/images/0042_06_06.png" alt=""/>
 *   <img src="/images/0042_06_07.png" alt=""/>
 *   <img src="/images/0042_06_08.png" alt=""/>
 * </p>
 * 
 * 
 * @example
 * <p>Hides all paragraphs then the link on click.</p>
 * <pre><code>
 * 
 *     $("p").hide();
 *     $("a").click(function ( event ) {
 *       event.preventDefault();
 *       $(this).hide();
 *     });
 * </code></pre>
 * @example
 * <p>Animates all shown paragraphs to hide slowly, completing the animation within 600 milliseconds.</p>
 * <pre><code>
 *     $("button").click(function () {
 *       $("p").hide("slow");
 *     });    
 * </code></pre>
 * @example
 * <p>Animates all spans (words in this case) to hide fastly, completing each animation within 200 milliseconds. Once each animation is done, it starts the next one.</p>
 * <pre><code>
 *     $("#hidr").click(function () {
 *       $("span:last-child").hide("fast", function () {
 *         // use callee so don't have to name the function
 *         $(this).prev().hide("fast", arguments.callee); 
 *       });
 *     });
 *     $("#showr").click(function () {
 *       $("span").show(2000);
 *     });
 * 
 * </code></pre>
 * @example
 * <p>Hides the divs when clicked over 2 seconds, then removes the div element when its hidden.  Try clicking on more than one box at a time.</p>
 * <pre><code>
 *     for (var i = 0; i < 5; i++) {
 *       $("<div>").appendTo(document.body);
 *     }
 *     $("div").click(function () {
 *       $(this).hide(2000, function () {
 *         $(this).remove();
 *       });
 *     });
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {String} easing A string indicating which easing function to use for the transition.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.hide = function(duration, easing, callback) {return new jQuery();};

/**
 * Set the CSS width of each element in the set of matched elements.
 * 
 * <p>When calling <code>.width('value')</code>, the value can be either a string (number and unit) or a number. If only a number is provided for the value, jQuery assumes a pixel unit. If a string is provided, however, any valid CSS measurement may be used for the width (such as <code>100px</code>, <code>50%</code>, or <code>auto</code>). Note that in modern browsers, the CSS width property does not include padding, border, or margin, unless the <code>box-sizing</code> CSS property is used.</p>
 * 
 * <p>If no explicit unit was specified (like 'em' or '%') then "px" is concatenated to the value.</p>
 * 
 * <p>Note that <code>.width('value')</code> sets the width of the box in accordance with the CSS <code>box-sizing</code> property. Changing this property to <code>border-box</code> will cause this function to change the outerWidth of the box instead of the content width.</p>
 * @example
 * <p>To set the width of each div on click to 30px plus a color change.</p>
 * <pre><code>
 * 
 *     $("div").one('click', function () {
 *       $(this).width(30)
 *              .css({cursor:"auto", "background-color":"blue"});
 *     });
 * </code></pre>
 * 
 * @param {Function} fn A function returning the width to set. Receives the index position of the element in the set and the old width as arguments.
 * 
 * @since 1.4.1
 * @returns {jQuery}
**/
jQuery.prototype.width = function(fn) {return new jQuery();};

/**
 * Set the CSS height of every matched element.
 * 
 * <p>When calling <code>.height(value)</code>, the value can be either a string (number and unit) or a number. If only a number is provided for the value, jQuery assumes a pixel unit. If a string is provided, however, any valid CSS measurement may be used for the height (such as <code>100px</code>, <code>50%</code>, or <code>auto</code>). Note that in modern browsers, the CSS height property does not include padding, border, or margin.</p>
 * <p>If no explicit unit was specified (like 'em' or '%') then "px" is concatenated to the value.</p>
 * <p>Note that <code>.height(value)</code> sets the height of the box in accordance with the CSS <code>box-sizing</code> property. Changing this property to <code>border-box</code> will cause this function to change the outerHeight of the box instead of the content height.</p>
 * @example
 * <p>To set the height of each div on click to 30px plus a color change.</p>
 * <pre><code>$("div").one('click', function () {
 *       $(this).height(30)
 *              .css({cursor:"auto", backgroundColor:"green"});
 *     });</code></pre>
 * 
 * @param {Function} fn A function returning the height to set. Receives the index position of the element in the set and the old height as arguments.
 * 
 * @since 1.4.1
 * @returns {jQuery}
**/
jQuery.prototype.height = function(fn) {return new jQuery();};

/**
 * Display the matched elements.
 * 
 * 
 * <p>With no parameters, the <code>.show()</code> method is the simplest way to display an element:
 * </p>
 * <pre>$('.target').show();
 * </pre>
 * <p>The matched elements will be revealed immediately, with no animation. This is roughly equivalent to calling <code>.css('display', 'block')</code>, except that the <code>display</code> property is restored to whatever it was initially. If an element has a <code>display</code> value of <code>inline</code>, then is hidden and shown, it will once again be displayed <code>inline</code>.</p>
 * <p><strong>Note: </strong> If using !important in your styles, such as
 * <code>display: none !important</code>,
 * it is necessary to override the style using <code>.css('display', 'block !important')</code> should you wish for <code>.show()</code> to function correctly.</p>
 * <p>When a duration is provided, <code>.show()</code> becomes an animation method. The <code>.show()</code> method animates the width, height, and opacity of the matched elements simultaneously.</p>
 * <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively.</p>
 *     <p>As of jQuery 1.4.3, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 * <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 * <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;
 * With the element initially hidden, we can show it slowly:
 * $('#clickme').click(function() {
 *   $('#book').show('slow', function() {
 *     // Animation complete.
 *   });
 * });</pre>
 * <p class="image four-across">
 *   <img src="/images/0042_06_01.png" alt=""/>
 *   <img src="/images/0042_06_02.png" alt=""/>
 *   <img src="/images/0042_06_03.png" alt=""/>
 *   <img src="/images/0042_06_04.png" alt=""/>
 * </p>
 * 
 * 
 * @example
 * <p>Animates all hidden paragraphs to show slowly, completing the animation within 600 milliseconds.</p>
 * <pre><code>
 *     $("button").click(function () {
 *     $("p").show("slow");
 *     });
 *     </code></pre>
 * @example
 * <p>Animates all hidden divs to show fastly in order, completing each animation within 200 milliseconds. Once each animation is done, it starts the next one.</p>
 * <pre><code>
 * $("#showr").click(function () {
 *   $("div:eq(0)").show("fast", function () {
 *     / * use callee so don't have to name the function * /
 *     $(this).next("div").show("fast", arguments.callee);
 *   });
 * });
 * $("#hidr").click(function () {
 *   $("div").hide(2000);
 * });
 * 
 * </code></pre>
 * @example
 * <p>Shows all span and input elements with an animation. Once the animation is done, it changes the text.</p>
 * <pre><code>
 * function doIt() {
 *   $("span,div").show("slow");
 * }
 * / * can pass in function name * /
 * $("button").click(doIt);
 * 
 * $("form").submit(function () {
 *   if ($("input").val() == "yes") {
 *     $("p").show(4000, function () {
 *       $(this).text("Ok, DONE! (now showing)");
 *     });
 *   }
 *   $("span,div").hide("fast");
 *   / * to stop the submit * /
 *   return false; 
 * });
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {String} easing A string indicating which easing function to use for the transition.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.show = function(duration, easing, callback) {return new jQuery();};

/**
 * Set the current coordinates of every element in the set of matched elements, relative to the document.
 * 
 * <p>The <code>.offset()</code> setter method allows us to reposition an element. The element's position is specified <em>relative to the document</em>. If the element's <code>position</code> style property is currently <code>static</code>, it will be set to <code>relative</code> to allow for this repositioning.</p>
 * @example
 * <p>Set the offset of the second paragraph:</p>
 * <pre><code>$("p:last").offset({ top: 10, left: 30 });</code></pre>
 * 
 * @param {Function} fn A function to return the coordinates to set. Receives the index of the element in the collection as the first argument and the current coordinates as the second argument. The function should return an object with the new <code>top</code> and <code>left</code> properties.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.offset = function(fn) {return new jQuery();};

/**
 * Set one or more CSS properties for the  set of matched elements.
 * 
 * <p>As with the <code>.prop()</code> method, the <code>.css()</code> method makes setting properties of elements quick and easy. This method can take either a property name and value as separate parameters, or a single map of key-value pairs (JavaScript object notation).</p>
 *       <p>Also, jQuery can equally interpret the CSS and DOM formatting of multiple-word properties. For example, jQuery understands and returns the correct value for both <code>.css({'background-color': '#ffe', 'border-left': '5px solid #ccc'})</code> and <code>.css({backgroundColor: '#ffe', borderLeft: '5px solid #ccc'})</code>. Notice that with the DOM notation, quotation marks around the property names are optional, but with CSS notation they're required due to the hyphen in the name.</p>
 *       
 *       <p>When using <code>.css()</code> as a setter, jQuery modifies the element's <code>style</code> property. For example,  <code>$('#mydiv').css('color', 'green')</code> is equivalent to <code>document.getElementById('mydiv').style.color = 'green'</code>. Setting the value of a style property to an empty string — e.g. <code>$('#mydiv').css('color', '')</code> — removes that property from an element if it has already been directly applied, whether in the HTML style attribute, through jQuery's <code>.css()</code> method, or through direct DOM manipulation of the <code>style</code> property. It does not, however, remove a style that has been applied with a CSS rule in a stylesheet or <code>&lt;style&gt;</code> element.</p>
 * 
 *      <p>As of jQuery 1.6, <code>.css()</code> accepts relative values similar to <code>.animate()</code>. Relative values are a string starting with <code>+=</code> or <code>-=</code> to increment or decrement the current value. For example, if an element's padding-left was 10px, <code>.css( "padding-left", "+=15" )</code> would result in a total padding-left of 25px.</p>
 * 
 *       <p>As of jQuery 1.4, <code>.css()</code> allows us to pass a function as the property value:</p>
 * <pre>$('div.example').css('width', function(index) {
 *   return index * 50;
 * });</pre>
 *   <p>This example sets the widths of the matched elements to incrementally larger values.</p>
 * @example
 * <p>To change the color of any paragraph to red on mouseover event.</p>
 * <pre><code>
 *   $("p").mouseover(function () {
 *     $(this).css("color","red");
 *   });
 * </code></pre>
 * @example
 * <p>Increase the width of #box by 200 pixels</p>
 * <pre><code>
 *   $("#box").one( "click", function () {
 *     $( this ).css( "width","+=200" );
 *   });
 * </code></pre>
 * @example
 * <p>To highlight a clicked word in the paragraph.</p>
 * <pre><code>
 *   var words = $("p:first").text().split(" ");
 *   var text = words.join("</span> <span>");
 *   $("p:first").html("<span>" + text + "</span>");
 *   $("span").click(function () {
 *     $(this).css("background-color","yellow");
 *   });
 * 
 * </code></pre>
 * @example
 * <p>To set the color of all paragraphs to red and background to blue:</p>
 * <pre><code>
 *   $("p").hover(function () {
 *     $(this).css({'background-color' : 'yellow', 'font-weight' : 'bolder'});
 *   }, function () {
 *     var cssObj = {
 *       'background-color' : '#ddd',
 *       'font-weight' : '',
 *       'color' : 'rgb(0,40,244)'
 *     }
 *     $(this).css(cssObj);
 *   });
 * </code></pre>
 * @example
 * <p>Increase the size of a div when you click it:</p>
 * <pre><code>
 *   $("div").click(function() {
 *     $(this).css({
 *       width: function(index, value) {
 *         return parseFloat(value) * 1.2;
 *       }, 
 *       height: function(index, value) {
 *         return parseFloat(value) * 1.2;
 *       }
 * 
 *     });
 *   });
 * </code></pre>
 * 
 * @param {String} propertyName A CSS property name.
 * @param {Function} fn A function returning the value to set. Receives the index position of the element in the set and the old value as arguments.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.css = function(propertyName, fn) {return new jQuery();};

/**
 * Set the value of each element in the set of matched elements.
 * 
 * <p>This method is typically used to set the values of form fields. </p>
 * <p>Passing an array of element values allows matching  <code>&lt;input type="checkbox"&gt;</code>, <code>&lt;input type="radio"&gt;</code> and <code>&lt;option&gt;</code>s inside of n <code>&lt;select multiple="multiple"&gt;</code> to be selected. In the case of <code>&lt;input type="radio"&gt;</code>s that are part of a radio group and <code>&lt;select multiple="multiple"&gt;</code> the other elements will be deselected.</p>
 *     <p>The <code>.val()</code> method allows us to set the value by passing in a function. As of jQuery 1.4, the function is passed two arguments, the current element's index and its current value: </p>
 * <pre>$('input:text.items').val(function(index, value) {
 *   return value + ' ' + this.className;
 * });
 * </pre>
 *   <p>This example appends the string " items" to the text inputs' values.</p>
 *   
 * @example
 * <p>Set the value of an input box.</p>
 * <pre><code>
 *     $("button").click(function () {
 *       var text = $(this).text();
 *       $("input").val(text);
 *     });
 * </code></pre>
 * @example
 * <p>Use the function argument to modify the value of an input box.</p>
 * <pre><code>
 *   $('input').bind('blur', function() {
 *       
 *     $(this).val(function(i, val) {
 *       return val.toUpperCase();
 *     });
 *     
 *   });
 *   </code></pre>
 * @example
 * <p>Set a single select, a multiple select, checkboxes and a radio button .</p>
 * <pre><code>
 *     
 *     $("#single").val("Single2");
 *     $("#multiple").val(["Multiple2", "Multiple3"]); 
 *     $("input").val(["check1","check2", "radio1" ]);
 * 
 * </code></pre>
 * 
 * @param {Function} fn A function returning the value to set.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.val = function(fn) {return new jQuery();};

/**
 * Set the content of each element in the set of matched elements to the specified text.
 * 
 * <p>Unlike the <code>.html()</code> method, <code>.text()</code> can be used in both XML and HTML documents. </p>
 *   <p>We need to be aware that this method escapes the string provided as necessary so that it will render correctly in HTML. To do so, it calls the DOM method <code>.createTextNode()</code>, which replaces special characters with their HTML entity equivalents (such as <code>&amp;lt;</code> for <code>&lt;</code>).  Consider the following HTML:</p>
 * 				<pre>&lt;div class="demo-container"&gt;
 *   &lt;div class="demo-box"&gt;Demonstration Box&lt;/div&gt;
 *   &lt;ul&gt;
 *     &lt;li&gt;list item 1&lt;/li&gt;
 *     &lt;li&gt;list &lt;strong&gt;item&lt;/strong&gt; 2&lt;/li&gt;
 *   &lt;/ul&gt;
 * &lt;/div&gt;
 * </pre>
 * 	<p>The code <code>$('div.demo-container').text('&lt;p&gt;This is a test.&lt;/p&gt;');</code> will produce the following DOM output:</p>
 * 	<pre>&lt;div class="demo-container"&gt;
 * &amp;lt;p&amp;gt;This is a test.&amp;lt;/p&amp;gt;
 * &lt;/div&gt;</pre>
 * 	<p>It will appear on a rendered page as though the tags were exposed, like this:</p>
 * 	<pre>&lt;p&gt;This is a test&lt;/p&gt;</pre>
 * 	<p>The <code>.text()</code> method cannot be used on input elements.  For input field text, use the <a href="/val">.val()</a> method.</p>
 *   <p>As of jQuery 1.4, the <code>.text()</code> method allows us to set the text content by passing in a function.</p>
 * <pre>$('ul li').text(function(index) {
 *   return 'item number ' + (index + 1);
 * });</pre>
 *   <p>Given an unordered list with three <code>&lt;li&gt;</code> elements, this example will produce the following DOM output:</p>
 * <pre>&lt;ul&gt;
 *   &lt;li&gt;item number 1&lt;/li&gt;
 *   &lt;li&gt;item number 2&lt;/li&gt;
 *   &lt;li&gt;item number 3&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * 
 * @example
 * <p>Add text to the paragraph (notice the bold tag is escaped).</p>
 * <pre><code>$("p").text("<b>Some</b> new text.");</code></pre>
 * 
 * @param {Function} fn A function returning the text content to set. Receives the index position of the element in the set and the old text value as arguments.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.text = function(fn) {return new jQuery();};

/**
 * Set the HTML contents of each element in the set of matched elements.
 * 
 * 
 *     <p>The <code>.html()</code> method is not available in XML documents. </p>
 * 				<p>When <code>.html()</code> is used to set an element's content, any content that was in that element is completely replaced by the new content. Consider the following HTML:</p>
 * 				<pre>&lt;div class="demo-container"&gt;
 *   &lt;div class="demo-box"&gt;Demonstration Box&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>The content of <code>&lt;div class="demo-container"&gt;</code> can be set like this:</p>
 * 				<pre>$('div.demo-container')
 *   .html('&lt;p&gt;All new content. &lt;em&gt;You bet!&lt;/em&gt;&lt;/p&gt;');</pre>
 * 				<p>That line of code will replace everything inside <code>&lt;div class="demo-container"&gt;</code>:</p>
 * 				<pre>&lt;div class="demo-container"&gt;
 *   &lt;p&gt;All new content. &lt;em&gt;You bet!&lt;/em&gt;&lt;/p&gt;
 * &lt;/div&gt;</pre>
 * <p>As of jQuery 1.4, the <code>.html()</code> method allows the HTML content to be set by passing in a function.</p>
 * <pre>$('div.demo-container').html(function() {
 *   var emph = '&lt;em&gt;' + $('p').length + ' paragraphs!&lt;/em&gt;';
 *   return '&lt;p&gt;All new content for ' + emph + '&lt;/p&gt;';
 * });</pre>
 * 
 * <p>Given a document with six paragraphs, this example will set the HTML of <code>&lt;div class="demo-container"&gt;</code> to <code>&lt;p&gt;All new content for &lt;em&gt;6 paragraphs!&lt;/em&gt;&lt;/p&gt;</code>.</p>
 * 
 *   <p>This method uses the browser's <code>innerHTML</code> property. Some browsers may not generate a DOM that exactly replicates the HTML source provided. For example, Internet Explorer prior to version 8 will convert all <code>href</code> properties on links to absolute URLs, and Internet Explorer prior to version 9 will not correctly handle HTML5 elements without the addition of a separate <a href="http://code.google.com/p/html5shiv/">compatibility layer</a>.</p>
 * 
 * 
 * @example
 * <p>Add some html to each div.</p>
 * <pre><code>$("div").html("<span class='red'>Hello <b>Again</b></span>");</code></pre>
 * @example
 * <p>Add some html to each div then immediately do further manipulations to the inserted html.</p>
 * <pre><code>
 * 
 *     $("div").html("<b>Wow!</b> Such excitement...");
 *     $("div b").append(document.createTextNode("!!!"))
 *               .css("color", "red");
 * 
 * </code></pre>
 * 
 * @param {Function} fn A function returning the HTML content to set. Receives the index position of the element in the set and the old HTML value as arguments. jQuery empties the element before calling the function; use the oldhtml argument to reference the previous content.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.html = function(fn) {return new jQuery();};

/**
 * Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.
 * 
 * <p>As the return value is a jQuery-wrapped array, it's very common to <code>get()</code> the returned object to work with a basic array.</p><p>The <code>.map()</code> method is particularly useful for getting or setting the value of a collection of elements. Consider a form with a set of checkboxes in it:</p>
 * <pre>
 * &lt;form method="post" action=""&gt;
 *   &lt;fieldset&gt;
 *     &lt;div&gt;
 *       &lt;label for="two"&gt;2&lt;/label&gt;
 *       &lt;input type="checkbox" value="2" id="two" name="number[]"&gt;
 *     &lt;/div&gt;
 *     &lt;div&gt;
 *       &lt;label for="four"&gt;4&lt;/label&gt;
 *       &lt;input type="checkbox" value="4" id="four" name="number[]"&gt;
 *     &lt;/div&gt;
 *     &lt;div&gt;
 *       &lt;label for="six"&gt;6&lt;/label&gt;
 *       &lt;input type="checkbox" value="6" id="six" name="number[]"&gt;
 *     &lt;/div&gt;
 *     &lt;div&gt;
 *       &lt;label for="eight"&gt;8&lt;/label&gt;
 *       &lt;input type="checkbox" value="8" id="eight" name="number[]"&gt;
 *     &lt;/div&gt;
 *   &lt;/fieldset&gt;
 * &lt;/form&gt;
 * </pre>
 * <p>We can get a comma-separated list of checkbox <code>ID</code>s:</p>
 * <pre>$(':checkbox').map(function() {
 *   return this.id;
 * }).get().join(',');</pre>
 * <p>The result of this call is the string, <code>"two,four,six,eight"</code>.</p>
 * <p>Within the callback function, <code>this</code> refers to the current DOM element for each iteration. The function can return an individual data item or an array of data items to be inserted into the resulting set. If an array is returned, the elements inside the array are inserted into the set. If the function returns <code>null</code> or <code>undefined</code>, no element will be inserted.</p>
 * 
 * @example
 * <p>Build a list of all the values within a form.</p>
 * <pre><code>
 *     $("p").append( $("input").map(function(){
 *       return $(this).val();
 *     }).get().join(", ") );
 * 
 * </code></pre>
 * @example
 * <p>A contrived example to show some functionality.</p>
 * <pre><code>
 * var mappedItems = $("li").map(function (index) {
 *   var replacement = $("<li>").text($(this).text()).get(0);
 *   if (index == 0) {
 *     / * make the first item all caps * /
 *     $(replacement).text($(replacement).text().toUpperCase());
 *   } else if (index == 1 || index == 3) {
 *     / * delete the second and fourth items * /
 *     replacement = null;
 *   } else if (index == 2) {
 *     / * make two of the third item and add some text * /
 *     replacement = [replacement,$("<li>").get(0)];
 *     $(replacement[0]).append("<b> - A</b>");
 *     $(replacement[1]).append("Extra <b> - B</b>");
 *   }
 * 
 *   / * replacement will be a dom element, null, 
 *      or an array of dom elements * /
 *   return replacement;
 * });
 * $("#results").append(mappedItems);
 * 
 * </code></pre>
 * @example
 * <p>Equalize the heights of the divs.</p>
 * <pre><code>
 * $.fn.equalizeHeights = function() {
 *   var maxHeight = this.map(function(i,e) {
 *     return $(e).height();
 *   }).get();
 *   
 *   return this.height( Math.max.apply(this, maxHeight) );
 * };
 * 
 * $('input').click(function(){
 *   $('div').equalizeHeights();
 * });
 * 
 * </code></pre>
 * 
 * @param {Function} callback A function object that will be invoked for each element in the current set.
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.map = function(callback) {return new jQuery();};

/**
 * Check the current matched set of elements against a selector, element, or jQuery object and return <code>true</code> if at least one of these elements matches the given arguments.
 * 
 * 
 * <p>Unlike other filtering methods, <code>.is()</code> does not create a new jQuery object. Instead, it allows you to test the contents of a jQuery object without modification. This is often useful inside callbacks, such as event handlers.</p>
 * <p>Suppose you have a list, with two of its items containing a child element:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li&gt;list &lt;strong&gt;item 1&lt;/strong&gt;&lt;/li&gt;
 *   &lt;li&gt;&lt;span&gt;list item 2&lt;/span&gt;&lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>You can attach a click handler to the &lt;ul&gt; element, and then limit the code to be triggered only when a list item itself, not one of its children, is clicked:</p>
 * <pre>$("ul").click(function(event) {
 *   var $target = $(event.target);
 *   if ( $target.is("li") ) {
 *     $target.css("background-color", "red");
 *   }
 * });</pre>
 * <p>Now, when the user clicks on the word "list" in the first item or anywhere in the third item, the clicked list item will be given a red background. However, when the user clicks on item 1 in the first item or anywhere in the second item, nothing will occur, because in those cases the target of the event would be <code>&lt;strong&gt;</code> or <code>&lt;span&gt;</code>, respectively.
 * </p>
 * <p>Be aware that for selector strings with positional selectors such as <code>:first</code>, <code>:gt()</code>, or <code>:even</code>, the positional filtering is done against the jQuery object passed to <code>.is()</code>, <em>not</em> against the containing document. So for the HTML shown above, an expression such as <code>$("li:first").is("li:last")</code> returns <code>true</code>, but <code>$("li:first-child").is("li:last-child")</code> returns <code>false</code>.</p>
 * 
 * <h4>Using a Function</h4>
 * <p>The second form of this method evaluates expressions related to elements based on a function rather than a selector. For each element, if the function returns <code>true</code>, <code>.is()</code> returns <code>true</code> as well. For example, given a somewhat more involved HTML snippet:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li&gt;&lt;strong&gt;list&lt;/strong&gt; item 1 - one strong tag&lt;/li&gt;
 *   &lt;li&gt;&lt;strong&gt;list&lt;/strong&gt; item &lt;strong&gt;2&lt;/strong&gt; -
 *     two &lt;span&gt;strong tags&lt;/span&gt;&lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 *   &lt;li&gt;list item 4&lt;/li&gt;
 *   &lt;li&gt;list item 5&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>You can attach a click handler to every <code>&lt;li&gt;</code> that evaluates the number of <code>&lt;strong&gt;</code> elements within the clicked <code>&lt;li&gt;</code> at that time like so:</p>
 * <pre>
 * $("li").click(function() {
 *   var $li = $(this),
 *     isWithTwo = $li.is(function() {
 *       return $('strong', this).length === 2;
 *     });
 *   if ( isWithTwo ) {
 *     $li.css("background-color", "green");
 *   } else {
 *     $li.css("background-color", "red");
 *   }
 * });
 * </pre>
 * 
 * 
 * @example
 * <p>Shows a few ways is() can be used inside an event handler.</p>
 * <pre><code>
 *   $("div").one('click', function () {
 *     if ($(this).is(":first-child")) {
 *       $("p").text("It's the first div.");
 *     } else if ($(this).is(".blue,.red")) {
 *       $("p").text("It's a blue or red div.");
 *     } else if ($(this).is(":contains('Peter')")) {
 *       $("p").text("It's Peter!");
 *     } else {
 *       $("p").html("It's nothing <em>special</em>.");
 *     }
 *     $("p").hide().slideDown("slow");
 *     $(this).css({"border-style": "inset", cursor:"default"});
 *   });
 * </code></pre>
 * @example
 * <p>Returns true, because the parent of the input is a form element.</p>
 * <pre><code>
 *   var isFormParent = $("input[type='checkbox']").parent().is("form");
 *   $("div").text("isFormParent = " + isFormParent);
 * </code></pre>
 * @example
 * <p>Returns false, because the parent of the input is a p element.</p>
 * <pre><code>
 *   var isFormParent = $("input[type='checkbox']").parent().is("form");
 *   $("div").text("isFormParent = " + isFormParent);
 * </code></pre>
 * @example
 * <p>Checks against an existing collection of alternating list elements. Blue, alternating list elements slide up while others turn red.</p>
 * <pre><code>
 *   var $alt = $("#browsers li:nth-child(2n)").css("background", "#00FFFF");
 *   $('li').click(function() {
 *     var $li = $(this);
 *     if ( $li.is( $alt ) ) {
 *       $li.slideUp();
 *     } else {
 *       $li.css("background", "red");
 *     }
 *   });
 * </code></pre>
 * @example
 * <p>An alternate way to achieve the above example using an element rather than a jQuery object. Checks against an existing collection of alternating list elements. Blue, alternating list elements slide up while others turn red.</p>
 * <pre><code>
 *   var $alt = $("#browsers li:nth-child(2n)").css("background", "#00FFFF");
 *   $('li').click(function() {
 *     if ( $alt.is( this ) ) {
 *       $(this).slideUp();
 *     } else {
 *       $(this).css("background", "red");
 *     }
 *   });
 * </code></pre>
 * 
 * @param {jQuery} jq An existing jQuery object to match the current set of elements against.
 * 
 * @since 1.6
 * @returns {Boolean}
**/
jQuery.prototype.is = function(jq) {return new Boolean();};

/**
 * Reduce the set of matched elements to those that match the selector or pass the function's test. 
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.filter()</code> method constructs a new jQuery object from a subset of the matching elements. The supplied selector is tested against each element; all elements matching the selector will be included in the result.</p>
 * <p>Consider a page with a simple list on it:</p>
 * &lt;ul&gt;
 *   &lt;li&gt;list item 1&lt;/li&gt;
 *   &lt;li&gt;list item 2&lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 *   &lt;li&gt;list item 4&lt;/li&gt;
 *   &lt;li&gt;list item 5&lt;/li&gt;
 *   &lt;li&gt;list item 6&lt;/li&gt;
 * &lt;/ul&gt;
 * <p>We can apply this method to the set of list items:</p>
 * <pre>
 *   $('li').filter(':even').css('background-color', 'red');
 * </pre>
 * <p>The result of this call is a red background for items 1, 3, and 5, as they match the selector (recall that <code>:even</code> and <code>:odd</code> use 0-based indexing).</p>
 * <h4 id="using-filter-function">Using a Filter Function</h4>
 * <p>The second form of this method allows us to filter elements against a function rather than a selector. For each element, if the function returns <code>true</code>, the element will be included in the filtered set; otherwise, it will be excluded. Suppose we have a somewhat more involved HTML snippet:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li&gt;&lt;strong&gt;list&lt;/strong&gt; item 1 -
 *     one strong tag&lt;/li&gt;
 *   &lt;li&gt;&lt;strong&gt;list&lt;/strong&gt; item &lt;strong&gt;2&lt;/strong&gt; -
 *     two &lt;span&gt;strong tags&lt;/span&gt;&lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 *   &lt;li&gt;list item 4&lt;/li&gt;
 *   &lt;li&gt;list item 5&lt;/li&gt;
 *   &lt;li&gt;list item 6&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>We can select the list items, then filter them based on their contents:</p>
 * <pre>
 * $('li').filter(function(index) {
 *   return $('strong', this).length == 1;
 * }).css('background-color', 'red');
 * </pre>
 * <p>This code will alter the first list item only, as it contains exactly one <code>&lt;strong&gt;</code> tag. Within the filter function, <code>this</code> refers to each DOM element in turn. The parameter passed to the function tells us the index of that DOM element within the set matched by the jQuery object.</p>
 * <p>We can also take advantage of the <code>index</code> passed through the function, which indicates the 0-based position of the element within the unfiltered set of matched elements:</p>
 * <pre>
 * $('li').filter(function(index) {
 *   return index % 3 == 2;
 * }).css('background-color', 'red');
 * </pre>
 * <p>This alteration to the code will cause the third and sixth list items to be highlighted, as it uses the modulus operator (<code>%</code>) to select every item with an <code>index</code> value that, when divided by 3, has a remainder of <code>2</code>.</p>
 * 
 * @example
 * <p>Change the color of all divs; then add a border to those with a "middle" class.</p>
 * <pre><code>
 * 
 *     $("div").css("background", "#c8ebcc")
 *             .filter(".middle")
 *             .css("border-color", "red");
 * </code></pre>
 * @example
 * <p>Change the color of all divs; then add a border to the second one (index == 1) and the div with an id of "fourth."</p>
 * <pre><code>
 *     $("div").css("background", "#b4b0da")
 *             .filter(function (index) {
 *                   return index == 1 || $(this).attr("id") == "fourth";
 *                 })
 *             .css("border", "3px double red");
 * 
 * </code></pre>
 * @example
 * <p>Select all divs and filter the selection with a DOM element, keeping only the one with an id of "unique".</p>
 * <pre><code>$("div").filter( document.getElementById("unique") )</code></pre>
 * @example
 * <p>Select all divs and filter the selection with a jQuery object, keeping only the one with an id of "unique".</p>
 * <pre><code>
 * $("div").filter( $("#unique") )</code></pre>
 * 
 * @param {Element} element An element to match the current set of elements against.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.filter = function(element) {return new jQuery();};

/**
 * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
 * 
 * <p>This method takes one or more class names as its parameter. In the first version, if an element in the matched set of elements already has the class, then it is removed; if an element does not have the class, then it is added. For example, we can apply <code>.toggleClass()</code> to a simple <code>&lt;div&gt;</code>: </p>
 *       <pre>&lt;div class="tumble"&gt;Some text.&lt;/div&gt;
 *       </pre>
 *       <p>The first time we apply <code>$('div.tumble').toggleClass('bounce')</code>, we get the following:</p>
 *       <pre>&lt;div class="tumble bounce"&gt;Some text.&lt;/div&gt;
 *       </pre>
 *       <p>The second time we apply <code>$('div.tumble').toggleClass('bounce')</code>, the <code>&lt;div&gt;</code> class is returned to the single <code>tumble</code> value:</p>
 *       <pre>&lt;div class="tumble"&gt;Some text.&lt;/div&gt;</pre>
 *       <p>Applying <code>.toggleClass('bounce spin')</code> to the same <code>&lt;div&gt;</code> alternates between <code>&lt;div class="tumble bounce spin"&gt;</code> and <code>&lt;div class="tumble"&gt;</code>.</p>
 *       <p>The second version of <code>.toggleClass()</code> uses the second parameter for determining whether the class should be added or removed. If this parameter's value is <code>true</code>, then the class is added; if <code>false</code>, the class is removed. In essence, the statement:</p>
 *   <pre>$('#foo').toggleClass(className, addOrRemove);</pre>
 *   <p>is equivalent to:</p>
 *   <pre>if (addOrRemove) {
 *     $('#foo').addClass(className);
 *   }
 *   else {
 *     $('#foo').removeClass(className);
 *   }
 *   </pre>
 *   <p>As of jQuery 1.4, the <code>.toggleClass()</code> method allows us to indicate the class name to be toggled by passing in a function.</p>
 * <pre>$('div.foo').toggleClass(function() {
 *   if ($(this).parent().is('.bar')) {
 *     return 'happy';
 *   } else {
 *     return 'sad';
 *   }
 * });</pre>
 *   <p>This example will toggle the <code>happy</code> class for <code>&lt;div class="foo"&gt;</code> elements if their parent element has a class of <code>bar</code>; otherwise, it will toggle the <code>sad</code> class.</p>
 *   
 *       
 * @example
 * <p>Toggle the class 'highlight' when a paragraph is clicked.</p>
 * <pre><code>
 *     $("p").click(function () {
 *       $(this).toggleClass("highlight");
 *     });
 * </code></pre>
 * @example
 * <p>Add the "highlight" class to the clicked paragraph on every third click of that paragraph, remove it every first and second click.</p>
 * <pre><code>
 * var count = 0;
 * $("p").each(function() {
 *   var $thisParagraph = $(this);
 *   var count = 0;
 *   $thisParagraph.click(function() {
 *     count++;
 *     $thisParagraph.find("span").text('clicks: ' + count);
 *     $thisParagraph.toggleClass("highlight", count % 3 == 0);
 *   });
 * });
 * 
 * </code></pre>
 * 
 * @param {Function} fn A function that returns class names to be toggled in the class attribute of each element in the matched set. Receives the index position of the element in the set and the old class value as arguments.
 * @param {Boolean} _switch A boolean value to determine whether the class should be added or removed.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.toggleClass = function(fn, _switch) {return new jQuery();};

/**
 * Set one or more attributes for the set of matched elements.
 * 
 * <p>The <code>.attr()</code> method is a convenient way to set the value of attributes—especially when setting multiple attributes or using values returned by a function. Consider the following image:</p>
 * <pre>&lt;img id="greatphoto" src="brush-seller.jpg" alt="brush seller" /&gt;</pre>
 *     
 *     <h4 id="setting-simple-attr">Setting a simple attribute</h4>
 *     <p>To change the <code>alt</code> attribute, simply pass the name of the attribute and its new value to the <code>.attr()</code> method:</p>
 *     <pre>$('#greatphoto').attr('alt', 'Beijing Brush Seller');</pre>
 *     <p><em>Add</em> an attribute the same way:</p>
 * <pre>$('#greatphoto')
 * .attr('title', 'Photo by Kelly Clark');</pre>
 * 
 *     <h4 id="setting-several-attrs">Setting several attributes at once</h4>
 *     <p>To change the <code>alt</code> attribute and add the <code>title</code> attribute at the same time, pass both sets of names and values into the method at once using a map (JavaScript object literal). Each key-value pair in the map adds or modifies an attribute:</p>
 * <pre>$('#greatphoto').attr({
 *   alt: 'Beijing Brush Seller',
 *   title: 'photo by Kelly Clark'
 * });</pre>
 *     <p>When setting multiple attributes, the quotes around attribute names are optional.</p>
 *     <p><strong>WARNING</strong>: When setting the 'class' attribute, you must always use quotes!</p>
 *     <p><strong>Note</strong>: Internet Explorer does not allow you to change the <code>type</code> attribute of an <code>&lt;input&gt;</code> or <code>&lt;button&gt;</code> element. </p>
 *     <h4 id="computed-attr-values">Computed attribute values</h4>
 *     <p>By using a function to set attributes, you can compute the value based on other properties of the element. For example, to concatenate a new value with an existing value:</p>
 * <pre>$('#greatphoto').attr('title', function(i, val) {
 *   return val + ' - photo by Kelly Clark'
 * });</pre>
 *     <p>This use of a function to compute attribute values can be particularly useful when modifying the attributes of multiple elements at once.</p><p><strong>Note: </strong>If nothing is returned in the setter function (ie. <code>function(index, attr){})</code>, the current value of the attribute is returned as it acts as a getter when the value is undefined. Effectively, no changes are made if the setter function does not return something.</p>
 * @example
 * <p>Set some attributes for all &lt;img&gt;s in the page.</p>
 * <pre><code>
 * $("img").attr({ 
 *   src: "/images/hat.gif",
 *   title: "jQuery",
 *   alt: "jQuery Logo"
 * });
 * $("div").text($("img").attr("alt"));
 * </code></pre>
 * @example
 * <p>Disable buttons greater than the 1st button.</p>
 * <pre><code>
 * $("button:gt(1)").attr("disabled","disabled");
 * </code></pre>
 * @example
 * <p>Set the id for divs based on the position in the page.</p>
 * <pre><code>
 * $("div").attr("id", function (arr) {
 *   return "div-id" + arr;
 * })
 * .each(function () {
 *   $("span", this).html("(ID = '<b>" + this.id + "</b>')");
 * });
 * </code></pre>
 * @example
 * <p>Set the src attribute from title attribute on the image.</p>
 * <pre><code>
 * $("img").attr("src", function() { 
 *     return "/images/" + this.title; 
 * });
 * </code></pre>
 * 
 * @param {Map} map A map of attribute-value pairs to set.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.attr = function(map) {return new jQuery();};