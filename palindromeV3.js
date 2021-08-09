function palindrome(str) {
    // Create empty string
    let reversed = "";
    // Loop through string given to function
    for(let character of str) {
        // Add each character of original string
        // to beginning of new string
        reversed = character + reversed;
    }
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