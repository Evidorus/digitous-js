var prompt = require('prompt');
var dice = (Math.floor(Math.random() * 100 + 1));

function play(){
    prompt.start();

    prompt.get(['number'], function (err, result) {
        console.log('Command-line input received:');
        var final = parseInt(result.number);
        console.log(final);

        if (dice > final){
            console.log("Plus !");
            play()
        }

        else if (dice < final){
            console.log("Moins !");
            play()
        }

        else if (dice === final){
            console.log("Félicitation !!");
        }

        else {
            console.log("Recommencer");
            play()
        }

      });
}


play()