function max(arr) {
  var maximum = arr[0];

  arr.forEach(function(el){
    if(el > maximum) {
      maximum = el;
    }
  });
  return maximum;
}
