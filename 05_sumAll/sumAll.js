const sumAll = function(a,b) {
    let x = 0;

    if(a<0 || b<0){
        return "ERROR";
    }

    if(typeof(a) !== "number" || typeof(b) !== "number"){
        return "ERROR";
    }
    if(a>b){
        let temp = a;
        a = b;
        b = temp;
    }

    for(let i = a; i <=b; i++){
        x += i;
    }
    return x;

};

// Do not edit below this line
module.exports = sumAll;
