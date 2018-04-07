function reverse(str) {
  var newStr = "";
  // loop backwards through given string
  for(var i = str.length - 1; i >= 0; i--) {
    // add elements to new string
    newStr += str[i];
  }
  return newStr;
}

//reverse('apple');
//reverse('hello');
reverse('Greetings!');
