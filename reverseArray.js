//Reversing the array into a new array
function reverseArray(arr) {
  arr1 = [];
  for(var i=0; i<arr.length; i++)
    arr1.unshift(arr[i]);
  return arr1;
}
/*
function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}
*/

//Reversing the same array
function reverseArrayInPlace(arr) {
 for(var i=0; i<arr.length/2; i++) {
   var temp = arr[i];
   arr[i] = arr[arr.length-1-i];
   arr[arr.length-1-i] = temp;
 }
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
