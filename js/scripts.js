//Business Logic//

const add = function(number1, number2) {
  return number1 + number2;
  };
  
  const subtract = function(number1, number2) {
    return number1 - number2;
    };
  
const multiply = function(number1, number2) {
  return number1 * number2;
    };

const divide = function(number1, number2) {
  return number1 / number2;
    };

  //User Interface logic//
  
  $(document).ready(function() {


    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
  
  alert(divide(number1, number2));

  });