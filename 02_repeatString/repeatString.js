const repeatString = function(word, num) {
    let repeated = "";
    if (num < 0){
        return "ERROR";
    }
    else{
        while (num>0){
            repeated = repeated+word;
            num--;
        }
    }

return repeated;
};

// Do not edit below this line
module.exports = repeatString;
