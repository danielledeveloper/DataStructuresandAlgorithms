function maxChar(str) {
    const chars = {};
    let maxNum = 0;
    let maxCh = "";
    
    for(let char of str) {
      if(!chars[char]) {
        chars[char] = 1;
      } else {
        chars[char]++;
      }
    }

    for(let char in chars) {
        if(chars[char] > maxNum) {
            maxNum = chars[char];
            maxCh = char;
        }
    }
    return maxCh;
}


maxChar('hgfe ddddddec');
maxChar('Greetings!');
maxChar('765433332');