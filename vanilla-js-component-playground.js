/*  [1] Creation of an Object
"All primitive types except null and undefined are treated as objects. They can be assigned properties (assigned properties of some types are not persistent), and they have all characteristics of objects." */
var simpleAlert = new Object();

// add some properties
simpleAlert.sa_default = "Hello Word 1";
simpleAlert.sa_error = "Error.";
simpleAlert.sa_success = "Success!";

// Output object in the console
console.log(simpleAlert);

// alert error message
alert(simpleAlert.sa_error);


/* [2] Creating Objects with Object Initializers
"...you can create objects using an object initializer. Using object initializers is sometimes referred to as creating objects with literal notation. "Object initializer" is consistent with the terminology used by C++" */
var simpleAlert = {
	sa_default 	: "Hello World 2",
	sa_error	: "Error..",
	sa_success	: "Success!!"
}

// output object in the console
console.log(simpleAlert);

var simpleAlert = {
	sa_default 	: "Hello World 3",
	sa_error	: "Error...",
	sa_success	: "Success!!!",
	sa_fallback	: function(){
		console.log("Fallback");
	}
}

//run the fallback
simpleAlert.sa_fallback();


/* [3] Using a constructor function
"Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter. Create an instance of the object with new." (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Using_a_constructor_function) */
// constructor function
function SimpleAlert( sa_default, sa_error, sa_success) {
	this.sa_default = sa_default;
	this.sa_error = sa_error;
	this.sa_success = sa_success;
}

// creation of the new object
var my_alert = new SimpleAlert( "Hello World 4", "Error....", "Success!!!!");

// outputs object
console.log(my_alert);

// output "Error"
console.log(my_alert.sa_error);