/**
 * @namespace Signals Namespace - Custom event/messaging system based on AS3 Signals
 * @author Miller Medeiros <http://millermedeiros.com/>
 * @version 0.5.3
 */
var signals = {};
signals.VERSION = '0.5.3';

/**
 * Object that represents a binding between a Signal and a listener function.
 * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
 * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
 * @author Miller Medeiros
 * @constructor
 * @internal
 * @private
 * @name signals.SignalBinding
 * @param {signals.Signal} signal	Reference to Signal object that listener is currently bound to.
 * @param {Function} listener	Handler function bound to the signal.
 * @param {boolean} isOnce	If binding should be executed just once.
 * @param {Object} [listenerContext]	Context on which listener will be executed (object that should represent the `this` variable inside listener function).
 * @param {Number} [priority]	The priority level of the event listener. (default = 0).
 */
function SignalBinding(signal, listener, isOnce, listenerContext, priority){}

SignalBinding.prototype = {
	/**
	 * Call listener passing arbitrary parameters.
	 * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p> 
	 * @param {Array} [paramsArr]	Array of parameters that should be passed to the listener
	 * @return {*} Value returned by the listener.
	 */
	execute : function(paramsArr){},
	
	/**
	 * Detach binding from signal.
	 * - alias to: mySignal.remove(myBinding.getListener());
	 * @return {Function} Handler function bound to the signal.
	 */
	detach : function(){},
	
	/**
	 * @return {Function} Handler function bound to the signal.
	 */
	getListener : function(){},
	
	/**
	 * Remove binding from signal and destroy any reference to external Objects (destroy SignalBinding object).
	 * <p><strong>IMPORTANT:</strong> calling methods on the binding instance after calling dispose will throw errors.</p>
	 */
	dispose : function(){},
		
	/**
	 * Disable SignalBinding, block listener execution. Listener will only be executed after calling `enable()`.  
	 */
	disable : function(){},
	
	/**
	 * Enable SignalBinding. Enable listener execution.
	 */
	enable : function(){},
	
	/**
	 * @return {Boolean} If SignalBinding is currently paused and won't execute listener during dispatch.
	 */
	isEnabled : function(){},
	
	/**
	 * @return {Boolean} If SignalBinding will only be executed once.
	 */
	isOnce : function(){},
	
	/**
	 * @return {String} String representation of the object.
	 */
	toString : function(){}
};

/**
 * Custom event broadcaster
 * <br />- inspired by Robert Penner's AS3 Signals.
 * @author Miller Medeiros
 * @constructor
 */
signals.Signal = function(){};

signals.Signal.prototype = {
	/**
	 * Add a listener to the signal.
	 * @param {Function} listener	Signal handler function.
	 * @param {Object} [scope]	Context on which listener will be executed (object that should represent the `this` variable inside listener function).
	 * @param {Number} [priority]	The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
	 * @return {SignalBinding} An Object representing the binding between the Signal and listener.
	 */
	add : function(listener, scope, priority){},
	
	/**
	 * Add listener to the signal that should be removed after first execution (will be executed only once).
	 * @param {Function} listener	Signal handler function.
	 * @param {Object} [scope]	Context on which listener will be executed (object that should represent the `this` variable inside listener function).
	 * @param {Number} [priority]	The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
	 * @return {SignalBinding} An Object representing the binding between the Signal and listener.
	 */
	addOnce : function(listener, scope, priority){},
	
	/**
	 * Remove a single listener from the dispatch queue.
	 * @param {Function} listener	Handler function that should be removed.
	 * @return {Function} Listener handler function.
	 */
	remove : function(listener){},
	
	/**
	 * Remove all listeners from the Signal.
	 */
	removeAll : function(){},
	
	/**
	 * @return {number} Number of listeners attached to the Signal.
	 */
	getNumListeners : function(){},
	
	/**
	 * Disable Signal. Block dispatch to listeners until `enable()` is called.
	 * <p><strong>IMPORTANT:</strong> If this method is called during a dispatch it will only have effect on the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
	 */
	disable : function(){},
	
	/**
	 * Enable broadcast to listeners.
	 */
	enable : function(){}, 
	
	/**
	 * @return {Boolean} If Signal is currently enabled and will broadcast message to listeners.
	 */
	isEnabled : function(){},
	
	/**
	 * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
	 * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
	 */
	halt : function(){},
	
	/**
	 * Dispatch/Broadcast Signal to all listeners added to the queue. 
	 * @param {...*} [params]	Parameters that should be passed to each handler.
	 */
	dispatch : function(params){},
	
	/**
	 * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
	 * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
	 */
	dispose : function(){},
	
	/**
	 * @return {string} String representation of the object.
	 */
	toString : function(){}
};