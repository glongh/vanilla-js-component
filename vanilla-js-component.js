// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
;(function(window){
	'use strict';

	// SimpleAlert function
	function SimpleAlert( message ) {
		this.message = message;
		this._init();
	}

	// Initialize the message
	SimpleAlert.prototype._init = function() {
		console.log(this.message);
	}


	// Add SimpleAlert to global namespace
	window.SimpleAlert = SimpleAlert;

})( window );