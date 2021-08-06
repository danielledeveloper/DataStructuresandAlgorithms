function palindrome(str) {
    // Create empty string
    let reversed = "";
    // Split string into array, reverse array,
    // join array into string
    // Save result into variable
    reversed = str.split('').reverse().join('');
    // Compare original string to new string
    // Return boolean value
    return str === reversed;
  }
  
  palindrome('kayak');
  palindrome('apple');
  palindrome('refer');
  palindrome('123 456');
  palindrome('racecar!');
  palindrome('level');