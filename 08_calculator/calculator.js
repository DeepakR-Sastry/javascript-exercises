const add = function(a,b) {
  let x = a+b;
  return x;
	
};

const subtract = function(a,b) {
  let x = a-b;
  return x;
	
};

const sum = function(array) {
  let x = 0;
  for(let i = 0; i <array.length; i++){
    x += array[i];
  }
  return x;
};

const multiply = function(array) {
  let x = 1;
  for(let i = 0; i <array.length; i++){
    x *= array[i];
  }
  return x;

};

const power = function(a,b) {
  let x = a ** b;
  return x;
	
};

const factorial = function(a) {
  let x = 1;
  for(let i = a; i > 0; i--){
    x *= i;
  }

  return x;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
