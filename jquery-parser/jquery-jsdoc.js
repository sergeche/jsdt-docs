/**
 * @constructor
 * @type jQuery
 */
function jQuery() {}
jQuery.prototype = new Array;

jQuery.Deferred = function() {
	return new __jQueryDeferred;
};

/**
 * @constructor
 */
function __jQueryDeferred() {}
__jQueryDeferred.prototype = new Object;

/**
 * @constructor
 */
function __jQueryPromise() {}
__jQueryPromise.prototype = new Object;

/**
 * @constructor
 */
function __jQueryEvent() {}
__jQueryEvent.prototype = new Event;

/** 
 * @returns {jQuery} 
 */
function $(selector) {
	return new jQuery;
}

$.prototype = new jQuery;

/**
 *  Utility method to filter and/or chain Deferreds.  
 * 
 * 
 *     <p>The <code>deferred.pipe()</code> method returns a new promise that filters the status and values of a deferred through a function.  The <code>doneFilter</code> and <code>failFilter</code> functions filter the original deferred's resolved / rejected status and values.  These filter functions can return a new value to be passed along to the piped promise's <code>done()</code> or <code>fail()</code> callbacks, or they can return another observable object (Deferred, Promise, etc) which will pass its resolved / rejected status and values to the piped promise's callbacks. If the filter function used is <code>null</code>, or not specified, the piped promise will be resolved or rejected with the same values as the original.</p>
 * 
 * @example
 * <p>Filter resolve value:</p>
 * <pre><code>
 * var defer = $.Deferred(),
 *     filtered = defer.pipe(function( value ) {
 *       return value * 2;
 *     });
 * 
 * defer.resolve( 5 );
 * filtered.done(function( value ) {
 *   alert( "Value is ( 2*5 = ) 10: " + value );
 * });
 * </code></pre>
 * @example
 * <p>Filter reject value:</p>
 * <pre><code>
 * var defer = $.Deferred(),
 *     filtered = defer.pipe( null, function( value ) {
 *       return value * 3;
 *     });
 * 
 * defer.reject( 6 );
 * filtered.fail(function( value ) {
 *   alert( "Value is ( 3*6 = ) 18: " + value );
 * });
 * </code></pre>
 * @example
 * <p>Chain tasks:</p>
 * <pre><code>
 * var request = $.ajax( url, { dataType: "json" } ),
 *     chained = request.pipe(function( data ) {
 *       return $.ajax( url2, { data: { user: data.userId } } );
 *     });
 * 
 * chained.done(function( data ) {
 *   // data retrieved from url2 as provided by the first request
 * });
 * 
 * </code></pre>
 * 
 * @param {Function} doneFilter 
 *         An optional function that is called when the Deferred is resolved.
 *       
 * @param {Function} failFilter 
 *         An optional function that is called when the Deferred is rejected.
 *       
 * 
 * @since 1.6
 * @returns {__jQueryPromise}
**/
__jQueryDeferred.prototype.pipe = function(doneFilter, failFilter) {return new __jQueryPromise();};

/**
 *  Add handlers to be called when the Deferred object is either resolved or rejected. 
 * 
 *  <p>The argument can be either a single function or an array of functions. When the Deferred is resolved or rejected, the <code>alwaysCallbacks</code> are called. Since <code>deferred.always()</code> returns the Deferred object, other methods of the Deferred object can be chained to this one, including additional <code>.always()</code> methods. When the Deferred is resolved or rejected, callbacks are executed in the order they were added, using the arguments provided to the <a href="/deferred.resolve/"><code>resolve</code></a>, <a href="/deferred.reject/"><code>reject</code></a>, <a href="/deferred.resolveWith/"><code>resolveWith</code></a> or <a href="/deferred.rejectWith/"><code>rejectWith</code></a> method calls. For more information, see the documentation for <a href="/category/deferred-object/">Deferred object</a>.</p>  
 * @example
 * <p>Since the <a href="http://api.jquery.com/jQuery.get/"><code>jQuery.get()</code></a> method returns a <code>jqXHR</code> object, which is derived from a Deferred object, we can attach a callback for both success and error using the <code>deferred.always()</code> method.</p>
 * <pre><code>
 * $.get("test.php").always( function() { 
 *   alert("$.get completed with success or error callback arguments"); 
 * } );
 * </code></pre>
 * 
 * @param {Function} alwaysCallbacks 
 *         A function, or array of functions, that is called when the Deferred is resolved or rejected.
 *       
 * 
 * @since 1.6
 * @returns {Deferred}
**/
__jQueryDeferred.prototype.always = function(alwaysCallbacks) {return new Deferred();};

/**
 *  Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished. 
 * 
 *  <p>The <code>.promise()</code> method returns a dynamically generated Promise that is resolved once all actions of a certain type bound to the collection, queued or not, have ended.</p>
 *   <p> By default, <code>type</code> is <code>"fx"</code>, which means the returned Promise is resolved when all animations of the selected elements have completed.</p>
 *   <p> Resolve context and sole argument is the collection onto which <code>.promise()</code> has been called. </p>
 *   <p> If <code>target</code> is provided, <code>.promise()</code> will attach the methods onto it and then return this object rather than create a new one. This can be useful to attach the Promise behavior to an object that already exists.</p>  
 * @example
 * <p>Using <code>promise</code> on a collection with no active animation returns a resolved Promise:</p>
 * <pre><code>
 * var div = $( "<div />" );
 * 
 * div.promise().done(function( arg1 ) {
 *   // will fire right away and alert "true"
 *   alert( this === div && arg1 === div );
 * });
 * </code></pre>
 * @example
 * <p>Resolve the returned Promise when all animations have ended (including those initiated in the animation callback or added later on):</p>
 * <pre><code>
 * $("button").bind( "click", function() {
 *   $("p").append( "Started...");
 *   
 *   $("div").each(function( i ) {
 *     $( this ).fadeIn().fadeOut( 1000 * (i+1) );
 *   });
 * 
 *   $( "div" ).promise().done(function() {
 *     $( "p" ).append( " Finished! " );
 *   });
 * });
 * </code></pre>
 * @example
 * <p>Resolve the returned Promise using a <code>$.when()</code> statement (the <code>.promise()</code> method makes it possible to do this with jQuery collections):</p>
 * <pre><code>
 * var effect = function() {
 *   return $("div").fadeIn(800).delay(1200).fadeOut();
 * };
 * 
 * $("button").bind( "click", function() {
 *   $("p").append( " Started... ");
 * 
 *   $.when( effect() ).done(function() {
 *     $("p").append(" Finished! ");
 *   });
 * });
 * 
 * </code></pre>
 * 
 * @param {String} type  The type of queue that needs to be observed. 
 * @param {Object} target Object onto which the promise methods have to be attached
 * 
 * @since 1.6
 * @returns {__jQueryPromise}
**/
jQuery.prototype.promise = function(type, target) {return new __jQueryPromise();};

/**
 * Remove a property for the set of matched elements.
 * 
 * <p>The <code>.removeProp()</code> method removes properties set by the <code><a href="http://api.jquery.com/prop">.prop()</a></code> method.</p>
 * <p>With some built-in properties of a DOM element or <code>window</code> object, browsers may generate an error if an attempt is made to remove the property. jQuery first assigns the value <code>undefined</code> to the property and ignores any error the browser generates. In general, it is only necessary to remove custom properties that have been set on an object, and not built-in properties.</p>
 * 
 * @example
 * <p>Set a numeric property on a paragraph and then remove it. </p>
 * <pre><code>
 * var $para = $("p");
 * $para.prop("luggageCode", 1234);
 * $para.append("The secret luggage code is: ", String($para.prop("luggageCode")), ". ");
 * $para.removeProp("luggageCode");
 * $para.append("Now the secret luggage code is: ", String($para.prop("luggageCode")), ". ");
 * 
 * </code></pre>
 * 
 * @param {String} propertyName The name of the property to set.
 * @param {String} value A value to set for the property.
 * 
 * @since 1.6
 * @returns {jQuery}
**/
jQuery.prototype.removeProp = function(propertyName, value) {return new jQuery();};

/**
 * Get the value of a property for the first element in the set of matched elements.
 * 
 * <p>The <code>.prop()</code> method gets the property value for only the <em>first</em> element in the matched set. It returns <code>undefined</code> for the value of a property that has not been set, or if the matched set has no elements. To get the value for each element individually, use a looping construct such as jQuery's <code>.each()</code> or <code>.map()</code> method.</p>
 *     <p>The difference between <em>attributes</em> and <em>properties</em> can be important in specific situations. <strong>Before jQuery 1.6</strong>, the <code><a href="http://api.jquery.com/attr/">.attr()</a></code> method sometimes took property values into account when retrieving some attributes, which could cause inconsistent behavior. <strong>As of jQuery 1.6</strong>, the <code>.prop()</code> method provides a way to explicitly retrieve property values, while <code>.attr()</code> only retrieves attributes.</p>
 * <p>For example, consider a DOM element defined by the HTML markup <code>&lt;input type="checkbox" checked="checked" /&gt;</code>, and assume it is in a JavaScript variable named <code>elem</code>:</p>
 * <table class="listing">
 *  <tr>
 *   <th><code>elem.checked</code></th>
 *   <td><code>true</code> (Boolean)</td>
 *  </tr>
 *  <tr>
 *   <th><code>$(elem).prop("checked")</code></th>
 *   <td><code>true</code> (Boolean)</td>
 *  </tr>
 * <tr>
 *   <th><code>elem.getAttribute("checked")</code></th>
 *   <td><code>"checked"</code> (String)</td>
 *  </tr>
 *  <tr>
 *   <th><code>$(elem).attr("checked")</code><em>(1.6+)</em></th>
 *   <td><code>"checked"</code> (String)</td>
 *  </tr>
 *  <tr>
 *   <th><code>$(elem).attr("checked")</code><em>(pre-1.6)</em></th>
 *   <td><code>true</code> (Boolean)</td>
 *  </tr>
 * </table>
 * <p>
 * According to the <a href="http://www.w3.org/TR/html401/interact/forms.html#h-17.4">W3C forms specification</a>, the <code>checked</code> attribute is a <em><a href="http://www.w3.org/TR/html4/intro/sgmltut.html#h-3.3.4.2">boolean attribute</a></em>, which means the corresponding property is true if the attribute is present at all—even if, for example, the attribute has no value or an empty string value. The preferred cross-browser-compatible way to determine if a checkbox is checked is to check for a "truthy" value on the element's property using one of the following:</p>
 *   <ul>
 *     <li><code>if ( elem.checked )</code></li>
 *     <li><code>if ( $(elem).prop("checked") )</code></li>
 *     <li><code>if ( $(elem).is(":checked") )</code></li>
 *   </ul>
 * <p>The code <code>if ( $(elem).attr("checked") )</code>, on the other hand,  will retrieve the <em>attribute</em>, which does not change as the checkbox is checked and unchecked. It is meant only to store the default or initial value of the checked property.</p>
 *   
 * @example
 * <p>Display the checked property and attribute of a checkbox as it changes.</p>
 * <pre><code>
 * $("input").change(function() {
 *   var $input = $(this);
 *   $("p").html(".attr('checked'): <b>" + $input.attr('checked') + "</b><br>"
 *               + ".prop('checked'): <b>" + $input.prop('checked') + "</b><br>"
 *               + ".is(':checked'): <b>" + $input.is(':checked') ) + "</b>";
 * }).change();
 * </code></pre>
 * 
 * @param {String} propertyName The name of the property to get.
 * 
 * @since 1.6
 * @returns {String}
**/
jQuery.prototype.prop = function(propertyName) {return "";};

/**
 * Set one or more properties for the set of matched elements.
 * 
 * <p>The <code>.prop()</code> method is a convenient way to set the value of properties—especially when setting multiple properties or using values returned by a function. Properties generally affect the dynamic state of a DOM element without changing the serialized HTML attribute. Examples include the <code>value</code> property of input elements, the <code>disabled</code> property of inputs and buttons, or the <code>checked</code> property of a checkbox.</p>
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
 * @param {String} value A value to set for the property.
 * 
 * @since 1.6
 * @returns {jQuery}
**/
jQuery.prototype.prop = function(propertyName, value) {return new jQuery();};

/**
 * Handle custom Ajax options or modify existing options before each request is sent and before they are processed by <code>$.ajax()</code>.
 * 
 * 
 * 
 * <p>A typical prefilter registration using <code>$.ajaxPrefilter()</code> looks like this:</p>
 * 
 * <pre>
 * $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
 *   // Modify options, control originalOptions, store jqXHR, etc
 * });
 * </pre>
 * 
 * <p>where:</p>
 * 
 * <ul>
 * <li><code>options</code> are the request options</li>
 * <li><code>originalOptions</code> are the options as provided to the ajax method, unmodified and, thus, without defaults from <code>ajaxSettings</code></li>
 * <li><code>jqXHR</code> is the jqXHR object of the request</li>
 * </ul>
 * 
 * <p>Prefilters are a perfect fit when custom options need to be handled.  Given the following code, for example, a call to <code>$.ajax()</code> would automatically abort a request to the same URL if the custom <code>abortOnRetry</code> option is set to <code>true</code>:</p>
 * 
 * <pre>
 * var currentRequests = {};
 * 
 * $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
 *   if ( options.abortOnRetry ) {
 *     if ( currentRequests[ options.url ] ) {
 *       currentRequests[ options.url ].abort();
 *     }
 *     currentRequests[ options.url ] = jqXHR;
 *   }
 * });
 * </pre>
 * 
 * <p>Prefilters can also be used to modify existing options. For example, the following proxies cross-domain requests through http://mydomain.net/proxy/:</p>
 * 
 * <pre>
 * $.ajaxPrefilter( function( options ) {
 *   if ( options.crossDomain ) {
 *     options.url = "http://mydomain.net/proxy/" + encodeURIComponent( options.url );
 *     options.crossDomain = false;
 *   }
 * });
 * </pre>
 * 
 * <p>If the optional <code>dataTypes</code> argument is supplied, the prefilter will be only be applied to requests with the indicated dataTypes. For example, the following only applies the given prefilter to JSON and script requests:</p>
 * 
 * <pre>
 * $.ajaxPrefilter( "json script", function( options, originalOptions, jqXHR ) {
 *   // Modify options, control originalOptions, store jqXHR, etc
 * });
 * </pre>
 * 
 * <p>The <code>$.ajaxPrefilter()</code> method can also redirect a request to another dataType by returning that dataType. For example, the following sets a request as "script" if the URL has some specific properties defined in a custom <code>isActuallyScript()</code> function:</p>
 * 
 * <pre>
 * $.ajaxPrefilter(function( options ) {
 *   if ( isActuallyScript( options.url ) ) {
 *     return "script";
 *   }
 * });
 * </pre>
 * 
 * <p>This would ensure not only that the request is considered "script" but also that all the prefilters specifically attached to the script dataType would be applied to it.</p>
 *   
 * @param {String} dataTypes An optional string containing one or more space-separated dataTypes
 * @param {Function} handler A handler to set default values for future Ajax requests.
 * 
 * @since 1.5
 * @returns {undefined}
**/
jQuery.ajaxPrefilter = function(dataTypes, handler) {};

/**
 * Holds or releases the execution of jQuery's ready event.
 * 
 * 
 * <p>The <code>$.holdReady()</code> method allows the caller to delay jQuery's ready event. This advanced feature would typically be used by dynamic script loaders that want to load additional JavaScript such as jQuery plugins before allowing the ready event to occur, even though the DOM may be ready. This method must be called early in the document, such as in the <code>&lt;head&gt;</code> immediately after the jQuery script tag. Calling this method after the ready event has already fired will have no effect. </p>
 * <p>To delay the ready event, first call <code>$.holdReady(true)</code>. When the ready event should be released to execute, call <code>$.holdReady(false)</code>. Note that multiple holds can be put on the ready event, one for each <code>$.holdReady(true)</code> call. The ready event will not actually fire until all holds have been released with a corresponding <code>$.holdReady(false)</code> <em>and</em> the normal document ready conditions are met. (See <a href="http://api.jquery.com/ready/"><code>ready</code></a> for more information.)</p>
 * 
 * @example
 * <p>Delay the ready event until a custom plugin has loaded.</p>
 * <pre><code>
 * $.holdReady(true);
 * $.getScript("myplugin.js", function() {
 *      $.holdReady(false);
 * });
 * </code></pre>
 * 
 * @param {Boolean} hold Indicates whether the ready hold is being requested or released
 * 
 * @since 1.6
 * @returns {Boolean}
**/
jQuery.holdReady = function(hold) {return new Boolean();};

/**
 * Determine whether an element has any jQuery data associated with it.
 * 
 * <p>The <code>jQuery.hasData()</code> method provides a way to determine if an element currently has any values that were set using <code><a href="/jQuery.data">jQuery.data()</a></code>. If no data is associated with an element (there is no data object at all or the data object is empty), the method returns <code>false</code>; otherwise it returns <code>true</code>.</p>
 * <p>The primary advantage of <code>jQuery.hasData(element)</code> is that it does not create and associate a data object with the element if none currently exists. In contrast, <code>jQuery.data(element)</code> always returns a data object to the caller, creating one if no data object previously existed.
 * </p>
 * 
 * @example
 * <p>Set data on an element and see the results of hasData.</p>
 * <pre><code>
 * $(function(){
 *   var $p = jQuery("p"), p = $p[0];
 *   $p.append(jQuery.hasData(p)+" "); / * false * /
 *   jQuery.data(p, "testing", 123);
 *   $p.append(jQuery.hasData(p)+" "); / * true* /
 *   jQuery.removeData(p, "testing");
 *   $p.append(jQuery.hasData(p)+" "); / * false * /
 * });
 * </code></pre>
 * 
 * @param {Element} element A DOM element to be checked for data.
 * 
 * @since 1.5
 * @returns {Boolean}
**/
jQuery.hasData = function(element) {return new Boolean();};

/**
 * Return a number representing the current time.
 * 
 * 
 *     <p>The <code>$.now()</code> method is a shorthand for the number returned by the expression <code>(new Date).getTime()</code>.</p>
 *   
 * @since 1.4.3
 * @returns {Number}
**/
jQuery.now = function() {return 0;};

/**
 * A string containing the jQuery version number.
 * @example
 * <p>Determine if an object is a jQuery object</p>
 * <pre><code>
 * var a = { what: "A regular JS object" },
 *     b = $('body');
 *      
 * if ( a.jquery ) { // falsy, since it's undefined
 *     alert(' a is a jQuery object! ');    
 * }
 * 
 * if ( b.jquery ) { // truthy, since it's a string
 *     alert(' b is a jQuery object! ');
 * }
 * </code></pre>
 * @example
 * <p>Get the current version of jQuery running on the page</p>
 * <pre><code>
 * alert( 'You are running jQuery version: ' + $.fn.jquery );
 * </code></pre>
 * 
 * @since 1.0
 * @type String
**/
jQuery.prototype.jquery = "";

/**
 *  Return a Deferred's Promise object. 
 * 
 *  <p>The <code>deferred.promise()</code> method allows an asynchronous function to prevent other code from interfering with the progress or status of its internal request. The Promise exposes only the Deferred methods needed to attach additional handlers or determine the state (<code>then</code>, <code>done</code>, <code>fail</code>, <code>isResolved</code>, and <code>isRejected</code>), but not ones that change the state (<code>resolve</code>, <code>reject</code>, <code>resolveWith</code>, and <code>rejectWith</code>). <strong>As of jQuery 1.6</strong>, the Promise also exposes the <code>always</code> and <code>pipe</code> Deferred methods.</p>
 * 
 * <p>If <code>target</code> is provided, <code>deferred.promise()</code> will attach the methods onto it and then return this object rather than create a new one. This can be useful to attach the Promise behavior to an object that already exists.</p>
 * 
 * <p>If you are creating a Deferred, keep a reference to the Deferred so that it can be resolved or rejected at some point. Return <em>only</em> the Promise object via <code>deferred.promise()</code> so other code can register callbacks or inspect the current state.</p>
 * <p>For more information, see the documentation for <a href="/category/deferred-object/">Deferred object</a>.</p>  
 * 
 * @example
 * <p>Create a Deferred and set two timer-based functions to either resolve or reject the Deferred after a random interval. Whichever one fires first "wins" and will call one of the callbacks. The second timeout has no effect since the Deferred is already complete (in a resolved or rejected state) from the first timeout action.</p>
 * <pre><code>// Create a Deferred and return its Promise
 * function asyncEvent(){
 *     var dfd = new jQuery.Deferred();
 *     setTimeout(function(){
 *         dfd.resolve("hurray");
 *     }, Math.floor(Math.random()*1500));
 *     setTimeout(function(){
 *         dfd.reject("sorry");
 *     }, Math.floor(Math.random()*1500));
 *     return dfd.promise();
 * }
 * 
 * // Attach a done and fail handler for the asyncEvent
 * $.when( asyncEvent() ).then(
 *     function(status){
 *         alert( status+', things are going well' );
 *     },
 *     function(status){
 *         alert( status+', you fail this time' );
 *     }
 * );
 * </code></pre>
 * @example
 * <p>Use the target argument to promote an existing object to a Promise:</p>
 * <pre><code>
 * // Existing object
 * var obj = {
 *   hello: function( name ) {
 *     alert( "Hello " + name );
 *   }
 * },
 * // Create a Deferred
 * defer = $.Deferred();
 * 
 * // Set object as a promise
 * defer.promise( obj );
 * 
 * // Resolve the deferred
 * defer.resolve( "John" );
 * 
 * // Use the object as a Promise
 * obj.done(function( name ) {
 *   this.hello( name ); // will alert "Hello John"
 * }).hello( "Karl" ); // will alert "Hello Karl"
 * </code></pre>
 * 
 * @param {Object} target Object onto which the promise methods have to be attached
 * 
 * @since 1.5
 * @returns {__jQueryPromise}
**/
__jQueryDeferred.prototype.promise = function(target) {return new __jQueryPromise();};

/**
 * Provides a way to hook directly into jQuery to override how particular CSS properties are retrieved or set. Amongst other uses, cssHooks can be used to create custom, browser-normalized properties for CSS3 features such as box-shadows and gradients.
 * @example
 * <p>Defining a new cssHook: defining new cssHooks is very straight-forward and the skeleton template below can be used as a guide to creating your own. </p>
 * <pre><code> (function($){   
 * //first, check to see if cssHooks are supported
 *     if ( !$.cssHooks ){
 *         //if not, output an error message
 *         alert("jQuery 1.4.3 or above is required for this plugin to work");
 *         return;
 *     }
 *     
 * $.cssHooks['someCSSProperty'] = { 
 *         get: function(elem, computed, extra){
 *             //handle getting the CSS property
 *         },
 *         set: function(elem, value){
 *             //handle setting the CSS value 
 *         }
 * };
 * })(jQuery);
 *   </code></pre>
 * @example
 * <p>Normalizing vendor-specific CSS properties: as mentioned, cssHooks are commonly used for normalizing vendor-specific CSS3 properties. In order to effectively cater for this, it is necessary to check that the browser supports the property before we can normalize it. We will be demonstrating this with the border-radius feature.</p>
 * <pre><code>
 * //check if we can access the border radius on the element's style object. 
 * //A value of "" or "undefined" will be returned if the property is not 
 * //supported
 * 
 * var div = document.createElement( "div" );
 * $.support.borderRadius =
 * div.style.WebkitBorderRadius === ''? 'WebkitBorderRadius' :
 * (div.style.MozBorderRadius === ''? 'MozBorderRadius' : 
 * (div.style.borderRadius === ''? 'borderRadius' : false));</code></pre>
 * @example
 * <p>If the above test is now integrated into the the skeleton template provided in the first example, a complete cssHook can be defined as follows:</p>
 * <pre><code>
 * (function($){
 *     if ( !$.cssHooks ){
 *         alert("jQuery 1.4.3+ is needed for this plugin to work");
 *         return;
 *     }
 *     var div = document.createElement( "div" );
 *     $.support.borderRadius =
 *     div.style.WebkitBorderRadius === ''? 'WebkitBorderRadius' :
 *     (div.style.MozBorderRadius === ''? 'MozBorderRadius' : 
 *     (div.style.borderRadius === ''? 'borderRadius'  : false));
 *     
 *     //only set cssHooks for browsers that don't support "borderRadius" natively
 *     if ( $.support.borderRadius && $.support.borderRadius !== "borderRadius" ){
 *         $.cssHook.borderRadius = {
 *            get: function( elem, computed, extra ){
 *                 return $.css( elem, $.support.borderRadius );
 *            },
 *            set: function( elem, value){
 *                 elem.style[$.support.borderRadius] = value;
 *            }
 *         };
 *     }    
 * })(jQuery);</code></pre>
 * @example
 * <p>You can then set the border radius (in a supported browser) as follows:</p>
 * <pre><code> $("#element").css("border-radius", "20px");</code></pre>
 * @example
 * <p>Creating a cssHook for normalizing border images: similar to the example where the border radius was normalized, in the below we apply the same concept to border images. As you can see, in many cases normalization is quite straight-forward to achieve.</p>
 * <pre><code> (function($){
 *     
 *     if ( !$.cssHooks ){
 *         alert("jQuery 1.4.3+ is needed for this plugin to work");
 *         return;
 *     }
 * var div = document.createElement( "div" );
 * 
 *     $.support.borderImage =
 *     div.style.MozBorderImage === '' ? 'MozBorderImage' :
 *     (div.style.WebkitBorderImage === '' ? 'WebkitBorderImage' :
 *     (div.style.borderImage === '' ? 'borderImage' : false));
 *     
 *     if ( $.support.borderImage && $.support.borderImage !== "borderImage" ){
 *         $.cssHooks.borderImage = {
 *             get: function( elem, computed, extra ) {
 *                 return $.css(elem, $.support.borderImage);
 *             },
 *             set: function( elem, value ) {
 *                 elem.style[$.support.borderImage] = value;
 *             }
 *         };
 *     }  
 *     div = null;
 * })(jQuery); 
 *   </code></pre>
 * @example
 * <p>Getting your cssHook to work with animate(): to allow your cssHook to be used with .animate() you can simply do the following:</p>
 * <pre><code> $.fx.step['someCSSProperty'] = function(fx){
 *         $.cssHooks['someCSSProperty'].set(fx.elem, fx.now + fx.unit);  
 * };
 * 
 * //Note that the above works best for simple numeric value animations 
 * //and more custom //code may be required depending on the complexity 
 * //of what you're trying to achieve.
 *  
 *   </code></pre>
 * 
 * @since 1.4.3
 * @type Object
**/
jQuery.cssHooks = new Object();

/**
 * Parses a string into an XML document.
 * 
 * 
 * <p><code>jQuery.parseXML</code> uses the native parsing function of the browser to create a valid XML Document. This document can then be passed to <code>jQuery</code> to create a typical jQuery object that can be traversed and manipulated.</p>
 * 
 * @example
 * <p>Create a jQuery object using an XML string and obtain the value of the title node.</p>
 * <pre><code>var xml = '<rss version="2.0"><channel><title>RSS Title</title></channel></rss>',
 *     xmlDoc = $.parseXML( xml ),
 *     $xml = $( xmlDoc ),
 *     $title = $xml.find( 'title' );	    
 * 
 * // append "RSS Title" to #someElement
 * $( '#someElement' ).append( $title.text() );	
 * 
 * // change the title to "XML Title"
 * $title.text( 'XML Title' );
 * 
 * // append "XML Title" to #anotherElement
 * $( '#anotherElement' ).append( $title.text() );
 * </code></pre>
 * 
 * @param {String} data a well-formed XML string to be parsed
 * 
 * @since 1.5
 * @returns {Document}
**/
jQuery.parseXML = function(data) {return new Document();};

/**
 * Provides a way to execute callback functions based on one or more objects, usually <a href="/category/deferred-object/">Deferred</a> objects that represent asynchronous events.
 * 
 * 
 * <p>If a single Deferred is passed to <code>jQuery.when</code>, its Promise object (a subset of the Deferred methods) is returned by the method. Additional methods of the Promise object can be called to attach callbacks, such as <a href="/deferred.then"><code>deferred.then</code></a>. When the Deferred is resolved or rejected, usually by the code that created the Deferred originally, the appropriate callbacks will be called. For example, the jqXHR object returned by <code>jQuery.ajax</code> is a Deferred and can be used this way:</p><pre>$.when( $.ajax("test.aspx") ).then(function(ajaxArgs){ 
 *      alert(ajaxArgs[1]); / * ajaxArgs is [ "success", statusText, jqXHR ] * /
 * });</pre>
 * <p>If a single argument is passed to <code>jQuery.when</code> and it is not a Deferred, it will be treated as a resolved Deferred and any doneCallbacks attached will be executed immediately. The doneCallbacks are passed the original argument. In this case any failCallbacks you might set are never called since the Deferred is never rejected. For example:</p><pre>$.when( { testing: 123 } ).done(
 *    function(x){ alert(x.testing); } / * alerts "123" * /
 * );</pre>
 * <p>In the case where multiple Deferred objects are passed to <code>jQuery.when</code>, the method returns the Promise from a new "master" Deferred object that tracks the aggregate state of all the Deferreds it has been passed. The method will resolve its master Deferred as soon as all the Deferreds resolve, or reject the master Deferred as soon as one of the Deferreds is rejected. If the master Deferred is resolved, it is passed the resolved values of all the Deferreds that were passed to <code>jQuery.when</code>. For example, when the Deferreds are <code>jQuery.ajax()</code> requests, the arguments will be the jqXHR objects for the requests, in the order they were given in the argument list.</p>
 * <p>In the multiple-Deferreds case where one of the Deferreds is rejected, <code>jQuery.when</code> immediately fires the failCallbacks for its master Deferred. Note that some of the Deferreds may still be unresolved at that point. If you need to perform additional processing for this case, such as canceling any unfinished ajax requests, you can keep references to the underlying jqXHR objects in a closure and inspect/cancel them in the failCallback.</p>
 * 
 * @example
 * <p>Execute a function after two ajax requests are successful. (See the jQuery.ajax() documentation for a complete description of success and error cases for an ajax request).</p>
 * <pre><code>$.when($.ajax("/page1.php"), $.ajax("/page2.php")).done(function(a1,  a2){
 *     / * a1 and a2 are arguments resolved for the 
 *         page1 and page2 ajax requests, respectively * /
 *    var jqXHR = a1[2]; / * arguments are [ "success", statusText, jqXHR ] * /
 *    if ( /Whip It/.test(jqXHR.responseText) ) {
 *       alert("First page has 'Whip It' somewhere.");
 *    }
 * });
 * </code></pre>
 * @example
 * <p>Execute the function <code>myFunc</code> when both ajax requests are successful, or <code>myFailure</code> if either one has an error.</p>
 * <pre><code>$.when($.ajax("/page1.php"), $.ajax("/page2.php"))
 *   .then(myFunc, myFailure);
 * </code></pre>
 * 
 * @param {Deferred} deferreds One or more Deferred objects, or plain JavaScript objects.
 * 
 * @since 1.5
 * @returns {__jQueryPromise}
**/
jQuery.when = function(deferreds) {return new __jQueryPromise();};

/**
 *  Resolve a Deferred object and call any doneCallbacks with the given <code>context</code> and <code>args</code>. 
 * 
 *  <p>Normally, only the creator of a Deferred should call this method; you can prevent other code from changing the Deferred's state by returning a restricted Promise object through <a href="http://api.jquery.com/deferred.promise/"><code>deferred.promise()</code></a>.</p>
 * <p>When the Deferred is resolved, any doneCallbacks added by <a href="/deferred.then/"><code>deferred.then</code></a> or <a href="/deferred.done/"><code>deferred.done</code></a> are called. Callbacks are executed in the order they were added. Each callback is passed the <code>args</code> from the <code>.resolve()</code>. Any doneCallbacks added after the Deferred enters the resolved state are executed immediately when they are added, using the arguments that were passed to the <code>.resolve()</code> call. For more information, see the documentation for <a href="/category/deferred-object/">Deferred object</a>.</p>  
 * @param {Object} context 
 *              Context passed to the doneCallbacks as the <code>this</code> object.
 *            
 * @param {Array} args 
 *              An optional array of arguments that are passed to the doneCallbacks.
 *            
 * 
 * @since 1.5
 * @returns {Deferred}
**/
__jQueryDeferred.prototype.resolveWith = function(context, args) {return new Deferred();};

/**
 *  Reject a Deferred object and call any failCallbacks with the given <code>context</code> and <code>args</code>. 
 * 
 *  <p>Normally, only the creator of a Deferred should call this method; you can prevent other code from changing the Deferred's state by returning a restricted Promise object through <a href="http://api.jquery.com/deferred.promise/"><code>deferred.promise()</code></a>.</p>
 * <p>When the Deferred is rejected, any failCallbacks added by <a href="/deferred.then/"><code>deferred.then</code></a> or <a href="/deferred.fail/"><code>deferred.fail</code></a> are called. Callbacks are executed in the order they were added. Each callback is passed the <code>args</code> from the <code>deferred.reject()</code> call. Any failCallbacks added after the Deferred enters the rejected state are executed immediately when they are added, using the arguments that were passed to the <code>.reject()</code> call. For more information, see the documentation for <a href="/category/deferred-object/">Deferred object</a>.</p>  
 * @param {Object} context 
 *              Context passed to the failCallbacks as the <code>this</code> object.
 *            
 * @param {Array} args 
 *              An optional array of arguments that are passed to the failCallbacks.
 *            
 * 
 * @since 1.5
 * @returns {Deferred}
**/
__jQueryDeferred.prototype.rejectWith = function(context, args) {return new Deferred();};

/**
 *  Add handlers to be called when the Deferred object is rejected. 
 * 
 *  <p>The <code>deferred.fail()</code> method accepts one or more arguments, all of which can be either a single function or an array of functions. When the Deferred is rejected, the failCallbacks are called. Callbacks are executed in the order they were added. Since <code>deferred.fail()</code> returns the deferred object, other methods of the deferred object can be chained to this one, including additional <code>deferred.fail()</code> methods. The failCallbacks are executed using the arguments provided to the <a href="deferred.reject"><code>deferred.reject()</code></a> or <a href="deferred.rejectWith"><code>deferred.rejectWith()</code></a> method call in the order they were added. For more information, see the documentation for <a href="/category/deferred-object/">Deferred object</a>.</p>  
 * @example
 * <p>Since the <a href="http://api.jquery.com/jQuery.get/"><code>jQuery.get</code></a> method returns a jqXHR object, which is derived from a Deferred, you can attach a success and failure callback using the <code>deferred.done()</code> and <code>deferred.fail()</code> methods.</p>
 * <pre><code>
 * $.get("test.php")
 *   .done(function(){ alert("$.get succeeded"); })
 *   .fail(function(){ alert("$.get failed!"); });
 * </code></pre>
 * 
 * @param {Function} failCallbacks 
 *              A function, or array of functions, that are called when the Deferred is rejected.
 *            
 * @param {Function} failCallbacks 
 *              Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
 *            
 * 
 * @since 1.5
 * @returns {Deferred}
**/
__jQueryDeferred.prototype.fail = function(failCallbacks, failCallbacks) {return new Deferred();};

/**
 *  Add handlers to be called when the Deferred object is resolved. 
 * 
 *  <p>The <code>deferred.done()</code> method accepts one or more arguments, all of which can be either a single function or an array of functions. When the Deferred is resolved, the doneCallbacks are called. Callbacks are executed in the order they were added. Since <code>deferred.done()</code> returns the deferred object, other methods of the deferred object can be chained to this one, including additional <code>.done()</code> methods. When the Deferred is resolved, doneCallbacks are executed using the arguments provided to the <a href="/deferred.resolve/"><code>resolve</code></a> or <a href="/deferred.resolveWith/"><code>resolveWith</code></a> method call in the order they were added. For more information, see the documentation for <a href="/category/deferred-object/">Deferred object</a>.</p>  
 * @example
 * <p>Since the <a href="/jQuery.get"><code>jQuery.get</code></a> method returns a jqXHR object, which is derived from a Deferred object, we can attach a success callback using the <code>.done()</code> method.</p>
 * <pre><code>
 * $.get("test.php").done(function() { 
 *   alert("$.get succeeded"); 
 * });
 * </code></pre>
 * @example
 * <p>Resolve a Deferred object when the user clicks a button, triggering a number of callback functions:</p>
 * <pre><code>
 * // 3 functions to call when the Deferred object is resolved
 * function fn1() {
 *   $("p").append(" 1 ");
 * }
 * function fn2() {
 *   $("p").append(" 2 ");
 * }
 * function fn3(n) {
 *   $("p").append(n + " 3 " + n);
 * }
 * 
 * // create a deferred object
 * var dfd = $.Deferred();
 * 
 * // add handlers to be called when dfd is resolved
 * dfd
 * // .done() can take any number of functions or arrays of functions
 * .done( [fn1, fn2], fn3, [fn2, fn1] )
 * // we can chain done methods, too
 * .done(function(n) {
 *   $("p").append(n + " we're done.");
 * });
 * 
 * // resolve the Deferred object when the button is clicked
 * $("button").bind("click", function() {
 *   dfd.resolve("and");
 * });
 * </code></pre>
 * 
 * @param {Function} doneCallbacks 
 *              A function, or array of functions, that are called when the Deferred is resolved.
 *            
 * @param {Function} doneCallbacks 
 *              Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
 *            
 * 
 * @since 1.5
 * @returns {Deferred}
**/
__jQueryDeferred.prototype.done = function(doneCallbacks, doneCallbacks) {return new Deferred();};

/**
 *  Add handlers to be called when the Deferred object is resolved or rejected. 
 * 
 *  <p>Both arguments can be either a single function or an array of functions. Either argument can also be null if no callback of that type is desired. Alternatively, use <code>.done()</code> or <code>.fail()</code> to set only doneCallbacks or failCallbacks. When the Deferred is resolved, the doneCallbacks are called. If the Deferred is instead rejected, the failCallbacks are called. Callbacks are executed in the order they were added. Since <code>deferred.then</code> returns the deferred object, other methods of the deferred object can be chained to this one, including additional <code>.then()</code> methods. For more information, see the documentation for <a href="http://api.jquery.com/category/deferred-object/">Deferred object</a>.</p>  
 * @example
 * <p>Since the <a href="/jQuery.get"><code>jQuery.get</code></a> method returns a jqXHR object, which is derived from a Deferred object, we can attach handlers using the <code>.then</code> method.</p>
 * <pre><code>
 * $.get("test.php").then(
 *     function(){ alert("$.get succeeded"); },
 *     function(){ alert("$.get failed!"); }
 * );
 * </code></pre>
 * 
 * @param {Function} doneCallbacks 
 *              A function, or array of functions, called when the Deferred is resolved.
 *            
 * @param {Function} failCallbacks 
 *              A function, or array of functions, called when the Deferred is rejected.
 *            
 * 
 * @since 1.5
 * @returns {Deferred}
**/
__jQueryDeferred.prototype.then = function(doneCallbacks, failCallbacks) {return new Deferred();};

/**
 *  Reject a Deferred object and call any failCallbacks with the given <code>args</code>. 
 * 
 *  <p>Normally, only the creator of a Deferred should call this method; you can prevent other code from changing the Deferred's state by returning a restricted Promise object through <a href="http://api.jquery.com/deferred.promise/"><code>deferred.promise()</code></a>.</p>
 * <p>When the Deferred is rejected, any failCallbacks added by <a href="http://api.jquery.com/deferred.then/"><code>deferred.then</code></a> or <a href="http://api.jquery.com/deferred.fail/"><code>deferred.fail</code></a> are called. Callbacks are executed in the order they were added. Each callback is passed the <code>args</code> from the <code>deferred.reject()</code> call. Any failCallbacks added after the Deferred enters the rejected state are executed immediately when they are added, using the arguments that were passed to the <code>.reject()</code> call. For more information, see the documentation for <a href="http://api.jquery.com/category/deferred-object/">Deferred object</a>.</p>  
 * @param {Object} args 
 *              Optional arguments that are passed to the failCallbacks.
 *            
 * 
 * @since 1.5
 * @returns {Deferred}
**/
__jQueryDeferred.prototype.reject = function(args) {return new Deferred();};

/**
 *  Determine whether a Deferred object has been rejected. 
 * 
 *  <p>Returns <code>true</code> if the Deferred object is in the rejected state, meaning that either <a href="http://api.jquery.com/deferred.reject/"><code>deferred.reject()</code></a> or <a href="http://api.jquery.com/deferred.rejectWith/"><code>deferred.rejectWith()</code></a> has been called for the object and the failCallbacks have been called (or are in the process of being called).</p>
 * <p>Note that a Deferred object can be in one of three states: unresolved, resolved, or rejected; use <a href="http://api.jquery.com/deferred.isResolved/"><code>deferred.isResolved()</code></a> to determine whether the Deferred object is in the resolved state. These methods are primarily useful for debugging, for example to determine whether a Deferred has already been resolved even though you are inside code that intended to reject it.</p>  
 * @since 1.5
 * @returns {Boolean}
**/
__jQueryDeferred.prototype.isRejected = function() {return new Boolean();};

/**
 *  Determine whether a Deferred object has been resolved. 
 * 
 *  <p>Returns <code>true</code> if the Deferred object is in the resolved state, meaning that either <a href="http://api.jquery.com/deferred.resolve/"><code>deferred.resolve()</code></a> or <a href="http://api.jquery.com/deferred.resolveWith/"><code>deferred.resolveWith()</code></a> has been called for the object and the doneCallbacks have been called (or are in the process of being called).</p>
 * <p>Note that a Deferred object can be in one of three states: unresolved, resolved, or rejected; use <a href="http://api.jquery.com/deferred.isRejected/"><code>deferred.isRejected()</code></a> to determine whether the Deferred object is in the rejected state. These methods are primarily useful for debugging, for example to determine whether a Deferred has already been resolved even though you are inside code that intended to reject it.</p>  
 * @since 1.5
 * @returns {Boolean}
**/
__jQueryDeferred.prototype.isResolved = function() {return new Boolean();};

/**
 *  Resolve a Deferred object and call any doneCallbacks with the given <code>args</code>. 
 * 
 *  <p>When the Deferred is resolved, any doneCallbacks added by <a href="/deferred.then/"><code>deferred.then</code></a> or <a href="/deferred.done/"><code>deferred.done</code></a> are called. Callbacks are executed in the order they were added. Each callback is passed the <code>args</code> from the <code>.resolve()</code>. Any doneCallbacks added after the Deferred enters the resolved state are executed immediately when they are added, using the arguments that were passed to the <code>.resolve()</code> call. For more information, see the documentation for <a href="/category/deferred-object/">Deferred object</a>.</p>  
 * @param {Object} args 
 *              Optional arguments that are passed to the doneCallbacks.
 *            
 * 
 * @since 1.5
 * @returns {Deferred}
**/
__jQueryDeferred.prototype.resolve = function(args) {return new Deferred();};

/**
 * Creates a new copy of jQuery whose properties and methods can be modified without affecting the original jQuery object.
 * 
 * <p>There are two specific use cases for which jQuery.sub() was created. The first was for providing a painless way of overriding jQuery methods without completely destroying the original methods and another was for helping to do encapsulation and basic namespacing for jQuery plugins.</p>
 * <p>Note that jQuery.sub() doesn't attempt to do any sort of isolation - that's not its intention. All the methods on the sub'd version of jQuery will still point to the original jQuery (events bound and triggered will still be through the main jQuery, data will be bound to elements through the main jQuery, Ajax queries and events will run through the main jQuery, etc.).</p>
 * <p>Note that if you're looking to use this for plugin development you should first <i>strongly</i> consider using something like the jQuery UI widget factory which manages both state and plugin sub-methods. <a href="http://blog.nemikor.com/2010/05/15/building-stateful-jquery-plugins/">Some examples of using the jQuery UI widget factory</a> to build a plugin.</p>
 * <p>The particular use cases of this method can be best described through some examples.</p>
 * @example
 * <p>Adding a method to a jQuery sub so that it isn't exposed externally:</p>
 * <pre><code>  (function(){
 *     var sub$ = jQuery.sub();
 * 
 *     sub$.fn.myCustomMethod = function(){
 *       return 'just for me';
 *     };
 * 
 *     sub$(document).ready(function() {
 *       sub$('body').myCustomMethod() // 'just for me'
 *     });
 *   })();
 *   
 *   typeof jQuery('body').myCustomMethod // undefined</code></pre>
 * @example
 * <p>Override some jQuery methods to provide new functionality.</p>
 * <pre><code>
 * (function() {
 *   var myjQuery = jQuery.sub();
 * 
 *   myjQuery.fn.remove = function() {
 *     // New functionality: Trigger a remove event
 *     this.trigger("remove");
 * 
 *     // Be sure to call the original jQuery remove method
 *     return jQuery.fn.remove.apply( this, arguments );
 *   };
 * 
 *   myjQuery(function($) {
 *     $(".menu").click(function() {
 *       $(this).find(".submenu").remove();
 *     });
 * 
 *     // A new remove event is now triggered from this copy of jQuery
 *     $(document).bind("remove", function(e) {
 *       $(e.target).parent().hide();
 *     });
 *   });
 * })();
 * 
 * // Regular jQuery doesn't trigger a remove event when removing an element
 * // This functionality is only contained within the modified 'myjQuery'.</code></pre>
 * @example
 * <p>Create a plugin that returns plugin-specific methods.</p>
 * <pre><code>
 * (function() {
 *   // Create a new copy of jQuery using sub()
 *   var plugin = jQuery.sub();
 * 
 *   // Extend that copy with the new plugin methods
 *   plugin.fn.extend({
 *     open: function() {
 *       return this.show();
 *     },
 *     close: function() {
 *       return this.hide();
 *     }
 *   });
 * 
 *   // Add our plugin to the original jQuery
 *   jQuery.fn.myplugin = function() {
 *     this.addClass("plugin");
 * 
 *     // Make sure our plugin returns our special plugin version of jQuery
 *     return plugin( this );
 *   };
 * })();
 * 
 * $(document).ready(function() {
 *   // Call the plugin, open method now exists
 *   $('#main').myplugin().open();
 * 
 *   // Note: Calling just $("#main").open() won't work as open doesn't exist!
 * });</code></pre>
 * 
 * @since 1.5
 * @returns {jQuery}
**/
jQuery.sub = function() {return new jQuery();};

/**
 * Display or hide the matched elements by animating their opacity.
 * 
 * 
 *   <p>The <code>.fadeToggle()</code> method animates the opacity of the matched elements. When called on a visible element, the element's <code>display</code> style property is set to <code>none</code> once the opacity reaches 0, so the element no longer affects the layout of the page.</p>
 *   <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively.</p>
 *  <p>The string representing an easing function specifies the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 *   <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 *   
 * @example
 * <p>Fades first paragraph in or out, completing the animation within 600 milliseconds and using a linear easing. Fades last paragraph in or out for 200 milliseconds, inserting a "finished" message upon completion. </p>
 * <pre><code>
 * $("button:first").click(function() {
 *   $("p:first").fadeToggle("slow", "linear");
 * });
 * $("button:last").click(function () {
 *   $("p:last").fadeToggle("fast", function () {
 *     $("#log").append("<div>finished</div>");
 *   });
 * });
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {String} easing A string indicating which easing function to use for the transition.
 * @param {Function} callback A function to call once the animation is complete.
 * 
 * @since 1.4.4
 * @returns {jQuery}
**/
jQuery.prototype.fadeToggle = function(duration, easing, callback) {return new jQuery();};

/**
 * Determine the internal JavaScript [[Class]] of an object.
 * 
 * <p>A number of techniques are used to determine the exact return value for an object. The [[Class]] is determined as follows:</p>
 * <ul>
 * <li>If the object is undefined or null, then "undefined" or "null" is returned accordingly.</li>
 * <li>If the object has an internal [[Class]] equivalent to one of the browser's built-in objects, the associated name is returned. (<a href="http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/">More details about this technique.</a>)<ul>
 * <li>jQuery.type(true) === "boolean"</li>
 * <li>jQuery.type(3) === "number"</li>
 * <li>jQuery.type("test") === "string"</li>
 * <li>jQuery.type(function(){}) === "function"</li>
 * <li>jQuery.type([]) === "array"</li>
 * <li>jQuery.type(new Date()) === "date"</li>
 * <li>jQuery.type(/test/) === "regexp"</li>
 * </ul></li>
 * <li>Everything else returns "object" as its type.</li>
 * </ul>
 * 
 * @example
 * <p>Find out if the parameter is a RegExp.</p>
 * <pre><code>$("b").append( "" + jQuery.type(/test/) );</code></pre>
 * 
 * @param {Object} obj Object to get the internal JavaScript [[Class]] of.
 * 
 * @since 1.4.3
 * @returns {String}
**/
jQuery.type = function(obj) {return "";};

/**
 * Determine whether the argument is a window.
 * 
 * <p>This is used in a number of places in jQuery to determine if we're operating against a browser window (such as the current window or an iframe).</p>
 * @example
 * <p>Finds out if the parameter is a window.</p>
 * <pre><code>$("b").append( "" + $.isWindow(window) );</code></pre>
 * 
 * @param {Object} obj Object to test whether or not it is a window.
 * 
 * @since 1.4.3
 * @returns {Boolean}
**/
jQuery.isWindow = function(obj) {return new Boolean();};

/**
 * Bind two or more handlers to the matched elements, to be executed on alternate clicks.
 * 
 * 
 * <p>The <code>.toggle()</code> method binds a handler for the <code>click</code> event, so the rules outlined for the triggering of <code>click</code> apply here as well.</p>
 * <pre>For example, consider the HTML:
 * &lt;div id="target"&gt;
 *   Click here
 * &lt;/div&gt;</pre>
 *  
 * <p class="image"><img src="/images/0042_05_05.png" alt=""/>
 * </p>
 * <p>Event handlers can then be bound to the <code>&lt;div&gt;</code>:</p>
 * <pre>$('#target').toggle(function() {
 *   alert('First handler for .toggle() called.');
 * }, function() {
 *   alert('Second handler for .toggle() called.');
 * });</pre>
 * <p>As the element is clicked repeatedly, the messages alternate:</p>
 * <p>
 *   <span class="output">First handler for .toggle() called.</span><br/>
 *   <span class="output">Second handler for .toggle() called.</span><br/>
 *   <span class="output">First handler for .toggle() called.</span><br/>
 *   <span class="output">Second handler for .toggle() called.</span><br/>
 *   <span class="output">First handler for .toggle() called.</span>
 * </p>
 * <p>If more than two handlers are provided, <code>.toggle()</code> will cycle among all of them. For example, if there are three handlers, then the first handler will be called on the first click, the fourth click, the seventh click, and so on.</p>
 * <blockquote><p>Note: jQuery also provides an animation method named <a href="http://api.jquery.com/toggle/">.toggle()</a> that toggles the visibility of elements. Whether the animation or the event method is fired depends on the set of arguments passed.</p></blockquote>
 * 
 * <p>The <code>.toggle()</code> method is provided for convenience. It is relatively straightforward to implement the same behavior by hand, and this can be necessary if the assumptions built into <code>.toggle()</code> prove limiting. For example, <code>.toggle()</code> is not guaranteed to work correctly if applied twice to the same element. Since <code>.toggle()</code> internally uses a <code>click</code> handler to do its work, we must unbind <code>click</code> to remove a behavior attached with <code>.toggle()</code>, so other <code>click</code> handlers can be caught in the crossfire. The implementation also calls <code>.preventDefault()</code> on the event, so links will not be followed and buttons will not be clicked if <code>.toggle()</code> has been called on the element.</p>
 * 
 * @example
 * <p>Click to toggle highlight on the list item.</p>
 * <pre><code>
 *     $("li").toggle(
 *       function () {
 *         $(this).css({"list-style-type":"disc", "color":"blue"});
 *       },
 *       function () {
 *         $(this).css({"list-style-type":"disc", "color":"red"});
 *       },
 *       function () {
 *         $(this).css({"list-style-type":"", "color":""});
 *       }
 *     );
 * 
 * </code></pre>
 * @example
 * <p>To toggle a style on table cells:</p>
 * <pre><code>$("td").toggle(
 *   function () {
 *     $(this).addClass("selected");
 *   },
 *   function () {
 *     $(this).removeClass("selected");
 *   }
 * );</code></pre>
 * 
 * @param {Function} handler A function to execute every even time the element is clicked.
 * @param {Function} handler A function to execute every odd time the element is clicked.
 * @param {Function} handler Additional handlers to cycle through after clicks.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.toggle = function(handler, handler, handler) {return new jQuery();};

/**
 * The rate (in milliseconds) at which animations fire.
 * @example
 * <p>Cause all animations to run with less frames.</p>
 * <pre><code>
 * jQuery.fx.interval = 100;
 * 
 * $("input").click(function(){
 *   $("div").toggle( 3000 );
 * });
 *   </code></pre>
 * 
 * @since 1.4.3
 * @type Number
**/
jQuery.fx = 0;

/**
 * The namespace specified when the event was triggered.
 * @example
 * <p>Determine the event namespace used.</p>
 * <pre><code>
 * $("p").bind("test.something", function(event) {
 *   alert( event.namespace );
 * });
 * $("button").click(function(event) {
 *   $("p").trigger("test.something");
 * });  
 * </code></pre>
 * 
 * @since 1.4.3
 * @type String
**/
__jQueryEvent.prototype.namespace = "";

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
 * @since 1.4.2
 * @returns {jQuery}
**/
jQuery.prototype.undelegate = function() {return new jQuery();};

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
 * @param {String} eventType A string containing one or more space-separated JavaScript event types, such as "click" or "keydown," or custom event names.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * 
 * @since 1.4.2
 * @returns {jQuery}
**/
jQuery.prototype.delegate = function(selector, eventType, handler) {return new jQuery();};

/**
 * Takes a string and throws an exception containing it.
 * 
 * <p>This method exists primarily for plugin developers who wish to override it and provide a better display (or more information) for the error messages.</p>
 * @example
 * <p>Override jQuery.error for display in Firebug.</p>
 * <pre><code>jQuery.error = console.error;</code></pre>
 * 
 * @param {String} message The message to send out.
 * 
 * @since 1.4.1
 * @returns {}
**/
jQuery.error = function(message) {};

/**
 * Takes a well-formed JSON string and returns the resulting JavaScript object.
 * 
 * <p>Passing in a malformed JSON string may result in an exception being thrown. For example, the following are all malformed JSON strings:</p>
 * <ul>
 * <li><code>{test: 1}</code> (test does not have double quotes around it).</li>
 * <li><code>{'test': 1}</code> ('test' is using single quotes instead of double quotes).</li>
 * </ul>
 * <p>Additionally if you pass in nothing, an empty string, null, or undefined, 'null' will be returned from parseJSON. Where the browser provides a native implementation of <code>JSON.parse</code>, jQuery uses it to parse the string. For details on the JSON format, see <a href="http://json.org/">http://json.org/</a>.
 * </p>
 * @example
 * <p>Parse a JSON string.</p>
 * <pre><code>var obj = jQuery.parseJSON('{"name":"John"}');
 * alert( obj.name === "John" );</code></pre>
 * 
 * @param {String} json The JSON string to parse.
 * 
 * @since 1.4.1
 * @returns {Object}
**/
jQuery.parseJSON = function(json) {return new Object();};

/**
 * Takes a function and returns a new one that will always have a particular context.
 * 
 * <p>This method is most useful for attaching event handlers to an element where the context is pointing back to a different object. Additionally, jQuery makes sure that even if you bind the function returned from <code>jQuery.proxy()</code> it will still unbind the correct function if passed the original.</p>
 * @example
 * <p>Enforce the context of the function using the "function, context" signature. Unbind the handler after first click.</p>
 * <pre><code>
 *   var obj = {
 *     name: "John",
 *     test: function() {
 *       $("#log").append( this.name );
 *       $("#test").unbind("click", obj.test);
 *     }
 *   };
 * 
 *   $("#test").click( jQuery.proxy( obj.test, obj ) );
 * </code></pre>
 * @example
 * <p>Enforce the context of the function using the "context, function name" signature. Unbind the handler after first click.</p>
 * <pre><code>
 *   var obj = {
 *     name: "John",
 *     test: function() {
 *       $("#log").append( this.name );
 *       $("#test").unbind("click", obj.test);
 *     }
 *   };
 * 
 *   $("#test").click( jQuery.proxy( obj, "test" ) );
 * </code></pre>
 * 
 * @param {Function} fn The function whose context will be changed.
 * @param {Object} context The object to which the context (<code>this</code>) of the function should be set.
 * 
 * @since 1.4
 * @returns {Function}
**/
jQuery.proxy = function(fn, context) {return new Function();};

/**
 * Bind an event handler to the "focusout" JavaScript event.
 * 
 * <p>This method is a shortcut for <code>.bind('focusout', handler)</code>.</p>
 * <p>The <code>focusout</code> event is sent to an element when it, or any element inside of it, loses focus. This is distinct from the <a href="/blur">blur</a> event in that it supports detecting the loss of focus from parent elements (in other words, it supports event bubbling).</p>
 * <p>This event will likely be used together with the <a href="/focusin">focusin</a> event.</p>
 * @example
 * <p>Watch for a loss of focus to occur inside paragraphs and note the difference between the <code>focusout</code> count and the <code>blur</code> count.</p>
 * <pre><code>
 * var fo = 0, b = 0;
 * $("p").focusout(function() {
 *   fo++;
 *   $("#fo")
 *     .text("focusout fired: " + fo + "x");
 * }).blur(function() {
 *   b++;
 *   $("#b")
 *     .text("blur fired: " + b + "x");
 *   
 * });
 * </code></pre>
 * 
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.focusout = function(handler) {return new jQuery();};

/**
 * Bind an event handler to the "focusin" JavaScript event.
 * 
 * <p>This method is a shortcut for <code>.bind('focusin', handler)</code>.</p>
 * <p>The <code>focusin</code> event is sent to an element when it, or any element inside of it, gains focus. This is distinct from the <a href="/focus">focus</a> event in that it supports detecting the focus event on parent elements (in other words, it supports event bubbling).</p>
 * <p>This event will likely be used together with the <a href="/focusout">focusout</a> event.</p>
 * @example
 * <p>Watch for a focus to occur within the paragraphs on the page.</p>
 * <pre><code>
 *     $("p").focusin(function() {
 *          $(this).find("span").css('display','inline').fadeOut(1000);
 *     });
 * </code></pre>
 * 
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.focusin = function(handler) {return new jQuery();};

/**
 * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
 * 
 * 
 *     <p>Given a jQuery object that represents a set of DOM elements, the <code>.has()</code> method constructs a new jQuery object from a subset of the matching elements. The supplied selector is tested against the descendants of the matching elements; the element will be included in the result if any of its descendant elements matches the selector.</p>
 *     <p>Consider a page with a nested list as follows:</p>
 * <pre>
 *  &lt;ul&gt;
 *   &lt;li&gt;list item 1&lt;/li&gt;
 *   &lt;li&gt;list item 2
 *     &lt;ul&gt;
 *       &lt;li&gt;list item 2-a&lt;/li&gt;
 *       &lt;li&gt;list item 2-b&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 *   &lt;li&gt;list item 4&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 *   <p>We can apply this method to the set of list items as follows:</p>
 *   <pre>$('li').has('ul').css('background-color', 'red');</pre>
 *   <p>The result of this call is a red background for item 2, as it is the only <code>&lt;li&gt;</code> that has a <code>&lt;ul&gt;</code> among its descendants.</p>
 * 
 *   
 * @example
 * <p>Check if an element is inside another.</p>
 * <pre><code>
 *   $("ul").append("<li>" + ($("ul").has("li").length ? "Yes" : "No") + "</li>");
 *   $("ul").has("li").addClass("full");
 * </code></pre>
 * 
 * @param {String} selector A string containing a selector expression to match elements against.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.has = function(selector) {return new jQuery();};

/**
 * Check to see if a DOM node is within another DOM node.
 * 
 * <longdesc/>
 * @example
 * <p>Check if an element is inside another.</p>
 * <pre><code>jQuery.contains(document.documentElement, document.body); // true
 * jQuery.contains(document.body, document.documentElement); // false</code></pre>
 * 
 * @param {Element} container The DOM element that may contain the other element.
 * @param {Element} contained The DOM node that may be contained by the other element.
 * 
 * @since 1.4
 * @returns {Boolean}
**/
jQuery.contains = function(container, contained) {return new Boolean();};

/**
 * An empty function.
 * 
 * <p>You can use this empty function when you wish to pass around a function that will do nothing.</p>
 * <p>This is useful for plugin authors who offer optional callbacks; in the case that no callback is given, something like <code>jQuery.noop</code> could execute.</p>
 * @since 1.4
 * @returns {Function}
**/
jQuery.noop = function() {return new Function();};

/**
 * Set a timer to delay execution of subsequent items in the queue.
 * 
 * <p>Added to jQuery in version 1.4, the <code>.delay()</code> method allows us to delay the execution of functions that follow it in the queue. It can be used with the standard effects queue or with a custom queue. Only subsequent events in a queue are delayed; for example this will <em>not</em> delay the no-arguments forms of <code>.show()</code> or <code>.hide()</code>  which do not use the effects queue.</p>
 * <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of 200 and 600 milliseconds, respectively.</p>
 * <p>Using the standard effects queue, we can, for example, set an 800-millisecond delay between the <code>.slideUp()</code> and <code>.fadeIn()</code> of <code>&lt;div id="foo"&gt;</code>:</p>
 * <pre>$('#foo').slideUp(300).delay(800).fadeIn(400);</pre>
 * <p>When this statement is executed, the element slides up for 300 milliseconds and then pauses for 800 milliseconds before fading in for 400 milliseconds.</p>
 * <blockquote><p><strong>The <code>.delay()</code> method is best for delaying between queued jQuery effects. Because it is limited—it doesn't, for example, offer a way to cancel the delay—<code>.delay()</code> is not a replacement for JavaScript's native <a href="https://developer.mozilla.org/en/DOM/window.setTimeout">setTimeout</a> function, which may be more appropriate for certain use cases.</strong></p></blockquote>
 * 
 * @example
 * <p>Animate the hiding and showing of two divs, delaying the first before showing it.</p>
 * <pre><code>
 *     $("button").click(function() {
 *       $("div.first").slideUp(300).delay(800).fadeIn(400);
 *       $("div.second").slideUp(300).fadeIn(400);
 *     });
 * </code></pre>
 * 
 * @param {Number} duration An integer indicating the number of milliseconds to delay execution of the next item in the queue.
 * @param {String} queueName A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.delay = function(duration, queueName) {return new jQuery();};

/**
 * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.parentsUntil()</code> method traverses through the ancestors of these elements until it reaches an element matched by the selector passed in the method's argument. The resulting jQuery object contains all of the ancestors up to but not including the one matched by the <code>.parentsUntil()</code> selector. Consider a page with a basic nested list as follows:</p>
 * <pre>&lt;ul class="level-1"&gt;
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
 * <p>If we begin at item A, we can find its ancestors up to but not including <code>&lt;ul class="level-1"&gt;</code> as follows:</p>
 *   <pre>$('li.item-a').parentsUntil('.level-1')
 *     .css('background-color', 'red');</pre>
 *   <p>The result of this call is a red background for the level-2 list and the item II. </p>
 *     <p>If the .parentsUntil() selector is not matched, or if no selector is supplied, the returned jQuery object contains all of the previous jQuery object's ancestors. For example, let's say we begin at item A again, but this time we use a selector that is not matched by any of its ancestors:</p>
 *   <pre>$('li.item-a').parentsUntil('.not-here')
 *     .css('background-color', 'red');</pre>
 *   <p>The result of this call is a red background-color style applied to the level-2 list, the item II, the level-1 list, the <code>&lt;body&gt;</code> element, and the <code>&lt;html&gt;</code> element.</p>
 * 
 * @example
 * <p>Find the ancestors of &lt;li class="item-a"&gt; up to &lt;ul class="level-1"&gt; and give them a red background color.</p>
 * <pre><code>
 *     $('li.item-a').parentsUntil('.level-1')
 *       .css('background-color', 'red');
 * </code></pre>
 * 
 * @param {Selector} selector A string containing a selector expression to indicate where to stop matching ancestor elements.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.parentsUntil = function(selector) {return new jQuery();};

/**
 * Get all preceding siblings of each element up to but not including the element matched by the selector.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.prevUntil()</code> method searches through the predecessors of these elements in the DOM tree, stopping when it reaches an element matched by the method's argument. The new jQuery object that is returned contains all previous siblings up to but not including the one matched by the <code>.prevUntil()</code> selector; the elements are returned in order from the closest sibling to the farthest.</p>
 *   <p>If the selector is not matched or is not supplied, all previous siblings will be selected; in these cases it selects the same elements as the <code>.prevAll()</code> method does when no filter selector is provided.</p>
 *   
 *   <p>Consider a page with a simple definition list as follows:</p>
 * <pre>
 * &lt;dl&gt;
 *   &lt;dt&gt;term 1&lt;/dt&gt;
 *   &lt;dd&gt;definition 1-a&lt;/dd&gt;
 *   &lt;dd&gt;definition 1-b&lt;/dd&gt;
 *   &lt;dd&gt;definition 1-c&lt;/dd&gt;
 *   &lt;dd&gt;definition 1-d&lt;/dd&gt;
 * 
 *   &lt;dt id="term-2"&gt;term 2&lt;/dt&gt;
 *   &lt;dd&gt;definition 2-a&lt;/dd&gt;
 *   &lt;dd&gt;definition 2-b&lt;/dd&gt;
 *   &lt;dd&gt;definition 2-c&lt;/dd&gt;
 * 
 *   &lt;dt&gt;term 3&lt;/dt&gt;
 *   &lt;dd&gt;definition 3-a&lt;/dd&gt;
 *   &lt;dd&gt;definition 3-b&lt;/dd&gt;
 * &lt;/dl&gt;
 * </pre>
 *               <p>If we begin at the second term, we can find the elements which come after it until a preceding <code>&lt;dt&gt;</code>.</p>
 * <pre>$('#term-2').prevUntil('dt').css('background-color', 'red');</pre>
 *               <p>The result of this call is a red background behind definitions <code>1-a</code>, <code>1-b</code>, <code>1-c</code>, and <code>1-d</code>. </p>
 * 
 * @example
 * <p>Find the siblings that precede &lt;dt id="term-2"&gt; up to the preceding &lt;dt&gt; and give them a red background color.</p>
 * <pre><code>
 *     $("#term-2").prevUntil("dt")
 *       .css("background-color", "red")
 * </code></pre>
 * 
 * @param {Selector} selector A string containing a selector expression to indicate where to stop matching preceding sibling elements.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.prevUntil = function(selector) {return new jQuery();};

/**
 * Get all following siblings of each element up to but not including the element matched by the selector.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.nextUntil()</code> method allows us to search through the successors of these elements in the DOM tree, stopping when it reaches an element matched by the method's argument. The new jQuery object that is returned contains all following siblings up to but not including the one matched by the <code>.nextUntil()</code> selector.</p>
 *   <p>If the selector is not matched or is not supplied, all following siblings will be selected; in these cases it selects the same elements as the <code>.nextAll()</code> method does when no filter selector is provided.</p>
 *   
 *   <p>Consider a page with a simple definition list as follows:</p>
 * <pre>
 * &lt;dl&gt;
 *   &lt;dt&gt;term 1&lt;/dt&gt;
 *   &lt;dd&gt;definition 1-a&lt;/dd&gt;
 *   &lt;dd&gt;definition 1-b&lt;/dd&gt;
 *   &lt;dd&gt;definition 1-c&lt;/dd&gt;
 *   &lt;dd&gt;definition 1-d&lt;/dd&gt;
 * 
 *   &lt;dt id="term-2"&gt;term 2&lt;/dt&gt;
 *   &lt;dd&gt;definition 2-a&lt;/dd&gt;
 *   &lt;dd&gt;definition 2-b&lt;/dd&gt;
 *   &lt;dd&gt;definition 2-c&lt;/dd&gt;
 * 
 *   &lt;dt&gt;term 3&lt;/dt&gt;
 *   &lt;dd&gt;definition 3-a&lt;/dd&gt;
 *   &lt;dd&gt;definition 3-b&lt;/dd&gt;
 * &lt;/dl&gt;
 * </pre>
 *               <p>If we begin at the second term, we can find the elements which come after it until a following <code>&lt;dt&gt;</code>.</p>
 * <pre>$('#term-2').nextUntil('dt').css('background-color', 'red');</pre>
 *               <p>The result of this call is a red background behind definitions <code>2-a</code>, <code>2-b</code>, and <code>2-c</code>. </p>
 * 
 * @example
 * <p>Find the siblings that follow &lt;dt id="term-2"&gt; up to the next &lt;dt&gt; and give them a red background color.</p>
 * <pre><code>
 *     $("#term-2").nextUntil("dt")
 *       .css("background-color", "red")
 * </code></pre>
 * 
 * @param {Selector} selector A string containing a selector expression to indicate where to stop matching following sibling elements.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.nextUntil = function(selector) {return new jQuery();};

/**
 *   Returns whether event.stopImmediatePropagation() was ever called on this event object. 
 * 
 *  <p>This property was introduced in <a href="http://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/events.html#Events-Event-isImmediatePropagationStopped">DOM level 3</a>.</p>  
 * @example
 * <p>Checks whether event.stopImmediatePropagation() was called.</p>
 * <pre><code>
 * 
 * function immediatePropStopped(e) {
 *   var msg = "";
 *   if ( e.isImmediatePropagationStopped() ) {
 *     msg =  "called"
 *   } else {
 *     msg = "not called";
 *   }
 *   $("#stop-log").append( "<div>" + msg + "</div>" );
 * }
 * 
 * $("button").click(function(event) {
 *   immediatePropStopped(event);
 *   event.stopImmediatePropagation();
 *   immediatePropStopped(event);
 * });  
 * </code></pre>
 * 
 * @since 1.3
 * @returns {Boolean}
**/
__jQueryEvent.prototype.isImmediatePropagationStopped = function() {return new Boolean();};

/**
 *  Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.
 *   
 * 
 * <p>In addition to keeping any additional handlers on an element from being executed, this method also stops the bubbling by implicitly calling <code>event.stopPropagation()</code>. To simply prevent the event from bubbling to ancestor elements but allow other event handlers to execute on the same element, we can use <code><a href="http://api.jquery.com/event.stopPropagation">event.stopPropagation()</a></code> instead.</p>
 * <p>Use <code><a href="http://api.jquery.com/event.isImmediatePropagationStopped">event.isImmediatePropagationStopped()</a></code> to know whether this method was ever called (on that event object).</p> 
 * @example
 * <p>Prevents other event handlers from being called.</p>
 * <pre><code>
 * $("p").click(function(event){
 *   event.stopImmediatePropagation();
 * });
 * $("p").click(function(event){
 *   // This function won't be executed
 *   $(this).css("background-color", "#f00");
 * });  
 * $("div").click(function(event) {
 *   // This function will be executed
 *     $(this).css("background-color", "#f00");
 * });</code></pre>
 * 
 * @since 1.3
 * @returns {}
**/
__jQueryEvent.prototype.stopImmediatePropagation = function() {};

/**
 *   Returns whether <a href="/event.stopPropagation">event.stopPropagation()</a> was ever called on this event object. 
 * 
 * <p>This event method is described in the <a href="http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/events.html#Events-Event-isPropagationStopped">W3C DOM Level 3 specification</a>.</p>
 * @example
 * <p>Checks whether event.stopPropagation() was called</p>
 * <pre><code>
 * 
 * function propStopped(e) {
 *   var msg = "";
 *   if ( e.isPropagationStopped() ) {
 *     msg =  "called"
 *   } else {
 *     msg = "not called";
 *   }
 *   $("#stop-log").append( "<div>" + msg + "</div>" );
 * }
 * 
 * $("button").click(function(event) {
 *   propStopped(event);
 *   event.stopPropagation();
 *   propStopped(event);
 * });  
 * </code></pre>
 * 
 * @since 1.3
 * @returns {Boolean}
**/
__jQueryEvent.prototype.isPropagationStopped = function() {return new Boolean();};

/**
 * Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.   
 * 
 *   <p>We can use <code><a href="/event.isPropagationStopped">event.isPropagationStopped()</a></code> to determine if this method was ever called (on that event object). </p>
 *     <p>This method works for custom events triggered with <a href="/trigger">trigger()</a>, as well.</p>
 * <p>Note that this will not prevent other handlers <em>on the same element</em> from running. </p> 
 * @example
 * <p>Kill the bubbling on the click event.</p>
 * <pre><code>$("p").click(function(event){
 *   event.stopPropagation();
 *   // do something
 * });  </code></pre>
 * 
 * @since 1.0
 * @returns {}
**/
__jQueryEvent.prototype.stopPropagation = function() {};

/**
 * Returns whether <a href="/event.preventDefault">event.preventDefault()</a> was ever called on this event object. 
 * 
 *    
 * @example
 * <p>Checks whether event.preventDefault() was called.</p>
 * <pre><code>$("a").click(function(event){
 *   alert( event.isDefaultPrevented() ); // false
 *   event.preventDefault();
 *   alert( event.isDefaultPrevented() ); // true
 * });  </code></pre>
 * 
 * @since 1.3
 * @returns {Boolean}
**/
__jQueryEvent.prototype.isDefaultPrevented = function() {return new Boolean();};

/**
 *  If this method is called, the default action of the event will not be triggered. 
 * 
 *  <p>For example, clicked anchors will not take the browser to a new URL. We can use <code>event.isDefaultPrevented()</code> to determine if this method has been called by an event handler that was triggered by this event.</p>  
 * @example
 * <p>Cancel the default action (navigation) of the click.</p>
 * <pre><code>
 * $("a").click(function(event) {
 *   event.preventDefault();
 *   $('<div/>')
 *     .append('default ' + event.type + ' prevented')
 *     .appendTo('#log');
 * });
 * </code></pre>
 * 
 * @since 1.0
 * @returns {undefined}
**/
__jQueryEvent.prototype.preventDefault = function() {};

/**
 * The difference in milliseconds between the time an event is triggered and January 1, 1970.
 * @example
 * <p>Display the time since the click handler last executed.</p>
 * <pre><code>
 * var last, diff;
 * $('div').click(function(event) {
 *   if ( last ) {
 *     diff = event.timeStamp - last
 *     $('div').append('time since last event: ' + diff + '<br/>');
 *   } else {
 *     $('div').append('Click again.<br/>');
 *   }
 *   last = event.timeStamp;
 * });  
 * </code></pre>
 * 
 * @since 1.2.6
 * @type Number
**/
__jQueryEvent.prototype.timeStamp = 0;

/**
 *  The last value returned by an event handler that was triggered by this event, unless the value was <code>undefined</code>.  
 * @example
 * <p>Display previous handler's return value</p>
 * <pre><code>
 * $("button").click(function(event) {
 *   return "hey";
 * });
 * $("button").click(function(event) {
 *   $("p").html( event.result );
 * });  
 * </code></pre>
 * 
 * @since 1.3
 * @type Object
**/
__jQueryEvent.prototype.result = new Object();

/**
 *  For key or button events, this attribute indicates the specific button or key that was pressed.  
 * @example
 * <p>Log what key was depressed.</p>
 * <pre><code>$('#whichkey').bind('keydown',function(e){ 
 *   $('#log').html(e.type + ': ' +  e.which );
 * });  </code></pre>
 * 
 * @since 1.1.3
 * @type Number
**/
__jQueryEvent.prototype.which = 0;

/**
 * The mouse position relative to the top edge of the document. 
 * @example
 * <p>Show the mouse position relative to the left and top edges of the document (within this iframe).</p>
 * <pre><code>$(document).bind('mousemove',function(e){ 
 *             $("#log").text("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY); 
 * }); </code></pre>
 * 
 * @since 1.0.4
 * @type Number
**/
__jQueryEvent.prototype.pageY = 0;

/**
 * The mouse position relative to the left edge of the document. 
 * @example
 * <p>Show the mouse position relative to the left and top edges of the document (within the iframe).</p>
 * <pre><code>$(document).bind('mousemove',function(e){ 
 *             $("#log").text("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY); 
 * }); </code></pre>
 * 
 * @since 1.0.4
 * @type Number
**/
__jQueryEvent.prototype.pageX = 0;

/**
 *  The current DOM element within the event bubbling phase.  
 * @example
 * <p>Alert that currentTarget matches the `this` keyword.</p>
 * <pre><code>$("p").click(function(event) {
 *   alert( event.currentTarget === this ); // true
 * });  </code></pre>
 * 
 * @since 1.3
 * @type Element
**/
__jQueryEvent.prototype.currentTarget = new Element();

/**
 *   The other DOM element involved in the event, if any. 
 * @example
 * <p>On mouseout of anchors, alert the element type being entered.</p>
 * <pre><code>$("a").mouseout(function(event) {
 *   alert(event.relatedTarget.nodeName); // "DIV"
 * });  </code></pre>
 * 
 * @since 1.1.4
 * @type Element
**/
__jQueryEvent.prototype.relatedTarget = new Element();

/**
 *  The optional data passed to jQuery.fn.bind when the current executing handler was bound.  
 * @example
 * <p>The description of the example.</p>
 * <pre><code>$("a").each(function(i) {
 *   $(this).bind('click', {index:i}, function(e){
 *      alert('my index is ' + e.data.index);
 *   });
 * });   </code></pre>
 * 
 * @since 1.1
 * @type Anything
**/
__jQueryEvent.prototype.data = new Anything();

/**
 *  The DOM element that initiated the event.  
 * @example
 * <p>Display the tag's name on click</p>
 * <pre><code>$("body").click(function(event) {
 *   $("#log").html("clicked: " + event.target.nodeName);
 * });  </code></pre>
 * @example
 * <p>Implements a simple event delegation: The click handler is added to an unordered list, and the children of its li children are hidden. Clicking one of the li children toggles (see toggle()) their children.</p>
 * <pre><code>function handler(event) {
 *   var $target = $(event.target);
 *   if( $target.is("li") ) {
 *     $target.children().toggle();
 *   }
 * }
 * $("ul").click(handler).find("ul").hide();</code></pre>
 * 
 * @since 1.0
 * @type Element
**/
__jQueryEvent.prototype.target = new Element();

/**
 *  Describes the nature of the event.  
 * @example
 * <p>On all anchor clicks, alert the event type.</p>
 * <pre><code>$("a").click(function(event) {
 *   alert(event.type); // "click"
 * }); </code></pre>
 * 
 * @since 1.0
 * @type String
**/
__jQueryEvent.prototype.type = "";

/**
 * Globally disable all animations.
 * @example
 * <p>Toggle animation on and off</p>
 * <pre><code>
 * var toggleFx = function() {
 *   $.fx.off = !$.fx.off;
 * };
 * toggleFx();
 * 
 * $("button").click(toggleFx)
 * 
 * $("input").click(function(){
 *   $("div").toggle("slow");
 * });
 *   </code></pre>
 * 
 * @since 1.3
 * @type Boolean
**/
jQuery.fx = new Boolean();

/**
 * Iterate over a jQuery object, executing a function for each matched element. 
 * 
 * 
 *   <p>The <code>.each()</code> method is designed to make DOM looping constructs concise and less error-prone. When called it iterates over the DOM elements that are part of the jQuery object. Each time the callback runs, it is passed the current loop iteration, beginning from 0. More importantly, the callback is fired in the context of the current DOM element, so the keyword <code>this</code> refers to the element.</p>
 *   <p>Suppose we had a simple unordered list on the page:</p>
 *   <pre>&lt;ul&gt;
 *     &lt;li&gt;foo&lt;/li&gt;
 *     &lt;li&gt;bar&lt;/li&gt;
 *   &lt;/ul&gt;
 *   </pre>
 *   <p>We can select the list items and iterate across them:</p>
 *   <pre>$('li').each(function(index) {
 *     alert(index + ': ' + $(this).text());
 *   });
 *   </pre>
 *   <p>A message is thus alerted for each item in the list:</p>
 *   <p><span class="output">0: foo</span><br/>
 *   <span class="output">1: bar</span></p>
 * <p>We can stop the loop from within the callback function by returning <code>false</code>.</p>  
 *   
 * 
 * @example
 * <p>Iterates over three divs and sets their color property.</p>
 * <pre><code>
 *     $(document.body).click(function () {
 *       $("div").each(function (i) {
 *         if (this.style.color != "blue") {
 *           this.style.color = "blue";
 *         } else {
 *           this.style.color = "";
 *         }
 *       });
 *     });</code></pre>
 * @example
 * <p>If you want to have the jQuery object instead of the regular DOM element, use the $(this) function, for example:</p>
 * <pre><code>
 *     $("span").click(function () {
 *       $("li").each(function(){
 *         $(this).toggleClass("example");
 *       });
 *     });
 * 
 * </code></pre>
 * @example
 * <p>You can use 'return' to break out of each() loops early.</p>
 * <pre><code>
 *     $("button").click(function () {
 *       $("div").each(function (index, domEle) {
 *         // domEle == this
 *         $(domEle).css("backgroundColor", "yellow"); 
 *         if ($(this).is("#stop")) {
 *           $("span").text("Stopped at div index #" + index);
 *           return false;
 *         }
 *       });
 *     });
 * 
 * </code></pre>
 * 
 * @param {Function} fn A function to execute for each matched element.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.each = function(fn) {return new jQuery();};

/**
 * Add a collection of DOM elements onto the jQuery stack.
 * 
 * <longdesc/>
 * @example
 * <p>Add some elements onto the jQuery stack, then pop back off again.</p>
 * <pre><code>jQuery([])
 *     .pushStack( document.getElementsByTagName("div") )
 *         .remove()
 *     .end();</code></pre>
 * 
 * @param {Array} elements An array of elements to push onto the stack and make into a new jQuery object.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.pushStack = function(elements) {return new jQuery();};

/**
 * Execute some JavaScript code globally.
 * 
 * <p>This method behaves differently from using a normal JavaScript <code>eval()</code> in that it's executed within the global context (which is important for loading external scripts dynamically).</p>
 * @example
 * <p>Execute a script in the global context.</p>
 * <pre><code>function test(){
 *     jQuery.globalEval("var newVar = true;")
 * }
 * test();
 * // newVar === true</code></pre>
 * 
 * @param {String} code The JavaScript code to execute.
 * 
 * @since 1.0.4
 * @returns {}
**/
jQuery.globalEval = function(code) {};

/**
 * Check to see if a DOM node is within an XML document (or is an XML document).
 * 
 * <longdesc/>
 * @example
 * <p>Check an object to see if it's in an XML document.</p>
 * <pre><code>jQuery.isXMLDoc(document) // false
 * jQuery.isXMLDoc(document.body) // false</code></pre>
 * 
 * @param {Element} node The DOM node that will be checked to see if it's in an XML document.
 * 
 * @since 1.1.4
 * @returns {Boolean}
**/
jQuery.isXMLDoc = function(node) {return new Boolean();};

/**
 * Remove a previously-stored piece of data.
 * 
 * <p><strong>Note:</strong> This is a low-level method, you should probably use <code><a href="/removeData">.removeData()</a></code> instead.</p>
 * 	<p>The <code>jQuery.removeData()</code> method allows us to remove values that were previously set using <code><a href="/jQuery.data">jQuery.data()</a></code>. When called with the name of a key, <code>jQuery.removeData()</code> deletes that particular value; when called with no arguments, all values are removed.</p>
 * @example
 * <p>Set a data store for 2 names then remove one of them.</p>
 * <pre><code>
 * var div = $("div")[0];
 * $("span:eq(0)").text("" + $("div").data("test1"));
 * jQuery.data(div, "test1", "VALUE-1");
 * jQuery.data(div, "test2", "VALUE-2");
 * $("span:eq(1)").text("" + jQuery.data(div, "test1"));
 * jQuery.removeData(div, "test1");
 * $("span:eq(2)").text("" + jQuery.data(div, "test1"));
 * $("span:eq(3)").text("" + jQuery.data(div, "test2"));</code></pre>
 * 
 * @param {Element} element A DOM element from which to remove data.
 * @param {String} name A string naming the piece of data to remove.
 * 
 * @since 1.2.3
 * @returns {jQuery}
**/
jQuery.removeData = function(element, name) {return new jQuery();};

/**
 * Store arbitrary data associated with the specified element. Returns the value that was set.
 * 
 * <p><strong>Note:</strong> This is a low-level method; a more convenient <code><a href="/data">.data()</a></code> is also available.</p>
 * 	<p>The <code>jQuery.data()</code> method allows us to attach data of any type to DOM elements in a way that is safe from circular references and therefore free from memory leaks. jQuery ensures that the data is removed when DOM elements are removed via jQuery methods, and when the user leaves the page. We can set several distinct values for a single element and retrieve them later:</p>
 * <pre>
 * jQuery.data(document.body, 'foo', 52);
 * jQuery.data(document.body, 'bar', 'test');
 * </pre>
 * <p><em>Note:</em> this method currently does not provide cross-platform support for setting data on XML documents, as Internet Explorer does not allow data to be attached via expando properties.</p>
 * 
 * @example
 * <p>Store then retrieve a value from the div element.</p>
 * <pre><code>var div = $("div")[0];
 *     jQuery.data(div, "test", { first: 16, last: "pizza!" });
 *     $("span:first").text(jQuery.data(div, "test").first);
 *     $("span:last").text(jQuery.data(div, "test").last);</code></pre>
 * 
 * @param {Element} element The DOM element to associate with the data.
 * @param {String} key A string naming the piece of data to set.
 * @param {Object} value The new data value.
 * 
 * @since 1.2.3
 * @returns {Object}
**/
jQuery.data = function(element, key, value) {return new Object();};

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
 * @param {String} key Name of the data stored.
 * 
 * @since 1.2.3
 * @returns {Object}
**/
jQuery.data = function(element, key) {return new Object();};

/**
 * Execute the next function on the queue for the matched element.
 * 
 * <p><strong>Note:</strong> This is a low-level method, you should probably use <code><a href="/dequeue">.dequeue()</a></code> instead.</p>
 * <p>When <code>jQuery.dequeue()</code> is called, the next function on the queue is removed from the queue, and then executed. This function should in turn (directly or indirectly) cause <code>jQuery.dequeue()</code> to be called, so that the sequence can continue.</p>
 * @example
 * <p>Use dequeue to end a custom queue function which allows the queue to keep going.</p>
 * <pre><code>$("button").click(function () {
 *       $("div").animate({left:'+=200px'}, 2000);
 *       $("div").animate({top:'0px'}, 600);
 *       $("div").queue(function () {
 *         $(this).toggleClass("red");
 *          $.dequeue( this );
 *               });
 *       $("div").animate({left:'10px', top:'30px'}, 700);
 *     });</code></pre>
 * 
 * @param {Element} element A DOM element from which to remove and execute a queued function.
 * @param {String} queueName A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * 
 * @since 1.3
 * @returns {jQuery}
**/
jQuery.dequeue = function(element, queueName) {return new jQuery();};

/**
 * Show the queue of functions to be executed on the matched element.
 * 
 * <p><strong>Note:</strong> This is a low-level method, you should probably use <code><a href="/queue">.queue()</a></code> instead.</p>
 * @example
 * <p>Show the length of the queue.</p>
 * <pre><code>$("#show").click(function () {
 *       var n = jQuery.queue( $("div")[0], "fx" );
 *       $("span").text("Queue length is: " + n.length);
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
 * @param {Element} element A DOM element to inspect for an attached queue.
 * @param {String} queueName A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * 
 * @since 1.3
 * @returns {Array}
**/
jQuery.queue = function(element, queueName) {return new Array();};

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
 * @param {Element} element A DOM element where the array of queued functions is attached.
 * @param {String} queueName A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @param {Array} newQueue An array of functions to replace the current queue contents.
 * 
 * @since 1.3
 * @returns {jQuery}
**/
jQuery.queue = function(element, queueName, newQueue) {return new jQuery();};

/**
 * Remove from the queue all items that have not yet been run.
 * 
 * <p>When the <code>.clearQueue()</code> method is called, all functions on the queue that have not been executed are removed from the queue. When used without an argument, <code>.clearQueue()</code> removes the remaining functions from <code>fx</code>, the standard effects queue. In this way it is similar to <code>.stop(true)</code>. However,  while the <code>.stop()</code> method is meant to be used only with animations, <code>.clearQueue()</code> can also be used to remove any function that has been added to a generic jQuery queue with the <code>.queue()</code> method. </p>
 * @example
 * <p>Empty the queue.</p>
 * <pre><code>$("#start").click(function () {
 *   $("div").show("slow");
 *   $("div").animate({left:'+=200'},5000);
 *   $("div").queue(function () {
 *     $(this).addClass("newcolor");
 *     $(this).dequeue();
 *   });
 *   $("div").animate({left:'-=200'},1500);
 *   $("div").queue(function () {
 *     $(this).removeClass("newcolor");
 *     $(this).dequeue();
 *   });
 *   $("div").slideUp();
 * });
 * $("#stop").click(function () {
 *   $("div").clearQueue();
 *   $("div").stop();
 * });</code></pre>
 * 
 * @param {String} queueName A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.clearQueue = function(queueName) {return new jQuery();};

/**
 * Retrieve all the DOM elements contained in the jQuery set, as an array.
 * 
 * <p><code>.toArray()</code> returns all of the elements in the jQuery set:</p>
 * <pre>alert($('li').toArray());</pre>
 * <p>All of the matched DOM nodes are returned by this call, contained in a standard array:</p>
 * <p><span class="result">[&lt;li id="foo"&gt;, &lt;li id="bar"&gt;]</span></p>
 * @example
 * <p>Selects all divs in the document and returns the DOM Elements as an Array, then uses the built-in reverse-method to reverse that array.</p>
 * <pre><code>
 * 
 *     function disp(divs) {
 *       var a = [];
 *       for (var i = 0; i < divs.length; i++) {
 *         a.push(divs[i].innerHTML);
 *       }
 *       $("span").text(a.join(" "));
 *     }
 *     
 *     disp( $("div").toArray().reverse() );
 * </code></pre>
 * 
 * @since 1.4
 * @returns {Array}
**/
jQuery.prototype.toArray = function() {return new Array();};

/**
 * Check to see if an object is empty (contains no properties).
 * 
 * <p>As of jQuery 1.4 this method checks both properties on the object itself and properties inherited from prototypes (in that it doesn't use hasOwnProperty). The argument should be a plain JavaScript object; other types of object (DOM elements, primitive strings/numbers, host objects) may not give consistent results across browsers. To determine if an object is a plain JavaScript object, use <a href="http://api.jquery.com/jQuery.isPlainObject"><code>$.isPlainObject()</code></a></p>
 * @example
 * <p>Check an object to see if it's empty.</p>
 * <pre><code>jQuery.isEmptyObject({}) // true
 * jQuery.isEmptyObject({ foo: "bar" }) // false</code></pre>
 * 
 * @param {Object} object The object that will be checked to see if it's empty.
 * 
 * @since 1.4
 * @returns {Boolean}
**/
jQuery.isEmptyObject = function(object) {return new Boolean();};

/**
 * Check to see if an object is a plain object (created using "{}" or "new Object").
 * 
 * <longdesc/>
 * @example
 * <p>Check an object to see if it's a plain object.</p>
 * <pre><code>jQuery.isPlainObject({}) // true
 * jQuery.isPlainObject("test") // false</code></pre>
 * 
 * @param {Object} object The object that will be checked to see if it's a plain object.
 * 
 * @since 1.4
 * @returns {Boolean}
**/
jQuery.isPlainObject = function(object) {return new Boolean();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.keydown = function(handler) {return new jQuery();};

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
 * @since 1.4
 * @returns {Number}
**/
jQuery.prototype.index = function() {return 0;};

/**
 * Remove a previously-stored piece of data.
 * 
 * <p>The <code>.removeData()</code> method allows us to remove values that were previously set using <code>.data()</code>. When called with the name of a key, <code>.removeData()</code> deletes that particular value; when called with no arguments, all values are removed.</p><p>NOTE: Starting with jQuery 1.4.3, calling <code>.removeData()</code> will cause the value of the property being removed to revert to the value of the data attribute of the same name in the DOM, rather than being set to <code>undefined</code>.</p>
 * @example
 * <p>Set a data store for 2 names then remove one of them.</p>
 * <pre><code>
 * 
 *     $("span:eq(0)").text("" + $("div").data("test1"));
 *     $("div").data("test1", "VALUE-1");
 *     $("div").data("test2", "VALUE-2");
 *     $("span:eq(1)").text("" + $("div").data("test1"));
 *     $("div").removeData("test1");
 *     $("span:eq(2)").text("" + $("div").data("test1"));
 *     $("span:eq(3)").text("" + $("div").data("test2"));
 * 
 * </code></pre>
 * 
 * @param {String} name A string naming the piece of data to delete.
 * 
 * @since 1.2.3
 * @returns {jQuery}
**/
jQuery.prototype.removeData = function(name) {return new jQuery();};

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
 * Returns value at named data store for the first element in the jQuery collection, as set by data(name, value).
 * 
 * 
 * <p>The <code>.data()</code> method allows us to attach data of any type to DOM elements in a way that is safe from circular references and therefore from memory leaks. We can retrieve several distinct values for a single element one at a time, or as a set:</p>
 * <pre>
 * alert($('body').data('foo'));
 * alert($('body').data());
 * </pre>
 * <p>The above lines alert the data values that were set on the <code>body</code> element. If nothing was set on that element, null is returned.</p>
 * 
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
 * Retrieve the DOM elements matched by the jQuery object.
 * 
 * <p>The <code>.get()</code> method grants us access to the DOM nodes underlying each jQuery object. Suppose we had a simple unordered list on the page:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li id="foo"&gt;foo&lt;/li&gt;
 *   &lt;li id="bar"&gt;bar&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>Without a parameter, <code>.get()</code> returns all of the elements:</p>
 * <pre>alert($('li').get());</pre>
 * <p>All of the matched DOM nodes are returned by this call, contained in a standard array:</p>
 * <p><span class="result">[&lt;li id="foo"&gt;, &lt;li id="bar"&gt;]</span></p>
 * <p>With an index specified, .get() will retrieve a single element:</p>
 * <pre>($('li').get(0));</pre>
 * <p>Since the index is zero-based, the first list item is returned:</p>
 * <p><span class="output">&lt;li id="foo"&gt;</span></p>
 * <p>Each jQuery object also masquerades as an array, so we can use the array dereferencing operator to get at the list item instead:</p>
 * <pre>alert($('li')[0]);</pre>
 * <p>However, this syntax lacks some of the additional capabilities of .get(), such as specifying a negative index:</p>
 * <pre>alert($('li').get(-1));</pre>
 * <p>A negative index is counted from the end of the matched set, so this example will return the last item in the list:</p>
 * <p><span class="output">&lt;li id="bar"&gt;</span></p>
 * @example
 * <p>Selects all divs in the document and returns the DOM Elements as an Array, then uses the built-in reverse-method to reverse that array.</p>
 * <pre><code>
 * 
 *     function disp(divs) {
 *       var a = [];
 *       for (var i = 0; i < divs.length; i++) {
 *         a.push(divs[i].innerHTML);
 *       }
 *       $("span").text(a.join(" "));
 *     }
 *     
 *     disp( $("div").get().reverse() );
 * </code></pre>
 * @example
 * <p>Gives the tag name of the element clicked on.</p>
 * <pre><code>
 * 
 *     $("*", document.body).click(function (e) {
 *       e.stopPropagation();
 *       var domEl = $(this).get(0);
 *       $("span:first").text("Clicked on - " + domEl.tagName);
 *     });
 * </code></pre>
 * 
 * @param {Number} index A zero-based integer indicating which element to retrieve.
 * 
 * @since 1.0
 * @returns {Element}
**/
jQuery.prototype.get = function(index) {return new Element();};

/**
 * Return the number of elements in the jQuery object.
 * 
 * 
 * <p>The <code>.size()</code> method is functionally equivalent to the <code><a href="http://api.jquery.com/length/">.length</a></code> property; however, <strong>the <code>.length</code> property is preferred</strong> because it does not have the overhead of a function call.</p>
 * <p>Given a simple unordered list on the page:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li&gt;foo&lt;/li&gt;
 *   &lt;li&gt;bar&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>Both <code>.size()</code> and <code>.length</code> identify the number of items:</p>
 * <pre>alert( "Size: " + $("li").size() );
 * alert( "Size: " + $("li").length );</pre>
 * <p>This results in two alerts:</p>
 * <p><span class="output">Size: 2</span></p>
 * <p><span class="output">Size: 2</span></p>
 * 
 * @example
 * <p>Count the divs. Click to add more.</p>
 * <pre><code>
 * $(document.body)
 * .click(function() { 
 *   $(this).append( $("<div>") );
 *   var n = $("div").size();
 *   $("span").text("There are " + n + " divs. Click to add more.");
 * })
 * // trigger the click to start
 * .click(); 
 * </code></pre>
 * 
 * @since 1.0
 * @returns {Number}
**/
jQuery.prototype.size = function() {return 0;};

/**
 * Relinquish jQuery's control of the <code>$</code> variable.
 * 
 * <p>Many JavaScript libraries use <code> $</code> as a function or variable name, just as jQuery does. In jQuery's case, <code> $</code> is just an alias for <code>jQuery</code>, so all functionality is available without using <code> $</code>. If we need to use another JavaScript library alongside jQuery, we can return control of <code> $</code> back to the other library with a call to <code>$.noConflict()</code>:</p>
 * <pre>
 * &lt;script type="text/javascript" src="other_lib.js"&gt;&lt;/script&gt;
 * &lt;script type="text/javascript" src="jquery.js"&gt;&lt;/script&gt;
 * &lt;script type="text/javascript"&gt;
 *   $.noConflict();
 *   // Code that uses other library's $ can follow here.
 * &lt;/script&gt;
 * </pre>
 * <p>This technique is especially effective in conjunction with the .ready() method's ability to alias the jQuery object, as within callback passed to .ready() we can use $ if we wish without fear of conflicts later:</p>
 * <pre>
 * &lt;script type="text/javascript" src="other_lib.js"&gt;&lt;/script&gt;
 * &lt;script type="text/javascript" src="jquery.js"&gt;&lt;/script&gt;
 * &lt;script type="text/javascript"&gt;
 *   $.noConflict();
 *   jQuery(document).ready(function($) {
 *     // Code that uses jQuery's $ can follow here.
 *   });
 *   // Code that uses other library's $ can follow here.
 * &lt;/script&gt;
 * </pre>
 * <p>If necessary, we can free up the <code> jQuery</code> name as well by passing <code>true</code> as an argument to the method. This is rarely necessary, and if we must do this (for example, if we need to use multiple versions of the <code>jQuery</code> library on the same page), we need to consider that most plug-ins rely on the presence of the jQuery variable and may not operate correctly in this situation.</p>
 * 
 * @example
 * <p>Maps the original object that was referenced by $ back to $.</p>
 * <pre><code>jQuery.noConflict();
 * // Do something with jQuery
 * jQuery("div p").hide();
 * // Do something with another library's $()
 * $("content").style.display = 'none';</code></pre>
 * @example
 * <p>Reverts the $ alias and then creates and executes a function to provide the $ as a jQuery alias inside the functions scope. Inside the function the original $ object is not available. This works well for most plugins that don't rely on any other library.  
 * 
 * </p>
 * <pre><code>jQuery.noConflict();
 * (function($) { 
 *   $(function() {
 *     // more code using $ as alias to jQuery
 *   });
 * })(jQuery);
 * // other code using $ as an alias to the other library</code></pre>
 * @example
 * <p>You can chain the jQuery.noConflict() with the shorthand ready for a compact code.
 * </p>
 * <pre><code>jQuery.noConflict()(function(){
 *     // code using jQuery
 * }); 
 * // other code using $ as an alias to the other library</code></pre>
 * @example
 * <p>Creates a different alias instead of jQuery to use in the rest of the script.</p>
 * <pre><code>var j = jQuery.noConflict();
 * // Do something with jQuery
 * j("div p").hide();
 * // Do something with another library's $()
 * $("content").style.display = 'none';</code></pre>
 * @example
 * <p>Completely move jQuery to a new namespace in another object.</p>
 * <pre><code>var dom = {};
 * dom.query = jQuery.noConflict(true);</code></pre>
 * 
 * @param {Boolean} removeAll A Boolean indicating whether to remove all jQuery variables from the global scope (including jQuery itself).
 * 
 * @since 1.0
 * @returns {Object}
**/
jQuery.noConflict = function(removeAll) {return new Object();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.scroll = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.resize = function(handler) {return new jQuery();};

/**
 * Execute the next function on the queue for the matched elements.
 * 
 * <p>When <code>.dequeue()</code> is called, the next function on the queue is removed from the queue, and then executed. This function should in turn (directly or indirectly) cause <code>.dequeue()</code> to be called, so that the sequence can continue.</p>
 * @example
 * <p>Use dequeue to end a custom queue function which allows the queue to keep going.</p>
 * <pre><code>
 * $("button").click(function () {
 *   $("div").animate({left:'+=200px'}, 2000);
 *   $("div").animate({top:'0px'}, 600);
 *   $("div").queue(function () {
 *     $(this).toggleClass("red");
 *     $(this).dequeue();
 *   });
 *   $("div").animate({left:'10px', top:'30px'}, 700);
 * });
 * </code></pre>
 * 
 * @param {String} queueName A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.dequeue = function(queueName) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.keyup = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.keypress = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.submit = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.select = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.change = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.blur = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.focus = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mousemove = function(handler) {return new jQuery();};

/**
 * Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
 * 
 * 
 * <p>The <code>.hover()</code> method binds handlers for both <code>mouseenter</code> and <code>mouseleave</code> events. You can use it to simply apply behavior to an element during the time the mouse is within the element.</p>
 * <p>Calling <code>$(selector).hover(handlerIn, handlerOut)</code> is shorthand for:</p>
 * <pre>$(selector).mouseenter(handlerIn).mouseleave(handlerOut);</pre>
 * <p>See the discussions for <code><a href="/mouseenter">.mouseenter()</a></code> and <code><a href="/mouseleave">.mouseleave()</a></code> for more details.</p>
 * 
 * @example
 * <p>To add a special style to list items that are being hovered over, try:</p>
 * <pre><code>
 * $("li").hover(
 *   function () {
 *     $(this).append($("<span> ***</span>"));
 *   }, 
 *   function () {
 *     $(this).find("span:last").remove();
 *   }
 * );
 * 
 * 
 * 
 * //li with fade class
 * $("li.fade").hover(function(){$(this).fadeOut(100);$(this).fadeIn(500);});
 * 
 * </code></pre>
 * @example
 * <p>To add a special style to table cells that are being hovered over, try:</p>
 * <pre><code>$("td").hover(
 *   function () {
 *     $(this).addClass("hover");
 *   },
 *   function () {
 *     $(this).removeClass("hover");
 *   }
 * );</code></pre>
 * @example
 * <p>To unbind the above example use:</p>
 * <pre><code>$("td").unbind('mouseenter mouseleave');</code></pre>
 * 
 * @param {Function} handlerIn A function to execute when the mouse pointer enters the element.
 * @param {Function} handlerOut A function to execute when the mouse pointer leaves the element.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.hover = function(handlerIn, handlerOut) {return new jQuery();};

/**
 * Bind a single handler to the matched elements, to be executed when the mouse pointer enters or leaves the elements.
 * 
 * 
 * <p>The <code>.hover()</code> method, when passed a single function, will execute that handler for both <code>mouseenter</code> and <code>mouseleave</code> events. This allows the user to use jQuery's various toggle methods within the handler or to respond differently within the handler depending on the <code>event.type</code>.</p>
 * <p>Calling <code>$(selector).hover(handlerInOut)</code> is shorthand for:</p>
 * <pre>$(selector).bind("mouseenter mouseleave", handlerInOut);</pre>
 * <p>See the discussions for <code><a href="/mouseenter">.mouseenter()</a></code> and <code><a href="/mouseleave">.mouseleave()</a></code> for more details.</p>
 * 
 * @example
 * <p>Slide the next sibling LI up or down on hover, and toggle a class.</p>
 * <pre><code>
 * $("li")
 * .filter(":odd")
 * .hide()
 *  .end()
 * .filter(":even")
 * .hover(
 *   function () {
 *     $(this).toggleClass("active")
 *       .next().stop(true, true).slideToggle();
 *   }
 * );
 * 
 * 
 * </code></pre>
 * 
 * @param {Function} handlerInOut A function to execute when the mouse pointer enters or leaves the element.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.hover = function(handlerInOut) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mouseleave = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mouseenter = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mouseout = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mouseover = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.dblclick = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.click = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mouseup = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.mousedown = function(handler) {return new jQuery();};

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
 * @param {Function} handler A function to execute when the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.error = function(handler) {return new jQuery();};

/**
 * Bind an event handler to the "unload" JavaScript event.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('unload', handler)</code>.</p>
 * <p>The <code>unload</code> event is sent to the <code>window</code> element when the user navigates away from the page. This could mean one of many things. The user could have clicked on a link to leave the page, or typed in a new URL in the address bar. The forward and back buttons will trigger the event. Closing the browser window will cause the event to be triggered. Even a page reload will first create an <code>unload</code> event.</p>
 * <blockquote><p>The exact handling of the <code>unload</code> event has varied from version to version of browsers. For example, some versions of Firefox trigger the event when a link is followed, but not when the window is closed. In practical usage, behavior should be tested on all supported browsers, and contrasted with the proprietary <code>beforeunload</code> event.</p></blockquote>
 * <p>Any <code>unload</code> event handler should be bound to the <code>window</code> object:</p>
 * <pre>$(window).unload(function() {
 *   alert('Handler for .unload() called.');
 * });
 * </pre>
 * <p>After this code executes, the alert will be displayed whenever the browser leaves the current page.
 * It is not possible to cancel the <code>unload</code> event with <code>.preventDefault()</code>. This event is available so that scripts can perform cleanup when the user leaves the page.
 * </p>
 * 
 * @example
 * <p>To display an alert when a page is unloaded:</p>
 * <pre><code>$(window).unload( function () { alert("Bye now!"); } );</code></pre>
 * 
 * @param {Function} handler A function to execute when the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.unload = function(handler) {return new jQuery();};

/**
 * Bind an event handler to the "load" JavaScript event.
 * 
 * 
 *   <p>This method is a shortcut for <code>.bind('load', handler)</code>.</p>
 *   <p>The <code>load</code> event is sent to an element when it and all sub-elements have been completely loaded. This event can be sent to any element associated with a URL: images, scripts, frames, iframes, and the <code>window</code> object.</p>
 * <p>For example, consider a page with a simple image:</p>
 * <pre>&lt;img src="book.png" alt="Book" id="book" /&gt;</pre>
 * <p>The event handler can be bound to the image:</p>
 * <pre>$('#book').load(function() {
 *   // Handler for .load() called.
 * });</pre>
 * <p>As soon as the image has been loaded, the handler is called.</p>
 * <p>In general, it is not necessary to wait for all images to be fully loaded. If code can be executed earlier, it is usually best to place it in a handler sent to the <code>.ready()</code> method.
 * </p>
 * <blockquote><p>The Ajax module also has a method named <code><a href="/load">.load()</a></code>. Which one is fired depends on the set of arguments passed.</p></blockquote>
 * <blockquote><p>
 * <b>Caveats of the <code>load</code> event when used with images</b>
 * <p>A common challenge developers attempt to solve using the <code>.load()</code> shortcut is to execute a function when an image (or collection of images) have completely loaded. There are several known caveats with this that should be noted. These are:</p>
 * <ul><li>It doesn't work consistently nor reliably cross-browser</li>
 * <li>It doesn't fire correctly in WebKit if the image src is set to the same src as before</li>
 * <li>It doesn't correctly bubble up the DOM tree</li>
 * <li>Can cease to fire for images that already live in the browser's cache</li>
 * </ul></p></blockquote>
 * 
 * @example
 * <p>Run a function when the page is fully loaded including graphics.</p>
 * <pre><code>$(window).load(function () {
 *   // run code
 * });</code></pre>
 * @example
 * <p>Add the class bigImg to all images with height greater then 100 upon each image load.</p>
 * <pre><code>$('img.userIcon').load(function(){
 *   if($(this).height() > 100) {
 *     $(this).addClass('bigImg');
 *   }
 * });</code></pre>
 * 
 * @param {Function} handler A function to execute when the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.load = function(handler) {return new jQuery();};

/**
 * Specify a function to execute when the DOM is fully loaded.
 * 
 * 
 * <p>While JavaScript provides the <code>load</code> event for executing code when a page is rendered, this event does not get triggered until all assets such as images have been completely received. In most cases, the script can be run as soon as the DOM hierarchy has been fully constructed. The handler passed to <code>.ready()</code> is guaranteed to be executed after the DOM is ready, so this is usually the best place to attach all other event handlers and run other jQuery code.  When using scripts that rely on the value of CSS style properties, it's important to reference external stylesheets or embed style elements before referencing the scripts.</p>
 * <p>In cases where code relies on loaded assets (for example, if the dimensions of an image are required), the code should be placed in a handler for the <code>load</code> event instead.</p>
 * 
 * <blockquote><p>The <code>.ready()</code> method is generally incompatible with the <code>&lt;body onload=""&gt;</code> attribute. If <code>load</code> must be used, either do not use <code>.ready()</code> or use jQuery's <code>.load()</code> method to attach <code>load</code> event handlers to the window or to more specific items, like images.
 * </p></blockquote>
 * <p>All three of the following syntaxes are equivalent:</p>
 *  <ul>
 *    <li><code>$(document).ready(handler)</code></li>
 *    <li><code>$().ready(handler)</code> (this is not recommended)</li>
 *    <li><code>$(handler)</code></li>
 *  </ul>
 * <p>There is also <code>$(document).bind("ready", handler)</code>. This behaves similarly to the ready method but with one exception: If the ready event has already fired and you try to <code>.bind("ready")</code> the bound handler will not be executed. Ready handlers bound this way are executed <em>after</em> any bound by the other three methods above.</p>
 *  <p>The <code>.ready()</code> method can only be called on a jQuery object matching the current document, so the selector can be omitted.</p>
 * <p>The <code>.ready()</code> method is typically used with an anonymous function:</p>
 * <pre>$(document).ready(function() {
 *   // Handler for .ready() called.
 * });</pre>
 * <p>Which is equivalent to calling:</p>
 * <pre>$(function() {
 *  // Handler for .ready() called.
 * });</pre>
 * <p>If <code>.ready()</code> is called after the DOM has been initialized, the new handler passed in will be executed immediately.</p>
 * <h4>Aliasing the jQuery Namespace</h4>
 * <p>When using another JavaScript library, we may wish to call <code><a href="/jQuery.noConflict">$.noConflict()</a></code> to avoid namespace difficulties. When this function is called, the <code>$</code> shortcut is no longer available, forcing us to write <code>jQuery</code> each time we would normally write <code>$</code>. However, the handler passed to the <code>.ready()</code> method can take an argument, which is passed the global <code>jQuery</code> object. This means we can rename the object within the context of our <code>.ready()</code> handler without affecting other code:</p>
 * <pre>jQuery(document).ready(function($) {
 *   // Code using $ as usual goes here.
 * });</pre>
 * 
 * @example
 * <p>Display a message when the DOM is loaded.</p>
 * <pre><code><code location="head">$(document).ready(function () {
 *   $("p").text("The DOM is now loaded and can be manipulated.");
 * });</code></pre>
 * 
 * @param {Function} handler A function to execute after the DOM is ready.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.ready = function(handler) {return new jQuery();};

/**
 * Remove all event handlers previously attached using <code>.live()</code> from the elements.
 * 
 * 
 * <p>Any handler that has been attached with <code>.live()</code> can be removed with <code>.die()</code>. This method is analogous to calling <code>.unbind()</code> with no arguments, which is used to remove all handlers attached with <code>.bind()</code>.
 * See the discussions of <code>.live()</code> and <code>.unbind()</code> for further details.</p>
 * <p><strong>Note:</strong> Up to jQuery 1.4.4, in order for .die() to function correctly, the selector used with it must match exactly the selector initially used with .live().</p>
 * 
 * @since 1.4.1
 * @returns {jQuery}
**/
jQuery.prototype.die = function() {return new jQuery();};

/**
 * Remove an event handler previously attached using <code>.live()</code> from the elements.
 * 
 * 
 * <p>Any handler that has been attached with <code>.live()</code> can be removed with <code>.die()</code>. This method is analogous to <code>.unbind()</code>, which is used to remove handlers attached with <code>.bind()</code>.
 * See the discussions of <code>.live()</code> and <code>.unbind()</code> for further details.</p>
 * <p><strong>Note:</strong> Up to jQuery 1.4.4, in order for <code>.die()</code> to function correctly, the selector used with it must match exactly the selector initially used with <code>.live()</code>.</p>
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
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>keydown</code>.
 * @param {String} handler The function that is no longer to be executed.
 * 
 * @since 1.3
 * @returns {jQuery}
**/
jQuery.prototype.die = function(eventType, handler) {return new jQuery();};

/**
 * Contains flags for the useragent, read from navigator.userAgent. <strong>We recommend against using this property; please try to use feature detection instead (see jQuery.support). jQuery.browser may be moved to a plugin in a future release of jQuery.</strong> 
 * @example
 * <p>Show the browser info.</p>
 * <pre><code>
 *     jQuery.each(jQuery.browser, function(i, val) {
 *       $("<div>" + i + " : <span>" + val + "</span>")
 *                 .appendTo( document.body );
 *     });</code></pre>
 * @example
 * <p>Returns true if the current useragent is some version of Microsoft's Internet Explorer.</p>
 * <pre><code>
 *   $.browser.msie;
 * </code></pre>
 * @example
 * <p>Alerts "this is WebKit!" only for WebKit browsers</p>
 * <pre><code>
 *   if ($.browser.webkit) {
 *     alert( "this is webkit!" );
 *   }
 * </code></pre>
 * @example
 * <p>Alerts "Do stuff for Firefox 3" only for Firefox 3 browsers.</p>
 * <pre><code>
 *   var ua = $.browser;
 *   if ( ua.mozilla && ua.version.slice(0,3) == "1.9" ) {
 *     alert( "Do stuff for firefox 3" );
 *   }
 * </code></pre>
 * @example
 * <p>Set a CSS property that's specific to a particular browser.</p>
 * <pre><code>
 *  if ( $.browser.msie ) {
 *     $("#div ul li").css( "display","inline" );
 *  } else {
 *     $("#div ul li").css( "display","inline-table" );
 *  }
 * </code></pre>
 * 
 * @since 1.0
 * @type Map
**/
jQuery.browser = new Map();

/**
 * The version number of the rendering engine for the user's browser.
 * @example
 * <p>Returns the version number of the rendering engine used by the user's current browser. For example, FireFox 4 returns 2.0 (the version of the Gecko rendering engine it utilizes).</p>
 * <pre><code>
 * $("p").html( "The version number of the rendering engine your browser uses is: <span>" +
 *                 $.browser.version + "</span>" );
 * </code></pre>
 * @example
 * <p>Alerts the version of IE's rendering engine that is being used:</p>
 * <pre><code>
 * if ( $.browser.msie ) {
 *   alert( $.browser.version );
 * }
 * </code></pre>
 * @example
 * <p>Often you only care about the "major number," the whole number, which you can get by using JavaScript's built-in <code>parseInt()</code> function:</p>
 * <pre><code>
 * if ( $.browser.msie ) {
 *   alert( parseInt($.browser.version, 10) );
 * }
 * </code></pre>
 * 
 * @since 1.1.3
 * @type String
**/
jQuery.browser = "";

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
 * <pre>$('.clickme').die('click');</pre>
 *   <h4 id="event-delegation">Event Delegation</h4>
 *   <p>The <code>.live()</code> method is able to affect elements that have not yet been added to the DOM through the use of event delegation: a handler bound to an ancestor element is responsible for events that are triggered on its descendants. The handler passed to <code>.live()</code> is never bound to an element; instead, <code>.live()</code> binds a special handler to the root of the DOM tree. In the example above, when the new element is clicked, the following steps occur:</p>
 *   <ol>
 *     <li>A click event is generated and passed to the <code>&lt;div&gt;</code> for handling.</li>
 *     <li>No handler is directly bound to the <code>&lt;div&gt;</code>, so the event bubbles up the DOM tree.</li>
 *     <li>The event bubbles up until it reaches the root of the tree, which is where <code>.live()</code> binds its special handlers by default. <br/><em>* As of jQuery 1.4, event bubbling can optionally stop at a DOM element "context".</em></li>
 *     <li>The special <code>click</code> handler bound by <code>.live()</code> executes.</li>
 *     <li>This handler tests the <code>target</code> of the event object to see whether it should continue. This test is performed by checking if <code>$(event.target).closest('.clickme')</code> is able to locate a matching element.</li>
 *     <li>If a matching element is found, the original handler is called on it.</li>
 *   </ol>
 *   <p>Because the test in step 5 is not performed until the event occurs, elements can be added at any time and still respond to events.</p>
 *   <p>See the discussion for <code><a href="/bind">.bind()</a></code> for more information on event binding.</p>
 * 
 *   <h4 id="multiple-events">Multiple Events</h4>
 *   <p>As of jQuery 1.4.1 <code>.live()</code> can accept multiple, space-separated events, similar to the functionality provided in <a href="/bind">.bind()</a>. For example, you can "live bind" the <code>mouseover</code> and <code>mouseout</code> events at the same time like so: </p>
 * <pre>$('.hoverme').live('mouseover mouseout', function(event) {
 *   if (event.type == 'mouseover') {
 *     // do something on mouseover
 *   } else {
 *     // do something on mouseout
 *   }
 * });</pre>
 *   <p>As of jQuery 1.4.3, you can bind multiple live event handlers simultaneously by passing a map of event type/handler pairs:</p>
 * 
 * <pre>$('a').live({
 *   click: function() {
 *     // do something on click
 *   },
 *   mouseover: function() {
 *     // do something on mouseover
 *   }
 * });</pre>
 *   <h4 id="event-data">Event Data</h4>
 *   <p>As of jQuery 1.4, the optional <code>eventData</code> parameter allows us to pass additional information to the handler. One handy use of this parameter is to work around issues caused by closures. See the <code>.bind()</code> method's "<a href="/bind/#passing-event-data">Passing Event Data</a>" discussion for more information.</p>
 *   <h4 id="event-context">Event Context</h4>
 *   <p>As of jQuery 1.4, live events can be bound to a DOM element "context" rather than to the default document root. To set this context, use the <a href="http://api.jquery.com/jquery/#selector-context"><code>jQuery()</code> function's second argument</a>, passing in a single DOM element (as opposed to a jQuery collection or a selector).</p>
 * <pre>$('div.clickme', $('#container')[0]).live('click', function() {
 *   // Live handler called.
 * });</pre>
 *   <p>The live handler in this example is called only when <code>&lt;div class="clickme"&gt;</code> is a descendant of an element with an ID of "container."</p>
 *   <h4 id="caveats">Caveats</h4>
 *   <p>The <code>.live()</code> technique is useful, but due to its special approach cannot be simply substituted for <code>.bind()</code> in all cases. Specific differences include:</p>
 *   <ul>
 *     <li>DOM traversal methods are not supported for finding elements to send to <code>.live()</code>. Rather, the <code>.live()</code> method should always be called directly after a selector, as in the example above.</li>
 *     <li>To stop further handlers from executing after one bound using <code>.live()</code>, the handler must return <code>false</code>. Calling <code>.stopPropagation()</code> will not accomplish this.</li>
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
 *     $("p").live("click", function(){
 *       $(this).after("<p>Another paragraph!</p>");
 *     });
 * </code></pre>
 * @example
 * <p>Display each paragraph's text in an alert box whenever it is clicked:</p>
 * <pre><code>$("p").live("click", function(){
 *   alert( $(this).text() );
 * });</code></pre>
 * @example
 * <p>Cancel a default action and prevent it from bubbling up, return false:</p>
 * <pre><code>$("a").live("click", function() { return false; })</code></pre>
 * @example
 * <p>To cancel only the default action by using the preventDefault method.</p>
 * <pre><code>$("a").live("click", function(event){
 *   event.preventDefault();
 * });</code></pre>
 * @example
 * <p>Bind custom events:</p>
 * <pre><code>
 *   $("p").live("myCustomEvent", function(e, myName, myValue) {
 *     $(this).text("Hi there!");
 *     $("span").stop().css("opacity", 1)
 *              .text("myName = " + myName)
 *              .fadeIn(30).fadeOut(1000);
 *   });
 *   $("button").click(function () {
 *     $("p").trigger("myCustomEvent");
 *   });
 * </code></pre>
 * @example
 * <p>Click a paragraph to add another. Note that .live() binds the click, mouseover, and mouseout events to all paragraphs - even new ones.</p>
 * <pre><code>
 *   $("p").live("click", function(){
 *       $(this).after("<p>Another paragraph!</p>");
 *     });
 *     $("p").live({
 *       "mouseover": function() {
 *         $(this).addClass("over");
 *       },
 *       "mouseout": function() {
 *         $(this).removeClass("over");
 *       }
 *     });
 * </code></pre>
 * 
 * @param {String} eventType A string containing a JavaScript event type, such as "click" or "keydown." As of jQuery 1.4 the string can contain multiple, space-separated event types or custom event names, as well.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * 
 * @since 1.3
 * @returns {jQuery}
**/
jQuery.prototype.live = function(eventType, handler) {return new jQuery();};

/**
 * Execute all handlers attached to an element for an event.
 * 
 * 
 *     <p>The <code>.triggerHandler()</code> method behaves similarly to <code>.trigger()</code>, with the following exceptions:</p>
 *     <ul>
 *     <li>The <code>.triggerHandler()</code> method does not cause the default behavior of an event to occur (such as a form submission).</li>
 *     <li>While <code>.trigger()</code> will operate on all elements matched by the jQuery object, <code>.triggerHandler()</code> only affects the first matched element.</li>
 *     <li>Events created with <code>.triggerHandler()</code> do not bubble up the DOM hierarchy; if they are not handled by the target element directly, they do nothing.</li>
 *     <li>Instead of returning the jQuery object (to allow chaining), <code>.triggerHandler()</code> returns whatever value was returned by the last handler it caused to be executed. If no handlers are triggered, it returns <code>undefined</code></li>
 *     </ul>
 *     <p>For more information on this method, see the discussion for <code><a href="/trigger">.trigger()</a></code>.</p>
 *   
 * @example
 * <p>If you called .triggerHandler() on a focus event - the browser's default focus action would not be triggered, only the event handlers bound to the focus event.</p>
 * <pre><code>
 * 
 * $("#old").click(function(){
 * $("input").trigger("focus");
 * });
 * $("#new").click(function(){
 * $("input").triggerHandler("focus");
 * });
 * $("input").focus(function(){
 * $("<span>Focused!</span>").appendTo("body").fadeOut(1000);
 * });
 * 
 * </code></pre>
 * 
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Array} extraParameters An array of additional parameters to pass along to the event handler.
 * 
 * @since 1.2
 * @returns {Object}
**/
jQuery.prototype.triggerHandler = function(eventType, extraParameters) {return new Object();};

/**
 * Execute all handlers and behaviors attached to the matched elements for the given event type.
 * 
 * 
 *     <p>Any event handlers attached with <code>.bind()</code> or one of its shortcut methods are triggered when the corresponding event occurs. They can be fired manually, however, with the <code>.trigger()</code> method. A call to <code>.trigger()</code> executes the handlers in the same order they would be if the event were triggered naturally by the user:</p>
 *     <pre>$('#foo').bind('click', function() {
 *       alert($(this).text());
 *     });
 *     $('#foo').trigger('click');</pre>
 *     <p>As of jQuery 1.3, <code>.trigger()</code>ed events bubble up the DOM tree; an event handler can stop the bubbling by returning <code>false</code> from the handler or calling the <a href="http://api.jquery.com/event.stopPropagation/"><code>.stopPropagation()</code></a> method on the event object passed into the event. Although <code>.trigger()</code> simulates an event activation, complete with a synthesized event object, it does not perfectly replicate a naturally-occurring event.</p>
 *     <p>To trigger handlers bound via jQuery without also triggering the native event, use <a href="http://api.jquery.com/triggerHandler/"><code>.triggerHandler()</code></a> instead. </p>
 *     <p>When we define a custom event type using the <code>.bind()</code> method, the second argument to <code>.trigger()</code> can become useful. For example, suppose we have bound a handler for the <code>custom</code> event to our element instead of the built-in <code>click</code> event as we did above:</p>
 * <pre>$('#foo').bind('custom', function(event, param1, param2) {
 *   alert(param1 + "\n" + param2);
 * });
 * $('#foo').trigger('custom', ['Custom', 'Event']);
 * </pre>
 *     <p>The event object is always passed as the first parameter to an event handler, but if additional parameters are specified during a <code>.trigger()</code> call as they are here, these parameters will be passed along to the handler as well.</p>
 *     <p>Note the difference between the extra parameters we're passing here and the <code>eventData</code> parameter to the <a href="/bind/">.bind()</a> method. Both are mechanisms for passing information to an event handler, but the <code>extraParameters</code> argument to <code>.trigger()</code> allows information to be determined at the time the event is triggered, while the <code>eventData</code> argument to <code>.bind()</code> requires the information to be already computed at the time the handler is bound.</p>    
 *   
 * @example
 * <p>Clicks to button #2 also trigger a click for button #1.</p>
 * <pre><code>
 * $("button:first").click(function () {
 * update($("span:first"));
 * });
 * $("button:last").click(function () {
 * $("button:first").trigger('click');
 * 
 * update($("span:last"));
 * });
 * 
 * function update(j) {
 * var n = parseInt(j.text(), 10);
 * j.text(n + 1);
 * }
 * </code></pre>
 * @example
 * <p>To submit the first form without using the submit() function, try:</p>
 * <pre><code>$("form:first").trigger("submit")</code></pre>
 * @example
 * <p>To submit the first form without using the submit() function, try:</p>
 * <pre><code>var event = jQuery.Event("submit");
 * $("form:first").trigger(event);
 * if ( event.isDefaultPrevented() ) {
 * // Perform an action...
 * }</code></pre>
 * @example
 * <p>To pass arbitrary data to an event:</p>
 * <pre><code>$("p").click( function (event, a, b) {
 * // when a normal click fires, a and b are undefined
 * // for a trigger like below a refers to "foo" and b refers to "bar"
 * 
 * } ).trigger("click", ["foo", "bar"]);</code></pre>
 * @example
 * <p>To pass arbitrary data through an event object:</p>
 * <pre><code>var event = jQuery.Event("logged");
 * event.user = "foo";
 * event.pass = "bar";
 * $("body").trigger(event);</code></pre>
 * @example
 * <p>Alternative way to pass data through an event object:</p>
 * <pre><code>$("body").trigger({
 * type:"logged",
 * user:"foo",
 * pass:"bar"
 * 
 * });</code></pre>
 * 
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Array} extraParameters An array of additional parameters to pass along to the event handler.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.trigger = function(eventType, extraParameters) {return new jQuery();};

/**
 * Register a handler to be called when Ajax requests complete. This is an <a href="http://docs.jquery.com/Ajax_Events">Ajax Event</a>.
 * 
 * <p>Whenever an Ajax request completes, jQuery triggers the <code>ajaxComplete</code> event. Any and all handlers that have been registered with the <code>.ajaxComplete()</code> method are executed at this time.</p>
 * 				<p>To observe this method in action, we can set up a basic Ajax load request:</p>
 * 				<pre>&lt;div class="trigger"&gt;Trigger&lt;/div&gt;
 * &lt;div class="result"&gt;&lt;/div&gt;
 * &lt;div class="log"&gt;&lt;/div&gt;
 * </pre>
 * 				<p>We can attach our event handler to any element:</p>
 * 				<pre>$('.log').ajaxComplete(function() {
 *   $(this).text('Triggered ajaxComplete handler.');
 * });
 * </pre>
 * 				<p>Now, we can make an Ajax request using any jQuery method:</p>
 * 				<pre>$('.trigger').click(function() {
 *   $('.result').load('ajax/test.html');
 * });</pre>
 * 				<p>When the user clicks the button and the Ajax request completes, the log message is displayed.</p>
 * 
 * 				<p><strong>Note:</strong> Because <code>.ajaxComplete()</code> is implemented as a method of jQuery object instances, we can use the <code>this</code> keyword as we do here to refer to the selected elements within the callback function.</p>
 * 
 * 				<p>All <code>ajaxComplete</code> handlers are invoked, regardless of what Ajax request was completed. If we must differentiate between the requests, we can use the parameters passed to the handler. Each time an <code>ajaxComplete</code> handler is executed, it is passed the event object, the <code>XMLHttpRequest</code> object, and the settings object that was used in the creation of the request. For example, we can restrict our callback to only handling events dealing with a particular URL:</p>
 * 
 * <p><strong>Note:</strong> You can get the returned ajax contents by looking at <code>xhr.responseXML</code> or <code>xhr.responseHTML</code> for xml and html respectively.</p>
 * 
 * 				<pre>$('.log').ajaxComplete(function(e, xhr, settings) {
 *   if (settings.url == 'ajax/test.html') {
 *     $(this).text('Triggered ajaxComplete handler. The result is ' +
 *                      xhr.responseHTML);
 *   }
 * });</pre>
 * @example
 * <p>Show a message when an Ajax request completes.</p>
 * <pre><code>$("#msg").ajaxComplete(function(event,request, settings){
 *    $(this).append("<li>Request Complete.</li>");
 *  });</code></pre>
 * 
 * @param {Function} handler The function to be invoked.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.ajaxComplete = function(handler) {return new jQuery();};

/**
 * Attach a handler to an event for the elements. The handler is executed at most once per element.
 * 
 * 
 * <p>This method is identical to <code>.bind()</code>, except that the handler is unbound after its first invocation. For example:</p>
 * <pre>$("#foo").one("click", function() {
 *   alert("This will be displayed only once.");
 * });
 * </pre>
 * <p>After the code is executed, a click on the element with ID <code>foo</code> will display the alert. Subsequent clicks will do nothing. This code is equivalent to:</p>
 * <pre>$("#foo").bind("click", function( event ) {
 *   alert("This will be displayed only once.");
 *   $(this).unbind( event );
 * });
 * </pre>
 * <p>In other words, explicitly calling <code>.unbind()</code> from within a regularly-bound handler has exactly the same effect.</p>
 * <p>If the first argument contains more than one space-separated event types, the event handler is called <em>once for each event type</em>.</p>
 * 
 * @example
 * <p>Tie a one-time click to each div.</p>
 * <pre><code>
 * var n = 0;
 * $("div").one("click", function() {
 *   var index = $("div").index(this);
 *   $(this).css({ 
 *     borderStyle:"inset",
 *     cursor:"auto"
 *   });
 *   $("p").text("Div at index #" + index + " clicked." +
 *       "  That's " + ++n + " total clicks.");
 * });
 * 
 * </code></pre>
 * @example
 * <p>To display the text of all paragraphs in an alert box the first time each of them is clicked:</p>
 * <pre><code>$("p").one("click", function(){
 * alert( $(this).text() );
 * });</code></pre>
 * 
 * @param {String} eventType A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * 
 * @since 1.1
 * @returns {jQuery}
**/
jQuery.prototype.one = function(eventType, eventData, handler) {return new jQuery();};

/**
 * Encode a set of form elements as an array of names and values.
 * 
 * <p>The <code>.serializeArray()</code> method creates a JavaScript array of objects, ready to be encoded as a JSON string. It operates on a jQuery object representing a set of form elements. The form elements can be of several types:</p>
 * 				<pre>&lt;form&gt;
 *   &lt;div&gt;&lt;input type="text" name="a" value="1" id="a" /&gt;&lt;/div&gt;
 *   &lt;div&gt;&lt;input type="text" name="b" value="2" id="b" /&gt;&lt;/div&gt;
 *   &lt;div&gt;&lt;input type="hidden" name="c" value="3" id="c" /&gt;&lt;/div&gt;
 *   &lt;div&gt;
 *     &lt;textarea name="d" rows="8" cols="40"&gt;4&lt;/textarea&gt;
 *   &lt;/div&gt;
 *   &lt;div&gt;&lt;select name="e"&gt;
 *     &lt;option value="5" selected="selected"&gt;5&lt;/option&gt;
 *     &lt;option value="6"&gt;6&lt;/option&gt;
 *     &lt;option value="7"&gt;7&lt;/option&gt;
 *   &lt;/select&gt;&lt;/div&gt;
 *   &lt;div&gt;
 *     &lt;input type="checkbox" name="f" value="8" id="f" /&gt;
 *   &lt;/div&gt;
 *   &lt;div&gt;
 *     &lt;input type="submit" name="g" value="Submit" id="g" /&gt;
 *   &lt;/div&gt;
 * &lt;/form&gt;</pre>
 * 				<p>The <code>.serializeArray()</code> method uses the standard W3C rules for <a href="http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2">successful controls</a> to determine which elements it should include; in particular the element cannot be disabled and must contain a <code>name</code> attribute. No submit button value is serialized since the form was not submitted using a button. Data from file select elements is not serialized.</p>
 * <p>This method can act on a jQuery object that has selected individual form elements, such as <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;select&gt;</code>. However, it is typically easier to select the <code>&lt;form&gt;</code> tag itself for serialization:</p>
 * 				<pre>$('form').submit(function() {
 *   console.log($(this).serializeArray());
 *   return false;
 * });</pre>
 * 				<p>This produces the following data structure (provided that the browser supports <code>console.log</code>):</p>
 * 				<pre>[
 *   {
 *     name: a
 *     value: 1
 *   },
 *   {
 *     name: b
 *     value: 2
 *   },
 *   {
 *     name: c
 *     value: 3
 *   },
 *   {
 *     name: d
 *     value: 4
 *   },
 *   {
 *     name: e
 *     value: 5
 *   }
 * ]</pre>
 * @example
 * <p>Get the values from a form, iterate through them, and append them to a results display.</p>
 * <pre><code>
 * 
 *     function showValues() {
 *       var fields = $(":input").serializeArray();
 *       $("#results").empty();
 *       jQuery.each(fields, function(i, field){
 *         $("#results").append(field.value + " ");
 *       });
 *     }
 * 
 *     $(":checkbox, :radio").click(showValues);
 *     $("select").change(showValues);
 *     showValues();
 * </code></pre>
 * 
 * @since 1.2
 * @returns {Array}
**/
jQuery.prototype.serializeArray = function() {return new Array();};

/**
 * Encode a set of form elements as a string for submission.
 * 
 * <p>The <code>.serialize()</code> method creates a text string in standard URL-encoded notation. It operates on a jQuery object representing a set of form elements. The form elements can be of several types:</p>
 * 				<pre>&lt;form&gt;
 *   &lt;div&gt;&lt;input type="text" name="a" value="1" id="a" /&gt;&lt;/div&gt;
 *   &lt;div&gt;&lt;input type="text" name="b" value="2" id="b" /&gt;&lt;/div&gt;
 *   &lt;div&gt;&lt;input type="hidden" name="c" value="3" id="c" /&gt;&lt;/div&gt;
 *   &lt;div&gt;
 *     &lt;textarea name="d" rows="8" cols="40"&gt;4&lt;/textarea&gt;
 *   &lt;/div&gt;
 *   &lt;div&gt;&lt;select name="e"&gt;
 *     &lt;option value="5" selected="selected"&gt;5&lt;/option&gt;
 *     &lt;option value="6"&gt;6&lt;/option&gt;
 *     &lt;option value="7"&gt;7&lt;/option&gt;
 *   &lt;/select&gt;&lt;/div&gt;
 *   &lt;div&gt;
 *     &lt;input type="checkbox" name="f" value="8" id="f" /&gt;
 *   &lt;/div&gt;
 *   &lt;div&gt;
 *     &lt;input type="submit" name="g" value="Submit" id="g" /&gt;
 *   &lt;/div&gt;
 * &lt;/form&gt;</pre>
 * 				<p>The <code>.serialize()</code> method can act on a jQuery object that has selected individual form elements, such as <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;select&gt;</code>. However, it is typically easier to select the <code>&lt;form&gt;</code> tag itself for serialization:</p>
 * 				<pre>$('form').submit(function() {
 *   alert($(this).serialize());
 *   return false;
 * });</pre>
 * 				<p>This produces a standard-looking query string:</p>
 * 				<pre>a=1&amp;b=2&amp;c=3&amp;d=4&amp;e=5</pre>
 * <p><strong>Warning:</strong> selecting both the form and its children will cause duplicates in the serialized string.</p>
 * <p>Note: Only <a href="http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2">"successful controls"</a> are serialized to the string. No submit button value is serialized since the form was not submitted using a button. For a form element's value to be included in the serialized string, the element must have a <code>name</code> attribute. Data from file select elements is not serialized.</p>
 * 
 * @example
 * <p>Serialize a form to a query string, that could be sent to a server in an Ajax request.</p>
 * <pre><code>
 *     function showValues() {
 *       var str = $("form").serialize();
 *       $("#results").text(str);
 *     }
 *     $(":checkbox, :radio").click(showValues);
 *     $("select").change(showValues);
 *     showValues();
 * </code></pre>
 * 
 * @since 1.0
 * @returns {String}
**/
jQuery.prototype.serialize = function() {return "";};

/**
 * Set default values for future Ajax requests.
 * 
 * <p>For details on the settings available for <code>$.ajaxSetup()</code>, see <code><a href="/jQuery.ajax">$.ajax()</a></code>. </p>
 *     <p>All subsequent Ajax calls using any function will use the new settings, unless overridden by the individual calls, until the next invocation of <code>$.ajaxSetup()</code>.</p>
 *     <p>For example, the following sets a default for the <code>url</code> parameter before pinging the server repeatedly:</p>
 * <pre>$.ajaxSetup({
 *   url: 'ping.php'
 * });</pre>
 *     <p>Now each time an Ajax request is made, the "ping.php" URL will be used automatically:</p>
 * <pre>$.ajax({
 *   // url not set here; uses ping.php
 *   data: {'name': 'Dan'}
 * });</pre>
 * 
 *     <blockquote><p>Note: Global callback functions should be set with their respective global Ajax event handler methods—<code><a href="/ajaxStart">.ajaxStart()</a></code>, <code><a href="/ajaxStop">.ajaxStop()</a></code>, <code><a href="/ajaxComplete">.ajaxComplete()</a></code>, <code><a href="/ajaxError">.ajaxError()</a></code>, <code><a href="/ajaxSuccess">.ajaxSuccess()</a></code>, <code><a href="/ajaxSend">.ajaxSend()</a></code>—rather than within the <code>options</code> object for <code>$.ajaxSetup()</code>.</p></blockquote>
 * 
 * @example
 * <p>Sets the defaults for Ajax requests to the url "/xmlhttp/", disables global handlers and uses POST instead of GET. The following Ajax requests then sends some data without having to set anything else.</p>
 * <pre><code>$.ajaxSetup({
 *    url: "/xmlhttp/",
 *    global: false,
 *    type: "POST"
 * 
 *  });
 *  $.ajax({ data: myData });</code></pre>
 * 
 * @param {Options} options A set of key/value pairs that configure the default Ajax request. All options are optional. 
 * 
 * @since 1.1
 * @returns {}
**/
jQuery.ajaxSetup = function(options) {};

/**
 * Attach a function to be executed whenever an Ajax request completes successfully. This is an <a href="http://docs.jquery.com/Ajax_Events">Ajax Event</a>.
 * 
 * 
 *     <p>Whenever an Ajax request completes successfully, jQuery triggers the <code>ajaxSuccess</code> event. Any and all handlers that have been registered with the <code>.ajaxSuccess()</code> method are executed at this time.</p>
 *     <p>To observe this method in action, we can set up a basic Ajax load request:</p>
 * 		<pre>&lt;div class="trigger"&gt;Trigger&lt;/div&gt;
 * &lt;div class="result"&gt;&lt;/div&gt;
 * &lt;div class="log"&gt;&lt;/div&gt;</pre>
 *     <p>We can attach our event handler to any element:</p>
 *     <pre>$('.log').ajaxSuccess(function() {
 *   $(this).text('Triggered ajaxSuccess handler.');
 * });</pre>
 *     <p>Now, we can make an Ajax request using any jQuery method:</p>
 *     <pre>$('.trigger').click(function() {
 *   $('.result').load('ajax/test.html');
 * });</pre>
 * 		<p>When the user clicks the button and the Ajax request completes successfully, the log message is displayed.</p>
 * 
 * 
 *     <p><strong>Note:</strong> Because <code>.ajaxSuccess()</code> is implemented as a method of jQuery object instances, we can use the <code>this</code> keyword as we do here to refer to the selected elements within the callback function.</p>
 * 
 * 		<p>All <code>ajaxSuccess</code> handlers are invoked, regardless of what Ajax request was completed. If we must differentiate between the requests, we can use the parameters passed to the handler. Each time an <code>ajaxSuccess</code> handler is executed, it is passed the event object, the <code>XMLHttpRequest</code> object, and the settings object that was used in the creation of the request. For example, we can restrict our callback to only handling events dealing with a particular URL:</p>
 * 
 * <p><strong>Note:</strong> You can get the returned ajax contents by looking at <code>xhr.responseXML</code> or <code>xhr.responseHTML</code> for xml and html respectively.</p>
 * 
 * 	  <pre>$('.log').ajaxSuccess(function(e, xhr, settings) {
 *   if (settings.url == 'ajax/test.html') {
 *     $(this).text('Triggered ajaxSuccess handler. The ajax response was:' 
 *                      + xhr.responseHTML );
 *   }
 * });</pre>
 *   
 * @example
 * <p>Show a message when an Ajax request completes successfully.</p>
 * <pre><code>$("#msg").ajaxSuccess(function(evt, request, settings){
 *       $(this).append("<li>Successful Request!</li>");
 *       });</code></pre>
 * 
 * @param {Function} handler The function to be invoked.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.ajaxSuccess = function(handler) {return new jQuery();};

/**
 * Register a handler to be called when all Ajax requests have completed. This is an <a href="http://docs.jquery.com/Ajax_Events">Ajax Event</a>.
 * 
 * 
 *     <p>Whenever an Ajax request completes, jQuery checks whether there are any other outstanding Ajax requests. If none remain, jQuery triggers the <code>ajaxStop</code> event. Any and all handlers that have been registered with the <code>.ajaxStop()</code> method are executed at this time. The <code>ajaxStop</code> event is also triggered if the last outstanding Ajax request is cancelled by returning false within the <code>beforeSend</code> callback function. </p>
 *     <p>To observe this method in action, we can set up a basic Ajax load request:</p>
 *     <pre>&lt;div class="trigger"&gt;Trigger&lt;/div&gt;
 * &lt;div class="result"&gt;&lt;/div&gt;
 * &lt;div class="log"&gt;&lt;/div&gt;</pre>
 *     <p>We can attach our event handler to any element:</p>
 *     <pre>$('.log').ajaxStop(function() {
 *   $(this).text('Triggered ajaxStop handler.');
 * });</pre>
 *     <p>Now, we can make an Ajax request using any jQuery method:</p>
 *     <pre>$('.trigger').click(function() {
 *   $('.result').load('ajax/test.html');
 * });</pre>
 *     <p>When the user clicks the button and the Ajax request completes, the log message is displayed.</p>
 *   	<p>Because <code>.ajaxStop()</code> is implemented as a method of jQuery object instances, we can use the <code>this</code> keyword as we do here to refer to the selected elements within the callback function.</p>
 *   
 * @example
 * <p>Hide a loading message after all the Ajax requests have stopped.</p>
 * <pre><code>$("#loading").ajaxStop(function(){
 *       $(this).hide();
 *       });</code></pre>
 * 
 * @param {Function} handler The function to be invoked.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.ajaxStop = function(handler) {return new jQuery();};

/**
 * Register a handler to be called when the first Ajax request begins. This is an <a href="http://docs.jquery.com/Ajax_Events">Ajax Event</a>.
 * 
 * <p>Whenever an Ajax request is about to be sent, jQuery checks whether there are any other outstanding Ajax requests. If none are in progress, jQuery triggers the <code>ajaxStart</code> event. Any and all handlers that have been registered with the <code>.ajaxStart()</code> method are executed at this time.</p>
 * 				<p>To observe this method in action, we can set up a basic Ajax load request:</p>
 * 				<pre>&lt;div class="trigger"&gt;Trigger&lt;/div&gt;
 * &lt;div class="result"&gt;&lt;/div&gt;
 * &lt;div class="log"&gt;&lt;/div&gt;</pre>
 * 				<p>We can attach our event handler to any element:</p>
 * 				<pre>$('.log').ajaxStart(function() {
 *   $(this).text('Triggered ajaxStart handler.');
 * });</pre>
 * 				<p>Now, we can make an Ajax request using any jQuery method:</p>
 * 				<pre>$('.trigger').click(function() {
 *   $('.result').load('ajax/test.html');
 * });</pre>
 * 				<p>When the user clicks the button and the Ajax request is sent, the log message is displayed.</p>
 * 
 * 				<p><strong>Note:</strong> Because <code>.ajaxStart()</code> is implemented as a method of jQuery object instances, we can use the <code>this</code> keyword as we do here to refer to the selected elements within the callback function.</p>
 * 
 * @example
 * <p>Show a loading message whenever an Ajax request starts (and none is already active).</p>
 * <pre><code>$("#loading").ajaxStart(function(){
 *    $(this).show();
 *  });</code></pre>
 * 
 * @param {Function} handler The function to be invoked.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.ajaxStart = function(handler) {return new jQuery();};

/**
 * Attach a function to be executed before an Ajax request is sent. This is an <a href="http://docs.jquery.com/Ajax_Events">Ajax Event</a>.
 * 
 * 
 *     <p>Whenever an Ajax request is about to be sent, jQuery triggers the <code>ajaxSend</code> event. Any and all handlers that have been registered with the <code>.ajaxSend()</code> method are executed at this time.</p>
 *     <p>To observe this method in action, we can set up a basic Ajax load request:</p>
 * <pre>&lt;div class="trigger"&gt;Trigger&lt;/div&gt;
 * &lt;div class="result"&gt;&lt;/div&gt;
 * &lt;div class="log"&gt;&lt;/div&gt;</pre>
 *     <p>We can attach our event handler to any element:</p>
 * <pre>$('.log').ajaxSend(function() {
 *   $(this).text('Triggered ajaxSend handler.');
 * });</pre>
 *     <p>Now, we can make an Ajax request using any jQuery method:</p>
 *     <pre>$('.trigger').click(function() {
 *   $('.result').load('ajax/test.html');
 * });</pre>
 *     <p>When the user clicks the button and the Ajax request is about to begin, the log message is displayed.</p>
 * 
 *     <p><strong>Note:</strong> Because <code>.ajaxSend()</code> is implemented as a method of jQuery instances, we can use the <code>this</code> keyword as we do here to refer to the selected elements within the callback function.</p>
 * 
 *     <p>All <code>ajaxSend</code> handlers are invoked, regardless of what Ajax request is to be sent. If we must differentiate between the requests, we can use the parameters passed to the handler. Each time an <code>ajaxSend</code> handler is executed, it is passed the event object, the <code>jqXHR</code> object (in version 1.4, <code>XMLHttpRequest</code>object), and the <a href="http://api.jquery.com/jQuery.ajax/">settings object</a> that was used in the creation of the Ajax request. For example, we can restrict our callback to only handling events dealing with a particular URL:</p>
 *     <pre>$('.log').ajaxSend(function(e, jqxhr, settings) {
 *   if (settings.url == 'ajax/test.html') {
 *     $(this).text('Triggered ajaxSend handler.');
 *   }
 * });</pre>
 *     
 * @example
 * <p>Show a message before an Ajax request is sent.</p>
 * <pre><code>$("#msg").ajaxSend(function(evt, request, settings){
 *         $(this).append("<li>Starting request at " + settings.url + "</li>");
 *       });</code></pre>
 * 
 * @param {Function} handler The function to be invoked.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.ajaxSend = function(handler) {return new jQuery();};

/**
 * Register a handler to be called when Ajax requests complete with an error. This is an <a href="http://docs.jquery.com/Ajax_Events">Ajax Event</a>.
 * 
 * <p>Whenever an Ajax request completes with an error, jQuery triggers the <code>ajaxError</code> event. Any and all handlers that have been registered with the <code>.ajaxError()</code> method are executed at this time.</p>
 *     <p>To observe this method in action, set up a basic Ajax load request.</p>
 * <pre>&lt;button class="trigger"&gt;Trigger&lt;/button&gt;
 * &lt;div class="result"&gt;&lt;/div&gt;
 * &lt;div class="log"&gt;&lt;/div&gt;</pre>
 *     <p>Attach the event handler to any element:</p>
 * <pre>$("div.log").ajaxError(function() {
 *   $(this).text( "Triggered ajaxError handler." );
 * });</pre>
 *     <p>Now, make an Ajax request using any jQuery method:</p>
 * <pre>$("button.trigger").click(function() {
 *   $("div.result").load( "ajax/missing.html" );
 * });</pre>
 *     <p>When the user clicks the button and the Ajax request fails, because the requested file is missing, the log message is displayed.</p>
 * 
 *     <p><strong>Note:</strong> Because <code>.ajaxError()</code> is implemented as a method of jQuery object instances, you can use the <code>this</code> keyword within the callback function to refer to the selected elements.</p>
 * 
 *     <p>All <code>ajaxError</code> handlers are invoked, regardless of what Ajax request was completed. To differentiate between the requests, you can use the parameters passed to the handler. Each time an <code>ajaxError</code> handler is executed, it is passed the event object, the <code>jqXHR</code> object (prior to jQuery 1.5, the <code><abbr title="XMLHttpRequest">XHR</abbr></code> object), and the settings object that was used in the creation of the request. If the request failed because JavaScript raised an exception, the exception object is passed to the handler as a fourth parameter. For example, to restrict the error callback to only handling events dealing with a particular URL:</p>
 * <pre>$( "div.log" ).ajaxError(function(e, jqxhr, settings, exception) {
 *   if ( settings.url == "ajax/missing.html" ) {
 *     $(this).text( "Triggered ajaxError handler." );
 *   }
 * });</pre>
 *   
 * @example
 * <p>Show a message when an Ajax request fails.</p>
 * <pre><code>$("#msg").ajaxError(function(event, request, settings){
 *   $(this).append("<li>Error requesting page " + settings.url + "</li>");
 * });</code></pre>
 * 
 * @param {Function} handler The function to be invoked.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.ajaxError = function(handler) {return new jQuery();};

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
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Function} handler The function that is to be no longer executed.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.unbind = function(eventType, handler) {return new jQuery();};

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
 * @param {String} eventType A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.bind = function(eventType, eventData, handler) {return new jQuery();};

/**
 * Reduce the set of matched elements to the first in the set.
 * 
 * [<p>Given a jQuery object that represents a set of DOM elements, the <code>.first()</code> method constructs a new jQuery object from the first matching element.</p>
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
 * <pre>$('li').first().css('background-color', 'red');</pre>
 * <p>The result of this call is a red background for the first item.</p>
 * @example
 * <p>Highlight the first span in a paragraph.</p>
 * <pre><code>$("p span").first().addClass('highlight');</code></pre>
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.first = function() {return new jQuery();};

/**
 * Reduce the set of matched elements to the final one in the set.
 * 
 * [<p>Given a jQuery object that represents a set of DOM elements, the <code>.last()</code> method constructs a new jQuery object from the last matching element.</p>
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
 * <pre>$('li').last().css('background-color', 'red');</pre>
 * <p>The result of this call is a red background for the final item.</p>
 * @example
 * <p>Highlight the last span in a paragraph.</p>
 * <pre><code>$("p span").last().addClass('highlight');</code></pre>
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.last = function() {return new jQuery();};

/**
 * Reduce the set of matched elements to a subset specified by a range of indices.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.slice()</code> method constructs a new jQuery object from a subset of the matching elements. The supplied <code>start</code> index identifies the position of one of the elements in the set; if <code>end</code> is omitted, all elements after this one will be included in the result.</p>
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
 * <pre>$('li').slice(2).css('background-color', 'red');</pre>
 * <p>The result of this call is a red background for items 3, 4, and 5. Note that the supplied index is zero-based, and refers to the position of elements within the jQuery object, not within the DOM tree.</p>
 * <p>The end parameter allows us to limit the selected range even further. For example:</p>
 * <pre>$('li').slice(2, 4).css('background-color', 'red');</pre>
 * <p>Now only items 3 and 4 are selected. The index is once again zero-based; the range extends up to but not including the specified index.</p>
 * <h4>Negative Indices</h4>
 * <p>The jQuery <code>.slice()</code> method is patterned after the JavaScript .slice() method for arrays. One of the features that it mimics is the ability for negative numbers to be passed as either the <code>start</code> or <code>end</code> parameter. If a negative number is provided, this indicates a position starting from the end of the set, rather than the beginning. For example:</p>
 * <pre>$('li').slice(-2, -1).css('background-color', 'red');</pre>
 * <p>This time only list item 4 is turned red, since it is the only item in the range between two from the end (<code>-2</code>) and one from the end (<code>-1</code>).</p>
 * @example
 * <p>Turns divs yellow based on a random slice.</p>
 * <pre><code>
 * 
 *     function colorEm() {
 *       var $div = $("div");
 *       var start = Math.floor(Math.random() *
 *                              $div.length);
 *       var end = Math.floor(Math.random() *
 *                            ($div.length - start)) +
 *                            start + 1;
 *       if (end == $div.length) end = undefined;
 *       $div.css("background", "");
 *       if (end) 
 *         $div.slice(start, end).css("background", "yellow");   
 *        else
 *         $div.slice(start).css("background", "yellow");
 *       
 *       $("span").text('$("div").slice(' + start +
 *                      (end ? ', ' + end : '') +
 *                      ').css("background", "yellow");');
 *     }
 * 
 *     $("button").click(colorEm);
 * 
 * </code></pre>
 * @example
 * <p>Selects all paragraphs, then slices the selection to include only the first element.</p>
 * <pre><code>$("p").slice(0, 1).wrapInner("<b></b>");</code></pre>
 * @example
 * <p>Selects all paragraphs, then slices the selection to include only the first and second element.</p>
 * <pre><code>$("p").slice(0, 2).wrapInner("<b></b>");</code></pre>
 * @example
 * <p>Selects all paragraphs, then slices the selection to include only the second element.</p>
 * <pre><code>$("p").slice(1, 2).wrapInner("<b></b>");</code></pre>
 * @example
 * <p>Selects all paragraphs, then slices the selection to include only the second and third element.</p>
 * <pre><code>$("p").slice(1).wrapInner("<b></b>");</code></pre>
 * @example
 * <p>Selects all paragraphs, then slices the selection to include only the third element.</p>
 * <pre><code>$("p").slice(-1).wrapInner("<b></b>");</code></pre>
 * 
 * @param {Number} start An integer indicating the 0-based position at which the elements begin to be selected. If negative, it indicates an offset from the end of the set.
 * @param {Number} end An integer indicating the 0-based position at which the elements stop being selected. If negative, it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.
 * 
 * @since 1.1.4
 * @returns {jQuery}
**/
jQuery.prototype.slice = function(start, end) {return new jQuery();};

/**
 * Stop the currently-running animation on the matched elements.
 * 
 * 
 *   <p>When <code>.stop()</code> is called on an element, the currently-running animation (if any) is immediately stopped. If, for instance, an element is being hidden with <code>.slideUp()</code> when <code>.stop()</code> is called, the element will now still be displayed, but will be a fraction of its previous height. Callback functions are not called.</p>
 * <p>If more than one animation method is called on the same element, the later animations are placed in the effects queue for the element. These animations will not begin until the first one completes. When <code>.stop()</code> is called, the next animation in the queue begins immediately. If the <code>clearQueue</code> parameter is provided with a value of <code>true</code>, then the rest of the animations in the queue are removed and never run.</p>
 * <p>If the <code>jumpToEnd</code> property is provided with a value of <code>true</code>, the current animation stops, but the element is immediately given its target values for each CSS property. In our above <code>.slideUp()</code> example, the element would be immediately hidden. The callback function is then immediately called, if provided.</p>
 * <p>The usefulness of the <code>.stop()</code> method is evident when we need to animate an element on <code>mouseenter</code> and <code>mouseleave</code>:</p>
 * <pre>&lt;div id="hoverme"&gt;
 *   Hover me
 *   &lt;img id="hoverme" src="book.png" alt="" width="100" height="123" /&gt;
 * &lt;/div&gt;</pre>
 * <p>We can create a nice fade effect without the common problem of multiple queued animations by adding <code>.stop(true, true)</code> to the chain:</p>
 * <pre>$('#hoverme-stop-2').hover(function() {
 *   $(this).find('img').stop(true, true).fadeOut();
 * }, function() {
 *   $(this).find('img').stop(true, true).fadeIn();
 * });</pre>
 * <blockquote><p>Animations may be stopped globally by setting the property <code>$.fx.off</code> to <code>true</code>. When this is done, all animation methods will immediately set elements to their final state when called, rather than displaying an effect.</p></blockquote>
 *   
 * @example
 * <p>Click the Go button once to start the animation, then click the STOP button to stop it where it's currently positioned.  Another option is to click several buttons to queue them up and see that stop just kills the currently playing one.</p>
 * <pre><code>
 * // Start animation
 * $("#go").click(function(){
 * $(".block").animate({left: '+=100px'}, 2000);
 * });
 * 
 * // Stop animation when button is clicked
 * $("#stop").click(function(){
 * $(".block").stop();
 * });
 * 
 * // Start animation in the opposite direction
 * $("#back").click(function(){
 * $(".block").animate({left: '-=100px'}, 2000);
 * });
 * 
 * </code></pre>
 * 
 * @param {Boolean} clearQueue A Boolean indicating whether to remove queued animation as well. Defaults to <code>false</code>.
 * @param {Boolean} jumpToEnd A Boolean indicating whether to complete the current animation immediately. Defaults to <code>false</code>.
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.stop = function(clearQueue, jumpToEnd) {return new jQuery();};

/**
 * End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
 * 
 * <p>Most of jQuery's <a href="http://api.jquery.com/category/traversing">DOM traversal</a> methods operate on a jQuery object instance and produce a new one, matching a different set of DOM elements. When this happens, it is as if the new set of elements is pushed onto a stack that is maintained inside the object. Each successive filtering method pushes a new element set onto the stack. If we need an older element set, we can use <code>end()</code> to pop the sets back off of the stack.</p>
 * <p>Suppose we have a couple short lists on a page:</p>
 * <pre>
 * &lt;ul class="first"&gt;
 *    &lt;li class="foo"&gt;list item 1&lt;/li&gt;
 *    &lt;li&gt;list item 2&lt;/li&gt;
 *    &lt;li class="bar"&gt;list item 3&lt;/li&gt;
 * &lt;/ul&gt;
 * &lt;ul class="second"&gt;
 *    &lt;li class="foo"&gt;list item 1&lt;/li&gt;
 *    &lt;li&gt;list item 2&lt;/li&gt;
 *    &lt;li class="bar"&gt;list item 3&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>The <code>end()</code> method is useful primarily when exploiting jQuery's chaining properties. When not using chaining, we can usually just call up a previous object by variable name, so we don't need to manipulate the stack. With <code>end()</code>, though, we can string all the method calls together:</p>
 * <pre>
 * $('ul.first').find('.foo').css('background-color', 'red')
 *   <code>.end()</code>.find('.bar').css('background-color', 'green');
 * </pre>
 * <p>This chain searches for items with the class <code>foo</code> within the first list only and turns their backgrounds red. Then <code>end()</code> returns the object to its state before the call to <code>find()</code>, so the second <code>find()</code> looks for '.bar' inside <code>&lt;ul class="first"&gt;</code>, not just inside that list's <code>&lt;li class="foo"&gt;</code>, and turns the matching elements' backgrounds green. The net result is that items 1 and 3 of the first list have a colored background, and none of the items from the second list do.</p>
 * <p>A long jQuery chain can be visualized as a structured code block, with filtering methods providing the openings of nested blocks and <code>end()</code> methods closing them:</p>
 * <pre>
 * $('ul.first').find('.foo')
 *   .css('background-color', 'red')
 * .end().find('.bar')
 *   .css('background-color', 'green')
 * .end();
 * </pre>
 * <p>The last <code>end()</code> is unnecessary, as we are discarding the jQuery object immediately thereafter. However, when the code is written in this form, the <code>end()</code> provides visual symmetry and a sense of completion —making the program, at least to the eyes of some developers, more readable, at the cost of a slight hit to performance as it is an additional function call.</p>
 * @example
 * <p>Selects all paragraphs, finds span elements inside these, and reverts the selection back to the paragraphs.</p>
 * <pre><code>
 * 
 *     jQuery.fn.showTags = function (n) {
 *       var tags = this.map(function () { 
 *                               return this.tagName; 
 *                             })
 *                         .get().join(", ");
 *       $("b:eq(" + n + ")").text(tags);
 *       return this;
 *     };
 * 
 *     $("p").showTags(0)
 *           .find("span")
 *           .showTags(1)
 *           .css("background", "yellow")
 *           .end()
 *           .showTags(2)
 *           .css("font-style", "italic");
 * 
 * </code></pre>
 * @example
 * <p>Selects all paragraphs, finds span elements inside these, and reverts the selection back to the paragraphs.</p>
 * <pre><code>$("p").find("span").end().css("border", "2px red solid");</code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.end = function() {return new jQuery();};

/**
 * Add the previous set of elements on the stack to the current set.
 * 
 * <p>As described in the discussion for <code><a href="http://api.jquery.com/end/">.end()</a></code>, jQuery objects maintain an internal stack that keeps track of changes to the matched set of elements. When one of the DOM traversal methods is called, the new set of elements is pushed onto the stack. If the previous set of elements is desired as well, <code>.andSelf()</code> can help.</p>
 * <p>Consider a page with a simple list on it:</p>
 * <pre>
 * &lt;ul&gt;
 *    &lt;li&gt;list item 1&lt;/li&gt;
 *    &lt;li&gt;list item 2&lt;/li&gt;
 *    &lt;li class="third-item"&gt;list item 3&lt;/li&gt;
 *    &lt;li&gt;list item 4&lt;/li&gt;
 *    &lt;li&gt;list item 5&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>The result of the following code is a red background behind items 3, 4 and 5:</p>
 * <pre>$('li.third-item').nextAll().andSelf()
 *   .css('background-color', 'red');
 * </pre>
 * <p>First, the initial selector locates item 3, initializing the stack with the set containing just this item. The call to <code>.nextAll()</code> then pushes the set of items 4 and 5 onto the stack. Finally, the <code>.andSelf()</code> invocation merges these two sets together, creating a jQuery object that points to all three items in document order: <code>{[&lt;li.third-item&gt;,&lt;li&gt;,&lt;li&gt; ]}</code>.</p>
 * @example
 * <p>Find all <code>div</code>s, and all the paragraphs inside of them, and give them both class names.  Notice the <code>div</code> doesn't have the yellow background color since it didn't use <code>.andSelf()</code>.</p>
 * <pre><code>
 *     $("div").find("p").andSelf().addClass("border");
 *     $("div").find("p").addClass("background");
 * 
 * </code></pre>
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.andSelf = function() {return new jQuery();};

/**
 * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.siblings()</code> method allows us to search through the siblings of these elements in the DOM tree and construct a new jQuery object from the matching elements.</p>
 * <p>The method optionally accepts a selector expression of the same type that we can pass to the <code>$()</code> function. If the selector is supplied, the elements will be filtered by testing whether they match it.</p>
 * <p>Consider a page with a simple list on it:</p>
 * <pre>
 * &lt;ul&gt;
 *    &lt;li&gt;list item 1&lt;/li&gt;
 *    &lt;li&gt;list item 2&lt;/li&gt;
 *    &lt;li class="third-item"&gt;list item 3&lt;/li&gt;
 *    &lt;li&gt;list item 4&lt;/li&gt;
 *    &lt;li&gt;list item 5&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>If we begin at the third item, we can find its siblings:</p>
 * <pre>$('li.third-item').siblings().css('background-color', 'red');</pre>
 * <p>The result of this call is a red background behind items 1, 2, 4, and 5. Since we do not supply a selector expression, all of the siblings are part of the object. If we had supplied one, only the matching items among these four would be included.</p>
 * <p>The original element is not included among the siblings, which is important to remember when we wish to find all elements at a particular level of the DOM tree.</p>
 * @example
 * <p>Find the unique siblings of all yellow li elements in the 3 lists (including other yellow li elements if appropriate).</p>
 * <pre><code>
 * 
 *     var len = $(".hilite").siblings()
 *                           .css("color", "red")
 *                           .length;
 *     $("b").text(len);
 * </code></pre>
 * @example
 * <p>Find all siblings with a class "selected" of each div.</p>
 * <pre><code>$("p").siblings(".selected").css("background", "yellow");</code></pre>
 * 
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.siblings = function(selector) {return new jQuery();};

/**
 * Perform a custom animation of a set of CSS properties.
 * 
 * 
 *   <p>The <code>.animate()</code> method allows us to create animation effects on any numeric CSS property. The only required parameter is a map of CSS properties. This map is similar to the one that can be sent to the <code>.css()</code> method, except that the range of properties is more restrictive.</p>
 * 
 * <h4 id="animation-properties">Animation Properties and Values</h4>
 * <p>All animated properties should be animated to a <em>single numeric value</em>, except as noted below; most properties that are non-numeric cannot be animated using basic jQuery functionality. (For example, <code>width</code>, <code>height</code>, or <code>left</code> can be animated but <code>background-color</code> cannot be.) Property values are treated as a number of pixels unless otherwise specified. The units <code>em</code> and <code>%</code> can be specified where applicable.</p>
 * <p>In addition to style properties, some non-style properties such as <code>scrollTop</code> and <code>scrollLeft</code>, as well as custom properties, can be animated.</p>
 * <p>Shorthand CSS properties (e.g. margin, background, border) are not supported. For example, if you want to retrieve the rendered margin, use: <code>$(elem).css('marginTop')</code> and <code>$(elem).css('marginRight')</code>, and so on.</p>
 * <p>In addition to numeric values, each property can take the strings <code>'show'</code>, <code>'hide'</code>, and <code>'toggle'</code>. These shortcuts allow for custom hiding and showing animations that take into account the display type of the element.</p>
 * <p>Animated properties can also be relative. If a value is supplied with a leading <code>+=</code> or <code>-=</code> sequence of characters, then the target value is computed by adding or subtracting the given number from the current value of the property.</p>
 * <p>Unlike shorthand animation methods such as <code>.slideDown()</code> and <code>.fadeIn()</code>, the <code>.animate()</code> method does <em>not</em> make hidden elements visible as part of the effect. For example, given <code>$('someElement').hide().animate({height:'20px'}, 500})</code>, the animation will run, but <em>the element will remain hidden</em>.</p>
 * <h4 id="duration">Duration</h4>
 * <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively.</p>
 * 
 * <h4 id="complete">Complete Function</h4>
 * <p>If supplied, the <code>complete</code> callback function is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, the callback is executed once per matched element, not once for the animation as a whole.</p>
 * 
 * <h4 id="basic-usage">Basic Usage</h4>
 * <p>To animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123"
 *   style="position: relative; left: 10px;" /&gt;</pre>
 * <p>To animate the opacity, left offset, and height of the image simultaneously:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').animate({
 *     opacity: 0.25,
 *     left: '+=50',
 *     height: 'toggle'
 *   }, 5000, function() {
 *     // Animation complete.
 *   });
 * });
 * </pre>
 * <p class="image">
 *   <img src="/images/animate-1.jpg" alt=""/>
 * </p>
 * <p>Note that the target value of the <code>height</code> property is <code>'toggle'</code>. Since the image was visible before, the animation shrinks the height to 0 to hide it. A second click then reverses this transition:
 * </p>
 * <p class="image">
 * <img src="/images/animate-2.jpg" alt=""/>
 * </p>
 * 
 * <p>The <code>opacity</code> of the image is already at its target value, so this property is not animated by the second click. Since the target value for <code>left</code> is a relative value, the image moves even farther to the right during this second animation.</p>
 * <p>Directional properties (<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>) have no discernible effect on elements if their  <code>position</code> style property is <code>static</code>, which it is by default.</p>
 * <blockquote><p>The <a href="http://jqueryui.com">jQuery UI</a> project extends the <code>.animate()</code> method by allowing some non-numeric styles such as colors to be animated. The project also includes mechanisms for specifying animations through CSS classes rather than individual attributes.</p></blockquote>
 * 
 * <h4 id="step">Step Function</h4>
 * <p>The second version of <code>.animate()</code> provides a <code>step</code> option — a callback function that is fired at each step of the animation. This function is useful for enabling custom animation types or altering the animation as it is occurring. It accepts two arguments (<code>now</code> and <code>fx</code>), and <code>this</code> is set to the DOM element being animated.
 * </p>
 * <ul>
 *   <li><code>now</code>: the numeric value of the property being animated at each step</li>
 *   <li><code>fx</code>: a reference to the <code>jQuery.fx</code> prototype object, which contains a number of properties such as <code>elem</code> for the animated element, <code>start</code> and <code>end</code> for the first and last value of the animated property, respectively, and <code>prop</code> for the property being animated.</li>
 * </ul>
 * <p>Note that the <code>step</code> function is called for each animated property on each animated element. For example, given two list items, the <code>step</code> function fires four times at each step of the animation:  </p>
 * <pre>$('li').animate({
 *   opacity: .5,
 *   height: '50%'
 * },
 * {
 *   step: function(now, fx) {
 *     var data = fx.elem.id + ' ' + fx.prop + ': ' + now;
 *     $('body').append('&lt;div&gt;' + data + '&lt;/div&gt;');
 *   }
 * });</pre>
 * 
 * 
 * <h4 id="easing">Easing</h4>
 * <p>The remaining parameter of <code>.animate()</code> is a string naming an easing function to use. An easing function specifies the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com/">jQuery UI suite</a>.</p>
 * 
 * <h4 id="per-property-easing">Per-property Easing</h4>
 * <p>As of jQuery version 1.4, you can set per-property easing functions within a single <code>.animate()</code> call. In the first version of <code>.animate()</code>, each property can take an array as its value: The first member of the array is the CSS property and the second member is an easing function.  If a per-property easing function is not defined for a particular property, it uses the value of the <code>.animate()</code> method's optional easing argument. If the easing argument is not defined, the default <code>swing</code> function is used.</p>
 * <p>For example, to simultaneously animate the width and height with the <code>swing</code> easing function and the opacity with the <code>linear</code> easing function:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').animate({
 *     width: ['toggle', 'swing'],
 *     height: ['toggle', 'swing'],
 *     opacity: 'toggle'
 *   }, 5000, 'linear', function() {
 *       $(this).after('&lt;div&gt;Animation complete.&lt;/div&gt;');
 *   });
 * });</pre>
 * <p>In the second version of <code>.animate()</code>, the options map can include the <code>specialEasing</code> property, which is itself a map of CSS properties and their corresponding easing functions.  For example, to simultaneously animate the width using the <code>linear</code> easing function and the height using the <code>easeOutBounce</code> easing function:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').animate({
 *     width: 'toggle',
 *     height: 'toggle'
 *   }, {
 *     duration: 5000,
 *     specialEasing: {
 *       width: 'linear',
 *       height: 'easeOutBounce'
 *     },
 *     complete: function() {
 *       $(this).after('&lt;div&gt;Animation complete.&lt;/div&gt;');
 *     }
 *   });
 * });</pre>
 * <p>As previously noted, a plugin is required for the <code>easeOutBounce</code> function.</p>
 * 
 * 
 * @example
 * <p>Click the button to animate the div with a number of different properties.</p>
 * <pre><code>
 * 
 * / * Using multiple unit types within one animation. * /
 * 
 * $("#go").click(function(){
 *   $("#block").animate({
 *     width: "70%",
 *     opacity: 0.4,
 *     marginLeft: "0.6in",
 *     fontSize: "3em",
 *     borderWidth: "10px"
 *   }, 1500 );
 * });
 * </code></pre>
 * @example
 * <p>Animates a div's left property with a relative value. Click several times on the buttons to see the relative animations queued up.</p>
 * <pre><code>
 * $("#right").click(function(){
 *   $(".block").animate({"left": "+=50px"}, "slow");
 * });
 * 
 * $("#left").click(function(){
 *   $(".block").animate({"left": "-=50px"}, "slow");
 * });
 * 
 * </code></pre>
 * @example
 * <p>The first button shows how an unqueued animation works.  It expands the div out to 90% width <strong>while</strong> the font-size is increasing. Once the font-size change is complete, the border animation will begin.
 * 
 * The second button starts a traditional chained animation, where each animation will start once the previous animation on the element has completed.</p>
 * <pre><code>
 * 
 * $( "#go1" ).click(function(){
 *   $( "#block1" ).animate( { width: "90%" }, { queue: false, duration: 3000 })
 *      .animate({ fontSize: "24px" }, 1500 )
 *      .animate({ borderRightWidth: "15px" }, 1500 );
 * });
 * 
 * $( "#go2" ).click(function(){
 *   $( "#block2" ).animate({ width: "90%" }, 1000 )
 *      .animate({ fontSize: "24px" }, 1000 )
 *      .animate({ borderLeftWidth: "15px" }, 1000 );
 * });
 * 
 * $( "#go3" ).click(function(){
 *   $( "#go1" ).add( "#go2" ).click();
 * });
 * 
 * $( "#go4" ).click(function(){
 *   $( "div" ).css({ width: "", fontSize: "", borderWidth: "" });
 * });
 * 
 * </code></pre>
 * @example
 * <p>Animates the first div's left property and synchronizes the remaining divs, using the step function to set their left properties at each stage of the animation. </p>
 * <pre><code>
 * $( "#go" ).click(function(){
 *   $( ".block:first" ).animate({
 *     left: 100
 *   }, {
 *     duration: 1000,
 *     step: function( now, fx ){
 *       $( ".block:gt(0)" ).css( "left", now );
 *     }
 *   });
 * });
 * </code></pre>
 * @example
 * <p>Animates all paragraphs to toggle both height and opacity, completing the animation within 600 milliseconds.</p>
 * <pre><code>$( "p" ).animate({
 *   "height": "toggle", "opacity": "toggle"
 * }, "slow" );</code></pre>
 * @example
 * <p>Animates all paragraph to a left style of 50 and opacity of 1 (opaque, visible), completing the animation within 500 milliseconds.</p>
 * <pre><code>$( "p" ).animate({
 *   "left": "50", "opacity": 1
 * }, 500 );
 * </code></pre>
 * @example
 * <p>An example of using an 'easing' function to provide a different style of animation. This will only work if you have a plugin that provides this easing function.  Note, this code will do nothing unless the paragraph element is hidden.</p>
 * <pre><code>$( "p" ).animate({
 *   "opacity": "show"
 * }, "slow", "easein" );</code></pre>
 * @example
 * <p>Animates all paragraphs to toggle both height and opacity, completing the animation within 600 milliseconds.</p>
 * <pre><code>$( "p" ).animate({
 *   "height": "toggle", "opacity": "toggle"
 * }, { duration: "slow" });</code></pre>
 * @example
 * <p>Animates all paragraph to a left style of 50 and opacity of 1 (opaque, visible), completing the animation within 500 milliseconds.  It also will do it <em>outside</em> the queue, meaning it will automatically start without waiting for its turn.</p>
 * <pre><code>$( "p" ).animate({
 *   left: "50px", opacity: 1
 * }, { duration: 500, queue: false });</code></pre>
 * @example
 * <p>An example of using an 'easing' function to provide a different style of animation. This will only work if you have a plugin that provides this easing function.</p>
 * <pre><code>$( "p" ).animate({
 *   "opacity": "show"
 * }, { "duration": "slow", "easing": "easein" });</code></pre>
 * @example
 * <p>An example of using a callback function.  The first argument is an array of CSS properties, the second specifies that the animation should take 1000 milliseconds to complete, the third states the easing type, and the fourth argument is an anonymous callback function. </p>
 * <pre><code>$( "p" ).animate({
 *   height:200, width:400, opacity: .5
 * }, 1000, "linear", function(){ alert("all done"); });
 * </code></pre>
 * 
 * @param {Map} properties A map of CSS properties that the animation will move toward.
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {String} easing A string indicating which easing function to use for the transition.
 * @param {Function} complete A function to call once the animation is complete.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.animate = function(properties, duration, easing, complete) {return new jQuery();};

/**
 * Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.prevAll()</code> method searches through the predecessors of these elements in the DOM tree and construct a new jQuery object from the matching elements; the elements are returned in order beginning with the closest sibling.</p>
 * <p>The method optionally accepts a selector expression of the same type that we can pass to the <code>$()</code> function. If the selector is supplied, the elements will be filtered by testing whether they match it.</p>
 * <p>Consider a page with a simple list on it:</p>
 * <pre>
 * &lt;ul&gt;
 *    &lt;li&gt;list item 1&lt;/li&gt;
 *    &lt;li&gt;list item 2&lt;/li&gt;
 *    &lt;li class="third-item"&gt;list item 3&lt;/li&gt;
 *    &lt;li&gt;list item 4&lt;/li&gt;
 *    &lt;li&gt;list item 5&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>If we begin at the third item, we can find the elements which come before it:</p>
 * <pre>$('li.third-item').prevAll().css('background-color', 'red');</pre>
 * <p>The result of this call is a red background behind items 1 and 2. Since we do not supply a selector expression, these preceding elements are unequivocally included as part of the object. If we had supplied one, the elements would be tested for a match before they were included.</p>
 * @example
 * <p>Locate all the divs preceding the last div and give them a class.</p>
 * <pre><code>$("div:last").prevAll().addClass("before");</code></pre>
 * 
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.prevAll = function(selector) {return new jQuery();};

/**
 * Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.prev()</code> method allows us to search through the predecessors of these elements in the DOM tree and construct a new jQuery object from the matching elements.</p>
 * <p>The method optionally accepts a selector expression of the same type that we can pass to the <code>$()</code> function. If the selector is supplied, the elements will be filtered by testing whether they match it.</p>
 * <p>Consider a page with a simple list on it:</p>
 * <pre>
 * &lt;ul&gt;
 *    &lt;li&gt;list item 1&lt;/li&gt;
 *    &lt;li&gt;list item 2&lt;/li&gt;
 *    &lt;li class="third-item"&gt;list item 3&lt;/li&gt;
 *    &lt;li&gt;list item 4&lt;/li&gt;
 *    &lt;li&gt;list item 5&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>If we begin at the third item, we can find the element which comes just before it:</p>
 * <pre>$('li.third-item').prev().css('background-color', 'red');</pre>
 * <p>The result of this call is a red background behind item 2. Since we do not supply a selector expression, this preceding element is unequivocally included as part of the object. If we had supplied one, the element would be tested for a match before it was included.</p>
 * @example
 * <p>Find the very previous sibling of each div.</p>
 * <pre><code>
 *     var $curr = $("#start");
 *     $curr.css("background", "#f99");
 *     $("button").click(function () {
 *       $curr = $curr.prev();
 *       $("div").css("background", "");
 *       $curr.css("background", "#f99");
 *     });
 * 
 * </code></pre>
 * @example
 * <p>For each paragraph, find the very previous sibling that has a class "selected".</p>
 * <pre><code>$("p").prev(".selected").css("background", "yellow");</code></pre>
 * 
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.prev = function(selector) {return new jQuery();};

/**
 * Adjust the opacity of the matched elements.
 * 
 * 
 *   <p>The <code>.fadeTo()</code> method animates the opacity of the matched elements.</p>
 *   <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively. If any other string is supplied, the default duration of  <code>400</code> milliseconds is used. Unlike the other effect methods, <code>.fadeTo()</code> requires that <code>duration</code> be explicitly specified.</p>
 *   <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 *   <p>We can animate any element, such as a simple image:</p>
 *   <pre>&lt;div id="clickme"&gt;
 *     Click here
 *   &lt;/div&gt;
 *   &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;
 *   With the element initially shown, we can dim it slowly:
 *   $('#clickme').click(function() {
 *     $('#book').fadeTo('slow', 0.5, function() {
 *       // Animation complete.
 *     });
 *   });
 *   </pre>
 *   <p class="image four-across"> 
 *     <img src="/images/0042_06_41.png" alt=""/>
 *     <img src="/images/0042_06_42.png" alt=""/>
 *     <img src="/images/0042_06_43.png" alt=""/>
 *     <img src="/images/0042_06_44.png" alt=""/>
 *   </p>
 *   <p>With <code>duration</code> set to <code>0</code>, this method just changes the <code>opacity</code> CSS property, so <code>.fadeTo(0, opacity)</code> is the same as <code>.css('opacity', opacity)</code>.</p>
 * 
 * @example
 * <p>Animates first paragraph to fade to an opacity of 0.33 (33%, about one third visible), completing the animation within 600 milliseconds.</p>
 * <pre><code>
 * $("p:first").click(function () {
 * $(this).fadeTo("slow", 0.33);
 * });
 * </code></pre>
 * @example
 * <p>Fade div to a random opacity on each click, completing the animation within 200 milliseconds.</p>
 * <pre><code>
 * $("div").click(function () {
 * $(this).fadeTo("fast", Math.random());
 * });
 * </code></pre>
 * @example
 * <p>Find the right answer!  The fade will take 250 milliseconds and change various styles when it completes.</p>
 * <pre><code>
 * var getPos = function (n) {
 * return (Math.floor(n) * 90) + "px";
 * };
 * $("p").each(function (n) {
 * var r = Math.floor(Math.random() * 3);
 * var tmp = $(this).text();
 * $(this).text($("p:eq(" + r + ")").text());
 * $("p:eq(" + r + ")").text(tmp);
 * $(this).css("left", getPos(n));
 * });
 * $("div").each(function (n) {
 *       $(this).css("left", getPos(n));
 *     })
 * .css("cursor", "pointer")
 * .click(function () {
 *       $(this).fadeTo(250, 0.25, function () {
 *             $(this).css("cursor", "")
 *                    .prev().css({"font-weight": "bolder",
 *                                 "font-style": "italic"});
 *           });
 *     });
 * 
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Number} opacity A number between 0 and 1 denoting the target opacity.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.fadeTo = function(duration, opacity, callback) {return new jQuery();};

/**
 * Hide the matched elements by fading them to transparent.
 * 
 * 
 *     <p>The <code>.fadeOut()</code> method animates the opacity of the matched elements. Once the opacity reaches 0, the <code>display</code> style property is set to <code>none</code>, so the element no longer affects the layout of the page.</p>
 *     <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively. If any other string is supplied, or if the <code>duration</code> parameter is omitted, the default duration of  <code>400</code> milliseconds is used.</p>
 *     <p>As of jQuery 1.4.3, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 *     <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 *     <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;</pre>
 * <p>With the element initially shown, we can hide it slowly:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').fadeOut('slow', function() {
 *     // Animation complete.
 *   });
 * });</pre>
 *     <p class="image four-across">
 *       <img src="/images/0042_06_37.png" alt=""/>
 *       <img src="/images/0042_06_38.png" alt=""/>
 *       <img src="/images/0042_06_39.png" alt=""/>
 *       <img src="/images/0042_06_40.png" alt=""/>
 *     </p>
 *   
 * @example
 * <p>Animates all paragraphs to fade out, completing the animation within 600 milliseconds.</p>
 * <pre><code>
 *   $("p").click(function () {
 *   $("p").fadeOut("slow");
 *   });
 *   </code></pre>
 * @example
 * <p>Fades out spans in one section that you click on.</p>
 * <pre><code>
 * 
 *   $("span").click(function () {
 *   $(this).fadeOut(1000, function () {
 *   $("div").text("'" + $(this).text() + "' has faded!");
 *   $(this).remove();
 *   });
 *   });
 *   $("span").hover(function () {
 *   $(this).addClass("hilite");
 *   }, function () {
 *   $(this).removeClass("hilite");
 *   });
 * 
 *   </code></pre>
 * @example
 * <p>Fades out two divs, one with a "linear" easing and one with the default, "swing," easing.</p>
 * <pre><code>
 * $("#btn1").click(function() {
 *   function complete() {
 *     $("<div/>").text(this.id).appendTo("#log");
 *   }
 *   
 *   $("#box1").fadeOut(1600, "linear", complete);
 *   $("#box2").fadeOut(1600, complete);
 * });
 * 
 * $("#btn2").click(function() {
 *   $("div").show();
 *   $("#log").empty();
 * });
 * 
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.fadeOut = function(duration, callback) {return new jQuery();};

/**
 * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.parents()</code> method allows us to search through the ancestors of these elements in the DOM tree and construct a new jQuery object from the matching elements ordered from immediate parent on up; the elements are returned in order from the closest parent to the outer ones. The <code>.parents()</code> and <code><a href="http://api.jquery.com/parent/">.parent()</a></code> methods are similar, except that the latter only travels a single level up the DOM tree.</p>
 * <p>The method optionally accepts a selector expression of the same type that we can pass to the <code>$()</code> function. If the selector is supplied, the elements will be filtered by testing whether they match it.</p>
 * <p>Consider a page with a basic nested list on it:</p>
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
 * <p>If we begin at item A, we can find its ancestors:</p>
 * <pre>$('li.item-a').parents().css('background-color', 'red');</pre>
 * <p>The result of this call is a red background for the level-2 list, item II, and the level-1 list (and on up the DOM tree all the way to the <code>&lt;html&gt;</code> element). Since we do not supply a selector expression, all of the ancestors are part of the returned jQuery object. If we had supplied one, only the matching items among these would be included.</p>
 * @example
 * <p>Find all parent elements of each b.</p>
 * <pre><code>
 * var parentEls = $("b").parents()
 *             .map(function () { 
 *                   return this.tagName; 
 *                 })
 *             .get().join(", ");
 * $("b").append("<strong>" + parentEls + "</strong>");
 * 
 * </code></pre>
 * @example
 * <p>Click to find all unique div parent elements of each span.</p>
 * <pre><code>
 * function showParents() {
 *   $("div").css("border-color", "white");
 *   var len = $("span.selected")
 *                    .parents("div")
 *                    .css("border", "2px red solid")
 *                    .length;
 *   $("b").text("Unique div parents: " + len);
 * }
 * $("span").click(function () {
 *   $(this).toggleClass("selected");
 *   showParents();
 * });</code></pre>
 * 
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.parents = function(selector) {return new jQuery();};

/**
 * Display the matched elements by fading them to opaque.
 * 
 * 
 *     <p>The <code>.fadeIn()</code> method animates the opacity of the matched elements.</p>
 *     <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively. If any other string is supplied, or if the <code>duration</code> parameter is omitted, the default duration of  <code>400</code> milliseconds is used.</p>
 *     <p>As of jQuery 1.4.3, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 *     <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 *     <p>We can animate any element, such as a simple image:</p>
 *     <pre>&lt;div id="clickme"&gt;
 *       Click here
 *     &lt;/div&gt;
 *     &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;
 *     With the element initially hidden, we can show it slowly:
 *     $('#clickme').click(function() {
 *       $('#book').fadeIn('slow', function() {
 *         // Animation complete
 *       });
 *     });</pre>
 *     <p class="image four-across">
 *       <img src="/images/0042_06_33.png" alt=""/>
 *       <img src="/images/0042_06_34.png" alt=""/>
 *       <img src="/images/0042_06_35.png" alt=""/>
 *       <img src="/images/0042_06_36.png" alt=""/>
 *     </p>
 *   
 * @example
 * <p>Animates hidden divs to fade in one by one, completing each animation within 600 milliseconds.</p>
 * <pre><code>
 *       $(document.body).click(function () {
 *         $("div:hidden:first").fadeIn("slow");
 *       });
 *     </code></pre>
 * @example
 * <p>Fades a red block in over the text. Once the animation is done, it quickly fades in more text on top.</p>
 * <pre><code>
 *         $("a").click(function () {
 *           $("div").fadeIn(3000, function () {
 *             $("span").fadeIn(100);
 *           });
 *           return false;
 *         }); 
 * 
 *       </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.fadeIn = function(duration, callback) {return new jQuery();};

/**
 * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.parent()</code> method allows us to search through the parents of these elements in the DOM tree and construct a new jQuery object from the matching elements. The <code>.parents()</code> and <code>.parent()</code> methods are similar, except that the latter only travels a single level up the DOM tree.</p>
 * <p>The method optionally accepts a selector expression of the same type that we can pass to the <code>$()</code> function. If the selector is supplied, the elements will be filtered by testing whether they match it.</p>
 * <p>Consider a page with a basic nested list on it:</p>
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
 * <p>If we begin at item A, we can find its parents:</p>
 * <pre>$('li.item-a').parent().css('background-color', 'red');</pre>
 * <p>The result of this call is a red background for the level-2 list. Since we do not supply a selector expression, the parent element is unequivocally included as part of the object. If we had supplied one, the element would be tested for a match before it was included.</p>
 * @example
 * <p>Shows the parent of each element as (parent &gt; child).  Check the View Source to see the raw html.</p>
 * <pre><code>
 * 
 *     $("*", document.body).each(function () {
 *       var parentTag = $(this).parent().get(0).tagName;
 *       $(this).prepend(document.createTextNode(parentTag + " > "));
 *     });
 * </code></pre>
 * @example
 * <p>Find the parent element of each paragraph with a class "selected".</p>
 * <pre><code>$("p").parent(".selected").css("background", "yellow");</code></pre>
 * 
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.parent = function(selector) {return new jQuery();};

/**
 * Get the closest ancestor element that is positioned.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.offsetParent()</code> method allows us to search through the ancestors of these elements in the DOM tree and construct a new jQuery object wrapped around the closest positioned ancestor. An element is said to be positioned if it has a CSS position attribute of <code>relative</code>, <code>absolute</code>, or <code>fixed</code>. This information is useful for calculating offsets for performing animations and placing objects on the page.</p>
 * <p>Consider a page with a basic nested list on it, with a positioned element:</p>
 * <pre>
 * &lt;ul class="level-1"&gt;
 *   &lt;li class="item-i"&gt;I&lt;/li&gt;
 *   &lt;li class="item-ii" style="position: relative;"&gt;II
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
 * <p>If we begin at item A, we can find its positioned ancestor:</p>
 * <pre>$('li.item-a').offsetParent().css('background-color', 'red');</pre>
 * <p>This will change the color of list item II, which is positioned.</p>
 * 
 * @example
 * <p>Find the offsetParent of item "A."</p>
 * <pre><code>$('li.item-a').offsetParent().css('background-color', 'red');</code></pre>
 * 
 * @since 1.2.6
 * @returns {jQuery}
**/
jQuery.prototype.offsetParent = function() {return new jQuery();};

/**
 * Display or hide the matched elements with a sliding motion.
 * 
 * 
 *   <p>The <code>.slideToggle()</code> method animates the height of the matched elements. This causes lower parts of the page to slide up or down, appearing to reveal or conceal the items. If the element is initially displayed, it will be hidden; if hidden, it will be shown. The <code>display</code> property is saved and restored as needed. If an element has a <code>display</code> value of <code>inline</code>, then is hidden and shown, it will once again be displayed <code>inline</code>. When the height reaches 0 after a hiding animation, the <code>display</code> style property is set to <code>none</code> to ensure that the element no longer affects the layout of the page.</p>
 *     <p>As of jQuery 1.4.3, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 *   <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively.</p>
 *   <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 *   <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;</pre>
 *   <p>We will cause <code>.slideToggle()</code> to be called when another element is clicked:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').slideToggle('slow', function() {
 *     // Animation complete.
 *   });
 * });
 * </pre>
 *   <p>With the element initially shown, we can hide it slowly with the first click:</p>
 *   <p class="image four-across"> 
 *     <img src="/images/0042_06_25.png" alt=""/>
 *     <img src="/images/0042_06_26.png" alt=""/>
 *     <img src="/images/0042_06_27.png" alt=""/>
 *     <img src="/images/0042_06_28.png" alt=""/>
 *   </p>
 *   <p>A second click will show the element once again:</p>
 * 
 *   <p class="image four-across"> 
 *     <img src="/images/0042_06_29.png" alt=""/>
 *     <img src="/images/0042_06_30.png" alt=""/>
 *     <img src="/images/0042_06_31.png" alt=""/>
 *     <img src="/images/0042_06_32.png" alt=""/>
 *   </p>
 *   
 * @example
 * <p>Animates all paragraphs to slide up or down, completing the animation within 600 milliseconds.</p>
 * <pre><code>
 *     $("button").click(function () {
 *       $("p").slideToggle("slow");
 *     });
 * </code></pre>
 * @example
 * <p>Animates divs between dividers with a toggle that makes some appear and some disappear.</p>
 * <pre><code>
 *   $("#aa").click(function () {
 *     $("div:not(.still)").slideToggle("slow", function () {
 *       var n = parseInt($("span").text(), 10);
 *       $("span").text(n + 1);
 *     });
 *   });
 * 
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.slideToggle = function(duration, callback) {return new jQuery();};

/**
 * Load data from the server using a HTTP POST request.
 * 
 * <p>This is a shorthand Ajax function, which is equivalent to:</p>
 *     <pre>$.ajax({
 *   type: 'POST',
 *   url: <em>url</em>,
 *   data: <em>data</em>,
 *   success: <em>success</em>
 *   dataType: <em>dataType</em>
 * });
 * </pre>
 *   <p>The <code>success</code> callback function is passed the returned data, which will be an XML root element or a text string depending on the MIME type of the response. It is also passed the text status of the response.</p>
 *   <p><strong>As of jQuery 1.5</strong>, the <code>success</code> callback function is also passed a <a href="http://api.jquery.com/jQuery.get/#jqxhr-object">"jqXHR" object</a> (in <strong>jQuery 1.4</strong>, it was passed the <code>XMLHttpRequest</code> object).</p>
 *   <p>Most implementations will specify a success handler:</p>
 *   <pre>$.post('ajax/test.html', function(data) {
 *   $('.result').html(data);
 * });
 * </pre>
 *     <p>This example fetches the requested HTML snippet and inserts it on the page.</p>
 *     <p>Pages fetched with <code>POST</code> are never cached, so the <code>cache</code> and <code>ifModified</code> options in <code><a href="/jQuery.ajaxSetup">jQuery.ajaxSetup()</a></code> have no effect on these requests.</p>
 *     <h4 id="jqxhr-object">The jqXHR Object</h4>
 *     <p><strong>As of jQuery 1.5</strong>, all of jQuery's Ajax methods return  a superset of the <code>XMLHTTPRequest</code> object. This jQuery XHR object, or "jqXHR," returned by <code>$.post()</code> implements the Promise interface, giving it all the properties, methods, and behavior of a Promise (see <a href="http://api.jquery.com/category/deferred-object/">Deferred object</a> for more information). For convenience and consistency with the callback names used by <code><a href="http://api.jquery.com/jQuery.ajax/">$.ajax()</a></code>, it provides <code>.error()</code>, <code>.success()</code>, and <code>.complete()</code> methods. These methods take a function argument that is called when the request terminates, and the function receives the same arguments as the correspondingly-named <code>$.ajax()</code> callback.</p>
 * 
 *     <p>The Promise interface in jQuery 1.5 also allows jQuery's Ajax methods, including <code>$.post()</code>, to chain multiple <code>.success()</code>, <code>.complete()</code>, and <code>.error()</code> callbacks on a single request, and even to assign these callbacks after the request may have completed. If the request is already complete, the callback is fired immediately.</p>
 *     <pre>// Assign handlers immediately after making the request,
 *     // and remember the jqxhr object for this request
 *     var jqxhr = $.post("example.php", function() {
 *       alert("success");
 *     })
 *     .success(function() { alert("second success"); })
 *     .error(function() { alert("error"); })
 *     .complete(function() { alert("complete"); });
 * 
 *     // perform other work here ...
 * 
 *     // Set another completion function for the request above
 *     jqxhr.complete(function(){ alert("second complete"); });</pre>
 * 		
 * @example
 * <p>Request the test.php page, but ignore the return results.</p>
 * <pre><code>$.post("test.php");</code></pre>
 * @example
 * <p>Request the test.php page and send some additional data along (while still ignoring the return results).</p>
 * <pre><code>$.post("test.php", { name: "John", time: "2pm" } );</code></pre>
 * @example
 * <p>pass arrays of data to the server (while still ignoring the return results).</p>
 * <pre><code>$.post("test.php", { 'choices[]': ["Jon", "Susan"] });</code></pre>
 * @example
 * <p>send form data using ajax requests</p>
 * <pre><code>$.post("test.php", $("#testform").serialize());</code></pre>
 * @example
 * <p>Alert out the results from requesting test.php (HTML or XML, depending on what was returned).</p>
 * <pre><code>$.post("test.php", function(data) {
 *    alert("Data Loaded: " + data);
 *  });</code></pre>
 * @example
 * <p>Alert out the results from requesting test.php with an additional payload of data (HTML or XML, depending on what was returned).</p>
 * <pre><code>$.post("test.php", { name: "John", time: "2pm" },
 *    function(data) {
 *      alert("Data Loaded: " + data);
 *    });</code></pre>
 * @example
 * <p>Gets the test.php page content, store it in a XMLHttpResponse object and applies the process() JavaScript function.</p>
 * <pre><code>$.post("test.php", { name: "John", time: "2pm" },
 *  function(data) {
 *    process(data);
 *  }, 
 *  "xml"
 * );</code></pre>
 * @example
 * <p>Posts to the test.php page and gets contents which has been returned in json format (&lt;?php echo json_encode(array("name"=&gt;"John","time"=&gt;"2pm")); ?&gt;).</p>
 * <pre><code>$.post("test.php", { "func": "getNameAndTime" },
 *  function(data){
 *    alert(data.name); // John
 *    console.log(data.time); //  2pm
 *  }, "json");</code></pre>
 * @example
 * <p>Post a form using ajax and put results in a div</p>
 * <pre><code>
 *   // attach a submit handler to the form
 *   $("#searchForm").submit(function(event) {
 * 
 *     // stop form from submitting normally
 *     event.preventDefault(); 
 *         
 *     // get some values from elements on the page:
 *     var $form = $( this ),
 *         term = $form.find( 'input[name="s"]' ).val(),
 *         url = $form.attr( 'action' );
 * 
 *     // Send the data using post and put the results in a div
 *     $.post( url, { s: term } ,
 *       function( data ) {
 *           var content = $( data ).find( '#content' );
 *           $( "#result" ).html( content );
 *       }
 *     );
 *   });
 * </code></pre>
 * 
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} data A map or string that is sent to the server with the request.
 * @param {Function} success A callback function that is executed if the request succeeds.
 * @param {String} dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
 * 
 * @since 1.0
 * @returns {jqXHR}
**/
jQuery.post = function(url, data, success, dataType) {return new jqXHR();};

/**
 * Hide the matched elements with a sliding motion.
 * 
 * 
 * <p>The <code>.slideUp()</code> method animates the height of the matched elements. This causes lower parts of the page to slide up, appearing to conceal the items. Once the height reaches 0, the <code>display</code> style property is set to <code>none</code> to ensure that the element no longer affects the layout of the page.</p>
 *   <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively. If any other string is supplied, or if the <code>duration</code> parameter is omitted, the default duration of  <code>400</code> milliseconds is used.</p>
 *     <p>As of jQuery 1.4.3, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 *   <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 *   <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;</pre>
 *   <p>With the element initially shown, we can hide it slowly:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').slideUp('slow', function() {
 *     // Animation complete.
 *   });
 * });
 *   </pre>
 *   <p class="image four-across"> 
 *   <img src="/images/0042_06_21.png" alt=""/>
 *   <img src="/images/0042_06_22.png" alt=""/>
 *   <img src="/images/0042_06_23.png" alt=""/> 
 *   <img src="/images/0042_06_24.png" alt=""/>
 *   </p>
 *   
 * @example
 * <p>Animates all divs to slide up, completing the animation within 400 milliseconds.</p>
 * <pre><code>
 *   $(document.body).click(function () {
 *     if ($("div:first").is(":hidden")) {
 *       $("div").show("slow");
 *     } else {
 *       $("div").slideUp();
 *     }
 *   });
 * 
 *   </code></pre>
 * @example
 * <p>Animates the parent paragraph to slide up, completing the animation within 200 milliseconds. Once the animation is done, it displays an alert.</p>
 * <pre><code>
 *   $("button").click(function () {
 *     $(this).parent().slideUp("slow", function () {
 *       $("#msg").text($("button", this).text() + " has completed.");
 *     });
 *   });
 * 
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.slideUp = function(duration, callback) {return new jQuery();};

/**
 * Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.nextAll()</code> method allows us to search through the successors of these elements in the DOM tree and construct a new jQuery object from the matching elements.</p>
 * <p>The method optionally accepts a selector expression of the same type that we can pass to the <code>$()</code> function. If the selector is supplied, the elements will be filtered by testing whether they match it.</p>
 * <p>Consider a page with a simple list on it:</p>
 * <pre>
 * &lt;ul&gt;
 *    &lt;li&gt;list item 1&lt;/li&gt;
 *    &lt;li&gt;list item 2&lt;/li&gt;
 *    &lt;li class="third-item"&gt;list item 3&lt;/li&gt;
 *    &lt;li&gt;list item 4&lt;/li&gt;
 *    &lt;li&gt;list item 5&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>If we begin at the third item, we can find the elements which come after it:</p>
 * <pre>$('li.third-item').nextAll().css('background-color', 'red');</pre>
 * <p>The result of this call is a red background behind items 4 and 5. Since we do not supply a selector expression, these following elements are unequivocally included as part of the object. If we had supplied one, the elements would be tested for a match before they were included.</p>
 * @example
 * <p>Locate all the divs after the first and give them a class.</p>
 * <pre><code>$("div:first").nextAll().addClass("after");</code></pre>
 * @example
 * <p>Locate all the paragraphs after the second child in the body and give them a class.</p>
 * <pre><code>
 *     $(":nth-child(1)").nextAll("p").addClass("after");
 * </code></pre>
 * 
 * @param {String} selector A string containing a selector expression to match elements against.
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.nextAll = function(selector) {return new jQuery();};

/**
 * Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.next()</code> method allows us to search through the immediately following sibling of these elements in the DOM tree and construct a new jQuery object from the matching elements.</p>
 * <p>The method optionally accepts a selector expression of the same type that we can pass to the <code>$()</code> function. If the immediately following sibling matches the selector, it remains in the newly constructed jQuery object; otherwise, it is excluded.</p>
 * <p>Consider a page with a simple list on it:</p>
 * <pre>
 * &lt;ul&gt;
 *    &lt;li&gt;list item 1&lt;/li&gt;
 *    &lt;li&gt;list item 2&lt;/li&gt;
 *    &lt;li class="third-item"&gt;list item 3&lt;/li&gt;
 *    &lt;li&gt;list item 4&lt;/li&gt;
 *    &lt;li&gt;list item 5&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>If we begin at the third item, we can find the element which comes just after it:</p>
 * <pre>$('li.third-item').next().css('background-color', 'red');</pre>
 * <p>The result of this call is a red background behind item 4. Since we do not supply a selector expression, this following element is unequivocally included as part of the object. If we had supplied one, the element would be tested for a match before it was included.</p>
 * @example
 * <p>Find the very next sibling of each disabled button and change its text "this button is disabled".</p>
 * <pre><code>$("button[disabled]").next().text("this button is disabled");</code></pre>
 * @example
 * <p>Find the very next sibling of each paragraph. Keep only the ones with a class "selected".</p>
 * <pre><code>$("p").next(".selected").css("background", "yellow");</code></pre>
 * 
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.next = function(selector) {return new jQuery();};

/**
 * Display the matched elements with a sliding motion.
 * 
 * 
 * <p>The <code>.slideDown()</code> method animates the height of the matched elements. This causes lower parts of the page to slide down, making way for the revealed items.</p>
 * <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively. If any other string is supplied, or if the <code>duration</code> parameter is omitted, the default duration of  <code>400</code> milliseconds is used.</p>
 *     <p>As of jQuery 1.4.3, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 * <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 * <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;</pre>
 * <p>With the element initially hidden, we can show it slowly:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').slideDown('slow', function() {
 *     // Animation complete.
 *   });
 * });</pre>
 * <p class="image four-across"> 
 * <img src="/images/0042_06_17.png" alt=""/>
 * <img src="/images/0042_06_18.png" alt=""/>
 * <img src="/images/0042_06_19.png" alt=""/>
 * <img src="/images/0042_06_20.png" alt=""/>
 * </p>
 * 
 * @example
 * <p>Animates all divs to slide down and show themselves over 600 milliseconds.</p>
 * <pre><code>
 * $(document.body).click(function () {
 * if ($("div:first").is(":hidden")) {
 * $("div").slideDown("slow");
 * } else {
 * $("div").hide();
 * }
 * });
 * 
 * </code></pre>
 * @example
 * <p>Animates all inputs to slide down, completing the animation within 1000 milliseconds. Once the animation is done, the input look is changed especially if it is the middle input which gets the focus.</p>
 * <pre><code>
 * $("div").click(function () {
 * $(this).css({ borderStyle:"inset", cursor:"wait" });
 * $("input").slideDown(1000,function(){
 * $(this).css("border", "2px red inset")
 * .filter(".middle")
 *  .css("background", "yellow")
 *  .focus();
 * $("div").css("visibility", "hidden");
 * });
 * });
 * 
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.slideDown = function(duration, callback) {return new jQuery();};

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
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.find = function(selector) {return new jQuery();};

/**
 * Load a JavaScript file from the server using a GET HTTP request, then execute it.
 * 
 * <p>This is a shorthand Ajax function, which is equivalent to:</p>
 * 				<pre>$.ajax({
 *   url: <em>url</em>,
 *   dataType: 'script',
 *   success: <em>success</em>
 * });
 * </pre>
 * 				<p>The callback is passed the returned JavaScript file. This is generally not useful as the script will already have run at this point.</p>
 * 				<p>The script is executed in the global context, so it can refer to other variables and use jQuery functions. Included scripts should have some impact on the current page:</p>
 * 				<pre>$('.result').html('&lt;p&gt;Lorem ipsum dolor sit amet.&lt;/p&gt;');</pre>
 * 				<p>The script can then be included and run by referencing the file name:</p>
 * 				<pre>$.getScript('ajax/test.js', function() {
 *   alert('Load was performed.');
 * });</pre>
 * @example
 * <p>Load the <a href="http://github.com/jquery/jquery-color">official jQuery Color Animation plugin</a> dynamically and bind some color animations to occur once the new functionality is loaded.</p>
 * <pre><code>$.getScript("http://dev.jquery.com/view/trunk/plugins/color/jquery.color.js", function(){
 *   $("#go").click(function(){
 *     $(".block").animate( { backgroundColor: 'pink' }, 1000)
 *       .animate( { backgroundColor: 'blue' }, 1000);
 *   });
 * });</code></pre>
 * @example
 * <p>Load the test.js JavaScript file and execute it.</p>
 * <pre><code>$.getScript("test.js");</code></pre>
 * @example
 * <p>Load the test.js JavaScript file and execute it, displaying an alert message when the execution is complete.</p>
 * <pre><code>$.getScript("test.js", function(){
 *    alert("Script loaded and executed.");
 *  });</code></pre>
 * 
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Function} success A callback function that is executed if the request succeeds.
 * 
 * @since 1.0
 * @returns {XMLHttpRequest}
**/
jQuery.getScript = function(url, success) {return new XMLHttpRequest();};

/**
 * Get the children of each element in the set of matched elements, including text and comment nodes.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.contents()</code> method allows us to search through the immediate children of these elements in the DOM tree and construct a new jQuery object from the matching elements. The <code>.contents()</code> and <code>.children()</code> methods are similar, except that the former includes text nodes as well as HTML elements in the resulting jQuery object.</p>
 * <p>The <code>.contents()</code> method can also be used to get the content document of an iframe, if the iframe is on the same domain as the main page.</p>
 * <p>Consider a simple <code>&lt;div&gt;</code> with a number of text nodes, each of which is separated by two line break elements (<code>&lt;br /&gt;</code>):</p>
 * <pre>&lt;div class="container"&gt;
 *   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
 *   do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 *   &lt;br /&gt;&lt;br /&gt;
 *   Ut enim ad minim veniam, quis nostrud exercitation ullamco 
 *   laboris nisi ut aliquip ex ea commodo consequat.
 *   &lt;br /&gt; &lt;br /&gt;
 *   Duis aute irure dolor in reprehenderit in voluptate velit 
 *   esse cillum dolore eu fugiat nulla pariatur.
 * &lt;/div&gt;
 * </pre>
 * <p>We can employ the <code>.contents()</code> method to help convert this blob of text into three well-formed paragraphs:</p>
 * <pre>
 * $('.container').contents().filter(function() {
 *   return this.nodeType == 3;
 * })
 *   .wrap('&lt;p&gt;&lt;/p&gt;')
 * .end()
 * .filter('br')
 *   .remove();
 * </pre>
 * <p>This code first retrieves the contents  of <code>&lt;div class="container"&gt;</code> and then filters it for text nodes, which are wrapped in paragraph tags. This is accomplished by testing the <a href="https://developer.mozilla.org/en/nodeType"><code>.nodeType</code> property</a> of the element. This DOM property holds a numeric code indicating the node's type; text nodes use the code 3. The contents are again filtered, this time for <code>&lt;br /&gt;</code> elements, and these elements are removed.</p>
 * 
 * @example
 * <p>Find all the text nodes inside a paragraph and wrap them with a bold tag.</p>
 * <pre><code>$("p").contents().filter(function(){ return this.nodeType != 1; }).wrap("<b/>");</code></pre>
 * @example
 * <p>Change the background colour of links inside of an iframe.</p>
 * <pre><code>$("#frameDemo").contents().find("a").css("background-color","#BADA55");</code></pre>
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.contents = function() {return new jQuery();};

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
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * 
 * @since 1.3
 * @returns {jQuery}
**/
jQuery.prototype.closest = function(selector) {return new jQuery();};

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
 * Load JSON-encoded data from the server using a GET HTTP request.
 * 
 * 
 *     <p>This is a shorthand Ajax function, which is equivalent to:</p>
 *         <pre>$.ajax({
 *   url: <em>url</em>,
 *   dataType: 'json',
 *   data: <em>data</em>,
 *   success: <em>callback</em>
 * });
 * </pre>
 *     <p>Data that is sent to the server is appended to the URL as a query string. If the value of the <code>data</code> parameter is an object (map), it is converted to a string and url-encoded before it is appended to the URL.</p>
 * 
 *   <p>Most implementations will specify a success handler:</p>
 *   <pre>$.getJSON('ajax/test.json', function(data) {
 *   var items = [];
 * 
 *   $.each(data, function(key, val) {
 *     items.push('&lt;li id="' + key + '"&gt;' + val + '&lt;/li&gt;');
 *   });
 * 
 *   $('&lt;ul/&gt;', {
 *     'class': 'my-new-list',
 *     html: items.join('')
 *   }).appendTo('body');
 * });
 * </pre>
 * <p>This example, of course, relies on the structure of the JSON file:</p>
 *   <pre>{
 *   "one": "Singular sensation",
 *   "two": "Beady little eyes",
 *   "three": "Little birds pitch by my doorstep"
 * }
 * </pre>
 * <p>Using this structure, the example loops through the requested data, builds an unordered list, and appends it to the body.</p>
 * <p>The <code>success</code> callback is passed the returned data, which is typically a JavaScript object or array as defined by the JSON structure and parsed using the <code><a href="/jQuery.parseJSON">$.parseJSON()</a></code> method. It is also passed the text status of the response.</p>
 * <p><strong>As of jQuery 1.5</strong>, the <code>success</code> callback function receives a <a href="http://api.jquery.com/jQuery.get/#jqxhr-object">"jqXHR" object</a> (in <strong>jQuery 1.4</strong>, it received the <code>XMLHttpRequest</code> object). However, since JSONP and cross-domain GET requests do not use <abbr title="XMLHTTPRequest">XHR</abbr>, in those cases the <code>jqXHR</code> and <code>textStatus</code> parameters passed to the success callback are undefined.</p>
 *   <blockquote>
 *     <p><strong>Important:</strong> As of jQuery 1.4, if the JSON file contains a syntax error, the request will usually fail silently. Avoid frequent hand-editing of JSON data for this reason. JSON is a data-interchange format with syntax rules that are stricter than those of JavaScript's object literal notation. For example, all strings represented in JSON, whether they are properties or values, must be enclosed in double-quotes. For details on the JSON format, see <a href="http://json.org/">http://json.org/</a>.</p>
 *   </blockquote>
 *   <h4 id="jsonp">JSONP</h4>
 *   <p>If the URL includes the string "callback=?" (or similar, as defined by the server-side API), the request is treated as JSONP instead. See the discussion of the <code>jsonp</code> data type in <code><a href="http://api.jquery.com/jQuery.ajax/">$.ajax()</a></code> for more details.</p>
 * 
 * 
 * <h4 id="jqxhr-object">The jqXHR Object</h4>
 * <p><strong>As of jQuery 1.5</strong>, all of jQuery's Ajax methods return  a superset of the <code>XMLHTTPRequest</code> object. This jQuery XHR object, or "jqXHR," returned by <code>$.getJSON()</code> implements the Promise interface, giving it all the properties, methods, and behavior of a Promise (see <a href="http://api.jquery.com/category/deferred-object/">Deferred object</a> for more information). For convenience and consistency with the callback names used by <code><a href="http://api.jquery.com/jQuery.ajax/">$.ajax()</a></code>, it provides <code>.error()</code>, <code>.success()</code>, and <code>.complete()</code> methods. These methods take a function argument that is called when the request terminates, and the function receives the same arguments as the correspondingly-named <code>$.ajax()</code> callback.</p>
 * 
 * <p>The Promise interface in jQuery 1.5 also allows jQuery's Ajax methods, including <code>$.getJSON()</code>, to chain multiple <code>.success()</code>, <code>.complete()</code>, and <code>.error()</code> callbacks on a single request, and even to assign these callbacks after the request may have completed. If the request is already complete, the callback is fired immediately.</p>
 * <pre>// Assign handlers immediately after making the request,
 * // and remember the jqxhr object for this request
 * var jqxhr = $.getJSON("example.json", function() {
 *   alert("success");
 * })
 * .success(function() { alert("second success"); })
 * .error(function() { alert("error"); })
 * .complete(function() { alert("complete"); });
 * 
 * // perform other work here ...
 * 
 * // Set another completion function for the request above
 * jqxhr.complete(function(){ alert("second complete"); });</pre>
 *   
 * @example
 * <p>Loads the four most recent cat pictures from the Flickr JSONP API.</p>
 * <pre><code>
 * $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
 *   {
 *     tags: "cat",
 *     tagmode: "any",
 *     format: "json"
 *   },
 *   function(data) {
 *     $.each(data.items, function(i,item){
 *       $("<img/>").attr("src", item.media.m).appendTo("#images");
 *       if ( i == 3 ) return false;
 *     });
 *   });</code></pre>
 * @example
 * <p>Load the JSON data from test.js and access a name from the returned JSON data.</p>
 * <pre><code>$.getJSON("test.js", function(json) {
 *    alert("JSON Data: " + json.users[3].name);
 *  });</code></pre>
 * @example
 * <p>Load the JSON data from test.js, passing along additional data, and access a name from the returned JSON data.</p>
 * <pre><code>$.getJSON("test.js", { name: "John", time: "2pm" }, function(json) {
 *     alert("JSON Data: " + json.users[3].name);
 *     });</code></pre>
 * 
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} data A map or string that is sent to the server with the request.
 * @param {Function} success A callback function that is executed if the request succeeds.
 * 
 * @since 1.0
 * @returns {jqXHR}
**/
jQuery.getJSON = function(url, data, success) {return new jqXHR();};

/**
 * Load data from the server using a HTTP GET request.
 * 
 * <p>This is a shorthand Ajax function, which is equivalent to:</p>
 *     <pre>$.ajax({
 *   url: <em>url</em>,
 *   data: <em>data</em>,
 *   success: <em>success</em>,
 *   dataType: <em>dataType</em>
 * });
 * </pre>
 *     <p>The <code>success</code> callback function is passed the returned data, which will be an XML root element, text string, JavaScript file, or JSON object, depending on the MIME type of the response. It is also passed the text status of the response. </p>
 *     <p><strong>As of jQuery 1.5</strong>, the <code>success</code> callback function is also passed a <a href="http://api.jquery.com/jQuery.get/#jqxhr-object">"jqXHR" object</a> (in <strong>jQuery 1.4</strong>, it was passed the <code>XMLHttpRequest</code> object). However, since JSONP and cross-domain GET requests do not use <abbr title="XMLHTTPRequest">XHR</abbr>,  in those cases the <code>(j)XHR</code> and <code>textStatus</code> parameters passed to the success callback are undefined.</p>
 *     <p>Most implementations will specify a success handler:</p>
 *     <pre>$.get('ajax/test.html', function(data) {
 *   $('.result').html(data);
 *   alert('Load was performed.');
 * });
 * </pre>
 *   <p>This example fetches the requested HTML snippet and inserts it on the page.</p>
 *   <h4 id="jqxhr-object">The jqXHR Object</h4>
 *   <p><strong>As of jQuery 1.5</strong>, all of jQuery's Ajax methods return  a superset of the <code>XMLHTTPRequest</code> object. This jQuery XHR object, or "jqXHR," returned by <code>$.get()</code> implements the Promise interface, giving it all the properties, methods, and behavior of a Promise (see <a href="http://api.jquery.com/category/deferred-object/">Deferred object</a> for more information). For convenience and consistency with the callback names used by <code><a href="http://api.jquery.com/jQuery.ajax/">$.ajax()</a></code>, it provides <code>.error()</code>, <code>.success()</code>, and <code>.complete()</code> methods. These methods take a function argument that is called when the request terminates, and the function receives the same arguments as the correspondingly-named <code>$.ajax()</code> callback.</p>
 * 
 *   <p>The Promise interface in jQuery 1.5 also allows jQuery's Ajax methods, including <code>$.get()</code>, to chain multiple <code>.success()</code>, <code>.complete()</code>, and <code>.error()</code> callbacks on a single request, and even to assign these callbacks after the request may have completed. If the request is already complete, the callback is fired immediately.</p>
 *   <pre>// Assign handlers immediately after making the request,
 *   // and remember the jqxhr object for this request
 *   var jqxhr = $.get("example.php", function() {
 *     alert("success");
 *   })
 *   .success(function() { alert("second success"); })
 *   .error(function() { alert("error"); })
 *   .complete(function() { alert("complete"); });
 * 
 *   // perform other work here ...
 * 
 *   // Set another completion function for the request above
 *   jqxhr.complete(function(){ alert("second complete"); });</pre>
 * 
 * @example
 * <p>Request the test.php page, but ignore the return results.</p>
 * <pre><code>$.get("test.php");</code></pre>
 * @example
 * <p>Request the test.php page and send some additional data along (while still ignoring the return results).</p>
 * <pre><code>$.get("test.php", { name: "John", time: "2pm" } );</code></pre>
 * @example
 * <p>pass arrays of data to the server (while still ignoring the return results).</p>
 * <pre><code>$.get("test.php", { 'choices[]': ["Jon", "Susan"]} );</code></pre>
 * @example
 * <p>Alert out the results from requesting test.php (HTML or XML, depending on what was returned).</p>
 * <pre><code>$.get("test.php", function(data){
 * alert("Data Loaded: " + data);
 * });</code></pre>
 * @example
 * <p>Alert out the results from requesting test.cgi with an additional payload of data (HTML or XML, depending on what was returned).</p>
 * <pre><code>$.get("test.cgi", { name: "John", time: "2pm" },
 *    function(data){
 *      alert("Data Loaded: " + data);
 *    });</code></pre>
 * @example
 * <p> Gets the test.php page contents which has been returned in json format (&lt;?php echo json_encode(array("name"=&gt;"John","time"=&gt;"2pm")); ?&gt;).</p>
 * <pre><code>$.get("test.php", { "func": "getNameAndTime" },
 *    function(data){
 *      alert(data.name); // John
 *      console.log(data.time); //  2pm
 *    }, "json");</code></pre>
 * 
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} data A map or string that is sent to the server with the request.
 * @param {Function} success A callback function that is executed if the request succeeds.
 * @param {String} dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
 * 
 * @since 1.0
 * @returns {jqXHR}
**/
jQuery.get = function(url, data, success, dataType) {return new jqXHR();};

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
 * Perform an asynchronous HTTP (Ajax) request.
 * 
 * 
 *       <p>The <code>$.ajax()</code> function underlies all Ajax requests sent by jQuery.  It is often unnecessary to directly call this function, as several higher-level alternatives like <code><a href="/jQuery.get">$.get()</a></code> and <code><a href="/load">.load()</a></code> are available and are easier to use. If less common options are required, though, <code>$.ajax()</code> can be used more flexibly.</p>
 *       <p>At its simplest, the <code>$.ajax()</code> function can be called with no arguments:</p>
 *       <pre>$.ajax();</pre>
 * 
 *       <p><strong>Note:</strong> Default settings can be set globally by using the <code><a href="/jQuery.ajaxSetup">$.ajaxSetup()</a></code> function.</p>
 * 
 *       <p>This example, using no options, loads the contents of the current page, but does nothing with the result. To use the result, we can implement one of the callback functions.</p>
 * 
 *       <h4 id="jqXHR">The jqXHR Object</h4>
 *       <p>The jQuery XMLHttpRequest (jqXHR) object returned by <code>$.ajax()</code> <strong>as of jQuery 1.5</strong> is a superset of the browser's native XMLHttpRequest object. For example, it contains <code>responseText</code> and <code>responseXML</code> properties, as well as a <code>getResponseHeader()</code> method. When the transport mechanism is something other than XMLHttpRequest (for example, a script tag for a JSONP request) the <code>jqXHR</code> object simulates native XHR functionality where possible. </p>
 *       <p><strong>As of jQuery 1.5.1</strong>, the <code>jqXHR</code> object also contains the <code>overrideMimeType</code> method. </p>
 * 
 *       <p>The jqXHR objects returned by <code>$.ajax()</code> implement the Promise interface, giving them all the properties, methods, and behavior of a Promise (see <a href="http://api.jquery.com/category/deferred-object/">Deferred object</a> for more information).  For convenience and consistency with the callback names used by <code>$.ajax()</code>, jqXHR also provides <code>.error()</code>, <code>.success()</code>, and <code>.complete()</code> methods. These methods take a function argument that is called when the <code>$.ajax()</code> request terminates, and the function receives the same arguments as the correspondingly-named <code>$.ajax()</code> callback. In jQuery 1.5 this allows you to assign multiple callbacks on a single request, and even to assign callbacks after the request may have completed. (If the request is already complete, the callback is fired immediately.)</p>
 * 
 * <pre>// Assign handlers immediately after making the request,
 * // and remember the jqxhr object for this request
 * var jqxhr = $.ajax({ url: "example.php" })
 *     .success(function() { alert("success"); })
 *     .error(function() { alert("error"); })
 *     .complete(function() { alert("complete"); });
 * 
 * // perform other work here ...
 * 
 * // Set another completion function for the request above
 * jqxhr.complete(function(){ alert("second complete"); });</pre>
 * 
 *       <p>For backward compatibility with <code>XMLHttpRequest</code>, a <code>jqXHR</code> object will expose the following properties and methods:</p>
 *       <ul>
 *         <li><code>readyState</code></li>
 *         <li><code>status</code></li>
 *         <li><code>statusText</code></li>
 *         <li><code>responseXML</code> and/or <code>responseText</code> when the underlying request responded with xml and/or text, respectively</li>
 *         <li><code>setRequestHeader(name, value)</code> which departs from the standard by replacing the old value with the new one rather than concatenating the new value to the old one</li>
 *         <li><code>getAllResponseHeaders()</code></li>
 *         <li><code>getResponseHeader()</code></li>
 *         <li><code>abort()</code></li>
 *       </ul>
 * 
 *       <p>No <code>onreadystatechange</code> mechanism is provided, however, since <code>success</code>, <code>error</code>, <code>complete</code> and <code>statusCode</code> cover all conceivable requirements.</p>
 *       <h4 id="callback-functions">Callback Function Queues</h4>
 *       <p>The <code>beforeSend</code>, <code>error</code>, <code>dataFilter</code>, <code>success</code> and <code>complete</code> options all accept callback functions that are invoked at the appropriate times.</p>
 * 
 *       <p><strong>As of jQuery 1.5</strong>, the <code>error</code>, <code>success</code>, and <code>complete</code> callback hooks are first-in, first-out managed queues. This means you can assign more than one callback for each hook. See <a href="http://api.jquery.com/category/deferred-object/">Deferred object methods</a>, which are implemented internally for these <code>$.ajax()</code> callback hooks.</p>
 * 
 *       <p>The <code>this</code> reference within all callbacks is the object in the <code>context</code> option passed to <code>$.ajax</code> in the settings; if <code>context</code> is not specified, <code>this</code> is a reference to the Ajax settings themselves.</p>
 * 
 *       <p>Some types of Ajax requests, such as JSONP and cross-domain GET requests, do not use XHR; in those cases the <code>XMLHttpRequest</code> and <code>textStatus</code> parameters passed to the callback are <code>undefined</code>.</p>
 * 
 *       <p>Here are the callback hooks provided by <code>$.ajax()</code>:</p>
 *       <ol>
 *         <li><code>beforeSend</code> callback is invoked; it receives the <code>jqXHR</code> object and the <code>settings</code> map as parameters.</li>
 *         <li><code>error</code> callbacks are invoked, in the order they are registered, if the request fails. They receive the <code>jqXHR</code>, a string indicating the error type, and an exception object if applicable. Some built-in errors will provide a string as the exception object: "abort", "timeout", "No Transport".</li>
 *         <li><code>dataFilter</code> callback is invoked immediately upon successful receipt of response data. It receives the returned data and the value of <code>dataType</code>, and must return the (possibly altered) data to pass on to <code>success</code>.</li>
 *         <li><code>success</code> callbacks are then invoked, in the order they are registered, if the request succeeds. They receive the returned data, a string containing the success code, and the <code>jqXHR</code> object.</li>
 *         <li><code>complete</code> callbacks fire, in the order they are registered, when the request finishes, whether in failure or success. They receive the <code>jqXHR</code> object, as well as a string containing the success or error code.</li>
 *       </ol>
 *       <p>For example, to make use of the returned HTML, we can implement a <code>success</code> handler:</p>
 * <pre>$.ajax({
 *   url: 'ajax/test.html',
 *   success: function(data) {
 *     $('.result').html(data);
 *     alert('Load was performed.');
 *   }
 * });</pre>
 * 
 *       <h4 id="data-types">Data Types</h4>
 *       <p>The <code>$.ajax()</code> function relies on the server to provide information about the retrieved data. If the server reports the return data as XML, the result can be traversed using normal XML methods or jQuery's selectors. If another type is detected, such as HTML in the example above, the data is treated as text.</p>
 *       <p>Different data handling can be achieved by using the <code>dataType</code> option. Besides plain <code>xml</code>, the <code>dataType</code> can be <code>html</code>, <code>json</code>, <code>jsonp</code>, <code>script</code>, or <code>text</code>.</p>
 *       <p>The <code>text</code> and <code>xml</code> types return the data with no processing. The data is simply passed on to the success handler, either through the <code>responseText</code> or <code>responseXML</code> property of the <code>jqXHR</code> object, respectively.</p>
 *       <p><strong>Note:</strong> We must ensure that the MIME type reported by the web server matches our choice of <code>dataType</code>. In particular, XML must be declared by the server as <code>text/xml</code> or <code>application/xml</code> for consistent results.</p>
 *       <p>If <code>html</code> is specified, any embedded JavaScript inside the retrieved data is executed before the HTML is returned as a string. Similarly, <code>script</code> will execute the JavaScript that is pulled back from the server, then return nothing.</p>
 *       <p>The <code>json</code> type parses the fetched data file as a JavaScript object and returns the constructed object as the result data. To do so, it uses <code>jQuery.parseJSON()</code> when the browser supports it; otherwise it uses a <code>Function</code> <strong>constructor</strong>. Malformed JSON data will throw a parse error (see <a href="http://json.org/">json.org</a> for more information). JSON data is convenient for communicating structured data in a way that is concise and easy for JavaScript to parse. If the fetched data file exists on a remote server, specify the <code>jsonp</code> type instead.</p>
 *       <p>The <code>jsonp</code> type appends a query string parameter of <code>callback=?</code> to the URL. The server should prepend the JSON data with the callback name to form a valid JSONP response. We can specify a parameter name other than <code>callback</code> with the <code>jsonp</code> option to <code>$.ajax()</code>.</p>
 *       <p><strong>Note:</strong> JSONP is an extension of the JSON format, requiring some server-side code to detect and handle the query string parameter. More information about it can be found in the <a href="http://bob.pythonmac.org/archives/2005/12/05/remote-json-jsonp/">original post detailing its use</a>.</p>
 *       <p>When data is retrieved from remote servers (which is only possible using the <code>script</code> or <code>jsonp</code> data types), the <code>error</code> callbacks and global events will never be fired.</p>
 * 
 *           <h4 id="sending-data-to-server">Sending Data to the Server</h4>
 *           <p>By default, Ajax requests are sent using the GET HTTP method. If the POST method is required, the method can be specified by setting a value for the <code>type</code> option. This option affects how the contents of the <code>data</code> option are sent to the server. POST data will always be transmitted to the server using UTF-8 charset, per the W3C XMLHTTPRequest standard.</p>
 *           <p>The <code>data</code> option can contain either a query string of the form <code>key1=value1&amp;key2=value2</code>, or a map of the form <code>{key1: 'value1', key2: 'value2'}</code>. If the latter form is used, the data is converted into a query string using <code><a href="http://api.jquery.com/jQuery.param/">jQuery.param()</a></code> before it is sent. This processing can be circumvented by setting <code>processData</code> to <code>false</code>.  The processing might be undesirable if you wish to send an XML object to the server; in this case, change the <code>contentType</code> option from <code>application/x-www-form-urlencoded</code> to a more appropriate MIME type.</p>
 * 
 *           <h4 id="advanced-options">Advanced Options</h4>
 *           <p>The <code>global</code> option prevents handlers registered using <code><a href="/ajaxSend">.ajaxSend()</a></code>, <code><a href="/ajaxError">.ajaxError()</a></code>, and similar methods from firing when this request would trigger them. This can be useful to, for example, suppress a loading indicator that was implemented with <code><a href="/ajaxSend">.ajaxSend()</a></code> if the requests are frequent and brief. With cross-domain script and JSONP requests, the global option is automatically set to <code>false</code>. See the descriptions of these methods below for more details.  See the descriptions of these methods below for more details.</p>
 *           <p>If the server performs HTTP authentication before providing a response, the user name and password pair can be sent via the <code>username</code> and <code>password</code> options.</p>
 *           <p>Ajax requests are time-limited, so errors can be caught and handled to provide a better user experience. Request timeouts are usually either left at their default or set as a global default using <code><a href="/jQuery.ajaxSetup">$.ajaxSetup()</a></code> rather than being overridden for specific requests with the <code>timeout</code> option.</p>
 *           <p>By default, requests are always issued, but the browser may serve results out of its cache. To disallow use of the cached results, set <code>cache</code> to <code>false</code>. To cause the request to report failure if the asset has not been modified since the last request, set <code>ifModified</code> to <code>true</code>.</p>
 *           <p>The <code>scriptCharset</code> allows the character set to be explicitly specified for requests that use a <code>&lt;script&gt;</code> tag (that is, a type of <code>script</code> or <code>jsonp</code>). This is useful if the script and host page have differing character sets.</p>
 *           <p>The first letter in Ajax stands for "asynchronous," meaning that the operation occurs in parallel and the order of completion is not guaranteed. The <code>async</code> option to <code>$.ajax()</code> defaults to <code>true</code>, indicating that code execution can continue after the request is made. Setting this option to <code>false</code> (and thus making the call no longer asynchronous) is strongly discouraged, as it can cause the browser to become unresponsive.</p>
 * 
 *           <p>The <code>$.ajax()</code> function returns the <code>XMLHttpRequest</code> object that it creates. Normally jQuery handles the creation of this object internally, but a custom function for manufacturing one can be specified using the <code>xhr</code> option. The returned object can generally be discarded, but does provide a lower-level interface for observing and manipulating the request. In particular, calling <code>.abort()</code> on the object will halt the request before it completes.</p>
 * 
 *  <h4>Extending Ajax</h4>
 *      <p><strong>As of jQuery 1.5</strong>, jQuery's Ajax implementation includes prefilters, converters, and transports that allow you to extend Ajax with a great deal of flexibility. For more information about these advanced features, see the <a href="http://api.jquery.com/extending-ajax/">Extending Ajax</a> page.</p>
 *  
 * @example
 * <p>Load and execute a JavaScript file.</p>
 * <pre><code>$.ajax({
 *    type: "GET",
 *    url: "test.js",
 *    dataType: "script"
 *  });</code></pre>
 * @example
 * <p>Save some data to the server and notify the user once it's complete.</p>
 * <pre><code>$.ajax({
 *    type: "POST",
 *    url: "some.php",
 *    data: "name=John&location=Boston",
 *    success: function(msg){
 *      alert( "Data Saved: " + msg );
 *    }
 *  });</code></pre>
 * @example
 * <p>Retrieve the latest version of an HTML page.</p>
 * <pre><code>$.ajax({
 *   url: "test.html",
 *   cache: false,
 *   success: function(html){
 *     $("#results").append(html);
 *   }
 * });</code></pre>
 * @example
 * <p>Loads data synchronously. Blocks the browser while the requests is active.
 * It is better to block user interaction by other means when synchronization is
 * necessary.</p>
 * <pre><code>var html = $.ajax({
 *   url: "some.php",
 *   async: false
 *  }).responseText;</code></pre>
 * @example
 * <p>Sends an xml document as data to the server. By setting the processData
 * option to <code>false</code>, the automatic conversion of data to strings is prevented.</p>
 * <pre><code>var xmlDocument = [create xml document];
 *  $.ajax({
 *    url: "page.php",
 *    processData: false,
 *    data: xmlDocument,
 *    success: handleResponse
 *  });</code></pre>
 * @example
 * <p>Sends an id as data to the server, save some data to the server and notify the user once it's complete.  <strong>Note that this usage - returning the result of the call into a variable - requires a synchronous (blocking) request! <em>(async:false)</em></strong></p>
 * <pre><code>bodyContent = $.ajax({
 *       url: "script.php",
 *       global: false,
 *       type: "POST",
 *       data: ({id : this.getAttribute('id')}),
 *       dataType: "html",
 *       async:false,
 *       success: function(msg){
 *          alert(msg);
 *       }
 *    }
 * ).responseText;</code></pre>
 * 
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with <a href="/jQuery.ajaxSetup">$.ajaxSetup()</a>. See <a href="#jQuery-ajax-settings">jQuery.ajax( settings )</a> below for a complete list of all settings. 
 * 
 * @since 1.5
 * @returns {jqXHR}
**/
jQuery.ajax = function(url, settings) {return new jqXHR();};

/**
 * The number of elements in the jQuery object.
 * @example
 * <p>Count the divs.  Click to add more.</p>
 * <pre><code>$(document.body).click(function () {
 *       $(document.body).append($("<div>"));
 *       var n = $("div").length;
 *       $("span").text("There are " + n + " divs." +
 *                      "Click to add more.");
 *     }).trigger('click'); // trigger the click to start</code></pre>
 * 
 * @since 1.0
 * @type Number
**/
jQuery.prototype.length = 0;

/**
 * Get the children of each element in the set of matched elements, optionally filtered by a selector.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.children()</code> method allows us to search through the immediate children of these elements in the DOM tree and construct a new jQuery object from the matching elements. The <code>.find()</code> and <code>.children()</code> methods are similar, except that the latter only travels a single level down the DOM tree. Note also that like most jQuery methods, <code>.children()</code> does not return text nodes; to get <em>all</em> children including text and comment nodes, use <code>.contents()</code>.</p>
 * <p>The method optionally accepts a selector expression of the same type that we can pass to the <code>$()</code> function. If the selector is supplied, the elements will be filtered by testing whether they match it.</p>
 * <p>Consider a page with a basic nested list on it:</p>
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
 * <p>If we begin at the level-2 list, we can find its children:</p>
 * <pre>$('ul.level-2').children().css('background-color', 'red');</pre>
 * <p>The result of this call is a red background behind items A, B, and C. Since we do not supply a selector expression, all of the children are part of the returned jQuery object. If we had supplied one, only the matching items among these three would be included.</p>
 * @example
 * <p>Find all children of the clicked element.</p>
 * <pre><code>
 * 
 *     $("#container").click(function (e) {
 *       $("*").removeClass("hilite");
 *       var $kids = $(e.target).children();
 *       var len = $kids.addClass("hilite").length;
 * 
 *       $("#results span:first").text(len);
 *       $("#results span:last").text(e.target.tagName);
 * 
 *       e.preventDefault();
 *       return false;
 *     });
 * </code></pre>
 * @example
 * <p>Find all children of each div.</p>
 * <pre><code>$("div").children().css("border-bottom", "3px double red");</code></pre>
 * @example
 * <p>Find all children with a class "selected" of each div.</p>
 * <pre><code>$("div").children(".selected").css("color", "blue");</code></pre>
 * 
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.children = function(selector) {return new jQuery();};

/**
 * A selector representing selector originally passed to jQuery().
 * @example
 * <p>Determine the selector used.</p>
 * <pre><code>$("ul")
 *   .append("<li>" + $("ul").selector + "</li>")
 *   .append("<li>" + $("ul li").selector + "</li>")
 *   .append("<li>" + $("div#foo ul:not([class])").selector + "</li>");
 * 
 * </code></pre>
 * @example
 * <p>Collecting elements differently</p>
 * <pre><code>
 *    $('<div>' + $('ul li.foo').selector + '</div>').appendTo('body');  // "ul li.foo"
 *    $('<div>' + $('ul').find('li').filter('.foo').selector + '</div>').appendTo('body'); // "ul li.filter(.foo)"
 * </code></pre>
 * 
 * @since 1.3
 * @type String
**/
jQuery.prototype.selector = "";

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
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.add = function(selector) {return new jQuery();};

/**
 * The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document.
 * @example
 * <p>Determine the exact context used.</p>
 * <pre><code>$("ul")
 *   .append("<li>" + $("ul").context + "</li>")
 *   .append("<li>" + $("ul", document.body).context.nodeName + "</li>");
 * 
 * </code></pre>
 * 
 * @since 1.3
 * @type Element
**/
jQuery.prototype.context = new Element();

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
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.not = function(selector) {return new jQuery();};

/**
 * Get the current computed width for the first element in the set of matched elements, including padding and border.
 * 
 * <p>Returns the width of the element, along with left and right padding, border, and optionally margin, in pixels.</p>
 * 				<p>If <code>includeMargin</code> is omitted or <code>false</code>, the padding and border are included in the calculation; if <code>true</code>, the margin is also included.</p>
 * 				<p>This method is not applicable to <code>window</code> and <code>document</code> objects; for these, use <code><a href="/width">.width()</a></code> instead.</p>
 * 				<p class="image"><img src="/images/0042_04_06.png"/></p>
 * @example
 * <p>Get the outerWidth of a paragraph.</p>
 * <pre><code>var p = $("p:first");
 * $("p:last").text( "outerWidth:" + p.outerWidth()+ " , outerWidth(true):" + p.outerWidth(true) );
 * 
 * </code></pre>
 * 
 * @param {Boolean} includeMargin A Boolean indicating whether to include the element's margin in the calculation.
 * 
 * @since 1.2.6
 * @returns {Number}
**/
jQuery.prototype.outerWidth = function(includeMargin) {return 0;};

/**
 * Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin.
 * 
 * <p>The top and bottom padding and border are always included in the <code>.outerHeight()</code> calculation; if the <code>includeMargin</code> argument is set to <code>true</code>, the margin (top and bottom) is also included.</p>
 * 				<p>This method is not applicable to <code>window</code> and <code>document</code> objects; for these, use <code><a href="/height">.height()</a></code> instead.</p>
 * 				<p class="image"><img src="/images/0042_04_03.png"/></p>
 * @example
 * <p>Get the outerHeight of a paragraph.</p>
 * <pre><code>var p = $("p:first");
 * $("p:last").text( "outerHeight:" + p.outerHeight() + " , outerHeight(true):" + p.outerHeight(true) );</code></pre>
 * 
 * @param {Boolean} includeMargin A Boolean indicating whether to include the element's margin in the calculation.
 * 
 * @since 1.2.6
 * @returns {Number}
**/
jQuery.prototype.outerHeight = function(includeMargin) {return 0;};

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
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.toggle = function(duration, callback) {return new jQuery();};

/**
 * Get the current computed width for the first element in the set of matched elements, including padding but not border.
 * 
 * <p>This method returns the width of the element, including left and right padding, in pixels.</p>
 * <p>This method is not applicable to <code>window</code> and <code>document</code> objects; for these, use <code><a href="/width">.width()</a></code> instead.</p>
 * <p class="image"><img src="/images/0042_04_05.png"/></p>
 * @example
 * <p>Get the innerWidth of a paragraph.</p>
 * <pre><code>var p = $("p:first");
 * $("p:last").text( "innerWidth:" + p.innerWidth() );</code></pre>
 * 
 * @since 1.2.6
 * @returns {Number}
**/
jQuery.prototype.innerWidth = function() {return 0;};

/**
 * Get the current computed height for the first element in the set of matched elements, including padding but not border.
 * 
 * <p>This method returns the height of the element, including top and bottom padding, in pixels.</p>
 * <p>This method is not applicable to <code>window</code> and <code>document</code> objects; for these, use <code><a href="/height">.height()</a></code> instead.</p>
 * <p class="image"><img src="/images/0042_04_02.png"/></p>
 * @example
 * <p>Get the innerHeight of a paragraph.</p>
 * <pre><code>var p = $("p:first");
 * $("p:last").text( "innerHeight:" + p.innerHeight() );</code></pre>
 * 
 * @since 1.2.6
 * @returns {Number}
**/
jQuery.prototype.innerHeight = function() {return 0;};

/**
 * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request. 
 * 
 * 
 *     <p>This function is used internally to convert form element values into a serialized string representation (See <a href="/serialize/">.serialize()</a> for more information).</p>
 * 
 *     <p>As of jQuery 1.3, the return value of a function is used instead of the function as a String.</p>
 * 
 *     <p>As of jQuery 1.4, the <code>$.param()</code> method serializes deep objects recursively to accommodate modern scripting languages and frameworks such as PHP and Ruby on Rails. You can disable this functionality globally by setting <code>jQuery.ajaxSettings.traditional = true;</code>.</p>
 * <p>If the object passed is in an Array, it must be an array of objects in the format returned by <a href="/serializeArray/">.serializeArray()</a></p> 
 * <pre>[{name:"first",value:"Rick"},
 * {name:"last",value:"Astley"},
 * {name:"job",value:"Rock Star"}]</pre>
 *     <p>Note: Because some frameworks have limited ability to parse serialized arrays, we should exercise caution when passing an <code>obj</code> argument that contains objects or arrays nested within another array.</p>
 * <p>In jQuery 1.4 HTML5 input elements are serialized, as well.</p>
 *     <p>We can display a query string representation of an object and a URI-decoded version of the same as follows:</p>
 * <pre>var myObject = {
 *   a: {
 *     one: 1, 
 *     two: 2, 
 *     three: 3
 *   }, 
 *   b: [1,2,3]
 * };
 * var recursiveEncoded = $.param(myObject);
 * var recursiveDecoded = decodeURIComponent($.param(myObject));
 * 
 * alert(recursiveEncoded);
 * alert(recursiveDecoded);
 * </pre>
 *   <p>The values of <code>recursiveEncoded</code> and <code>recursiveDecoded</code> are alerted as follows:</p>
 * <p><span class="output">a%5Bone%5D=1&amp;a%5Btwo%5D=2&amp;a%5Bthree%5D=3&amp;b%5B%5D=1&amp;b%5B%5D=2&amp;b%5B%5D=3</span><br/>
 * <span class="output">a[one]=1&amp;a[two]=2&amp;a[three]=3&amp;b[]=1&amp;b[]=2&amp;b[]=3</span></p>
 *     <p>To emulate the behavior of <code>$.param()</code> prior to jQuery 1.4, we can set the <code>traditional</code> argument to <code>true</code>:</p>
 * <pre>var myObject = {
 *   a: {
 *     one: 1, 
 *     two: 2, 
 *     three: 3
 *   }, 
 *   b: [1,2,3]
 * };
 * var shallowEncoded = $.param(myObject, true);
 * var shallowDecoded = decodeURIComponent(shallowEncoded);
 * 
 * alert(shallowEncoded);
 * alert(shallowDecoded);
 * </pre>
 * <p>The values of <code>shallowEncoded</code> and <code>shallowDecoded</code> are alerted as follows:</p>
 * <p><span class="output">a=%5Bobject+Object%5D&amp;b=1&amp;b=2&amp;b=3</span><br/>
 * <span class="output">a=[object+Object]&amp;b=1&amp;b=2&amp;b=3</span></p>
 *   
 * @example
 * <p>Serialize a key/value object.</p>
 * <pre><code>
 * 
 *     var params = { width:1680, height:1050 };
 *     var str = jQuery.param(params);
 *     $("#results").text(str);
 * </code></pre>
 * @example
 * <p>Serialize a few complex objects</p>
 * <pre><code>
 * // <=1.3.2: 
 * $.param({ a: [2,3,4] }) // "a=2&a=3&a=4"
 * // >=1.4:
 * $.param({ a: [2,3,4] }) // "a[]=2&a[]=3&a[]=4"
 * 
 * // <=1.3.2: 
 * $.param({ a: { b:1,c:2 }, d: [3,4,{ e:5 }] }) // "a=[object+Object]&d=3&d=4&d=[object+Object]"
 * // >=1.4: 
 * $.param({ a: { b:1,c:2 }, d: [3,4,{ e:5 }] }) // "a[b]=1&a[c]=2&d[]=3&d[]=4&d[2][e]=5"
 * 
 * </code></pre>
 * 
 * @param {Array} obj An array or object to serialize.
 * 
 * @since 1.2
 * @returns {String}
**/
jQuery.param = function(obj) {return "";};

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
 *     $("a").click(function () {
 *       $(this).hide();
 *       return true;
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
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.hide = function() {return new jQuery();};

/**
 * Get the current computed width for the first element in the set of matched elements.
 * 
 * <p>The difference between <code>.css(width)</code> and <code>.width()</code> is that the latter returns a unit-less pixel value (for example, <code>400</code>) while the former returns a value with units intact (for example, <code>400px</code>). The <code>.width()</code> method is recommended when an element's width needs to be used in a mathematical calculation.</p>
 * <p class="image"><img src="/images/0042_04_04.png"/></p>
 * <p>This method is also able to find the width of the window and document.</p>
 * 
 * <pre>$(window).width();   // returns width of browser viewport
 * $(document).width(); // returns width of HTML document</pre>
 * 
 * <p>Note that <code>.width()</code> will always return the content width, regardless of the value of the CSS <code>box-sizing</code> property.</p>
 * @example
 * <p>Show various widths.  Note the values are from the iframe so might be smaller than you expected.  The yellow highlight shows the iframe body.</p>
 * <pre><code>
 *     function showWidth(ele, w) {
 *       $("div").text("The width for the " + ele + 
 *                     " is " + w + "px.");
 *     }
 *     $("#getp").click(function () { 
 *       showWidth("paragraph", $("p").width()); 
 *     });
 *     $("#getd").click(function () { 
 *       showWidth("document", $(document).width()); 
 *     });
 *     $("#getw").click(function () { 
 *       showWidth("window", $(window).width()); 
 *     });
 * 
 * </code></pre>
 * 
 * @since 1.0
 * @returns {Number}
**/
jQuery.prototype.width = function() {return 0;};

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
 * @param {String} value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.width = function(value) {return new jQuery();};

/**
 * Get the current computed height for the first element in the set of matched elements.
 * 
 * <p>The difference between <code>.css('height')</code> and <code>.height()</code> is that the latter returns a unit-less pixel value (for example, <code>400</code>) while the former returns a value with units intact (for example, <code>400px</code>). The <code>.height()</code> method is recommended when an element's height needs to be used in a mathematical calculation.</p>
 * <p class="image"><img src="/images/0042_04_01.png"/></p>
 * 
 * <p>This method is also able to find the height of the window and document.</p>
 * 
 * <pre>$(window).height();   // returns height of browser viewport
 * $(document).height(); // returns height of HTML document</pre>
 * 
 * <p>Note that <code>.height()</code> will always return the content height, regardless of the value of the CSS <code>box-sizing</code> property.</p>
 * @example
 * <p>Show various heights.  Note the values are from the iframe so might be smaller than you expected.  The yellow highlight shows the iframe body.</p>
 * <pre><code>
 *     function showHeight(ele, h) {
 *       $("div").text("The height for the " + ele + 
 *                     " is " + h + "px.");
 *     }
 *     $("#getp").click(function () { 
 *       showHeight("paragraph", $("p").height()); 
 *     });
 *     $("#getd").click(function () { 
 *       showHeight("document", $(document).height()); 
 *     });
 *     $("#getw").click(function () { 
 *       showHeight("window", $(window).height()); 
 *     });
 * 
 * </code></pre>
 * 
 * @since 1.0
 * @returns {Number}
**/
jQuery.prototype.height = function() {return 0;};

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
 * @param {String} value An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.height = function(value) {return new jQuery();};

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
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.show = function() {return new jQuery();};

/**
 * Get the current horizontal position of the scroll bar for the first element in the set of matched elements.
 * 
 * <p>The horizontal scroll position is the same as the number of pixels that are hidden from view above the scrollable area. If the scroll bar is at the very left, or if the element is not scrollable, this number will be <code>0</code>.</p>
 * @example
 * <p>Get the scrollLeft of a paragraph.</p>
 * <pre><code>var p = $("p:first");
 * 			$("p:last").text( "scrollLeft:" + p.scrollLeft() );
 * 
 * 			</code></pre>
 * 
 * @since 1.2.6
 * @returns {Number}
**/
jQuery.prototype.scrollLeft = function() {return 0;};

/**
 * Set the current horizontal position of the scroll bar for each of the set of matched elements.
 * 
 * <p>The horizontal scroll position is the same as the number of pixels that are hidden from view above the scrollable area. Setting the <code>scrollLeft</code> positions the horizontal scroll of each matched element.</p>
 * @example
 * <p>Set the scrollLeft of a div.</p>
 * <pre><code>$("div.demo").scrollLeft(300);
 * </code></pre>
 * 
 * @param {Number} value An integer indicating the new position to set the scroll bar to.
 * 
 * @since 1.2.6
 * @returns {jQuery}
**/
jQuery.prototype.scrollLeft = function(value) {return new jQuery();};

/**
 * Remove the whitespace from the beginning and end of a string.
 * 
 * 
 *     <p>The <code>$.trim()</code> function removes all newlines, spaces (including non-breaking spaces), and tabs from the beginning and end of the supplied string. If these whitespace characters occur in the middle of the string, they are preserved.</p>
 *   
 * @example
 * <p>Remove the two white spaces at the start and at the end of the string.</p>
 * <pre><code>
 * 
 * $("button").click(function () {
 * var str = "     lots of spaces before and after     ";
 * alert("'" + str + "'");
 * 
 * str = jQuery.trim(str);
 * alert("'" + str + "' - no longer");
 * });
 * 
 * </code></pre>
 * @example
 * <p>Remove the two white spaces at the start and at the end of the string.</p>
 * <pre><code>$.trim("  hello, how are you?  ");</code></pre>
 * 
 * @param {String} str The string to trim.
 * 
 * @since 1.0
 * @returns {String}
**/
jQuery.trim = function(str) {return "";};

/**
 * Determine if the argument passed is a Javascript function object. 
 * 
 * <p><strong>Note:</strong> As of jQuery 1.3, functions provided by the browser like <code>alert()</code> and DOM element methods like <code>getAttribute()</code> are not guaranteed to be detected as functions in browsers such as Internet Explorer.</p>
 * @example
 * <p>Test a few parameter examples.</p>
 * <pre><code>
 *     function stub() {
 *     }
 *     var objs = [
 *           function () {},
 *           { x:15, y:20 },
 *           null,
 *           stub,
 *           "function"
 *         ];
 * 
 *     jQuery.each(objs, function (i) {
 *       var isFunc = jQuery.isFunction(objs[i]);
 *       $("span").eq(i).text(isFunc);
 *     });
 * </code></pre>
 * @example
 * <p>Finds out if the parameter is a funcion.</p>
 * <pre><code>$.isFunction(function(){});</code></pre>
 * 
 * @param {Object} obj Object to test whether or not it is a function.
 * 
 * @since 1.2
 * @returns {Boolean}
**/
jQuery.isFunction = function(obj) {return new Boolean();};

/**
 * Determine whether the argument is an array.
 * 
 * <p><code>$.isArray()</code> returns a Boolean indicating whether the object is a JavaScript array (not an array-like object, such as a jQuery object).</p>
 * @example
 * <p>Finds out if the parameter is an array.</p>
 * <pre><code>$("b").append( "" + $.isArray([]) );</code></pre>
 * 
 * @param {Object} obj Object to test whether or not it is an array.
 * 
 * @since 1.3
 * @returns {Boolean}
**/
jQuery.isArray = function(obj) {return new Boolean();};

/**
 * Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.
 * 
 * <p>The <code>$.unique()</code> function searches through an array of objects, sorting the array, and removing any duplicate nodes. This function only works on plain JavaScript arrays of DOM elements, and is chiefly used internally by jQuery.</p>
 * <p>As of jQuery 1.4 the results will always be returned in document order.</p>
 * @example
 * <p>Removes any duplicate elements from the array of divs.</p>
 * <pre><code>
 * 
 *     var divs = $("div").get(); // unique() must take a native array
 * 
 *     // add 3 elements of class dup too (they are divs)
 *     divs = divs.concat($(".dup").get());
 *     $("div:eq(1)").text("Pre-unique there are " + divs.length + " elements.");
 * 
 *     divs = jQuery.unique(divs);
 *     $("div:eq(2)").text("Post-unique there are " + divs.length + " elements.")
 *                   .css("color", "red");
 * 
 * </code></pre>
 * 
 * @param {Array} array The Array of DOM elements.
 * 
 * @since 1.1.3
 * @returns {Array}
**/
jQuery.unique = function(array) {return new Array();};

/**
 * Merge the contents of two arrays together into the first array. 
 * 
 * <p>The <code>$.merge()</code> operation forms an array that contains all elements from the two arrays. The orders of items in the arrays are preserved, with items from the second array appended. The <code>$.merge()</code> function is destructive. It alters the first parameter to add the items from the second.  </p>
 *     <p>If you need the original first array, make a copy of it before calling <code>$.merge()</code>. Fortunately, <code>$.merge()</code> itself can be used for this duplication:</p>
 *     <pre>var newArray = $.merge([], oldArray);</pre>
 *     <p>This shortcut creates a new, empty array and merges the contents of oldArray into it, effectively cloning the array.</p>
 *     <p>Prior to jQuery 1.4, the arguments should be true Javascript Array objects; use <code>$.makeArray</code> if they are not.</p>
 * @example
 * <p>Merges two arrays, altering the first argument.</p>
 * <pre><code>$.merge( [0,1,2], [2,3,4] )</code></pre>
 * @example
 * <p>Merges two arrays, altering the first argument.</p>
 * <pre><code>$.merge( [3,2,1], [4,3,2] )  </code></pre>
 * @example
 * <p>Merges two arrays, but uses a copy, so the original isn't altered.</p>
 * <pre><code>var first = ['a','b','c'];
 * var second = ['d','e','f'];
 * $.merge( $.merge([],first), second);
 *       </code></pre>
 * 
 * @param {Array} first The first array to merge, the elements of second added.
 * @param {Array} second The second array to merge into the first, unaltered.
 * 
 * @since 1.0
 * @returns {Array}
**/
jQuery.merge = function(first, second) {return new Array();};

/**
 * Search for a specified value within an array and return its index (or -1 if not found).
 * 
 * <p>The <code>$.inArray()</code> method is similar to JavaScript's native <code>.indexOf()</code> method in that it returns -1 when it doesn't find a match. If the first element within the array matches <code>value</code>, <code>$.inArray()</code> returns 0.</p> 
 * 
 *     <p>Because JavaScript treats 0 as loosely equal to false (i.e. 0 == false, but 0 !== false), if we're checking for the presence of <code>value</code> within <code>array</code>, we need to check if it's not equal to (or greater than) -1.</p>
 *   
 * @example
 * <p>Report the index of some elements in the array.</p>
 * <pre><code>var arr = [ 4, "Pete", 8, "John" ];
 * 
 * $("span:eq(0)").text(jQuery.inArray("John", arr));
 * $("span:eq(1)").text(jQuery.inArray(4, arr));
 * $("span:eq(2)").text(jQuery.inArray("Karl", arr));
 * 
 * </code></pre>
 * 
 * @param {Any} value The value to search for.
 * @param {Array} array An array through which to search.
 * 
 * @since 1.2
 * @returns {Number}
**/
jQuery.inArray = function(value, array) {return 0;};

/**
 * Translate all items in an array or object to new array of items.
 * 
 * 
 *   <p>The <code>$.map()</code> method applies a function to each item in an array or object and maps the results into a new array. <strong>Prior to jQuery 1.6</strong>, <code>$.map()</code> supports traversing <em>arrays and array-like objects only</em>. <strong>As of jQuery 1.6</strong> it also traverses objects.</p>
 *    <p>Array-like objects, such as jQuery collections, are treated as arrays. In other words, if an object has a <code>.length</code> property <em>and</em> a value on the <code>.length - 1</code> index, it is traversed as an array.</p>
 *     <p>The translation function that is provided to this method is called for each top-level element in the array or object and is passed two arguments: The element's value and its index or key within the array or object.</p>
 *     <p>The function can return:</p>
 *     <ul>
 *       <li>the translated value, which will be mapped to the resulting array</li>
 *       <li><code>null</code>, to remove the item</li>
 *       <li>an array of values, which will be flattened into the full array</li>
 *     </ul>
 *    
 * @example
 * <p>A couple examples of using .map()</p>
 * <pre><code>
 *     var arr = [ "a", "b", "c", "d", "e" ];
 *     $("div").text(arr.join(", "));
 * 
 *     arr = jQuery.map(arr, function(n, i){
 *       return (n.toUpperCase() + i);
 *     });
 *     $("p").text(arr.join(", "));
 * 
 *     arr = jQuery.map(arr, function (a) { 
 *       return a + a; 
 *     });
 *     $("span").text(arr.join(", "));
 * 
 * </code></pre>
 * @example
 * <p>Map the original array to a new one and add 4 to each value.</p>
 * <pre><code>$.map( [0,1,2], function(n){
 *    return n + 4;
 *  });</code></pre>
 * @example
 * <p>Maps the original array to a new one and adds 1 to each value if it is bigger then zero, otherwise it's removed.</p>
 * <pre><code>$.map( [0,1,2], function(n){
 *    return n > 0 ? n + 1 : null;
 *  });</code></pre>
 * @example
 * <p>Map the original array to a new one; each element is added with its original value and the value plus one.</p>
 * <pre><code>$.map( [0,1,2], function(n){
 *    return [ n, n + 1 ];
 *  });</code></pre>
 * @example
 * <p>Map the original object to a new array and double each value.</p>
 * <pre><code>
 * var dimensions = { width: 10, height: 15, length: 20 };
 * dimensions = $.map( dimensions, function( value, index ) {
 *   return value * 2;
 * }); </code></pre>
 * @example
 * <p>Map an object's keys to an array.</p>
 * <pre><code>
 * var dimensions = { width: 10, height: 15, length: 20 },
 *     keys = $.map( dimensions, function( value, index ) {
 *       return index;
 *     }); </code></pre>
 * @example
 * <p>Maps the original array to a new one; each element is squared.</p>
 * <pre><code>
 * $.map( [0,1,2,3], function (a) { 
 *   return a * a; 
 * });</code></pre>
 * @example
 * <p>Remove items by returning <code>null</code> from the function. This removes any numbers less than 50, and the rest are decreased by 45.</p>
 * <pre><code>
 * $.map( [0, 1, 52, 97], function (a) {
 *   return (a > 50 ? a - 45 : null); 
 * });</code></pre>
 * @example
 * <p>Augmenting the resulting array by returning an array inside the function.</p>
 * <pre><code>var array = [0, 1, 52, 97];
 * array = $.map(array, function(a, index) {
 *   return [a - 45, index];
 * }); </code></pre>
 * 
 * @param {Array} array The Array to translate.
 * @param {Function} callback The function to process each item against.  The first argument to the function is the array item, the second argument is the index in array The function can return any value. Within the function, <code>this</code> refers to the global (window) object.
 * 
 * @since 1.0
 * @returns {Array}
**/
jQuery.map = function(array, callback) {return new Array();};

/**
 * Convert an array-like object into a true JavaScript array.
 * 
 * 
 *     <p>Many methods, both in jQuery and in JavaScript in general, return objects that are array-like. For example, the jQuery factory function <code>$()</code> returns a jQuery object that has many of the properties of an array (a length, the <code>[]</code> array access operator, etc.), but is not exactly the same as an array and lacks some of an array's built-in methods (such as <code>.pop()</code> and <code>.reverse()</code>).</p>
 * 
 *     <p>Note that after the conversion, any special features the object had (such as the jQuery methods in our example) will no longer be present. The object is now a plain array.</p>
 * @example
 * <p>Turn a collection of HTMLElements into an Array of them.</p>
 * <pre><code>
 *     var elems = document.getElementsByTagName("div"); // returns a nodeList
 *     var arr = jQuery.makeArray(elems);
 *     arr.reverse(); // use an Array method on list of dom elements
 *     $(arr).appendTo(document.body);
 * </code></pre>
 * @example
 * <p>Turn a jQuery object into an array</p>
 * <pre><code>
 *     var obj = $('li');
 *     var arr = $.makeArray(obj);
 * </code></pre>
 * 
 * @param {Object} obj Any object to turn into a native Array.
 * 
 * @since 1.2
 * @returns {Array}
**/
jQuery.makeArray = function(obj) {return new Array();};

/**
 * Finds the elements of an array which satisfy a filter function. The original array is not affected.
 * 
 * <p>The <code>$.grep()</code> method removes items from an array as necessary so that all remaining items pass a provided test. The test is a function that is passed an array item and the index of the item within the array. Only if the test returns true will the item be in the result array.</p>
 * 
 *   <p> The filter function will be passed two arguments: the current array item and its index. The filter function must return 'true' to include the item in the result array.</p>
 * 
 * @example
 * <p>Filters the original array of numbers leaving that are not 5 and have an index greater than 4.  Then it removes all 9s.</p>
 * <pre><code>
 * var arr = [ 1, 9, 3, 8, 6, 1, 5, 9, 4, 7, 3, 8, 6, 9, 1 ];
 * $("div").text(arr.join(", "));
 * 
 * arr = jQuery.grep(arr, function(n, i){
 *   return (n != 5 && i > 4);
 * });
 * $("p").text(arr.join(", "));
 * 
 * arr = jQuery.grep(arr, function (a) { return a != 9; });
 * $("span").text(arr.join(", "));
 * 
 * </code></pre>
 * @example
 * <p>Filter an array of numbers to include only numbers bigger then zero.</p>
 * <pre><code>$.grep( [0,1,2], function(n,i){
 *    return n > 0;
 *  });</code></pre>
 * @example
 * <p>Filter an array of numbers to include numbers that are not bigger than zero.</p>
 * <pre><code>$.grep( [0,1,2], function(n,i){
 *     return n > 0;
 * },true);</code></pre>
 * 
 * @param {Array} array The array to search through.
 * @param {Function} fn The function to process each item against.  The first argument to the function is the item, and the second argument is the index.  The function should return a Boolean value.  <code>this</code> will be the global window object.
 * @param {Boolean} invert If "invert" is false, or not provided, then the function returns an array consisting of all elements for which "callback" returns true.  If "invert" is true, then the function returns an array consisting of all elements for which "callback" returns false.
 * 
 * @since 1.0
 * @returns {Array}
**/
jQuery.grep = function(array, fn, invert) {return new Array();};

/**
 * Merge the contents of two or more objects together into the first object.
 * 
 * <p>When we supply two or more objects to <code>$.extend()</code>, properties from all of the objects are added to the target object.</p>
 *   <p>If only one argument is supplied to <code>$.extend()</code>, this means the target argument was omitted. In this case, the jQuery object itself is assumed to be the target. By doing this, we can add new functions to the jQuery namespace.  This can be useful for plugin authors wishing to add new methods to JQuery.</p>
 *   <p>Keep in mind that the target object (first argument) will be modified, and will also be returned from <code>$.extend()</code>. If, however, we want to preserve both of the original objects, we can do so by passing an empty object as the target:</p>
 *   <pre>var object = $.extend({}, object1, object2);</pre>
 * 
 *   <p>The merge performed by <code>$.extend()</code> is not recursive by default; if a property of the first object is itself an object or array, it will be completely overwritten by a property with the same key in the second object. The values are not merged. This can be seen in the example below by examining the value of banana. However, by passing <code>true</code> for the first function argument, objects will be recursively merged.</p>
 *   <p>Undefined properties are not copied. However, properties inherited from the object's prototype <em>will</em> be copied over.</p>
 *   
 * @example
 * <p>Merge two objects, modifying the first.</p>
 * <pre><code>
 * var object1 = {
 *   apple: 0,
 *   banana: {weight: 52, price: 100},
 *   cherry: 97
 * };
 * var object2 = {
 *   banana: {price: 200},
 *   durian: 100
 * };
 * 
 * $.extend(object1, object2);
 * </code></pre>
 * @example
 * <p>Merge two objects recursively, modifying the first.</p>
 * <pre><code>
 * var object1 = {
 *   apple: 0,
 *   banana: {weight: 52, price: 100},
 *   cherry: 97
 * };
 * var object2 = {
 *   banana: {price: 200},
 *   lime: 100
 * };
 * 
 * $.extend(true, object1, object2);
 * </code></pre>
 * @example
 * <p>Merge settings and options, modifying settings.</p>
 * <pre><code>var settings = { validate: false, limit: 5, name: "foo" };
 * var options = { validate: true, name: "bar" };
 * jQuery.extend(settings, options);</code></pre>
 * @example
 * <p>Merge defaults and options, without modifying the defaults. This is a common plugin development pattern.</p>
 * <pre><code>var empty = {}
 * var defaults = { validate: false, limit: 5, name: "foo" };
 * var options = { validate: true, name: "bar" };
 * var settings = $.extend(empty, defaults, options);</code></pre>
 * 
 * @param {Object} target  An object that will receive the new properties if additional objects are passed in or that will extend the jQuery namespace if it is the sole argument.
 * @param {Object} object1 An object containing additional properties to merge in.
 * @param {Object} objectN Additional objects containing properties to merge in.
 * 
 * @since 1.0
 * @returns {Object}
**/
jQuery.extend = function(target, object1, objectN) {return new Object();};

/**
 * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
 * 
 * 
 *     <p>The <code>$.each()</code> function is not the same as <a href="/each/">.each()</a>, which is used to iterate, exclusively, over a jQuery object. The <code>$.each()</code> function can be used to iterate over any collection, whether it is a map (JavaScript object) or an array. In the case of an array, the callback is passed an array index and a corresponding array value each time. (The value can also be accessed through the <code>this</code> keyword, but Javascript will always wrap the <code>this</code> value as an <code>Object</code> even if it is a simple string or number value.) The method returns its first argument, the object that was iterated.</p>
 * 
 * <pre>$.each([52, 97], function(index, value) { 
 *   alert(index + ': ' + value); 
 * });
 * </pre>
 * <p>This produces two messages:</p>
 * <p>
 *   <span class="output">0: 52</span><br/>
 *   <span class="output">1: 97</span>
 * </p>
 *     <p>If a map is used as the collection, the callback is passed a key-value pair each time:</p>
 * <pre>var map = { 
 *   'flammable': 'inflammable', 
 *   'duh': 'no duh' 
 * }; 
 * $.each(map, function(key, value) { 
 *   alert(key + ': ' + value); 
 * });</pre>
 *     <p>Once again, this produces two messages:</p>
 *     <p>
 *       <span class="output">flammable: inflammable</span><br/>
 *       <span class="output">duh: no duh</span>
 *     </p>
 *     
 *     <p>We can break the <code>$.each()</code> loop at a particular iteration by making the callback function return <code>false</code>. Returning <em>non-false</em> is the same as a <code>continue</code> statement in a for loop; it will skip immediately to the next iteration.</p>
 * @example
 * <p>Iterates through the array displaying each number as both a word and numeral</p>
 * <pre><code>
 *     var arr = [ "one", "two", "three", "four", "five" ];
 *     var obj = { one:1, two:2, three:3, four:4, five:5 };
 * 
 *     jQuery.each(arr, function() {
 *       $("#" + this).text("Mine is " + this + ".");
 *        return (this != "three"); // will stop running after "three"
 *    });
 * 
 *     jQuery.each(obj, function(i, val) {
 *       $("#" + i).append(document.createTextNode(" - " + val));
 *     });
 * </code></pre>
 * @example
 * <p>Iterates over items in an array, accessing both the current item and its index.</p>
 * <pre><code>$.each( ['a','b','c'], function(i, l){
 *    alert( "Index #" + i + ": " + l );
 *  });</code></pre>
 * @example
 * <p>Iterates over the properties in an object, accessing both the current item and its key.</p>
 * <pre><code>$.each( { name: "John", lang: "JS" }, function(k, v){
 *    alert( "Key: " + k + ", Value: " + v );
 *  });</code></pre>
 * 
 * @param {Object} collection The object or array to iterate over.
 * @param {Function} callback The function that will be executed on every object.
 * 
 * @since 1.0
 * @returns {Object}
**/
jQuery.each = function(collection, callback) {return new Object();};

/**
 * <strong>Deprecated in jQuery 1.3 (see <a href="/jQuery.support">jQuery.support</a>)</strong>. States if the current page, in the user's browser, is being rendered using the <a href="http://www.w3.org/TR/REC-CSS2/box.html">W3C CSS Box Model</a>.
 * @example
 * <p>Returns the box model for the iframe.</p>
 * <pre><code>
 * 
 *     $("p").html("The box model for this iframe is: <span>" +
 *                 jQuery.boxModel + "</span>");
 * </code></pre>
 * @example
 * <p>Returns false if the page is in Quirks Mode in Internet Explorer</p>
 * <pre><code>$.boxModel</code></pre>
 * 
 * @since 1.0
 * @type Boolean
**/
jQuery.boxModel = new Boolean();

/**
 * Get the current vertical position of the scroll bar for the first element in the set of matched elements.
 * 
 * <p>The vertical scroll position is the same as the number of pixels that are hidden from view above the scrollable area. If the scroll bar is at the very top, or if the element is not scrollable, this number will be <code>0</code>.</p>
 * @example
 * <p>Get the scrollTop of a paragraph.</p>
 * <pre><code>var p = $("p:first");
 * $("p:last").text( "scrollTop:" + p.scrollTop() );
 * 
 * </code></pre>
 * 
 * @since 1.2.6
 * @returns {Number}
**/
jQuery.prototype.scrollTop = function() {return 0;};

/**
 * Set the current vertical position of the scroll bar for each of the set of matched elements.
 * 
 * <p>The vertical scroll position is the same as the number of pixels that are hidden from view above the scrollable area. Setting the <code>scrollTop</code> positions the vertical scroll of each matched element.</p>
 * @example
 * <p>Set the scrollTop of a div.</p>
 * <pre><code>$("div.demo").scrollTop(300);
 * </code></pre>
 * 
 * @param {Number} value An integer indicating the new position to set the scroll bar to.
 * 
 * @since 1.2.6
 * @returns {jQuery}
**/
jQuery.prototype.scrollTop = function(value) {return new jQuery();};

/**
 * A collection of properties that represent the presence of different browser features or bugs.
 * @example
 * <p>Returns the box model for the iframe.</p>
 * <pre><code>
 * 
 *     $("p").html("This frame uses the W3C box model: <span>" +
 *                 jQuery.support.boxModel + "</span>");
 * 
 * </code></pre>
 * @example
 * <p>Returns false if the page is in QuirksMode in Internet Explorer</p>
 * <pre><code>jQuery.support.boxModel</code></pre>
 * 
 * @since 1.3
 * @type Object
**/
jQuery.support = new Object();

/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
 * 
 * <p>The <code>.position()</code> method allows us to retrieve the current position of an element <em>relative to the offset parent</em>. Contrast this with <code><a href="/offset">.offset()</a></code>, which retrieves the current position <em>relative to the document</em>. When positioning a new element near another one and within the same containing DOM element, <code>.position()</code> is the more useful.</p>
 * <p>Returns an object containing the properties <code>top</code> and <code>left</code>.</p>
 * @example
 * <p>Access the position of the second paragraph:</p>
 * <pre><code>
 * var p = $("p:first");
 * var position = p.position();
 * $("p:last").text( "left: " + position.left + ", top: " + position.top );
 * </code></pre>
 * 
 * @since 1.2
 * @returns {Object}
**/
jQuery.prototype.position = function() {return new Object();};

/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the document.
 * 
 * <p>The <code>.offset()</code> method allows us to retrieve the current position of an element <em>relative to the document</em>. Contrast this with <code>.position()</code>, which retrieves the current position <em>relative to the offset parent</em>. When positioning a new element on top of an existing one for global manipulation (in particular, for implementing drag-and-drop), <code>.offset()</code> is the more useful.</p>
 * 
 *     <p><code>.offset()</code> returns an object containing the properties <code>top</code> and <code>left</code>.</p>
 * <blockquote><p><strong>Note:</strong> jQuery does not support getting the offset coordinates of hidden elements or accounting for borders, margins, or padding set on the body element.</p></blockquote>    
 *     
 * @example
 * <p>Access the offset of the second paragraph:</p>
 * <pre><code>var p = $("p:last");
 * var offset = p.offset();
 * p.html( "left: " + offset.left + ", top: " + offset.top );</code></pre>
 * @example
 * <p>Click to see the offset.</p>
 * <pre><code>
 * $("*", document.body).click(function (e) {
 *   var offset = $(this).offset();
 *   e.stopPropagation();
 *   $("#result").text(this.tagName + " coords ( " + offset.left + ", " +
 *                                   offset.top + " )");
 * });
 * 
 * </code></pre>
 * 
 * @since 1.2
 * @returns {Object}
**/
jQuery.prototype.offset = function() {return new Object();};

/**
 * Set the current coordinates of every element in the set of matched elements, relative to the document.
 * 
 * <p>The <code>.offset()</code> setter method allows us to reposition an element. The element's position is specified <em>relative to the document</em>. If the element's <code>position</code> style property is currently <code>static</code>, it will be set to <code>relative</code> to allow for this repositioning.</p>
 * @example
 * <p>Set the offset of the second paragraph:</p>
 * <pre><code>$("p:last").offset({ top: 10, left: 30 });</code></pre>
 * 
 * @param {Object} coordinates An object containing the properties <code>top</code> and <code>left</code>, which are integers indicating the new top and left coordinates for the elements.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.offset = function(coordinates) {return new jQuery();};

/**
 * Get the value of a style property for the first element in the set of matched elements.
 * 
 * <p>The <code>.css()</code> method is a convenient way to get a style property from the first matched element, especially in light of the different ways browsers access most of those properties (the <code>getComputedStyle()</code> method in standards-based browsers versus the <code>currentStyle</code> and <code>runtimeStyle</code> properties in Internet Explorer) and the different terms browsers use for certain properties. For example, Internet Explorer's DOM implementation refers to the <code>float</code> property as <code>styleFloat</code>, while W3C standards-compliant browsers refer to it as <code>cssFloat</code>. The <code>.css()</code> method accounts for such differences, producing the same result no matter which term we use. For example, an element that is floated left will return the string <code>left</code> for each of the following three lines:</p>
 * 				<ol>
 * 					<li><code>$('div.left').css('float');</code></li>
 * 					<li><code>$('div.left').css('cssFloat');</code></li>
 * 					<li><code>$('div.left').css('styleFloat');</code></li>
 * 				</ol>
 * 				<p>Also, jQuery can equally interpret the CSS and DOM formatting of multiple-word properties. For example, jQuery understands and returns the correct value for both <code>.css('background-color')</code> and <code>.css('backgroundColor')</code>.</p>
 * 				<p>Shorthand CSS properties (e.g. margin, background, border) are not supported. For example, if you want to retrieve the rendered margin, use: <code>$(elem).css('marginTop')</code> and <code>$(elem).css('marginRight')</code>, and so on.</p>
 * @example
 * <p>To access the background color of a clicked div.</p>
 * <pre><code>
 * $("div").click(function () {
 *   var color = $(this).css("background-color");
 *   $("#result").html("That div is <span style='color:" +
 *                      color + ";'>" + color + "</span>.");
 * });
 * 
 * </code></pre>
 * 
 * @param {String} propertyName A CSS property.
 * 
 * @since 1.0
 * @returns {String}
**/
jQuery.prototype.css = function(propertyName) {return "";};

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
 * @param {String} value A value to set for the property.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.css = function(propertyName, value) {return new jQuery();};

/**
 * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
 * 
 * <p>The <code>.unwrap()</code> method removes the element's parent. This is effectively the inverse of the <code><a href="/wrap">.wrap()</a></code> method. The matched elements (and their siblings, if any) replace their parents within the DOM structure.</p>
 * @example
 * <p>Wrap/unwrap a div around each of the paragraphs.</p>
 * <pre><code>
 * $("button").toggle(function(){
 *   $("p").wrap("<div></div>");
 * }, function(){
 *   $("p").unwrap();
 * });</code></pre>
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.unwrap = function() {return new jQuery();};

/**
 * Remove the set of matched elements from the DOM.
 * 
 * <p>The <code>.detach()</code> method is the same as <code><a href="/remove">.remove()</a></code>, except that <code>.detach()</code> keeps all jQuery data associated with the removed elements. This method is useful when removed elements are to be reinserted into the DOM at a later time.</p>
 * @example
 * <p>Detach all paragraphs from the DOM</p>
 * <pre><code>
 *     $("p").click(function(){
 *       $(this).toggleClass("off");
 *     });
 *     var p;
 *     $("button").click(function(){
 *       if ( p ) {
 *         p.appendTo("body");
 *         p = null;
 *       } else {
 *         p = $("p").detach();
 *       }
 *     });</code></pre>
 * 
 * @param {Selector} selector A selector expression that filters the set of matched elements to be removed.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.detach = function(selector) {return new jQuery();};

/**
 * Create a deep copy of the set of matched elements.
 * 
 * <p>The <code>.clone()</code> method performs a <em>deep</em> copy of the set of matched elements, meaning that it copies the matched elements as well as all of their descendant elements and text nodes. When used in conjunction with one of the insertion methods, <code>.clone()</code> is a convenient way to duplicate elements on a page. Consider the following HTML:</p>
 *         <pre>&lt;div class="container"&gt;
 *   &lt;div class="hello"&gt;Hello&lt;/div&gt;
 *   &lt;div class="goodbye"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *         <p>As shown in the discussion for <code><a href="http://api.jquery.com/append/">.append()</a></code>,  normally when an element is inserted somewhere in the DOM, it is moved from its old location. So, given the code:</p>
 * <pre>$('.hello').appendTo('.goodbye');</pre>
 *     <p>The resulting DOM structure would be:</p>
 * <pre>&lt;div class="container"&gt;
 *   &lt;div class="goodbye"&gt;
 *     Goodbye
 *     &lt;div class="hello"&gt;Hello&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 *         <p>To prevent this and instead create a copy of the element, you could write the following:</p>
 *         <pre>$('.hello').clone().appendTo('.goodbye');</pre>
 *         <p>This would produce:</p>
 *         <pre>&lt;div class="container"&gt;
 *   &lt;div class="hello"&gt;Hello&lt;/div&gt;
 *   &lt;div class="goodbye"&gt;
 *     Goodbye
 *     &lt;div class="hello"&gt;Hello&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 *         <blockquote><p>Note that when using the <code>.clone()</code> method, you can modify the cloned elements or their contents before (re-)inserting them into the document.</p></blockquote>
 *         <p>Normally, any event handlers bound to the original element are <em>not</em> copied to the clone. The optional <code>withDataAndEvents</code> parameter allows us to change this behavior, and to instead make copies of all of the event handlers as well, bound to the new copy of the element. As of jQuery 1.4, all element data (attached by the <code>.data()</code> method) is also copied to the new copy. </p>
 * <p>However, objects and arrays within element data are not copied and will continue to be shared between the cloned element and the original element. To deep copy all data, copy each one manually:</p>
 * <pre>var $elem = $('#elem').data( "arr": [ 1 ] ), // Original element with attached data
 *     $clone = $elem.clone( true )
 *     .data( "arr", $.extend( [], $elem.data("arr") ) ); // Deep copy to prevent data sharing
 * </pre>
 *     <p>As of jQuery 1.5, <code>withDataAndEvents</code> can be optionally enhanced with <code>deepWithDataAndEvents </code> to copy the events and data for all children of the cloned element.</p>
 *   
 * @example
 * <p>Clones all b elements (and selects the clones) and prepends them to all paragraphs.</p>
 * <pre><code>
 *   $("b").clone().prependTo("p");
 * </code></pre>
 * 
 * @param {Boolean} withDataAndEvents A Boolean indicating whether event handlers should be copied along with the elements. As of jQuery 1.4, element data will be copied as well.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.clone = function(withDataAndEvents) {return new jQuery();};

/**
 * Remove the set of matched elements from the DOM.
 * 
 * <p>Similar to <code><a href="/empty">.empty()</a></code>, the <code>.remove()</code> method takes elements out of the DOM. Use <code>.remove()</code> when you want to remove the element itself, as well as everything inside it. In addition to the elements themselves, all bound events and jQuery data  associated with the elements are removed. To remove the elements without removing data and events, use <code><a href="http://api.jquery.com/detach/">.detach()</a></code> instead.</p>
 * 				<p>Consider the following HTML:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="hello"&gt;Hello&lt;/div&gt;
 *   &lt;div class="goodbye"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>We can target any element for removal:</p>
 * 				<pre>$('.hello').remove();</pre>
 * 				<p>This will result in a DOM structure with the <code>&lt;div&gt;</code> element deleted:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="goodbye"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>If we had any number of nested elements inside <code>&lt;div class="hello"&gt;</code>, they would be removed, too. Other jQuery constructs such as data or event handlers are erased as well.</p>
 * 				<p>We can also include a selector as an optional parameter. For example, we could rewrite the previous DOM removal code as follows:</p>
 * 				<pre>$('div').remove('.hello');</pre>
 * 				<p>This would result in the same DOM structure:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="goodbye"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * @example
 * <p>Removes all paragraphs from the DOM</p>
 * <pre><code>
 *     $("button").click(function () {
 *       $("p").remove();
 *     });
 * 
 * </code></pre>
 * @example
 * <p>Removes all paragraphs that contain "Hello" from the DOM.  Analogous to doing <code>$("p").filter(":contains('Hello')").remove()</code>.</p>
 * <pre><code>
 * 
 *     $("button").click(function () {
 *       $("p").remove(":contains('Hello')");
 *     });
 * 
 * </code></pre>
 * 
 * @param {String} selector A selector expression that filters the set of matched elements to be removed.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.remove = function(selector) {return new jQuery();};

/**
 * Remove all child nodes of the set of matched elements from the DOM.
 * 
 * <p>This method removes not only child (and other descendant) elements, but also any text within the set of matched elements. This is because, according to the DOM specification, any string of text within an element is considered a child node of that element. Consider the following HTML:</p>
 * <pre>&lt;div class="container"&gt;
 *   &lt;div class="hello"&gt;Hello&lt;/div&gt;
 *   &lt;div class="goodbye"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * <p>We can target any element for removal:</p>
 * <pre>$('.hello').empty();</pre>
 * <p>This will result in a DOM structure with the <code>Hello</code> text deleted:</p>
 * <pre>&lt;div class="container"&gt;
 *   &lt;div class="hello"&gt;&lt;/div&gt;
 *   &lt;div class="goodbye"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * <p>If we had any number of nested elements inside <code>&lt;div class="hello"&gt;</code>, they would be removed, too. </p>
 *   <p>To avoid memory leaks, jQuery removes other constructs such as data and event handlers from the child elements before removing the elements themselves.</p>
 *   
 * @example
 * <p>Removes all child nodes (including text nodes) from all paragraphs</p>
 * <pre><code>
 *   $("button").click(function () {
 *     $("p").empty();
 *   });
 * </code></pre>
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.empty = function() {return new jQuery();};

/**
 * Replace each target element with the set of matched elements.
 * 
 * <p>The <code>.replaceAll()</code> method is corollary to <code><a href="/replaceWith">.replaceWith()</a></code>, but with the source and target reversed. Consider this DOM structure:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="inner first"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner second"&gt;And&lt;/div&gt;
 *   &lt;div class="inner third"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>We can create an element, then replace other elements with it:</p>
 * 				<pre>$('&lt;h2&gt;New heading&lt;/h2&gt;').replaceAll('.inner');</pre>
 * 				<p>This causes all of them to be replaced:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;New heading&lt;/h2&gt;
 *   &lt;h2&gt;New heading&lt;/h2&gt;
 *   &lt;h2&gt;New heading&lt;/h2&gt;
 * &lt;/div&gt;</pre>
 * 				<p>Or, we could select an element to use as the replacement:</p>
 * 				<pre>$('.first').replaceAll('.third');</pre>
 * 				<p>This results in the DOM structure:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="inner second"&gt;And&lt;/div&gt;
 *   &lt;div class="inner first"&gt;Hello&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>From this example, we can see that the selected element replaces the target by being moved from its old location, not by being cloned.</p>
 * @example
 * <p>Replace all the paragraphs with bold words.</p>
 * <pre><code>$("<b>Paragraph. </b>").replaceAll("p"); // check replaceWith() examples</code></pre>
 * 
 * @param {Selector} target A selector expression indicating which element(s) to replace.
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.replaceAll = function(target) {return new jQuery();};

/**
 * Replace each element in the set of matched elements with the provided new content.
 * 
 * <p>The <code>.replaceWith()</code> method removes content from the DOM and inserts new content in its place with a single call. Consider this DOM structure:</p>
 *     <pre>&lt;div class="container"&gt;
 *   &lt;div class="inner first"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner second"&gt;And&lt;/div&gt;
 *   &lt;div class="inner third"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *     <p>The second inner <code>&lt;div&gt;</code> could be replaced with the specified HTML:</p>
 *     <pre>$('div.second').replaceWith('&lt;h2&gt;New heading&lt;/h2&gt;');</pre>
 *     <p>This results in the structure:</p>
 *     <pre>&lt;div class="container"&gt;
 *   &lt;div class="inner first"&gt;Hello&lt;/div&gt;
 *   &lt;h2&gt;New heading&lt;/h2&gt;
 *   &lt;div class="inner third"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *     <p><em>All</em> inner <code>&lt;div&gt;</code> elements could be targeted at once:</p>
 *     <pre>$('div.inner').replaceWith('&lt;h2&gt;New heading&lt;/h2&gt;');</pre>
 *     <p>This causes all of them to be replaced:</p>
 *     <pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;New heading&lt;/h2&gt;
 *   &lt;h2&gt;New heading&lt;/h2&gt;
 *   &lt;h2&gt;New heading&lt;/h2&gt;
 * &lt;/div&gt;</pre>
 *     <p>An element could also be selected as the replacement:</p>
 *     <pre>$('div.third').replaceWith($('.first'));</pre>
 *     <p>This results in the DOM structure:</p>
 *     <pre>&lt;div class="container"&gt;
 *   &lt;div class="inner second"&gt;And&lt;/div&gt;
 *   &lt;div class="inner first"&gt;Hello&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *     <p>This example demonstrates that the selected element replaces the target by being moved from its old location, not by being cloned.</p>
 *     <p>The <code>.replaceWith()</code> method, like most jQuery methods, returns the jQuery object so that other methods can be chained onto it. However, it must be noted that the <em>original</em> jQuery object is returned. This object refers to the element that has been removed from the DOM, not the new element that has replaced it.</p>
 * <p>As of jQuery 1.4, <code>.replaceWith()</code> can also work on disconnected DOM nodes. For example, with the following code, <code>.replaceWith()</code> returns a jQuery set containing only a paragraph.:</p>
 * <pre>$("&lt;div/&gt;").replaceWith("&lt;p&gt;&lt;/p&gt;");</pre>
 * <p>The <code>.replaceWith()</code> method can also take a function as its argument:</p>
 * <pre>$('div.container').replaceWith(function() {
 *   return $(this).contents();
 * });</pre>
 * <p>This results in <code>&lt;div class="container"&gt;</code> being replaced by its three child <code>&lt;div&gt;</code>s. The return value of the function may be an HTML string, DOM element, or jQuery object.</p>
 * 
 * @example
 * <p>On click, replace the button with a div containing the same word.</p>
 * <pre><code>
 * $("button").click(function () {
 *   $(this).replaceWith( "<div>" + $(this).text() + "</div>" );
 * });
 * </code></pre>
 * @example
 * <p>Replace all paragraphs with bold words.</p>
 * <pre><code>
 * $("p").replaceWith( "<b>Paragraph. </b>" );
 * </code></pre>
 * @example
 * <p>Replace all paragraphs with empty div elements.</p>
 * <pre><code>
 *   $("p").replaceWith( document.createElement("div") );</code></pre>
 * @example
 * <p>On click, replace each paragraph with a div that is already in the DOM and selected with the <code>$()</code> function. Notice it doesn't clone the object but rather moves it to replace the paragraph.</p>
 * <pre><code>
 * $("p").click(function () {
 *   $(this).replaceWith( $("div") );
 * });
 * </code></pre>
 * @example
 * <p>On button click, replace the containing div with its child divs and append the class name of the selected element to the paragraph.</p>
 * <pre><code>
 * $('button').bind("click", function() {
 *   var $container = $("div.container").replaceWith(function() {
 *     return $(this).contents();
 *   });
 * 
 *   $("p").append( $container.attr("class") );
 * });
 * </code></pre>
 * 
 * @param {String} newContent The content to insert. May be an HTML string, DOM element, or jQuery object.
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.replaceWith = function(newContent) {return new jQuery();};

/**
 * Wrap an HTML structure around the content of each element in the set of matched elements.
 * 
 * <p>The <code>.wrapInner()</code> function can take any string or object that could be passed to the <code>$()</code> factory function to specify a DOM structure. This structure may be nested several levels deep, but should contain only one inmost element. The structure will be wrapped around the content of each of the elements in the set of matched elements.</p>
 * 				<p>Consider the following HTML:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>Using <code>.wrapInner()</code>, we can insert an HTML structure around the content of each inner <code>&lt;div&gt;</code> elements like so:</p>
 * 				<pre>$('.inner').wrapInner('&lt;div class="new" /&gt;');</pre>
 * 				<p>The new <code>&lt;div&gt;</code> element is created on the fly and added to the DOM. The result is a new <code>&lt;div&gt;</code> wrapped around the content of each matched element:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;div class="new"&gt;Hello&lt;/div&gt;
 *   &lt;/div&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;div class="new"&gt;Goodbye&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>The second version of this method allows us to instead specify a callback function. This callback function will be called once for every matched element; it should return a DOM element, jQuery object, or HTML snippet in which to wrap the content of the corresponding element. For example:</p>
 * 				<pre>$('.inner').wrapInner(function() {
 *   return '&lt;div class="' + this.nodeValue + '" /&gt;';
 * });</pre>
 * 				<p>This will cause each <code>&lt;div&gt;</code> to have a class corresponding to the text it wraps:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;div class="Hello"&gt;Hello&lt;/div&gt;
 *   &lt;/div&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;div class="Goodbye"&gt;Goodbye&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 * <p><strong>Note:</strong> When passing a selector string to the <code>.wrapInner()</code> function, the expected input is well formed HTML with correctly closed tags. Examples of valid input include:</p>
 * <pre>
 * $(elem).wrapInner("&lt;div class='test' /&gt;");
 * $(elem).wrapInner("&lt;div class='test'&gt;&lt;/div&gt;");
 * $(elem).wrapInner("&lt;div class=\"test\"&gt;&lt;/div&gt;");
 * </pre>
 * 
 * @example
 * <p>Selects all paragraphs and wraps a bold tag around each of its contents.</p>
 * <pre><code>$("p").wrapInner("<b></b>");</code></pre>
 * @example
 * <p>Wraps a newly created tree of objects around the inside of the body.</p>
 * <pre><code>$("body").wrapInner("<div><div><p><em><b></b></em></p></div></div>");</code></pre>
 * @example
 * <p>Selects all paragraphs and wraps a bold tag around each of its contents.</p>
 * <pre><code>$("p").wrapInner(document.createElement("b"));</code></pre>
 * @example
 * <p>Selects all paragraphs and wraps a jQuery object around each of its contents.</p>
 * <pre><code>$("p").wrapInner($("<span class='red'></span>"));</code></pre>
 * 
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the content of the matched elements.
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.wrapInner = function(wrappingElement) {return new jQuery();};

/**
 * Wrap an HTML structure around all elements in the set of matched elements.
 * 
 * <p>The <code>.wrapAll()</code> function can take any string or object that could be passed to the <code>$()</code> function to specify a DOM structure. This structure may be nested several levels deep, but should contain only one inmost element. The structure will be wrapped around all of the elements in the set of matched elements, as a single group.</p>
 * 				<p>Consider the following HTML:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>Using <code>.wrapAll()</code>, we can insert an HTML structure around the inner <code>&lt;div&gt;</code> elements like so:</p>
 * 				<pre>$('.inner').wrapAll('&lt;div class="new" /&gt;');</pre>
 * 				<p>The new <code>&lt;div&gt;</code> element is created on the fly and added to the DOM. The result is a new <code>&lt;div&gt;</code> wrapped around all matched elements:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="new"&gt;
 *     &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *     &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 * @example
 * <p>Wrap a new div around all of the paragraphs.</p>
 * <pre><code>$("p").wrapAll("<div></div>");</code></pre>
 * @example
 * <p>Wraps a newly created tree of objects around the spans.  Notice anything in between the spans gets left out like the &lt;strong&gt; (red text) in this example.  Even the white space between spans is left out.  Click View Source to see the original html.</p>
 * <pre><code>$("span").wrapAll("<div><div><p><em><b></b></em></p></div></div>");</code></pre>
 * @example
 * <p>Wrap a new div around all of the paragraphs.</p>
 * <pre><code>$("p").wrapAll(document.createElement("div"));</code></pre>
 * @example
 * <p>Wrap a jQuery object double depth div around all of the paragraphs.  Notice it doesn't move the object but just clones it to wrap around its target.</p>
 * <pre><code>$("p").wrapAll($(".doublediv"));</code></pre>
 * 
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the matched elements.
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.wrapAll = function(wrappingElement) {return new jQuery();};

/**
 * Wrap an HTML structure around each element in the set of matched elements.
 * 
 * <p>The <code>.wrap()</code> function can take any string or object that could be passed to the <code>$()</code> factory function to specify a DOM structure. This structure may be nested several levels deep, but should contain only one inmost element. The structure will be wrapped around each of the elements in the set of matched elements. This method returns the original set of elements for chaining purposes.</p>
 *   <p>Consider the following HTML:</p>
 *   <pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>Using <code>.wrap()</code>, we can insert an HTML structure around the inner <code>&lt;div&gt;</code> elements like so:</p>
 * 				<pre>$('.inner').wrap('&lt;div class="new" /&gt;');</pre>
 * 				<p>The new <code>&lt;div&gt;</code> element is created on the fly and added to the DOM. The result is a new <code>&lt;div&gt;</code> wrapped around each matched element:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="new"&gt;
 *     &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;/div&gt;
 *   &lt;div class="new"&gt;
 *     &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 *   <p>The second version of this method allows us to instead specify a callback function. This callback function will be called once for every matched element; it should return a DOM element, jQuery object, or HTML snippet in which to wrap the corresponding element. For example:</p>
 *   <pre>$('.inner').wrap(function() {
 *   return '&lt;div class="' + $(this).text() + '" /&gt;';
 * });</pre>
 *   <p>This will cause each <code>&lt;div&gt;</code> to have a class corresponding to the text it wraps:</p>
 *   <pre>&lt;div class="container"&gt;
 *   &lt;div class="Hello"&gt;
 *     &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;/div&gt;
 *   &lt;div class="Goodbye"&gt;
 *     &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 
 * @example
 * <p>Wrap a new div around all of the paragraphs.</p>
 * <pre><code>$("p").wrap("<div></div>");</code></pre>
 * @example
 * <p>Wraps a newly created tree of objects around the spans.  Notice anything in between the spans gets left out like the <strong> (red text) in this example.  Even the white space between spans is left out.  Click View Source to see the original html.</p>
 * <pre><code>$("span").wrap("<div><div><p><em><b></b></em></p></div></div>");</code></pre>
 * @example
 * <p>Wrap a new div around all of the paragraphs.</p>
 * <pre><code>$("p").wrap(document.createElement("div"));</code></pre>
 * @example
 * <p>Wrap a jQuery object double depth div around all of the paragraphs.  Notice it doesn't move the object but just clones it to wrap around its target.</p>
 * <pre><code>$("p").wrap($(".doublediv"));</code></pre>
 * 
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the matched elements.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.wrap = function(wrappingElement) {return new jQuery();};

/**
 * Insert every element in the set of matched elements before the target.
 * 
 * <p>The <code><a href="/before">.before()</a></code> and <code>.insertBefore()</code> methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With<code> .before()</code>, the selector expression preceding the method is the container before which the content is inserted. With <code>.insertBefore()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted before the target container.</p>
 * 				<p>Consider the following HTML:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>We can create content and insert it before several elements at once:</p>
 * 				<pre>$('&lt;p&gt;Test&lt;/p&gt;').insertBefore('.inner');</pre>
 * 				<p>Each inner <code>&lt;div&gt;</code> element gets this new content:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 *   &lt;p&gt;Test&lt;/p&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;p&gt;Test&lt;/p&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>We can also select an element on the page and insert it before another:</p>
 * 				<pre>$('h2').insertBefore($('.container'));</pre>
 * 				<p>If an element selected this way is inserted elsewhere, it will be moved before the target (not cloned):</p>
 * 				<pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>If there is more than one target element, however, cloned copies of the inserted element will be created for each target after the first.</p>
 * @example
 * <p>Inserts all paragraphs before an element with id of "foo". Same as $("#foo").before("p")</p>
 * <pre><code>$("p").insertBefore("#foo"); // check before() examples</code></pre>
 * 
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted before the element(s) specified by this parameter.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.insertBefore = function(target) {return new jQuery();};

/**
 * Insert content, specified by the parameter, before each element in the set of matched elements.
 * 
 * <p>The <code>.before()</code> and <code><a href="/insertBefore">.insertBefore()</a></code> methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With<code> .before()</code>, the selector expression preceding the method is the container before which the content is inserted. With <code>.insertBefore()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted before the target container.</p>
 * 				<p>Consider the following HTML:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>You can create content and insert it before several elements at once:</p>
 * 				<pre>$('.inner').before('&lt;p&gt;Test&lt;/p&gt;');</pre>
 * 				<p>Each inner <code>&lt;div&gt;</code> element gets this new content:</p>
 * <pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 *   &lt;p&gt;Test&lt;/p&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;p&gt;Test&lt;/p&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * <p>You can also select an element on the page and insert it before another:</p>
 * 				<pre>$('.container').before($('h2'));</pre>
 * 				<p>If an element selected this way is inserted elsewhere, it will be moved before the target (not cloned):</p>
 * 				<pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>If there is more than one target element, however, cloned copies of the inserted element will be created for each target after the first.</p>
 * <p>In jQuery 1.4, <code>.before()</code> and <code>.after()</code> will also work on disconnected DOM nodes:</p>
 * <pre>$("&lt;div/&gt;").before("&lt;p&gt;&lt;/p&gt;");</pre>
 * <p>The result is a jQuery set that contains a paragraph and a div (in that order).</p>
 *    <h4 id="additional-arguments">Additional Arguments</h4>
 *     <p>Similar to other content-adding methods such as <code><a href="http://api.jquery.com/prepend/">.prepend()</a></code> and <code><a href="http://api.jquery.com/after/">.after()</a></code>, <code>.before()</code> also supports passing in multiple arguments as input. Supported input includes DOM elements, jQuery objects, HTML strings, and arrays of DOM elements.</p> 
 *     <p>For example, the following will insert two new <code>&lt;div&gt;</code>s and an existing <code>&lt;div&gt;</code> before the first paragraph:</p>
 * <pre>var $newdiv1 = $('&lt;div id="object1"/&gt;'),
 *     newdiv2 = document.createElement('div'),
 *     existingdiv1 = document.getElementById('foo');
 * 
 * $('p').first().before($newdiv1, [newdiv2, existingdiv1]);
 * </pre>
 * <p>Since <code>.before()</code> can accept any number of additional arguments, the same result can be achieved by passing in the three <code>&lt;div&gt;</code>s as three separate arguments, like so: <code>$('p').first().before($newdiv1, newdiv2, existingdiv1)</code>. The type and number of arguments will largely depend on how you collect the elements in your code.</p>
 * 
 * 
 * @example
 * <p>Inserts some HTML before all paragraphs.</p>
 * <pre><code>$("p").before("<b>Hello</b>");</code></pre>
 * @example
 * <p>Inserts a DOM element before all paragraphs.</p>
 * <pre><code>$("p").before( document.createTextNode("Hello") );</code></pre>
 * @example
 * <p>Inserts a jQuery object (similar to an Array of DOM Elements) before all paragraphs.</p>
 * <pre><code>$("p").before( $("b") );</code></pre>
 * 
 * @param {String} content HTML string, DOM element, or jQuery object to insert before each element in the set of matched elements.
 * @param {String} content One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.before = function(content, content) {return new jQuery();};

/**
 * Insert every element in the set of matched elements after the target.
 * 
 * <p>The <code><a href="/after">.after()</a></code> and <code>.insertAfter()</code> methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With<code> .after()</code>, the selector expression preceding the method is the container after which the content is inserted. With <code>.insertAfter()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted after the target container.</p>
 * 				<p>Consider the following HTML:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>We can create content and insert it after several elements at once:</p>
 * 				<pre>$('&lt;p&gt;Test&lt;/p&gt;').insertAfter('.inner');</pre>
 * 				<p>Each inner <code>&lt;div&gt;</code> element gets this new content:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;p&gt;Test&lt;/p&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 *   &lt;p&gt;Test&lt;/p&gt;
 * &lt;/div&gt;</pre>
 * 				<p>We can also select an element on the page and insert it after another:</p>
 * 				<pre>$('h2').insertAfter($('.container'));</pre>
 * 				<p>If an element selected this way is inserted elsewhere, it will be moved after the target (not cloned):</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;
 * &lt;h2&gt;Greetings&lt;/h2&gt;</pre>
 * 				<p>If there is more than one target element, however, cloned copies of the inserted element will be created for each target after the first.</p>
 * @example
 * <p>Inserts all paragraphs after an element with id of "foo". Same as $("#foo").after("p")</p>
 * <pre><code>$("p").insertAfter("#foo"); // check after() examples</code></pre>
 * 
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted after the element(s) specified by this parameter.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.insertAfter = function(target) {return new jQuery();};

/**
 * Insert content, specified by the parameter, after each element in the set of matched elements.
 * 
 * <p>The <code>.after()</code> and <code><a href="/insertAfter">.insertAfter()</a></code> methods perform the same task. The major difference is in the syntax—specifically, in the placement of the content and target. With<code> .after()</code>, the selector expression preceding the method is the container after which the content is inserted. With <code>.insertAfter()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted after the target container.</p>
 * 
 * <p>Using the following HTML:</p>
 * <pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 
 * <p>Content can be created and then inserted after several elements at once:</p>
 * 
 * <pre>$('.inner').after('&lt;p&gt;Test&lt;/p&gt;');</pre>
 * 
 * <p>Each inner <code>&lt;div&gt;</code> element gets this new content:</p>
 * 
 * <pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;p&gt;Test&lt;/p&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 *   &lt;p&gt;Test&lt;/p&gt;
 * &lt;/div&gt;</pre>
 * 
 * <p>An element in the DOM can also be selected and inserted after another element:</p>
 * 
 * <pre>$('.container').after($('h2'));</pre>
 * 
 * <p>If an element selected this way is inserted elsewhere, it will be moved rather than cloned:</p>
 * 
 * <pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;
 * &lt;h2&gt;Greetings&lt;/h2&gt;</pre>
 * <p>If there is more than one target element, however, cloned copies of the inserted element will be created for each target after the first.</p>
 * <h4 id="disconnected-dom-nodes">Inserting Disconnected DOM nodes</h4>
 * <p>As of jQuery 1.4, <code>.before()</code> and <code>.after()</code> will also work on disconnected DOM nodes. For example, given the following code:</p>
 * <pre>$('&lt;div/&gt;').after('&lt;p&gt;&lt;/p&gt;');</pre>
 * <p>The result is a jQuery set containing a div and a paragraph, in that order. That set can be further manipulated, even before it is inserted in the document.</p>
 * <pre>$('&lt;div/&gt;').after('&lt;p&gt;&lt;/p&gt;').addClass('foo')
 *   .filter('p').attr('id', 'bar').html('hello')
 * .end()
 * .appendTo('body');</pre>
 * <p>This results in the following elements inserted just before the closing <code>&lt;/body&gt;</code> tag:</p>
 * <pre>
 * &lt;div class="foo"&gt;&lt;/div&gt;
 * &lt;p class="foo" id="bar"&gt;hello&lt;/p&gt;
 * </pre>
 * <h4 id="passing-a-function">Passing a Function</h4>
 * <p>As of jQuery 1.4, <code>.after()</code> supports passing a function that returns the elements to insert.</p>
 * <pre>$('p').after(function() {
 *   return '&lt;div&gt;' + this.className + '&lt;/div&gt;';
 * });</pre>
 * <p>This example inserts a <code>&lt;div&gt;</code> after each paragraph, with each new <code>&lt;div&gt;</code> containing the class name(s) of its preceding paragraph.</p>
 *     <h4 id="additional-arguments">Additional Arguments</h4>
 *     <p>Similar to other content-adding methods such as <code><a href="http://api.jquery.com/prepend/">.prepend()</a></code> and <code><a href="http://api.jquery.com/before/">.before()</a></code>, <code>.after()</code> also supports passing in multiple arguments as input. Supported input includes DOM elements, jQuery objects, HTML strings, and arrays of DOM elements.</p> 
 *     <p>For example, the following will insert two new <code>&lt;div&gt;</code>s and an existing <code>&lt;div&gt;</code> after the first paragraph:</p>
 * <pre>var $newdiv1 = $('&lt;div id="object1"/&gt;'),
 *     newdiv2 = document.createElement('div'),
 *     existingdiv1 = document.getElementById('foo');
 * 
 * $('p').first().after($newdiv1, [newdiv2, existingdiv1]);
 * </pre>
 * <p>Since <code>.after()</code> can accept any number of additional arguments, the same result can be achieved by passing in the three <code>&lt;div&gt;</code>s as three separate arguments, like so: <code>$('p').first().after($newdiv1, newdiv2, existingdiv1)</code>. The type and number of arguments will largely depend on the elements are collected in the code.</p>
 * 
 * 
 * @example
 * <p>Inserts some HTML after all paragraphs.</p>
 * <pre><code>$("p").after("<b>Hello</b>");</code></pre>
 * @example
 * <p>Inserts a DOM element after all paragraphs.</p>
 * <pre><code>$("p").after( document.createTextNode("Hello") );</code></pre>
 * @example
 * <p>Inserts a jQuery object (similar to an Array of DOM Elements) after all paragraphs.</p>
 * <pre><code>$("p").after( $("b") );</code></pre>
 * 
 * @param {String} content HTML string, DOM element, or jQuery object to insert after each element in the set of matched elements.
 * @param {String} content One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.after = function(content, content) {return new jQuery();};

/**
 * Insert every element in the set of matched elements to the beginning of the target.
 * 
 * <p>The <code><a href="/prepend">.prepend()</a></code> and <code>.prependTo()</code> methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With<code> .prepend()</code>, the selector expression preceding the method is the container into which the content is inserted. With <code>.prependTo()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container.</p>
 * 				<p>Consider the following HTML:</p>
 * 				<pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>We can create content and insert it into several elements at once:</p>
 * 				<pre>$('&lt;p&gt;Test&lt;/p&gt;').prependTo('.inner');</pre>
 * 				<p>Each inner <code>&lt;div&gt;</code> element gets this new content:</p>
 * 				<pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;p&gt;Test&lt;/p&gt;
 *     Hello
 *   &lt;/div&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;p&gt;Test&lt;/p&gt;
 *     Goodbye
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>We can also select an element on the page and insert it into another:</p>
 * 				<pre>$('h2').prependTo($('.container'));</pre>
 * 				<p>If an element selected this way is inserted elsewhere, it will be moved into the target (not cloned):</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>If there is more than one target element, however, cloned copies of the inserted element will be created for each target after the first.</p>
 * @example
 * <p>Prepends all spans to the element with the ID "foo"</p>
 * <pre><code>$("span").prependTo("#foo"); // check prepend() examples</code></pre>
 * 
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.prependTo = function(target) {return new jQuery();};

/**
 * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
 * 
 * <p>The <code>.prepend()</code> method inserts the specified content as the first child of each element in the jQuery collection (To insert it as the <em>last</em> child, use <a href="http://api.jquery.com/append/"><code>.append()</code></a>). </p>
 *     <p>The <code>.prepend()</code> and <code><a href="/prependTo">.prependTo()</a></code> methods perform the same task. The major difference is in the syntax—specifically, in the placement of the content and target. With<code> .prepend()</code>, the selector expression preceding the method is the container into which the content is inserted. With <code>.prependTo()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container.</p>
 *     <p>Consider the following HTML:</p>
 *     <pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *     <p>You can create content and insert it into several elements at once:</p>
 *     <pre>$('.inner').prepend('&lt;p&gt;Test&lt;/p&gt;');</pre>
 *     <p>Each <code>&lt;div class="inner"&gt;</code> element gets this new content:</p>
 *     <pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;p&gt;Test&lt;/p&gt;
 *     Hello
 *   &lt;/div&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;p&gt;Test&lt;/p&gt;
 *     Goodbye
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 *   <p>You can also select an element on the page and insert it into another:</p>
 *   <pre>$('.container').prepend($('h2'));</pre>
 *   <p>If <em>a single element</em> selected this way is inserted elsewhere, it will be moved into the target (<em>not cloned</em>):</p>
 *   <pre>&lt;div class="container"&gt;
 *     &lt;h2&gt;Greetings&lt;/h2&gt;
 *     &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *     &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *     <p><strong>Important</strong>: If there is more than one target element, however, cloned copies of the inserted element will be created for each target after the first.</p>
 *     <h4 id="additional-arguments">Additional Arguments</h4>
 *     <p>Similar to other content-adding methods such as <code><a href="http://api.jquery.com/append/">.append()</a></code> and <code><a href="http://api.jquery.com/before/">.before()</a></code>, <code>.prepend()</code> also supports passing in multiple arguments as input. Supported input includes DOM elements, jQuery objects, HTML strings, and arrays of DOM elements.</p> 
 *     <p>For example, the following will insert two new <code>&lt;div&gt;</code>s and an existing <code>&lt;div&gt;</code> as the first three child nodes of the body:</p>
 * <pre>var $newdiv1 = $('&lt;div id="object1"/&gt;'),
 *     newdiv2 = document.createElement('div'),
 *     existingdiv1 = document.getElementById('foo');
 * 
 * $('body').prepend($newdiv1, [newdiv2, existingdiv1]);
 * </pre>
 * <p>Since <code>.prepend()</code> can accept any number of additional arguments, the same result can be achieved by passing in the three <code>&lt;div&gt;</code>s as three separate arguments, like so: <code>$('body').prepend($newdiv1, newdiv2, existingdiv1)</code>. The type and number of arguments will largely depend on how you collect the elements in your code.</p>
 *   
 * @example
 * <p>Prepends some HTML to all paragraphs.</p>
 * <pre><code>$("p").prepend("<b>Hello </b>");</code></pre>
 * @example
 * <p>Prepends a DOM Element to all paragraphs.</p>
 * <pre><code>$("p").prepend(document.createTextNode("Hello "));</code></pre>
 * @example
 * <p>Prepends a jQuery object (similar to an Array of DOM Elements) to all paragraphs.</p>
 * <pre><code>$("p").prepend( $("b") );</code></pre>
 * 
 * @param {String} content DOM element, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
 * @param {String} content One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.prepend = function(content, content) {return new jQuery();};

/**
 * Insert every element in the set of matched elements to the end of the target.
 * 
 * <p>The <code><a href="/append">.append()</a></code> and <code>.appendTo()</code> methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With<code> .append()</code>, the selector expression preceding the method is the container into which the content is inserted. With <code>.appendTo()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container.</p>
 * 				<p>Consider the following HTML:</p>
 * 				<pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;
 * </pre>
 * 				<p>We can create content and insert it into several elements at once:</p>
 * 				<pre>$('&lt;p&gt;Test&lt;/p&gt;').appendTo('.inner');
 * </pre>
 * 				<p>Each inner <code>&lt;div&gt;</code> element gets this new content:</p>
 * 				<pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;
 *     Hello
 *     &lt;p&gt;Test&lt;/p&gt;
 *   &lt;/div&gt;
 *   &lt;div class="inner"&gt;
 *     Goodbye
 *     &lt;p&gt;Test&lt;/p&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </pre>
 * 				<p>We can also select an element on the page and insert it into another:</p>
 * 				<pre>$('h2').appendTo($('.container'));
 * </pre>
 * 				<p>If an element selected this way is inserted elsewhere, it will be moved into the target (not cloned):</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;/div&gt;
 * </pre>
 * 				<p>If there is more than one target element, however, cloned copies of the inserted element will be created for each target after the first.</p>
 * @example
 * <p>Appends all spans to the element with the ID "foo"</p>
 * <pre><code>$("span").appendTo("#foo"); // check append() examples</code></pre>
 * 
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.appendTo = function(target) {return new jQuery();};

/**
 * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
 * 
 * <p>The <code>.append()</code> method inserts the  specified content as the last child of each element in the jQuery collection (To insert it as the <em>first</em> child, use <a href="http://api.jquery.com/prepend/"><code>.prepend()</code></a>). </p>
 *     <p>The <code>.append()</code> and <code><a href="/appendTo">.appendTo()</a></code> methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With<code> .append()</code>, the selector expression preceding the method is the container into which the content is inserted. With <code>.appendTo()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container.</p>
 *     <p>Consider the following HTML:</p>
 *     <pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;
 * </pre>
 * <p>You can create content and insert it into several elements at once:</p>
 * <pre>$('.inner').append('&lt;p&gt;Test&lt;/p&gt;');
 * </pre>
 * <p>Each inner <code>&lt;div&gt;</code> element gets this new content:</p>
 * <pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;
 *     Hello
 *     &lt;p&gt;Test&lt;/p&gt;
 *   &lt;/div&gt;
 *   &lt;div class="inner"&gt;
 *     Goodbye
 *     &lt;p&gt;Test&lt;/p&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </pre>
 * <p>You can also select an element on the page and insert it into another:</p>
 * <pre>$('.container').append($('h2'));
 * </pre>
 * <p>If an element selected this way is inserted elsewhere, it will be moved into the target (not cloned):</p>
 * <pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;/div&gt;
 * </pre>
 * <p>If there is more than one target element, however, cloned copies of the inserted element will be created for each target after the first.</p>
 * 
 *     <h4 id="additional-arguments">Additional Arguments</h4>
 *     <p>Similar to other content-adding methods such as <code><a href="http://api.jquery.com/prepend/">.prepend()</a></code> and <code><a href="http://api.jquery.com/before/">.before()</a></code>, <code>.append()</code> also supports passing in multiple arguments as input. Supported input includes DOM elements, jQuery objects, HTML strings, and arrays of DOM elements.</p> 
 *     <p>For example, the following will insert two new <code>&lt;div&gt;</code>s and an existing <code>&lt;div&gt;</code> as the last three child nodes of the body:</p>
 * <pre>var $newdiv1 = $('&lt;div id="object1"/&gt;'),
 *     newdiv2 = document.createElement('div'),
 *     existingdiv1 = document.getElementById('foo');
 * 
 * $('body').append($newdiv1, [newdiv2, existingdiv1]);
 * </pre>
 * <p>Since <code>.append()</code> can accept any number of additional arguments, the same result can be achieved by passing in the three <code>&lt;div&gt;</code>s as three separate arguments, like so: <code>$('body').append($newdiv1, newdiv2, existingdiv1)</code>. The type and number of arguments will largely depend on how you collect the elements in your code.</p>
 * 
 * @example
 * <p>Appends some HTML to all paragraphs.</p>
 * <pre><code>
 *   $("p").append("<strong>Hello</strong>");
 * </code></pre>
 * @example
 * <p>Appends an Element to all paragraphs.</p>
 * <pre><code>
 *   $("p").append(document.createTextNode("Hello"));
 * </code></pre>
 * @example
 * <p>Appends a jQuery object (similar to an Array of DOM Elements) to all paragraphs.</p>
 * <pre><code>
 *   $("p").append( $("strong") );
 * </code></pre>
 * 
 * @param {String} content DOM element, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
 * @param {String} content One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.append = function(content, content) {return new jQuery();};

/**
 * Get the current value of the first element in the set of matched elements.
 * 
 * 
 *       <p>The <code>.val()</code> method is primarily used to get the values of form elements. In the case of <code>&lt;select multiple="multiple"&gt;</code> elements, the <code>.val()</code> method returns an array containing each selected option.</p>
 * 
 * <p>For selects and checkboxes, you can also use the <a href="/selected">:selected</a> and <a href="/checked">:checked</a> selectors to get at values, for example:</p>
 * <pre>$('select.foo option:selected').val();    // get the value from a dropdown select
 * $('select.foo').val();                    // get the value from a dropdown select even easier
 * $('input:checkbox:checked').val();        // get the value from a checked checkbox
 * $('input:radio[name=bar]:checked').val(); // get the value from a set of radio buttons</pre>
 * @example
 * <p>Get the single value from a single select and an array of values from a multiple select and display their values.</p>
 * <pre><code>
 *     function displayVals() {
 *       var singleValues = $("#single").val();
 *       var multipleValues = $("#multiple").val() || [];
 *       $("p").html("<b>Single:</b> " + 
 *                   singleValues +
 *                   " <b>Multiple:</b> " + 
 *                   multipleValues.join(", "));
 *     }
 * 
 *     $("select").change(displayVals);
 *     displayVals();
 * 
 * </code></pre>
 * @example
 * <p>Find the value of an input box.</p>
 * <pre><code>
 *     $("input").keyup(function () {
 *       var value = $(this).val();
 *       $("p").text(value);
 *     }).keyup();
 * </code></pre>
 * 
 * @since 1.0
 * @returns {String}
**/
jQuery.prototype.val = function() {return "";};

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
 * @param {String} value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.val = function(value) {return new jQuery();};

/**
 * Get the combined text contents of each element in the set of matched elements, including their descendants.
 * 
 * <p>Unlike the <code>.html()</code> method, <code>.text()</code> can be used in both XML and HTML documents. The result of the <code>.text()</code> method is a string containing the combined text of all matched elements. (Due to variations in the HTML parsers in different browsers, the text returned may vary in newlines and other white space.) Consider the following HTML:</p>
 * <pre>&lt;div class="demo-container"&gt;
 *   &lt;div class="demo-box"&gt;Demonstration Box&lt;/div&gt;
 *   &lt;ul&gt;
 *   &lt;li&gt;list item 1&lt;/li&gt;
 *   &lt;li&gt;list &lt;strong&gt;item&lt;/strong&gt; 2&lt;/li&gt;
 *   &lt;/ul&gt;
 *   &lt;/div&gt;
 * </pre>
 *       <p>The code <code>$('div.demo-container').text()</code> would produce the following result:</p>
 *       <p>
 *         <code>Demonstration Box list item 1 list item 2</code>
 *       </p>
 *       <p>The <code>.text()</code> method cannot be used on input elements.  For input field text, use the <a href="/val">.val()</a> method.</p>
 *       <p>As of jQuery 1.4, the <code>.text()</code> method returns the value of text and CDATA nodes as well as element nodes.</p>
 *     
 * @example
 * <p>Find the text in the first paragraph (stripping out the html), then set the html of the last paragraph to show it is just text (the red bold is gone).</p>
 * <pre><code>
 *     var str = $("p:first").text();
 *     $("p:last").html(str);
 * </code></pre>
 * 
 * @since 1.0
 * @returns {String}
**/
jQuery.prototype.text = function() {return "";};

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
 * @param {String} textString A string of text to set as the content of each matched element.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.text = function(textString) {return new jQuery();};

/**
 * Get the HTML contents of the first element in the set of matched elements.
 * 
 * 
 *     <p>This method is not available on XML documents.</p>
 *     <p>In an HTML document, <code>.html()</code> can be used to get the contents of any element. If the selector expression matches more than one element, only the first match will have its HTML content returned. Consider this code:</p>
 *     <pre>$('div.demo-container').html();</pre>
 *     <p>In order for the following <code>&lt;div&gt;</code>'s content to be retrieved, it would have to be the first one with <code>class="demo-container"</code> in the document:</p>
 *     <pre>&lt;div class="demo-container"&gt;
 *   &lt;div class="demo-box"&gt;Demonstration Box&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *   <p>The result would look like this:</p>
 *   <pre>&lt;div class="demo-box"&gt;Demonstration Box&lt;/div&gt;</pre>
 *   <p>This method uses the browser's <code>innerHTML</code> property. Some browsers may not return HTML that exactly replicates the HTML source in an original document. For example, Internet Explorer sometimes leaves off the quotes around attribute values if they contain only alphanumeric characters.</p>
 *   
 * @example
 * <p>Click a paragraph to convert it from html to text.</p>
 * <pre><code>
 *     $("p").click(function () {
 *       var htmlStr = $(this).html();
 *       $(this).text(htmlStr);
 *     });
 * </code></pre>
 * 
 * @since 1.0
 * @returns {String}
**/
jQuery.prototype.html = function() {return "";};

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
 * @param {String} htmlString A string of HTML to set as the content of each matched element.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.html = function(htmlString) {return new jQuery();};

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
 *     var mappedItems = $("li").map(function (index) {
 *       var replacement = $("<li>").text($(this).text()).get(0);
 *       if (index == 0) {
 *         // make the first item all caps
 *         $(replacement).text($(replacement).text().toUpperCase());
 *       } else if (index == 1 || index == 3) {
 *         // delete the second and fourth items
 *         replacement = null;
 *       } else if (index == 2) {
 *         // make two of the third item and add some text
 *         replacement = [replacement,$("<li>").get(0)];
 *         $(replacement[0]).append("<b> - A</b>");
 *         $(replacement[1]).append("Extra <b> - B</b>");
 *       }
 * 
 *       // replacement will be an dom element, null, 
 *       // or an array of dom elements
 *       return replacement;
 *     });
 *     $("#results").append(mappedItems);
 * 
 * </code></pre>
 * @example
 * <p>Equalize the heights of the divs.</p>
 * <pre><code>
 * $.fn.equalizeHeights = function(){
 *   return this.height( Math.max.apply(this, $(this).map(function(i,e){ return $(e).height() }).get() ) )
 * }
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
 * <pre>$("ul:).click(function(event) {
 *   var $target = $(event.target);
 *   if ( $target.is("li") ) {
 *     $target.css("background-color", "red");
 *   }
 * });</pre>
 * <p>Now, when the user clicks on the word "list" in the first item or anywhere in the third item, the clicked list item will be given a red background. However, when the user clicks on item 1 in the first item or anywhere in the second item, nothing will occur, because in those cases the target of the event would be <code>&lt;strong&gt;</code> or <code>&lt;span&gt;</code>, respectively.
 * </p>
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
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * 
 * @since 1.0
 * @returns {Boolean}
**/
jQuery.prototype.is = function(selector) {return new Boolean();};

/**
 * Reduce the set of matched elements to the one at the specified index.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.eq()</code> method constructs a new jQuery object from one element within that set. The supplied index identifies the position of this element in the set. </p>
 * <p>Consider a page with a simple list on it:</p>
 * <pre>
 *   &lt;ul&gt;
 *     &lt;li&gt;list item 1&lt;/li&gt;
 *     &lt;li&gt;list item 2&lt;/li&gt;
 *     &lt;li&gt;list item 3&lt;/li&gt;
 *     &lt;li&gt;list item 4&lt;/li&gt;
 *     &lt;li&gt;list item 5&lt;/li&gt;
 *   &lt;/ul&gt;
 * </pre>
 * <p>We can apply this method to the set of list items:</p>
 * <pre>
 *   $('li').eq(2).css('background-color', 'red');
 * </pre>
 * <p>The result of this call is a red background for item 3. Note that the supplied index is zero-based, and refers to the position of the element within the jQuery object, not within the DOM tree.</p>
 * <p>Providing a negative number indicates a position starting from the end of the set, rather than the beginning. For example:</p>
 * <pre>
 *   $('li').eq(-2).css('background-color', 'red');
 * </pre>
 * <p>This time list item 4 is turned red, since it is two from the end of the set.</p>
 * <p>If an element cannot be found at the specified zero-based index, the method constructs a new jQuery object with an empty set and a <code>length</code> property of 0. </p>
 * <pre>
 *   $('li').eq(5).css('background-color', 'red');
 * </pre>
 * <p>Here, none of the list items is turned red, since <code>.eq(5)</code> indicates the sixth of five list items.</p>
 * 
 * @example
 * <p>Turn the div with index 2 blue by adding an appropriate class.</p>
 * <pre><code>
 * 
 *     $("body").find("div").eq(2).addClass("blue");
 * </code></pre>
 * 
 * @param {Number} index An integer indicating the 0-based position of the element. 
 * 
 * @since 1.1.2
 * @returns {jQuery}
**/
jQuery.prototype.eq = function(index) {return new jQuery();};

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
 * <p>Change the color of all divs then put a border around only some of them.</p>
 * <pre><code>
 * 
 *     $("div").css("background", "#c8ebcc")
 *             .filter(".middle")
 *             .css("border-color", "red");
 * </code></pre>
 * @example
 * <p>Selects all paragraphs and removes those without a class "selected".</p>
 * <pre><code>$("p").filter(".selected")</code></pre>
 * @example
 * <p>Selects all paragraphs and removes those that aren't of class "selected" or the first one.</p>
 * <pre><code>$("p").filter(".selected, :first")</code></pre>
 * @example
 * <p>Change the color of all divs then put a border to specific ones.</p>
 * <pre><code>
 *     $("div").css("background", "#b4b0da")
 *             .filter(function (index) {
 *                   return index == 1 || $(this).attr("id") == "fourth";
 *                 })
 *             .css("border", "3px double red");
 * 
 * </code></pre>
 * @example
 * <p>Remove all elements that have a descendant ol element</p>
 * <pre><code>$("div").filter(function(index) {
 *    return $("ol", this).length == 0;
 *  });</code></pre>
 * 
 * @param {Selector} selector A string containing a selector expression to match the current set of elements against.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.filter = function(selector) {return new jQuery();};

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
 * @param {String} className One or more class names (separated by spaces) to be toggled for each element in the matched set.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.toggleClass = function(className) {return new jQuery();};

/**
 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 * 
 * <p>If a class name is included as a parameter, then only that class will be removed from the set of matched elements. If no class names are specified in the parameter, all classes will be removed.</p>
 * 				<p>More than one class may be removed at a time, separated by a space, from the set of matched elements, like so:</p>
 * 				<pre>$('p').removeClass('myClass yourClass')
 * </pre>
 * 				<p>This method is often used with <code>.addClass()</code> to switch elements' classes from one to another, like so:</p>
 * 				<pre>$('p').removeClass('myClass noClass').addClass('yourClass');
 * </pre>
 * 				<p>Here, the <code>myClass</code> and <code>noClass</code> classes are removed from all paragraphs, while <code>yourClass</code> is added.</p>
 * 				<p>To replace all existing classes with another class, we can use <code>.attr('class', 'newClass')</code> instead.</p>
 *         <p>As of jQuery 1.4, the <code>.removeClass()</code> method allows us to indicate the class to be removed by passing in a function.</p>
 *         <pre>$('li:last').removeClass(function() {
 *           return $(this).prev().attr('class');
 *         });</pre>
 *         <p>This example removes the class name of the penultimate <code>&lt;li&gt;</code> from the last <code>&lt;li&gt;</code>.</p>
 * 
 * @example
 * <p>Remove the class 'blue' from the matched elements.</p>
 * <pre><code>$("p:even").removeClass("blue");</code></pre>
 * @example
 * <p>Remove the class 'blue' and 'under' from the matched elements.</p>
 * <pre><code>$("p:odd").removeClass("blue under");</code></pre>
 * @example
 * <p>Remove all the classes from the matched elements.</p>
 * <pre><code>$("p:eq(1)").removeClass();</code></pre>
 * 
 * @param {String} className One or more space-separated classes to be removed from the class attribute of each matched element.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.removeClass = function(className) {return new jQuery();};

/**
 * Determine whether any of the matched elements are assigned the given class.
 * 
 * <p>Elements may have more than one class assigned to them. In HTML, this is represented by separating the class names with a space:</p>
 * 		<pre>&lt;div id="mydiv" class="foo bar"&gt;&lt;/div&gt;</pre>
 * 		<p>The <code>.hasClass()</code> method will return <code>true</code> if the class is assigned to an element, even if other classes also are. For example, given the HTML above, the following will return <code>true</code>:</p>
 * 		<pre>$('#mydiv').hasClass('foo')</pre>
 * 		<p>As would:</p>
 * 		<pre>$('#mydiv').hasClass('bar')</pre>
 * 		<p>While this would return <code>false</code>:</p>
 * 		<pre>$('#mydiv').hasClass('quux')</pre>
 * @example
 * <p>Looks for the paragraph that contains 'selected' as a class.</p>
 * <pre><code>
 * $("div#result1").append($("p:first").hasClass("selected").toString());
 * $("div#result2").append($("p:last").hasClass("selected").toString());
 * $("div#result3").append($("p").hasClass("selected").toString());
 * </code></pre>
 * 
 * @param {String} className The class name to search for.
 * 
 * @since 1.2
 * @returns {Boolean}
**/
jQuery.prototype.hasClass = function(className) {return new Boolean();};

/**
 * Remove an attribute from each element in the set of matched elements.
 * 
 * <p>The <code>.removeAttr()</code> method uses the JavaScript <code>removeAttribute()</code> function, but it has the advantage of being able to be called directly on a jQuery object and it accounts for different attribute naming across browsers.</p>
 * @example
 * <p>Clicking the button enables the input next to it.</p>
 * <pre><code>
 * $("button").click(function () {
 *   $(this).next().removeAttr("disabled")
 *   .focus()
 *   .val("editable now");
 * });
 * </code></pre>
 * 
 * @param {String} attributeName An attribute to remove.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.removeAttr = function(attributeName) {return new jQuery();};

/**
 * Get the value of an attribute for the first element in the set of matched elements.
 * 
 * <p>The <code>.attr()</code> method gets the attribute value for only the <em>first</em> element in the matched set. To get the value for each element individually, use a looping construct such as jQuery's <code>.each()</code> or <code>.map()</code> method.</p>
 *   	<p><strong>As of jQuery 1.6</strong>, the <code>.attr()</code> method returns <code>undefined</code> for attributes that have not been set. In addition, <code>.attr()</code> should not be used on plain objects, arrays, the window, or the document. To retrieve and change DOM properties, use the <a href="http://api.jquery.com/prop/">.prop()</a> method.</p>
 *     <p>Using jQuery's <code>.attr()</code> method to get the value of an element's attribute has two main benefits:</p>
 *     <ol>
 *       <li><strong>Convenience</strong>: It can be called directly on a jQuery object and chained to other jQuery methods.</li>
 *       <li><strong>Cross-browser consistency</strong>: The values of some attributes are reported inconsistently across browsers, and even across versions of a single browser. The <code>.attr()</code> method reduces such inconsistencies. </li>
 *     </ol>
 *   
 * @example
 * <p>Find the title attribute of the first &lt;em&gt; in the page.</p>
 * <pre><code>
 * var title = $("em").attr("title");
 *   $("div").text(title);
 * </code></pre>
 * 
 * @param {String} attributeName The name of the attribute to get.
 * 
 * @since 1.0
 * @returns {String}
**/
jQuery.prototype.attr = function(attributeName) {return "";};

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
 * @param {String} value A value to set for the attribute.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.attr = function(attributeName, value) {return new jQuery();};

/**
 * Adds the specified class(es) to each of the set of matched elements.
 * 
 * <p>It's important to note that this method does not replace a class. It simply adds the class, appending it to any which may already be assigned to the elements.</p>
 *   <p>More than one class may be added at a time, separated by a space, to the set of matched elements, like so:</p>
 *   <pre>$("p").addClass("myClass yourClass");</pre>
 *   <p>This method is often used with <code>.removeClass()</code> to switch elements' classes from one to another, like so:</p>
 *   <pre>$("p").removeClass("myClass noClass").addClass("yourClass");</pre>
 *   <p>Here, the <code>myClass</code> and <code>noClass</code> classes are removed from all paragraphs, while <code>yourClass</code> is added.</p>
 * <p>As of jQuery 1.4, the <code>.addClass()</code> method's argument can receive a function.</p>
 * <pre>$("ul li:last").addClass(function() {
 *   return "item-" + $(this).index();
 * });</pre>
 * <p>Given an unordered list with five <code>&lt;li&gt;</code> elements, this example adds the class "item-4" to the last <code>&lt;li&gt;</code>.</p>
 * 
 * 
 * @example
 * <p>Adds the class "selected" to the matched elements.</p>
 * <pre><code>
 *   $("p:last").addClass("selected");
 *   </code></pre>
 * @example
 * <p>Adds the classes "selected" and "highlight" to the matched elements.</p>
 * <pre><code>
 *   $("p:last").addClass("selected highlight");
 *   </code></pre>
 * @example
 * <p>Pass in a function to <code>.addClass()</code> to add the "green" class to a div that already has a "red" class.</p>
 * <pre><code>
 *   $("div").addClass(function(index, currentClass) {
 *     var addedClass;
 * 
 *     if ( currentClass === "red" ) {
 *       addedClass = "green";
 *       $("p").text("There is one green div");
 *     }
 *   
 *     return addedClass;
 *   });
 * </code></pre>
 * 
 * @param {String} className One or more class names to be added to the class attribute of each matched element.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.addClass = function(className) {return new jQuery();};