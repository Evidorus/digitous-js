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