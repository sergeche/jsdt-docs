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
 * @param {String} propertyName The name of the property to set.
 * @param {Function} fn A function returning the value to set. Receives the index position of the element in the set and the old property value as arguments. Within the function, the keyword <code>this</code> refers to the current element.
 * 
 * @since 1.6
 * @returns {jQuery}
**/
jQuery.prototype.prop = function(propertyName, fn) {return new jQuery();};

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
 * @param {Map} events A map of one or more event types and previously bound functions to unbind from them.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.undelegate = function(selector, events) {return new jQuery();};

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
 * @param {String} key A string naming the piece of data to set.
 * @param {Object} value The new data value; it can be any Javascript type including Array or Object.
 * 
 * @since 1.2.3
 * @returns {jQuery}
**/
jQuery.prototype.data = function(key, value) {return new jQuery();};

/**
 * Show the queue of functions to be executed on the matched elements.
 * 
 * <longdesc/>
 * @example
 * <p>Show the length of the queue.</p>
 * <pre><code>$("#show").click(function () {
 *       var n = $("div").queue("fx");
 *       $("p").text("Queue length is: " + n.length);
 *     });
 *     function runIt() {
 *       $("div").show("slow");
 *       $("div").animate({left:'+=200'},2000);
 *       $("div").slideToggle(1000);
 *       $("div").slideToggle("fast");
 *       $("div").animate({left:'-=200'},1500);
 *       $("div").hide("slow");
 *       $("div").show(1200);
 *       $("div").slideUp("normal", runIt);
 *     }
 *     runIt();</code></pre>
 * 
 * @param {String} queueName A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * 
 * @since 1.2
 * @returns {Array}
**/
jQuery.prototype.queue = function(queueName) {return new Array();};

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
 * @param {Element} element An element to match elements against.
 * 
 * @since 1.6
 * @returns {jQuery}
**/
jQuery.prototype.closest = function(element) {return new jQuery();};

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
 * @param {jQuery} jq An existing jQuery object to add to the set of matched elements.
 * 
 * @since 1.3.2
 * @returns {jQuery}
**/
jQuery.prototype.add = function(jq) {return new jQuery();};

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
 * @param {Boolean} showOrHide A Boolean indicating whether to show or hide the elements.
 * 
 * @since 1.3
 * @returns {jQuery}
**/
jQuery.prototype.toggle = function(showOrHide) {return new jQuery();};

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
 * @param {Map} map A map of property-value pairs to set.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.css = function(map) {return new jQuery();};

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
 * @param {Element} element An element to match the current set of elements against.
 * 
 * @since 1.6
 * @returns {Boolean}
**/
jQuery.prototype.is = function(element) {return new Boolean();};

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
 * @param {jQuery} jq An existing jQuery object to match the current set of elements against.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.filter = function(jq) {return new jQuery();};

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
 * @param {String} attributeName The name of the attribute to set.
 * @param {Function} fn A function returning the value to set. <code>this</code> is the current element. Receives the index position of the element in the set and the old attribute value as arguments.
 * 
 * @since 1.1
 * @returns {jQuery}
**/
jQuery.prototype.attr = function(attributeName, fn) {return new jQuery();};