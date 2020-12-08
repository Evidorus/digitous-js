// 01 - Number
var integer = 102;
var float = 13.9;
console.log(integer, float);

// 02 - Convert
var basic = 34;
var stringified = basic.toString();
console.log(stringified)

// 03 - Round
var num = 1.5;
var rounded = Math.round(num);
console.log(rounded)

// 04 - Arithmétique
var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);

// 05 - Comparaison
var test = 143;
var bis = 219;
console.log(test < bis);
console.log(test > bis);
console.log(test <= bis);
console.log(test >= bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);

// 06 - Condition
var limit = 50;
var score = 50;
if (score >= limit){
    console.log("OK good !")
} else{
    console.log("Oh nooo... !")
};

// 07 - Condition II
var password = "azerty";
if (password.length > 5){
    console.log("The password is secure")
};

// 08 - Condition III
var limit = 50;
var score = 50;
var password = "azerty";
if (score >= limit && password.length > 5){
    console.log("Everything is good")
} else if (score >= limit || password.length > 5){
    console.log("Something is good")
} else {
    console.log("Nothing is good")
};

// Bonus
var min = 1;
var max = 6;
var random = Math.floor(Math.random() * (max - min + 1) + min);
if (random === 6){
    console.log("Yes I win !")
} else{
    console.log("So close ...")
};

// Bonus II
var month = "December";
switch (month){
    case "July":
    case "August":       
    case "September":
        console.log("Summer")
        break;
    case "October":
    case "November":
    case "December":
        console.log("Autumn") 
        break;
    case "January":
    case "February":
    case "March":
        console.log("Winter")
        break;
    case "April":
    case "May":
    case "June":
        console.log("Spring")  
        break;      
}

// Bonus III
var roundedNumber = 3.5;
if (roundedNumber >= 3.5){
    console.log(Math.ceil(roundedNumber))
} else if (roundedNumber < 3.5){
    console.log(Math.floor(roundedNumber))
};