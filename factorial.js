function factorial(num) {
  //define result variable
  var result = 1;
  // calculate factorial
  for(var i = 2; i <= num; i++) {
    result *= i;
  }
  //return result
  return result;
}
