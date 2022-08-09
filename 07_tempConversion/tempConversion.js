const ftoc = function(ftemp) {
  let x = 0;
  x = (ftemp-32) * (5/9);
  x = Math.round(x*10)/10;
  return x;

};

const ctof = function(ctemp) {
  let x = 0;
  x = (ctemp*(9/5)) + 32;
  x = Math.round(x*10)/10;
  return x;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
