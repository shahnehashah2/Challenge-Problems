/* When we looked up all the people in our data set that lived more than
90 years, only the latest generation in the data came out. Let’s take a closer
look at that phenomenon.

Compute and output the average age of the people in the ancestry data set per
century. A person is assigned to a century by taking their year of death,
dividing it by 100, and rounding it up
*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function centuryOfDeath (a) {
  return Math.floor(a.died/100) + 1;
}

function lifeSpan(a) {
  return a.died - a.born;
}

function groupBy(a, grouper) {
  /* arr: Array of items to group
    grouper: a function returning the key to group upon

    example:
    function isEven(num){
        return (num % 2) === 0 ;
    }
    groupBy([1, 2, 15, 12, 18], isEven)
    -> {
        true: [2, 12, 18],
        false: [1, 15],
    }

    function onesPlace(num){
        var asString = num.toString();
        return asString[asString.length - 1];
    }

    groupBy([1, 12, 18, 2211, 32], onesPlace)
    -> {
        '1': [1, 2211],
        '2': [12, 32],
        '8': [18],
    }
    */
    var grouped = {};
    a.forEach(function(entry){
        // false for grouper isEven
        // '1' for onesPlace
        var key = grouper(entry);
      	// We cannot push into an undefined array
      	// So we create it if not created
        grouped[key] = grouped[key] || [];
        grouped[key].push(entry);
    });
    return grouped;
}


var listOfAncestorsPerCentury = groupBy(ancestry, centuryOfDeath);

var centuries = Object.keys(listOfAncestorsPerCentury);

centuries.forEach(function (cent) {
  var ancestorsThisCentury = listOfAncestorsPerCentury[cent];
  var ages = ancestorsThisCentury.map(lifeSpan);

  console.log(cent, ':', average(ages));
});

//console.log(average(ancestry.map(generation)))

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
