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
 * @since 1.4
 * @returns {Object}
**/
jQuery.prototype.data = function() {return new Object();};