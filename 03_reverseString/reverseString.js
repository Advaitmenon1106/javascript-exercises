const reverseString = function(word) {
    stack = [];
    for (i = 0; i<word.length; i++){
        stack.push(word.charAt(i));
    }

    reversed = ''

    for (i = stack.length-1; i>=0; i--){
        reversed = reversed + stack.pop();
    }

    
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
