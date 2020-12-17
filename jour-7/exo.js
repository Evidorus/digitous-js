// 01 - Alpha

function sortLetters (string){
    var splitedString = string.split("");
    console.log(splitedString.sort())
}

sortLetters("konexio")

// 02 - XOXO

function countEach (string){
    var string1 = string.split("").sort().join("");
    var counter = 1;
    for (let i = 0; i < string.length; i++){
        if ( string1[i] == string1[i + 1]){
            counter++;
        } else {
            console.log(string1[i] + " " + counter);
            counter = 1;
        }
    }
    if ( counter > counter){
        console.log("")
    }
}

countEach("xxxoooox")