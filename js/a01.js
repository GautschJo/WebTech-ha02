function multiply(number1, number2) {
  if (number2 == undefined){
    number2 = 1
  }
  return number1 * number2;
}

function multiplyAll() {
  var result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result = result * Object.values(arguments)[i];
  }
  return result;
}