const getTheTitles = function(array) {
    titles = []
    for (i = 0; i<Object.keys(array).length; i++){
        titles.push(array[i].title);     
    };
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
