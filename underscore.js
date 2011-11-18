/** 
 * @type {Underscore}
 * @base {Funtion}
 * @constructor 
 */
function Underscore() {}
/**
 * Iterates over a <b>list</b> of elements, yielding each in turn to an <b>iterator</b>
 * function. The <b>iterator</b> is bound to the <b>context</b> object, if one is
 * passed. Each invocation of <b>iterator</b> is called with three arguments:
 * <tt>(element, index, list)</tt>. If <b>list</b> is a JavaScript object, <b>iterator</b>'s
 * arguments will be <tt>(value, key, list)</tt>. Delegates to the native
 * <b>forEach</b> function if it exists.
 * @param {Array} list
 * @param {Function} iterator
 * @param {Object} context
 * @example
 * _.each([1, 2, 3], function(num){ alert(num); });
 * _.each({one : 1, two : 2, three : 3}, function(num, key){ alert(num); });
 */
Underscore.prototype.each = function(list, iterator, context){};
Underscore.prototype.forEach= Underscore.prototype.each;

/**
 * Produces a new array of values by mapping each value in <b>list</b>
 * through a transformation function (<b>iterator</b>). If the native <b>map</b> method
 * exists, it will be used instead. If <b>list</b> is a JavaScript object,
 * <b>iterator</b>'s arguments will be <tt>(value, key, list)</tt>.
 * @param {Array} list
 * @param {Function} iterator
 * @param {Object} context
 * @return {Array}
 * @example
 * _.map([1, 2, 3], function(num){ return num * 3; });
 * _.map({one : 1, two : 2, three : 3}, function(num, key){ return num * 3; });
 */
Underscore.prototype.map = function(list, iterator, context){return new Array;};

/**
 * Also known as <b>inject</b> and <b>foldl</b>, <b>reduce</b> boils down a
 * <b>list</b> of values into a single value. <b>Memo</b> is the initial state
 * of the reduction, and each successive step of it should be returned by
 * <b>iterator</b>.
 * @param {Array} list
 * @param {Function} iterator
 * @param {Object} memo
 * @param {Object} context
 * @return {Object}
 * @example
 * var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
 */
Underscore.prototype.reduce = function(list, iterator, memo, context){return new Object;};
Underscore.prototype.inject= Underscore.prototype.reduce;
Underscore.prototype.foldl= Underscore.prototype.reduce;

/**
 * The right-associative version of <b>reduce</b>. Delegates to the
 * JavaScript 1.8 version of <b>reduceRight</b>, if it exists. <b>Foldr</b>
 * is not as useful in JavaScript as it would be in a language with lazy
 * evaluation.
 * @param {Array} list
 * @param {Function} iterator
 * @param {Object} memo
 * @param {Object} context
 * @return {Object}
 * @example
 * var list = [[0, 1], [2, 3], [4, 5]];
 * var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
 */
Underscore.prototype.reduceRight = function(list, iterator, memo, context){return new Object;};
Underscore.prototype.foldr= Underscore.prototype.reduceRight;

/**
 * Looks through each value in the <b>list</b>, returning the first one that
 * passes a truth test (<b>iterator</b>). The function returns as
 * soon as it finds an acceptable element, and doesn't traverse the
 * entire list.
 * @param {Array} list
 * @param {Function} iterator
 * @param {Object} context
 * @return {Object}
 * @example
 * var even = _.detect([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
 */
Underscore.prototype.detect = function(list, iterator, context){return new Object;};

/**
 * Looks through each value in the <b>list</b>, returning an array of all
 * the values that pass a truth test (<b>iterator</b>). Delegates to the
 * native <b>filter</b> method, if it exists.
 * @param {Array} list
 * @param {Function} iterator
 * @param {Object} context
 * @return {Array}
 * @example
 * var evens = _.select([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
 */
Underscore.prototype.select = function(list, iterator, context){return new Array;};
Underscore.prototype.filter= Underscore.prototype.select;

/**
 * Returns the values in <b>list</b> without the elements that the truth
 * test (<b>iterator</b>) passes. The opposite of <b>select</b>.
 * @param {Array} list
 * @param {Function} iterator
 * @param {Object} context
 * @return {Array}
 * @example
 * var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
 */
Underscore.prototype.reject = function(list, iterator, context){return new Array;};

/**
 * Returns <i>true</i> if all of the values in the <b>list</b> pass the <b>iterator</b>
 * truth test. If an <b>iterator</b> is not provided, the truthy value of
 * the element will be used instead. Delegates to the native method <b>every</b>, if
 * present.
 * @param {Array} list
 * @param {Function} iterator
 * @param {Object} context
 * @return {Boolean}
 * @example
 * _.all([true, 1, null, 'yes']);
 */
Underscore.prototype.all = function(list, iterator, context){return true;};
Underscore.prototype.every= Underscore.prototype.all;

/**
 * Returns <i>true</i> if any of the values in the <b>list</b> pass the
 * <b>iterator</b> truth test. Short-circuits and stops traversing the list
 * if a true element is found. Delegates to the native method <b>some</b>,
 * if present.
 * @param {Array} list
 * @param {Function} iterator
 * @param {Object} context
 * @return {Boolean}
 * @example
 * _.any([null, 0, 'yes', false]);
 */
Underscore.prototype.any = function(list, iterator, context){return true;};
Underscore.prototype.some= Underscore.prototype.any;

/**
 * Returns <i>true</i> if the <b>value</b> is present in the <b>list</b>, using
 * <i>===</i> to test equality. Uses <b>indexOf</b> internally, if <b>list</b>
 * is an Array.
 * @param {Array} list
 * @param {Object} value
 * @return {Boolean}
 * @example
 * _.include([1, 2, 3], 3);
 */
Underscore.prototype.include = function(list, value){return true;};
Underscore.prototype.contains= Underscore.prototype.include;

/**
 * Calls the method named by <b>methodName</b> on each value in the <b>list</b>.
 * Any extra arguments passed to <b>invoke</b> will be forwarded on to the
 * method invocation.
 * @param {Array} list
 * @param {Object} methodName
 * @param {Object} args
 * @example
 * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
 */
Underscore.prototype.invoke = function(list, methodName, args){};

/**
 * An convenient version of what is perhaps the most common use-case for
 * <b>map</b>: extracting a list of property values.
 * @param {Array} list
 * @param {Object} propertyName
 * @return {Array}
 * @example
 * var stooges = [{name : 'moe', age : 40}, {name : 'larry', age : 50}, {name : 'curly', age : 60}];
 * _.pluck(stooges, 'name');
 */
Underscore.prototype.pluck = function(list, propertyName){return new Array;};

/**
 * Returns the maximum value in <b>list</b>. If <b>iterator</b> is passed,
 * it will be used on each value to generate the criterion by which the
 * value is ranked.
 * @param {Array} list
 * @param {Function} iterator
 * @param {Object} context
 * @return {Object}
 * @example
 * var stooges = [{name : 'moe', age : 40}, {name : 'larry', age : 50}, {name : 'curly', age : 60}];
 * _.max(stooges, function(stooge){ return stooge.age; });
 */
Underscore.prototype.max = function(list, iterator, context){return new Object;};

/**
 * Returns the minimum value in <b>list</b>. If <b>iterator</b> is passed,
 * it will be used on each value to generate the criterion by which the
 * value is ranked.
 * @param {Array} list
 * @param {Function} iterator
 * @param {Object} context
 * @return {Object}
 * @example
 * var numbers = [10, 5, 100, 2, 1000];
 * _.min(numbers);
 */
Underscore.prototype.min = function(list, iterator, context){return new Object;};

/**
 * Returns a sorted <b>list</b>, ranked by the results of running each
 * value through <b>iterator</b>.
 * @param {Array} list
 * @param {Function} iterator
 * @param {Object} context
 * @return {Array}
 * @example
 * _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
 */
Underscore.prototype.sortBy = function(list, iterator, context){return new Array;};

/**
 * Uses a binary search to determine the index at which the <b>value</b>
 * <i>should</i> be inserted into the <b>list</b> in order to maintain the <b>list</b>'s
 * sorted order. If an <b>iterator</b> is passed, it will be used to compute
 * the sort ranking of each value.
 * @param {Array} list
 * @param {Object} value
 * @param {Function} iterator
 * @return {Number}
 * @example
 * _.sortedIndex([10, 20, 30, 40, 50], 35);
 */
Underscore.prototype.sortedIndex = function(list, value, iterator){return 0;};

/**
 * Converts the <b>list</b> (anything that can be iterated over), into a
 * real Array. Useful for transmuting the <b>arguments</b> object.
 * @param {Array} list
 * @return {Array}
 * @example
 * (function(){ return _.toArray(arguments).slice(0); })(1, 2, 3);
 */
Underscore.prototype.toArray = function(list){return new Array;};

/**
 * Return the number of values in the <b>list</b>.
 * @param {Array} list
 * @return {Number}
 * @example
 * _.size({one : 1, two : 2, three : 3});
 */
Underscore.prototype.size = function(list){return 0;};

/**
 * Returns the first element of an <b>array</b>. Passing <b>n</b> will
 * return the first <b>n</b> elements of the array.
 * @param {Array} array
 * @param {Object} n
 * @return {Object}
 * @example
 * _.first([5, 4, 3, 2, 1]);
 */
Underscore.prototype.first = function(array, n){return new Object;};
Underscore.prototype.head= Underscore.prototype.first;

/**
 * Returns the <b>rest</b> of the elements in an array. Pass an <b>index</b>
 * to return the values of the array from that index onward.
 * @param {Array} array
 * @param {Object} index
 * @return {Array}
 * @example
 * _.rest([5, 4, 3, 2, 1]);
 */
Underscore.prototype.rest = function(array, index){return new Array;};
Underscore.prototype.tail= Underscore.prototype.rest;

/**
 * Returns the last element of an <b>array</b>.
 * @param {Array} array
 * @return {Object}
 * @example
 * _.last([5, 4, 3, 2, 1]);
 */
Underscore.prototype.last = function(array){return new Object;};

/**
 * Returns a copy of the <b>array</b> with all falsy values removed.
 * In JavaScript, <i>false</i>, <i>null</i>, <i>0</i>, <i>""</i>,
 * <i>undefined</i> and <i>NaN</i> are all falsy.
 * @param {Array} array
 * @return {Array}
 * @example
 * _.compact([0, 1, false, 2, '', 3]);
 */
Underscore.prototype.compact = function(array){return new Array;};

/**
 * Flattens a nested <b>array</b> (the nesting can be to any depth).
 * @param {Array} array
 * @return {Array}
 * @example
 * _.flatten([1, [2], [3, [[[4]]]]]);
 */
Underscore.prototype.flatten = function(array){return new Array;};

/**
 * Returns a copy of the <b>array</b> with all instances of the <b>values</b>
 * removed. <i>===</i> is used for the equality test.
 * @param {Array} array
 * @param {Object} *values
 * @return {Array}
 * @example
 * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
 */
Underscore.prototype.without = function(array, values){return new Array;};

/**
 * Produces a duplicate-free version of the <b>array</b>, using <i>===</i> to test
 * object equality. If you know in advance that the <b>array</b> is sorted,
 * passing <i>true</i> for <b>isSorted</b> will run a much faster algorithm.
 * @param {Array} array
 * @param {Boolean} isSorted
 * @return {Array}
 * @example
 * _.uniq([1, 2, 1, 3, 1, 4]);
 */
Underscore.prototype.uniq = function(array, isSorted){return new Array;};
Underscore.prototype.unique= Underscore.prototype.uniq;

/**
 * Computes the list of values that are the intersection of all the <b>arrays</b>.
 * Each value in the result is present in each of the <b>arrays</b>.
 * @param {Array} *arrays
 * @return {Array}
 * @example
 * _.intersect([1, 2, 3], [101, 2, 1, 10], [2, 1]);
 */
Underscore.prototype.intersect = function(arrays){return new Array;};

/**
 * Merges together the values of each of the <b>arrays</b> with the
 * values at the corresponding position. Useful when you have separate
 * data sources that are coordinated through matching array indexes.
 * @param {Array} *arrays
 * @return {Array}
 * @example
 * _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
 */
Underscore.prototype.zip = function(arrays){return new Array;};

/**
 * Returns the index at which <b>value</b> can be found in the <b>array</b>,
 * or <i>-1</i> if value is not present in the <b>array</b>. Uses the native
 * <b>indexOf</b> function unless it's missing. If you're working with a
 * large array, and you know that the array is already sorted, pass <tt>true</tt>
 * for <b>isSorted</b> to use a faster binary search.
 * @param {Array} array
 * @param {Object} value
 * @param {Boolean} isSorted
 * @return {Number}
 * @example
 * _.indexOf([1, 2, 3], 2);
 */
Underscore.prototype.indexOf = function(array, value, isSorted){return 0;};

/**
 * Returns the index of the last occurrence of <b>value</b> in the <b>array</b>,
 * or <i>-1</i> if value is not present. Uses the native <b>lastIndexOf</b>
 * function if possible.
 * @param {Array} array
 * @param {Object} value
 * @return {Number}
 * @example
 * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
 */
Underscore.prototype.lastIndexOf = function(array, value){return 0;};

/**
 * A function to create flexibly-numbered lists of integers, handy for
 * <tt>each</tt> and <tt>map</tt> loops. <b>start</b>, if omitted, defaults
 * to <i>0</i>; <b>step</b> defaults to <i>1</i>. Returns a list of integers
 * from <b>start</b> to <b>stop</b>, incremented (or decremented) by <b>step</b>,
 * exclusive.
 * @param {Number} start
 * @param {Number} stop
 * @param {Number} step
 * @return {Array}
 * @example
 * _.range(10);
 * _.range(1, 11);
 * _.range(0, 30, 5);
 * _.range(0, -10, -1);
 * _.range(0);
 */
Underscore.prototype.range = function(start, stop, step){return new Array;};

/**
 * Bind a <b>function</b> to an <b>object</b>, meaning that whenever
 * the function is called, the value of <i>this</i> will be the <b>object</b>.
 * Optionally, bind <b>arguments</b> to the <b>function</b> to pre-fill them,
 * also known as <b>currying</b>.
 * @param {Function} function
 * @param {Object} object
 * @param {Object} *arguments
 * @return {Function}
 * @example
 * var func = function(greeting){ return greeting + ': ' + this.name };
 * func = _.bind(func, {name : 'moe'}, 'hi');
 * func();
 */
Underscore.prototype.bind = function(fn, object, arguments){return function(){};};

/**
 * Binds a number of methods on the <b>object</b>, specified by
 * <b>methodNames</b>, to be run in the context of that object whenever they
 * are invoked. Very handy for binding functions that are going to be used
 * as event handlers, which would otherwise be invoked with a fairly useless
 * <i>this</i>. If no <b>methodNames</b> are provided, all of the object's
 * function properties will be bound to it.
 * @param {Object} object
 * @param {Object} *methodNames
 * @example
 * var buttonView = {
 * label   : 'underscore',
 * onClick : function(){ alert('clicked: ' + this.label); },
 * onHover : function(){ console.log('hovering: ' + this.label); }
 * };
 * _.bindAll(buttonView);
 * jQuery('#underscore_button').bind('click', buttonView.onClick);
 */
Underscore.prototype.bindAll = function(object, methodNames){};

/**
 * Memoizes a given <b>function</b> by caching the computed result. Useful
 * for speeding up slow-running computations. If passed an optional
 * <b>hashFunction</b>, it will be used to compute the hash key for storing
 * the result, based on the arguments to the original function.
 * @param {Function} function
 * @param {Object} hashFunction
 * @return {Function}
 * @example
 * var fibonacci = function(n) {
 * return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
 * };
 * var fastFibonacci = _.memoize(fibonacci);
 */
Underscore.prototype.memoize = function(fn, hashFunction){return function(){};};

/**
 * Much like <b>setTimeout</b>, invokes <b>function</b> after <b>wait</b>
 * milliseconds. If you pass the optional <b>arguments</b>, they will be
 * forwarded on to the <b>function</b> when it is invoked.
 * @param {Function} function
 * @param {Number} wait
 * @param {Object} args
 
 * @example
 * var log = _.bind(console.log, console);
 * _.delay(log, 1000, 'logged later');
 */
Underscore.prototype.delay = function(fn, wait, args){};

/**
 * Defers invoking the <b>function</b> until the current call stack has cleared,
 * similar to using <b>setTimeout</b> with a delay of 0. Useful for performing
 * expensive computations or HTML rendering in chunks without blocking the UI thread
 * from updating.
 * @param {Function} function
 * @example
 * _.defer(function(){ alert('deferred'); });
 * // Returns from the function before the alert runs.
 */
Underscore.prototype.defer = function(fn){};

/**
 * Returns a throttled version of the function, that, when invoked repeatedly,
 * will only actually call the wrapped function at most once per every <b>wait</b>
 * milliseconds. Useful for rate-limiting events that occur faster than you
 * can keep up with.
 * @param {Function} function
 * @param {Number} wait
 * @return {Function}
 * @example
 * var throttled = _.throttle(updatePosition, 100);
 * $(window).scroll(throttled);
 */
Underscore.prototype.throttle = function(fn, wait){return function(){};};

/**
 * Repeated calls to a debounced function will postpone it's execution
 * until after <b>wait</b> milliseconds have elapsed. Useful for implementing
 * behavior that should only happen <i>after</i> the input has stopped arriving.
 * For example: rendering a preview of a Markdown comment, recalculating a
 * layout after the window has stopped being resized...
 * @param {Function} function
 * @param {Number} wait
 * @return {Function}
 * @example
 * var lazyLayout = _.debounce(calculateLayout, 300);
 * $(window).resize(lazyLayout);
 */
Underscore.prototype.debounce = function(fn, wait){return function(){};};

/**
 * Wraps the first <b>function</b> inside of the <b>wrapper</b> function,
 * passing it as the first argument. This allows the <b>wrapper</b> to
 * execute code before and after the <b>function</b> runs, adjust the arguments,
 * and execute it conditionally.
 * @param {Function} function
 * @param {Object} wrapper
 * @return {Function}
 * @example
 * var hello = function(name) { return "hello: " + name; };
 * hello = _.wrap(hello, function(func) {
 * return "before, " + func("moe") + ", after";
 * });
 * hello();
 */
Underscore.prototype.wrap = function(fn, wrapper){return function() {};};

/**
 * Returns the composition of a list of <b>functions</b>, where each function
 * consumes the return value of the function that follows. In math terms,
 * composing the functions <i>f()</i>, <i>g()</i>, and <i>h()</i> produces
 * <i>f(g(h()))</i>.
 * @param {Object} *functions
 * @return {Function}
 * @example
 * var greet    = function(name){ return "hi: " + name; };
 * var exclaim  = function(statement){ return statement + "!"; };
 * var welcome = _.compose(greet, exclaim);
 * welcome('moe');
 */
Underscore.prototype.compose = function(fn){return function() {};};

/**
 * Retrieve all the names of the <b>object</b>'s properties.
 * @param {Object} object
 * @return {Array}
 * @example
 * _.keys({one : 1, two : 2, three : 3});
 */
Underscore.prototype.keys = function(object){return new Array;};

/**
 * Return all of the values of the <b>object</b>'s properties.
 * @param {Object} object
 * @return {Array}
 * @example
 * _.values({one : 1, two : 2, three : 3});
 */
Underscore.prototype.values = function(object){return new Array;};

/**
 * Returns a sorted list of the names of every method in an object —
 * that is to say, the name of every function property of the object.
 * @param {Object} object
 * @return {Array}
 * @example
 * _.functions(_);
 */
Underscore.prototype.functions = function(object){return new Array;};
Underscore.prototype.methods= Underscore.prototype.functions;

/**
 * Copy all of the properties in the <b>source</b> objects over to the
 * <b>destination</b> object. It's in-order, to the last source will override
 * properties of the same name in previous arguments.
 * @param {Object} destination
 * @param {Object} sources
 * @return {Object}
 * @example
 * _.extend({name : 'moe'}, {age : 50});
 */
Underscore.prototype.extend = function(destination, sources){ return new Object; };

/**
 * Create a shallow-copied clone of the <b>object</b>. Any nested objects
 * or arrays will be copied by reference, not duplicated.
 * @param {Object} object
 * @return {Object}
 * @example
 * _.clone({name : 'moe'});
 */
Underscore.prototype.clone = function(object){return new Object;};

/**
 * Invokes <b>interceptor</b> with the <b>object</b>, and then returns <b>object</b>.
 * The primary purpose of this method is to "tap into" a method chain, in order 
 * to perform operations on intermediate results within the chain.
 * @param {Object} object
 * @param {Object} interceptor
 * @example
 * _([1,2,3,200]).chain().
 * select(function(num) { return num % 2 == 0; }).
 * tap(console.log).
 * map(function(num) { return num * num }).
 * value();
 */
Underscore.prototype.tap = function(object, interceptor){};

/**
 * Performs an optimized deep comparison between the two objects, to determine
 * if they should be considered equal.
 * @param {Object} object
 * @param {Object} other
 * @return {Boolean}
 * @example
 * var moe   = {name : 'moe', luckyNumbers : [13, 27, 34]};
 * var clone = {name : 'moe', luckyNumbers : [13, 27, 34]};
 * moe == clone;
 * _.isEqual(moe, clone);
 */
Underscore.prototype.isEqual = function(object, other){ return true; };

/**
 * Returns <i>true</i> if <b>object</b> contains no values.
 * @param {Object} object
 * @return {Boolean}
 * @example
 * _.isEmpty([1, 2, 3]);
 * _.isEmpty({});
 */
Underscore.prototype.isEmpty = function(object){ return true; };

/**
 * Returns <i>true</i> if <b>object</b> is a DOM element.
 * @param {Object} object
 * @return {Boolean}
 * @example
 * _.isElement(jQuery('body')[0]);
 */
Underscore.prototype.isElement = function(object){return true;};

/**
 * Returns <i>true</i> if <b>object</b> is an Array.
 * @param {Object} object
 * @return {Boolean}
 * @example
 * (function(){ return _.isArray(arguments); })();
 * _.isArray([1,2,3]);
 */
Underscore.prototype.isArray = function(object){return true;};

/**
 * Returns <i>true</i> if <b>object</b> is an Arguments object.
 * @param {Object} object
 * @return {Boolean}
 * @example
 * (function(){ return _.isArguments(arguments); })(1, 2, 3);
 * _.isArguments([1,2,3]);
 */
Underscore.prototype.isArguments = function(object){return true;};

/**
 * Returns <i>true</i> if <b>object</b> is a Function.
 * @param {Object} object
 * @return {Boolean}
 * @example
 * _.isFunction(alert);
 */
Underscore.prototype.isFunction = function(object){return true;};

/**
 * Returns <i>true</i> if <b>object</b> is a String.
 * @param {Object} object
 * @return {Boolean}
 * @example
 * _.isString("moe");
 */
Underscore.prototype.isString = function(object){return true;};

/**
 * Returns <i>true</i> if <b>object</b> is a Number.
 * @param {Object} object
 * @return {Boolean}
 * @example
 * _.isNumber(8.4 * 5);
 */
Underscore.prototype.isNumber = function(object){return true;};

/**
 * Returns <i>true</i> if <b>object</b> is either <i>true</i> or <i>false</i>.
 * @param {Object} object
 * @return {Boolean}
 * @example
 * _.isBoolean(null);
 */
Underscore.prototype.isBoolean = function(object){return true;};

/**
 * Returns <i>true</i> if <b>object</b> is a Date.
 * @param {Object} object
 * @return {Boolean}
 * @example
 * _.isDate(new Date());
 */
Underscore.prototype.isDate = function(object){return true;};

/**
 * Returns <i>true</i> if <b>object</b> is a RegExp.
 * @param {Object} object
 * @return {Boolean}
 * @example
 * _.isRegExp(/moe/);
 */
Underscore.prototype.isRegExp = function(object){return true;};

/**
 * Returns <i>true</i> if <b>object</b> is <i>NaN</i>.<br> Note: this is not
 * the same as the native <b>isNaN</b> function, which will also return
 * true if the variable is <i>undefined</i>.
 * @param {Object} object
 * @return {Boolean}
 * @example
 * _.isNaN(NaN);
 * isNaN(undefined);
 * _.isNaN(undefined);
 */
Underscore.prototype.isNaN = function(object){return true;};

/**
 * Returns <i>true</i> if the value of <b>object</b> is <i>null</i>.
 * @param {Object} object
 * @return {Boolean}
 * @example
 * _.isNull(null);
 * _.isNull(undefined);
 */
Underscore.prototype.isNull = function(object){return true;};

/**
 * Returns <i>true</i> if <b>variable</b> is <i>undefined</i>.
 * @param {Object} variable
 * @return {Boolean}
 * @example
 * _.isUndefined(window.missingVariable);
 */
Underscore.prototype.isUndefined = function(variable){return true;};

/**
 * Give control of the "_" variable back to its previous owner. Returns
 * a reference to the <b>Underscore</b> object.
 * @return {Object}
 * @example
 * var underscore = _.noConflict();
 */
Underscore.prototype.noConflict = function(){return new Object;};

/**
 * Returns the same value that is used as the argument. In math:
 * <tt>f(x) = x</tt><br>
 * This function looks useless, but is used throughout Underscore as
 * a default iterator.
 * @param {Object} value
 * @return {Object}
 * @example
 * var moe = {name : 'moe'};
 * moe === _.identity(moe);
 */
Underscore.prototype.identity = function(value){return new Object;};

/**
 * Invokes the given iterator function <b>n</b> times.
 * @param {Number} n
 * @param {Function} iterator
 * @example
 * _(3).times(function(){ genie.grantWish(); });
 */
Underscore.prototype.times = function(n, iterator){};

/**
 * Allows you to extend Underscore with your own utility functions. Pass
 * a hash of <tt>{name: function}</tt> definitions to have your functions
 * added to the Underscore object, as well as the OOP wrapper.
 * @param {Object} object
 * @example
 * _.mixin({
 * capitalize : function(string) {
 * return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
 * }
 * });
 * _("fabio").capitalize();
 */
Underscore.prototype.mixin = function(object){};

/**
 * Generate a globally-unique id for client-side models or DOM elements
 * that need one. If <b>prefix</b> is passed, the id will be appended to it.
 * @param {String} prefix
 * @return {String}
 * @example
 * _.uniqueId('contact_');
 */
Underscore.prototype.uniqueId = function(prefix){return '';};

/**
 * Compiles JavaScript templates into functions that can be evaluated
 * for rendering. Useful for rendering complicated bits of HTML from JSON
 * data sources. Template functions can both interpolate variables, using<br>
 * <tt>&lt;%= … %&gt;</tt>, as well as execute arbitrary JavaScript code, with
 * <tt>&lt;% … %&gt;</tt>. When you evaluate a template function, pass in a
 * <b>context</b> object that has properties corresponding to the template's free
 * variables. If you're writing a one-off, you can pass the <b>context</b>
 * object as the second parameter to <b>template</b> in order to render
 * immediately instead of returning a template function.
 * @param {Object} templateString
 * @param {Object} context
 * @return {Function}
 * @example
 * var compiled = _.template("hello: <%= name %>");
 * compiled({name : 'moe'});
 * 
 * var list = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";
 * _.template(list, {people : ['moe', 'curly', 'larry']});
 */
Underscore.prototype.template = function(templateString, context){return function(){};};

/**
 * Returns a wrapped object. Calling methods on this object will continue
 * to return wrapped objects until <tt>value</tt> is used. (
 * <a href="#styles">A more realistic example.</a>)
 * @param {Object} obj
 * @return {Underscore}
 * @example
 * var stooges = [{name : 'curly', age : 25}, {name : 'moe', age : 21}, {name : 'larry', age : 23}];
 * var youngest = _(stooges).chain()
 * .sortBy(function(stooge){ return stooge.age; })
 * .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
 * .first()
 * .value();
 */
Underscore.prototype.chain = function(obj){return _;};

/**
 * Extracts the value of a wrapped object.
 * @param {Object} obj
 * @example
 * _([1, 2, 3]).value();
 */
Underscore.prototype.value = function(obj){return '';};

var _ = new Underscore;