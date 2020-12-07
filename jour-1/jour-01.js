// 01 - Hello World
console.log("Hello World !");

// 02 - String
var test = "My name is Damir";
console.log(test);

// 03 - Concatenation
var name = "Damir";
console.log(`Nice to meet you ${name}`);

// 04 - String Length
var testLength = "I'm very long";
console.log(testLength.length);

// 05 - Replace
var food = "Croissant is meh";
food = food.replace("meh", "so good");
console.log(food);

// 06 - Up and Down
var basic = "This is cool";
var basicUp = "This is cool";
basicUp = basicUp.toUpperCase();
var basicDown = "This is cool";
basicDown = basicDown.toLowerCase();

console.log(basic);
console.log(basicUp);
console.log(basicDown);

// 07 - Split
var word = "banana"
var letters = word.split("")

console.log(letters)

// 08 - Template
var age = 24;
var presentation = `I'm ${age} years old`;
console.log(presentation)