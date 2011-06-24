/**
 * Modernizr is a small JavaScript library that detects the availability of
 * native implementations for next-generation web technologies, i.e. features
 * that stem from the HTML5 and CSS3 specifications. Many of these features are
 * already implemented in at least one major browser (most of them in two or
 * more), and what Modernizr does is, very simply, tell you whether the current
 * browser has this feature natively implemented or not.
 */
var Modernizr = {
	/**
	 * Resource loader (CSS and JavaScript) that was made to specifically to
	 * work side-by-side with Modernizr. It’s optional in your build, but if you
	 * are loading polyfills, There’s a good chance it can save you some
	 * bandwidth and boost performance a bit.
	 * 
	 * @example
	 * <pre><code>
	 * Modernizr.load({
	 *	  test: Modernizr.geolocation,
	 *	  yep : 'geo.js',
	 *	  nope: 'geo-polyfill.js'
	 * });
	 * </code></pre>
	 * 
	 * @param {Object} data
	 */
	load: function(data) {},
	/**
	 * CSS3 font-face support
	 */
	fontface: true,
	
	/**
	 * CSS3 background-size property support
	 */
	backgroundsize: true,
	
	/**
	 * CSS3 border-image property support
	 */
	borderimage: true,
	
	/**
	 * CSS3 border-radius property support
	 */
	borderradius: true,
	
	/**
	 * CSS3 box-shadow property support
	 */
	boxshadow: true,
	
	/**
	 * CSS3 flex box support
	 */
	flexbox: true,
	
	/**
	 * Support for hsla() colors
	 */
	hsla: true,
	
	/**
	 * CSS3 multiple backgrounds
	 */
	multiplebgs: true,
	
	/**
	 * CSS3 opacity
	 */
	opacity: true,
	
	/**
	 * CSS3 rgba() color
	 */
	rgba: true,
	
	/**
	 * CSS3 text-shadow
	 */
	textshadow: true,
	
	/**
	 * CSS3 animations
	 */
	cssanimations: true,
	
	/**
	 * CSS3 columns
	 */
	csscolumns: true,
	
	/**
	 * CSS3 gradients
	 */
	cssgradients: true,
	
	/**
	 * CSS3 reflections
	 */
	cssreflections: true,
	
	/**
	 * CSS3 transforms
	 */
	csstransforms: true,
	
	/**
	 * CSS3 3D transforms
	 */
	csstransforms3d: true,
	
	/**
	 * CSS3 transitions
	 */
	csstransitions: true,
	
	/**
	 * HTML5 Application cache
	 */
	applicationcache: true,
	
	/**
	 * HTML5 canvas
	 */
	canvas: true,
	
	/**
	 * HTML5 canvas text support
	 */
	canvastext: true,
	
	/**
	 * HTML5 Drag’n’drop
	 */
	draganddrop: true,
	
	/**
	 * HTML5 hashchange event
	 */
	hashchange: true,
	
	/**
	 * HTML5 History API
	 */
	history: true,
	
	/**
	 * HTML5 Audio. If audio support is detected, Modernizr assesses which
	 * formats the current browser will play. Currently, Modernizr tests ogg,
	 * mp3, wav and m4a.
	 * <p>
	 * Important: The values of these properties are not true booleans. Instead,
	 * Modernizr matches the HTML5 spec in returning a string representing the
	 * browser's level of confidence that it can handle that codec. These return
	 * values are an empty string (negative response), "maybe" and "probably".
	 * The empty string is falsy, in other words: <code>Modernizr.audio.ogg == ''</code> 
	 * and <code>'' == false</code>
	 * </p>
	 */
	audio: {
		mp3: "maybe",
		ogg: "maybe",
		m4a: "maybe",
		wav: "maybe"
	},
	
	/**
	 * HTML5 Video. 
	 */
	video: {
		ogg: "maybe",
		webm: "maybe",
		h264: "maybe"
	},
	
	/**
	 * HTML5 Indexed DB
	 */
	indexeddb: true,
	
	/** HTML5 Input attribute */
	autocomplete: true,
	/** HTML5 Input attribute */
	autofocus: true, 
	/** HTML5 Input attribute */
	list: true, 
	/** HTML5 Input attribute */
	placeholder: true, 
	/** HTML5 Input attribute */
	max: true, 
	/** HTML5 Input attribute */
	min: true, 
	/** HTML5 Input attribute */
	multiple: true, 
	/** HTML5 Input attribute */
	pattern: true, 
	/** HTML5 Input attribute */
	required: true, 
	/** HTML5 Input attribute */
	step: true,
	
	/** HTML5 Input type */
	search: true,
	/** HTML5 Input type */
	tel: true, 
	/** HTML5 Input type */
	url: true, 
	/** HTML5 Input type */
	email: true, 
	/** HTML5 Input type */
	datetime: true, 
	/** HTML5 Input type */
	date: true, 
	/** HTML5 Input type */
	month: true, 
	/** HTML5 Input type */
	week: true, 
	/** HTML5 Input type */
	time: true, 
	/** HTML5 Input type */
	"datetime-local": true,
	/** HTML5 Input type */
	number: true, 
	/** HTML5 Input type */
	range: true, 
	/** HTML5 Input type */
	color: true,
	
	/** HTML5 localStorage */
	localstorage: true,
	
	/** Cross-window Messaging */
	postmessage: true,
	
	/** HTML5 sessionStorage */
	sessionstorage: true,
	
	/** HTML5 Web Sockets */
	websockets: true,
	
	/** HTML5 Web SQL Database */
	websqldatabase: true,
	
	/** HTML5 Web Workers */
	webworkers: true,
	
	/** Geolocation API */
	geolocation: true,
	
	/** Inline SVG */
	inlinesvg: true,
	
	/** SMIL */
	smil: true,
	
	/** SVG */
	svg: true,
	
	/** SVG Clip paths */
	svgclippaths: true,
	
	/**
	 * Touch Events. The <code>Modernizr.touch</code> test only indicates if the browser
	 * supports touch events, which does not necessarily reflect a
	 * touchscreen device. For example, Palm Pre / WebOS (touch) phones do
	 * not support touch events and thus fail this test. Additionally,
	 * Chrome (desktop) used to lie about its support on this, but that has
	 * since been rectified. Modernizr also tests for Multitouch Support via
	 * a media query, which is how Firefox 4 exposes that for Windows 7
	 * tablets.
	 */
	touch: true,
	
	/** WebGL */
	webgl: true,
	
	/**
	 * Returns the prefixed or non-prefixed property name variant of your input
	 * 
	 * @param {String}
	 *            name Property, must be passed as DOM-style camelCase, rather
	 *            than `box-sizing` hyphenated style.
	 * 
	 * @example
	 * 
	 * <pre><code>
	 * Modernizr.prefixed('boxSizing') // 'MozBoxSizing'
	 * </code></pre>
	 * 
	 * @example
	 * 
	 * <pre><code>
	 * var transEndEventNames = {
	 * 	'WebkitTransition' : 'webkitTransitionEnd',
	 * 	'MozTransition' : 'transitionend',
	 * 	'OTransition' : 'oTransitionEnd',
	 * 	'msTransition' : 'msTransitionEnd', // maybe?
	 * 	'transition' : 'transitionEnd'
	 * },
	 * 	transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];
	 * </code></pre>
	 * 
	 * @returns {String}
	 */
	prefixed: function(name) {
		return "";
	},
	/**
	 * Modernizr.mq tests a given media query, live against the current state of
	 * the window
	 * 
	 * <p>
	 * A few important notes:
	 * </p>
	 * 
	 * <ul>
	 * <li>If a browser does not support media queries at all (eg. oldIE) the
	 * mq() will always return false</li>
	 * <li>A max-width or orientation query will be evaluated against the
	 * current state, which may change later.</li>
	 * <li>You should specify the media type, though commonly the all type is
	 * good enough: <code>Modernizr.mq('only all and (max-width: 400px)')</code></li>
	 * <li>You must specify values. Eg. If you are testing support for the
	 * min-width media query use: <code>Modernizr.mq('(min-width: 0px)')</code></li>
	 * </ul>
	 * 
	 * @example
	 * 
	 * <pre><code>
	 * Modernizr.mq('only screen and (max-width: 768px)') // true
	 * </code></pre>
	 * 
	 * @param str
	 *            Media query
	 * @returns {Boolean}
	 */
	mq: function(str) {
		return true;
	},
	
	/**
	 * You may want to test additional features that Modernizr currently does
	 * not support. For that, you can use the addTest function. For example,
	 * some users have requested tests for IE's float double margin bug, and
	 * support for position:fixed. Using addTest, you can add these yourself and
	 * get the exact same API as the fully supported tests.
	 * 
	 * New signatures for this method of accepting a boolean or an object were
	 * added for Modernizr 2
	 * 
	 * <pre><code>
	 * // Test for position:fixed support
	 * Modernizr.addTest('positionfixed',
	 * 		function() {
	 * 			var test = document.createElement('div'), control = test
	 * 					.cloneNode(false), fake = false, root = document.body
	 * 					|| (function() {
	 * 						fake = true;
	 * 						return document.documentElement.appendChild(document
	 * 								.createElement('body'));
	 * 					}());
	 * 
	 * 			var oldCssText = root.style.cssText;
	 * 			root.style.cssText = 'padding:0;margin:0';
	 * 			test.style.cssText = 'position:fixed;top:42px';
	 * 			root.appendChild(test);
	 * 			root.appendChild(control);
	 * 
	 * 			var ret = test.offsetTop !== control.offsetTop;
	 * 
	 * 			root.removeChild(test);
	 * 			root.removeChild(control);
	 * 			root.style.cssText = oldCssText;
	 * 
	 * 			if (fake) {
	 * 				document.documentElement.removeChild(root);
	 * 			}
	 * 
	 * 			return ret;
	 * 		});
	 * </code></pre>
	 * 
	 * Assuming the above test passes, there will now be a <b>.positionfixed</b>
	 * class on the HTML element and <code>Modernizr.positionfixed</code> will
	 * be true. IE6, of course, will now have a <b>.no-positionfixed</b> class.
	 * 
	 * @param {String} feature
	 * @param {Function} fn
	 */
	addTest: function(feature, fn) {
		
	},
	
	/**
	 * <code>Modernizr.testStyles()</code> allows you to add custom styles to the document
	 * and test an element afterwards. An element with the id of "modernizr" is
	 * injected into the page.
	 * 
	 * <pre><code>
	 * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip;', function(
	 * 		elem, rule) {
	 * 	Modernizr.addTest('width', elem.offsetWidth == 9);
	 * });
	 * </code></pre>
	 * 
	 * @param {String} css CSS styles
	 * @param {Function} fn
	 */
	testStyles: function(css, fn) {
		
	},
	
	/**
	 * <code>Modernizr.testProp()</code> investigates whether a given style property is
	 * recognized. Note that the property names must be provided in the
	 * camelCase variant.
	 * @param {String} prop Property to test
	 * @returns {Boolean}
	 */
	testProp: function(prop) {
		return true;
	},
	
	/**
	 * <code>Modernizr.testAllProps()</code> investigates whether a given style property, or
	 * any of its vendor-prefixed variants, is recognized. Note that the
	 * property names must be provided in the camelCase variant.
	 * 
	 * @param {String} prop Property to test
	 * @returns {Boolean}
	 */
	testAllProps: function(prop) {
		return true;
	},
	
	/**
	 * <code>Modernizr.hasEvent()</code> detects support for a given event,
	 * with an optional element to test on
	 * 
	 * @param {String} name Event name
	 * @param {Element} elem Element to test on
	 * @return {Boolean}
	 */
	hasEvent: function(name, elem) {
		return true;
	},
	
	_prefixes: [],
	_domPrefixes: []
};