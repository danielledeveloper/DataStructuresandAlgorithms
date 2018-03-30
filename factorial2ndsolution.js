function factorial(num) {
  if(num === 0) {
    return 1;
  }
  //define result variable
  var result = num;
  // calculate factorial
  for(var i = num - 1; i >= 1; i--) {
    result *= i;
  }
  //return result
  return result;
}
