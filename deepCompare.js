/*
The == operator compares objects by identity. But sometimes, you would prefer to
compare the values of their actual properties.
Write a function, deepEqual, that takes two values and returns true only if they
are the same value or are objects with the same properties whose values are
also equal when compared with a recursive call to deepEqual.
To find out whether to compare two things by identity
(use the === operator for that) or by looking at their properties,
you can use the typeof operator. If it produces "object" for both values,
you should do a deep comparison. But you have to take one silly exception
into account: by a historical accident, typeof null also produces "object".
*/
function deepEqual(a, b) {
  // If a and b are not null and they are of type object
  if (a && b && typeof(a) == "object" && typeof(b) == "object") {
    var aCount=0, bCount=0;
    //Count and make sure the total # of keys match
  	for (var key in a)
      aCount++;
    for (var key in b)
      bCount++;
    if (aCount != bCount)
      return false;
    // Recurse over the keys
    for (var key in a)
    	return (deepEqual(a[key], b[key]));
    }
  // If not an object, check for deep equality of the data type
  else
    return (a === b);
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 2, 3:1}));
// -> false
console.log(deepEqual(2,'2'));
// -> false
console.log(deepEqual(2, 2));
// -> true
