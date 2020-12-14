// 01 - Array
var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);

// 02 - Access
var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients)
console.log(ingredients[1]);
console.log(ingredients.indexOf("milk"));

// 03 - Add and Remove
var objects = ["pen", "book", "lamp"];
objects.unshift("chair")
console.log(objects)
objects.pop()
console.log(objects)
objects.push("laptop")
console.log(objects)
objects.shift()
console.log(objects)

// 04 - Order
var numbers = [4,10,8,12,6];
numbers.reverse();
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

// 05 - Boucle
var total = 0;
var limit = 10;
for (var i = 1; i <= limit; i++){
    console.log(i);
    total += i;
    console.log(total)
}

// 06 - Reverse
var sentence = "Hello Konexio !";
var sentenceInversed = "";
console.log(sentence.length);
for (var i = sentence.length - 1; i >= 0; i--){
    console.log(sentence.charAt(i));
}
console.log(sentenceInversed);

// Test

var number = 7;
for (var i = 0; i <=10; i++){
    var resultat = number * i;
    console.log(`${i} * ${number} = ${resultat}`);
}

// Test dé
var min = 1;
var max = 6;
for (var i = 0; i <= 10; i++){
    console.log(Math.floor(Math.random() * (max - min + 1) + min))
}

// Test addition
var min = 1;
var max = 6;
var total = 0;
for (var i = 0; i <= 10; i++){
    var dice = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(dice);
    total += dice;
    console.log(total)
}

// exo xav 1
var total = 0;
for (var i = 25; i<= 75; i++){
    total += i;
}
console.log(total);

//exo xav 2
var total = 0;
for (var i = 10; i <= 15; i++){
    
}

// exo xav 3
var total = 0;
for (var i = 0; i<= 100; i+=2){
    total += i;
}
console.log(total);

//exo xav 4
for (var i = 0; i <= 1000; i+=7){
    console.log(i)
}

// boucle while xav
var total = 25;
while ( total <= 75){
    console.log(total);
    total = total + 1;
}
