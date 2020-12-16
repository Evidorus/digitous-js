function multiply(number1){
    var num1 = parseInt(number1);
    for (var i = 1; i <= 10; i++){
        var total = 0;
        total = i * num1;
        console.log(`${i} x ${num1} = ${total}`)
    }
}
console.log(multiply(process.argv[2]));

function addition(number1){
    var num1 = parseInt(number1);
    for (var i = 1; i <= 10; i++){
        var total = 0;
        total = i + num1;
        console.log(`${i} + ${num1} = ${total}`)
    }
}
console.log(addition(process.argv[2]));

module.exports = (multiply, addition)