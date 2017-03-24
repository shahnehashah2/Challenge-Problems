/* Flatten an array of arrays. Won't work for > 2D array */

var arrays = [[1, 2, 3], [4, 5], [6]];
function combination() {
  function combine(a, b) {return a.concat(b);}
  return arrays.reduce(combine);
}
console.log(combination());


/* or,
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}));

*/
