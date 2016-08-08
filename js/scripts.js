var parseNumber = function(){
	return parseInt(prompt("Enter a number"));
};

var num1 = parseNumber();
var num2 = parseNumber();

var addition = function(num1, num2) {
	alert(num1 + num2);
}

var subtraction = function(num1, num2) {
	alert(num1 - num2);
}

var multiplication = function(num1, num2) {
	alert(num1 * num2);
}

var division = function(num1, num2) {
	alert(num1 / num2);
}

addition(num1,num2);

var num3 = parseNumber();
var num4 = parseNumber();

subtraction(num3, num4);

var num5 = parseNumber();
var num6 = parseNumber();
multiplication(num5, num6);

var num7 = parseNumber();
var num8 = parseNumber();
division(num7, num8);
