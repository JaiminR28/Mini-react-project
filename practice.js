const Person1 = {
	age: 23,
	getAge: function () {
		return "your age is " + this.age;
	},
};

const Person2 = {
	age: 30,
};

function saySomething(message) {
	return this.name + " is " + message;
}
var person4 = { name: "John" };

// console.log(saySomething.apply(person4, ["Awesome"]));

// console.log(Person1.getAge.call(Person2));

const bikeDetails = {
	displayDetails: function (regNo, brand) {
		return this.name + ", " + "bike Details: " + regNo + ", " + brand;
	},
};

var person1 = {
	name: "Jaimin",
};

const firstBike = bikeDetails.displayDetails.bind(person1, "3D545", "Honda");

// console.log(firstBike());

// Currying is an advvanced topic in Javascript in which we devide the function with n arguments into n  function

// By using the currying technique, we do not change the functionality of a function, we just change the way it is invoked.

function addItem(a) {
	return function (b) {
		return a + b;
	};
}

// console.log(addItem(5)(6));

//

// Scope in JS determines the accesibility of variables and functions at various part of the code.

// In general terms, the scope will let us know at given part of code, what are variables and functions we can or cannot operate

// Scope Chain: JavaScript engine also uses Scope to find variables. Let’s understand that using an example:

var y = 24;

function favFunction() {
	var x = 667;
	var anotherFavFunction = function () {
		// console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
	};

	var yetAnotherFavFunction = function () {
		console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
	};

	anotherFavFunction();
	yetAnotherFavFunction();
}
favFunction();

// As you can see in the code above, if the javascript engine does not find the variable in local scope, it tries to check for the variable in the outer scope. If the variable does not exist in the outer scope, it tries to find the variable in the global scope.

// CLOSURE: it is the abilty of a function to remember variables outside a function.

const Person = function (pName) {
	const name = pName;

	this.getName = function () {
		return name;
	};
};

var person = new Person("Neelesh");
console.log(person.getName);

function randomFunc() {
	var obj1 = { name: "Vivian", age: 45 };

	return function () {
		console.log(obj1.name + " is " + "awesome"); // Has access to obj1 even when the randomFunc function is executed
	};
}

var initialiseClosure = randomFunc(); // Returns a function

initialiseClosure();

// When we run the function ot runs the randDomFunc which return a function this return function is invoked when we run the initializeClouse()
