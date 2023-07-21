const add = function(a, b) {
  return a+b;	
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(arr) {
  let tot = 0;
  for (i = 0; i<arr.length; i++){
    tot = tot+arr[i];
  }
  return tot;
};

const multiply = function(array) {
  let product = 1;
  for (i = 0; i<array.length; i++){
    product = product*array[i];
  }
  return product;
};

const power = function(a, b) {
  return Math.pow(a, b)	;
};

const factorial = function(n) {
  if (n>=0){
    if (n == 0){
      return 1;
    }	
    else{
      return n*factorial(n-1);
    }
  }
  else{
    return "ERROR";
  }
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
