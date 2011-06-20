var console = {
   /**
    * Write a debug message to the console.  The arguments to the method call will be
    * concatenated into one string message.
    * @param {Object} message
    */
   debug: function(message) {},

   /**
    * Write an info message to the console.  The arguments to the method call will be
    * concatenated into one string message.
    * @param {Object} message
    */
   info: function(message) {},

   /**
    * Write a warning message to the console.  The arguments to the method call will be
    * concatenated into one string message.
    * @param {Object} message
    */
   warn: function(message) {},

   /**
    * Write an error message to the console.  The arguments to the method call will be
    * concatenated into one string message.
    * @param {Object} message
    */
   error: function(message) {},

   /**
    * Dump a stack trace to the console.
    * @param {Object} message
    */   
   trace: function(message) {},
   
   /**
	 * Show message in console
	 * @param {Object} message
	 */
	log: function(message){},
	
   /**
    * Show formatted object in console
    * @param {Object} message
    */
   dir: function(message){}
	
   /**
    * Start measuring timer
    * @param {Object} message
    */
   time: function(message){}
   
   /**
    * Stop measuring timer
    * @param {Object} message
    */
   timeEnd: function(message){}
   
   /**
    * Start profiling
    * @param {Object} message
    */
   profile: function(message){}
   
   /**
    * Stop profiling
    * @param {Object} message
    */
   profileEnd: function(message){}
};