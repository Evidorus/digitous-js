var fs = require("fs");
fs.readFile("exo.txt", function(err, data){
    if (err) {
        console.error(err);
        return;
     }
    console.log("Un cadeau pour Xavier" + data)
})

var array = [1,2,3,4,5];
var double = array.map(function(num){
    return num * 2;
})
console.log(double);

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
var shortNames = longNames.map(function)