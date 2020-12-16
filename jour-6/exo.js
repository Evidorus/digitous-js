// 01 -

function date (string){
    var dateR = new Date(string);
    console.log(`la date est : ${dateR.getDate()}/${dateR.getMonth()}/${dateR.getFullYear()}`);
}
date("2020-12-16")


// 02 - Age

function calculateAge (string){
    var date = new Date(string);
    var diff = date - Date.now();
    var age = new Date(diff);
    console.log("date : " + date);
    console.log("diff : " + diff);
    console.log("age : " + age);
    console.log(Math.abs(age.getUTCFullYear() - 1970), "year")
}
calculateAge("1996-05-03")