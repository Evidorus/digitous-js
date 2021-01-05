var request = require('request');

// 01 -------------------

// request.get("https://restcountries.eu/rest/v2/all", function(err, res, body){
//     var noms = JSON.parse(body);
//     var countriesNames = noms.map(function(item){
        
//         return item.name
        
//     })
//     console.log(countriesNames)
// })

// 02 -------------------

request.get("https://api.chucknorris.io/jokes/random", function(err, res, body){
    var blague = JSON.parse(body);
    console.log(blague.value)
    })

    // console.log(blagues)





