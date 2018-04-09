function palindrome(str) {
  // define variable for reversed string
  var reversed = "";
  // Loop through string and add each element to variable
  for(var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  // compare reversed str to original str and if equal return true, else return false.
  return reversed === str;
}

palindrome("abba");
palindrome("abcdefg");
