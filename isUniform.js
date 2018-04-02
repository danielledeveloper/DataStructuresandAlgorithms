function isUniform(arr) {
  var value = arr[0];

  for(var i = 1; i < arr.length; i++) {
    if(value !== arr[i]) {
      return false;
    }
  }
  return true;
}


isUniform([1, 1, 1, 1]);
isUniform([2, 1, 1, 1]);
isUniform([1, 1, 2, 1]);
isUniform(["a", "b", "p"]);
isUniform(["b", "b", "b"]);
