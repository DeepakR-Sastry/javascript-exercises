const repeatString = function(string, num) {
    let x ='';
    if (num < 0){
        return "ERROR";
    }
    for (let i = 0; i<num; i++){
        x += string;
    }

    return x;

};

// Do not edit below this line
module.exports = repeatString;
