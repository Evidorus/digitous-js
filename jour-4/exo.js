// 01 - Object

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}
console.log(cat);
console.log(cat.age);

if (cat.isCute){
    console.log("So cuuuute !!")
}

// 02 - Combine

var cat2 = {
    name: "Tom",
    age: 8,
    isCute: false,
}

var cats = [cat, cat2];

console.log(cat.age);
console.log(cat2.isCute);

// 03 - Even

function checkIfEven(num){
    if (num % 2){
        console.log("odd")
    } else {
        console.log("even")
    }
}
checkIfEven(684);
checkIfEven(321);
checkIfEven(3);
checkIfEven(6);

// 04 - Compare

function compare(num, num2){
    if (num > num2){
        console.log("num1 is bigger")
    } else if (num < num2){
        console.log("num2 is bigger")
    } else if (num === num2){
        console.log("both are the same")
    }
}
compare(20, 12);
compare(24, 50);
compare(30, 30);

// 05 - Add Up

function addUp(num){
    for (var i = num - 1; i >= 1; i--){
        num += i;
    }
    return num
}
console.log(addUp(12));

// 06 - Time

function format(num){
    var h = Math.floor(num / 3600);
    var m = Math.floor((num % 3600) / 60);
    var s = num % 60;

    var montre = h + ":" + m + ":" + s ;

    return montre;

}
console.log(format(3700))