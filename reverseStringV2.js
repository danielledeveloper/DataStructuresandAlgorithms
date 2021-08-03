function reverse(str) {
    // Create empty string
    let reversed = "";
    // Loop through string given to function
    for(let i = 0; i < str.length; i++) {
        // Add each character, in order, of the given
        // string to the beginning of new string
        reversed = str[i] + reversed;
    }
    // Return new string
    return reversed;
  }
  
  reverse("fruit");
  reverse("flower");
  reverse("123 456");