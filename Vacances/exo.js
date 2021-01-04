// 01 - Alpha

function sortLetters (word){
    var letters = word.split("");
    console.log(letters.sort().join())
}

sortLetters("konexio")

// 02 - XOXO

function countEach (string){
    var string1 = string.split("").sort().join("");
    var counter = 1;
    var longueur = string.length;
    var demi = longueur / 2;
    for (let i = 0; i < demi; i++){
        if ( string1[i] == string1[i + 1]){
            counter++;
        } else if (counter === demi ) {
            return true
        } else {
            return false
        }
    }
}
console.log(countEach("xxxoooxo"));

// 03 - Palindrome

function checkPal (string){
    if ( string.split("").reverse().join("") === string ){
        console.log("Palindrome !!!")
    } else {
        console.log("Nope ...")
    }
}

checkPal("kayak")

// 04 - Swap

function swap (string){
    var hello = string;
    var newWord = [];
    for (var i = 0; i < hello.length; i++) {
        if (hello[i] == hello[i].toLowerCase()) {
            newWord[i] = hello[i].toUpperCase();
        }
        else {
          newWord[i] = hello[i].toLowerCase();
        }
      } return newWord.join("")
}    
console.log(swap("Hello World"));

// Bonus

function makeItSpongeBob (string){
    var hello = string;
    var newWord = [];
    for (var i = 0; i < hello.length; i = i + 2){
        newWord = hello.toUpperCase();
    }
    return newWord;
}
console.log(makeItSpongeBob("Javascript is easy"));