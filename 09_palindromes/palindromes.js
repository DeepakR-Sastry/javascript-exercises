const palindromes = function (string) {
    let reverse = '';


    const punctuationless1 = string
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .replace(/\s{2,}/g," ")
    .replace(/\s/g, '');
    let punctuationless = punctuationless1.toLowerCase();
    

    for(let i = punctuationless.length - 1; i>=0; i--){
        reverse += punctuationless[i];
    }


    if(reverse === punctuationless){
        return true;
    }


    return false;

};

// Do not edit below this line
module.exports = palindromes;
