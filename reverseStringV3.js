function reverse(str) {
    //Create empty string
    let reversed = "";
    // Loop through string given to function
    for(let character of str) {
        // Add each character, in order, of the given
        // string to the beginning of new string
        reversed = character + reversed;
    }
    // Return new string
    return reversed;
}

reverse("123 456");
reverse("fruit");
reverse("flower");
