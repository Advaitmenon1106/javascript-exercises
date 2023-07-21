const reverseString = function(word) {
    stack = [];
    for (i = 0; i<word.length; i++){
        stack.push(word.charAt());
    }

    reversed = ''

    for (i = stack.length-1; i>=0; i--){
        reversed = reversed + stack.pop();
    }

    
    return reversed;
};

console.log(reverseString(" "));
console.log(reverseString("abc! 123!"));
a = []