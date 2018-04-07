function kebabToSnake(str) {
// define variable to pass new string
// replace using regular expression with global search
  var newStr = str.replace(/-/g , "_");
  return newStr;
}
