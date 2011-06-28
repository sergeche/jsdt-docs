/**
 * @constructor
 * @type jQuery
 */
function jQuery() {}
jQuery.prototype = new Array;

jQuery.fn = jQuery.prototype;

jQuery.Deferred = function() {
	return new __jQueryDeferred;
};

/**
 * @constructor
 */
function __jQueryPromise() {}
__jQueryPromise.prototype = new Object;

/**
 * @constructor
 * @base __jQueryPromise
 */
function __jQueryDeferred() {}
__jQueryDeferred.prototype = new __jQueryPromise;

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
