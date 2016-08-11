// Business logic:

var addition = function(num1, num2) {
	return(num1 + num2);
}

var subtraction = function(num1, num2) {
	return(num1 - num2);
}

var multiplication = function(num1, num2) {
	return(num1 * num2);
}

var division = function(num1, num2) {
	return(num1 / num2);
}

var getNumber1 = function() {
	var num1 = parseInt($("#number1").val());
	return num1;
}

var getNumber2 = function() {
	var num2 = parseInt($("#number2").val());
	return num2;
}

// User interface logic:

$(document).ready(function() {
	$("form#calculator").submit(function() {
		event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var operator = $("input:radio[name=operator]:checked").val();
		if (operator === "add") {
      result = addition(number1, number2);
    } else if (operator === "subtract") {
      result = subtraction(number1, number2);
    } else if (operator === "multiply") {
      result = multiplication(number1, number2);
    } else if (operator === "divide") {
      result = division(number1, number2);
    }
    $("#output").text(result);
	});


});
