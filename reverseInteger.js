function reverseInt(n) {
  var revInt = "";
  var index;
  var digits = String(n).split("");

  for(var i = digits.length - 1; i >= 0; i--) {
    revInt += digits[i];
  }
  revInt = String(revInt).split("");
  // move negative sign back to beginning of array
  index = revInt.length - 1;
  if(revInt.indexOf("-") === index) {
    revInt.splice(index, 1);
    revInt.splice(0, 0, "-");
  }
  // convert array to number
  revInt = revInt.join("");
  revInt = Number(revInt);
  return revInt;
}

reverseInt(-789);
//reverseInt(15);
//reverseInt(981);
//reverseInt(500);
//reverseInt(-15);
//reverseInt(-90);
