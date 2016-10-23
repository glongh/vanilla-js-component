// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
;(function(window){
	'use strict';

	// Extend obj function: This is an object extender function. It allows us to extend an object by passing in additional variables and overwriting the defaults.
	function extend(a, b) {
		for (var key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}

		return a;
	}

	// SimpleAlert function
	function SimpleAlert(options) {
		this.options = extend({}, this.options);
		extend(this.options, options);
		this._init();
	}

	SimpleAlert.prototype.options =  {
		wrapper: document.body,
		type: "default",
		message: "Default message."
	}

	// Init function
	SimpleAlert.prototype._init = function() {
		// Create element
		this.sa = document.createElement('div');
		this.sa.className = 'simple-alert ' + this.options.type;

		// create html
		var strinner = '';
		strinner += '<span class="simple-alert__component">';
			strinner += this.options.message;
		strinner += '</span>';
		strinner += '<a href="#" class="simple-alert__dismiss">close</a>';
		this.sa.innerHTML = strinner;

		// Run the events
		this._events(); 
	}

	// Events function
	SimpleAlert.prototype._events = function() {
		// cache vars
		var btn_dismiss = this.sa.querySelector('.simple-alert__dismiss');
		self = this;

		// listen for dismiss
		btn_dismiss.addEventListener("click", function(e) {
			e.preventDefault();
			self.dismiss();
		});
	}

	// show function
	SimpleAlert.prototype.show = function() {
		this.options.wrapper.appendChild(this.sa);
	}

	// dismiss alert
	SimpleAlert.prototype.dismiss = function() {
		this.options.wrapper.removeChild(this.sa);
	};



	// Add SimpleAlert to global namespace
	window.SimpleAlert = SimpleAlert;

})( window );