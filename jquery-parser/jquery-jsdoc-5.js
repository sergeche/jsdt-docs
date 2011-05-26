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