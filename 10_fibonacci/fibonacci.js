const fibonacci = function(n) {
    if (n<0){
        return "OOPS";
    }
    if (n <=1){
        return parseInt(n);
    }
    else{
        return parseInt(fibonacci(n-1)+fibonacci(n-2));
    }

};

// Do not edit below this line
module.exports = fibonacci;
