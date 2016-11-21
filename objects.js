var person = {};

person.firstName = "vijay";
person.lastName = "tiwari";
person.age = 30;

function greetUser(person){
	console.log("hello "+ person.firstName + " " + person.lastName + "...");	
}

greetUser(person);