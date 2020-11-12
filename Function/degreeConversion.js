/*
Help user find degF or degC based on their Conversion Selection. Use
Case Statement and ensure that the inputs are within the Freezing Point (
0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
a. degF = (degC * 9/5) + 32
b. degC = (degF – 32) * 5/9
*/

function celsiusToFahr(celsius) 
{
  var Fahr = celsius * 9 / 5 + 32;
  console.log("Celsius "+celsius+" is equal to: "+ Fahr +" Degree Fahrenheit.");
}

function fahrToCelsius(fahrenheit) 
{
  var f= fahrenheit;
  var Cel = (f - 32) * 5 / 9;
  console.log("Fahrenhiet "+f+" is equal to: "+ Cel +" Degree Celsius.");
} 
celsiusToFahr(60);
fahrToCelsius(45);