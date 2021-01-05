var fs = require("fs");

// 01 File System

fs.readFile("./exo.txt", function(err, data){
    console.log(date.toString())
})

// 02 Map double

var array = [1,2,3,4,5];
var double = array.map(function(num){
    return num * 2;
})
console.log(double);

// 03 Map Names

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];
var shortNames = longNames.map(function(name){
    var container = {name : name.firstName + name.lastName};
    return container;
})

console.log(shortNames)

// 04 Filter Numbers

