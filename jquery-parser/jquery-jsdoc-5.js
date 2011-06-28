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