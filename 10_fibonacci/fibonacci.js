const fibonacci = function(num) {

    num = parseInt(num);
    if(num < 0){
        return "OOPS";
    }

    if(num == 1 || num == 2){
        return 1;
    }

    

    let previous2 = 1;
    let previous1 = 1;
    for(i = 1; i < num-1; i++){
        next = previous2 + previous1;
        previous2 = previous1;
        previous1 = next;
    }

    return next;

};

// Do not edit below this line
module.exports = fibonacci;
