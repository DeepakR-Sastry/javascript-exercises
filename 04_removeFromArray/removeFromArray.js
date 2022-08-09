const removeFromArray = function(array) {
    for(let i = 0;i<arguments.length-1;i++){
        x = array.indexOf(arguments[i+1])
        if(x != -1){
            array.splice(x,1);
        }
        
    }


    console.log(array)

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
