const findTheOldest = function(array) {
    let oldest = "";
    let x = 0;
    let best = 0;
    for(let i = 0; i < array.length; i++){

        x = array[i].yearOfDeath-array[i].yearOfBirth;
        if(array[i].yearOfDeath == null){
            x = 2022-array[i].yearOfBirth;
        }

        if(x>best){
            best = x;
            oldest = array[i]
        }
    }


    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
