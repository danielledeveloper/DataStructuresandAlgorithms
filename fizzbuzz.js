
for (let i = 1; i <= 100; i++) {
    // evaluate if variable is multiple of both 3 and 5
    // must be first otherwise "Fizz" or "Buzz" will print instead of "FizzBuzz" 
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
      // evaluate if variable is multiple of 3
    } else if (i % 3 === 0) {
      console.log('Fizz');
      // evaluate if variable is multiple of 5
    } else if (i % 5 === 0) {
      console.log('Buzz');
      // print all other numbers
    } else {
      console.log(i);
    }
  }
