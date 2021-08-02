function reverse(str) {
    // Turn string to array, reverse array, turn array to string
    //Return value
    return str.split('').reverse().join('');
}

reverse('orange');
reverse('123 456');
reverse('Welcome!');