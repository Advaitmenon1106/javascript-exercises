const sumAll = function(a, b) {

    if (Number.isInteger(b) && Number.isInteger(a) && a>0 && b>0){

        if (a<b){

            for (i = a; i<b; i++){
                a = a+(i+1);
            }
            return a;
        }
        else{

            for (i = b; i<a; i++){
                b = b+(i+1);
            }
            return b;
        }
    }

    else{
        return ("ERROR");
    }
};

// Do not edit below this line
module.exports = sumAll;

