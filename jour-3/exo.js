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
