function range(a, b, step=1) {
  var arr = [], count=0;
  for (var i=a; i!=b+step; i+=step) {
    arr[count] = i;
  	count++;
  }
  return arr;
}

function sum(arr) {
  var sum=0;
  arr.forEach(function(i) {
    sum+=i;
  });
  return sum;
}

/*
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}
*/
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
