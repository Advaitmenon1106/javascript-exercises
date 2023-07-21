const convertToCelsius = function(temp_in_f) {

  temp_in_f = Math.round((temp_in_f-32)*(5/9)*10);
  return temp_in_f/10;

};

const convertToFahrenheit = function(temp_in_c) {
  temp_in_c = Math.round(((temp_in_c*1.8)+32)*10);
  return temp_in_c/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
