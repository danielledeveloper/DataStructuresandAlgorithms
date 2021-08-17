function reverseInt(n) {
    // Create variable to hold returned 
    // value of Math.sign operation
    const sign = Math.sign(n);
    
    // Turn number given to function to 
    // string, then array, return array to variable
    let reversed = n.toString().split('');

    // If first element of array is negative
    // sign, remove first element of array
    if(reversed[0] === "-") {
      reversed.shift();
    }
    // Reverse array, turn back to string
    reversed = reversed.reverse().join('');
    // Turn string to integer
    parseInt(reversed);
    // Multiply integer by 1 or -1 so integer is same
    // sign as original integer(n) given to function
    reversed = reversed * sign;
    // Return integer
    return reversed;
  }


  
reverseInt(25);
reverseInt(849);
reverseInt(300);
reverseInt(-25);
reverseInt(-80);