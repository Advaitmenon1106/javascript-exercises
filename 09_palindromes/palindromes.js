const palindromes = function (str) {
    str_array = []
    for (i = 0; i<str.length; i++){
        str_array.push(str.charAt(i));
    }
    let str_arr2 = str_array.slice()
    if(str_arr2 == str_array.reverse()){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
