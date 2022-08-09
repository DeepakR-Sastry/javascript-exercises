const getTheTitles = function(arrayBooks) {
    let arrayTitles = [];
    for(let i = 0; i < arrayBooks.length; i++){
        arrayTitles.push(arrayBooks[i].title);
    }

    return arrayTitles;

};

// Do not edit below this line
module.exports = getTheTitles;
