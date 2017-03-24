function doubleEverything(arr) {
    // make a new array whose values
    // are the double of each element in 'arr'
    return arr.reduce(
        function(valueSoFar, elem){
            // valueSoFar  is like [], or [2]
            valueSoFar.push(elem * 2);
            return valueSoFar;
        },
        []
    );
}

function doubleEverything2(arr){
    return arr.map(function(a){return a*2;});
}


function ourMap(arr, func){
    // make a new array whose values
    // are the result of calling 'func' on
    // each element in 'arr'
    return arr.reduce(
        function(valueSoFar, elem){
            // valueSoFar  is like [], or [2]
            valueSoFar.push(func(elem));
            return valueSoFar;
        },
        []
    );
}


function ourFilter(arr, test){
    // make a new array whose values
    // are included only if calling 'test' on
    // the value produces true.
    return arr.reduce(
        function (valueSoFar, elem){
            if(test(elem)){
                valueSoFar.push(elem);
            }
            return valueSoFar;
        },
        []
    );
}

function ourPluck(arr, key){
    return ourMap(arr, function(a){
        return a[key];
    });
}


function partitionByParity(arr){
    // make an obj containing the values from arr
    // separated by parity
    return arr.reduce(
        function (valueSoFar, elem){
            if(elem & 1){ // or elem % 2 === 1
                valueSoFar.odds.push(elem);
            } else {
                valueSoFar.evens.push(elem);
            }
            return valueSoFar;
        },
        { odds: [], evens: [] }
    );
}



function ourPartition(arr, test){
    // make an obj containing the values from arr
    // separated by the test

    return arr.reduce(
        function (valueSoFar, elem){
            if(test(elem)){
                valueSoFar[0].push(elem);
            } else {
                valueSoFar[1].push(elem);
            }

            return valueSoFar;
        },
        [[], []]
    );
}

function ourReject(arr) {
  // make a new array whose values
  // are included only if calling 'test' on
  // the value produces FALSE.
  return arr.reduce(
      function (valueSoFar, elem){
          if(!test(elem)){
              valueSoFar.push(elem);
          }
          return valueSoFar;
      },
      []
  );
}

function ourGroupBy(arr, test) {
  /* Splits a collection into sets, grouped by the result of running each value
  through iteratee. If iteratee is a string instead of a function, groups by the
  property named by iteratee on each of the values.
  _.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
  => {1: [1.3], 2: [2.1, 2.4]}

  _.groupBy(['one', 'two', 'three'], 'length');
  => {3: ["one", "two"], 5: ["three"]} */
  function isString(str) {
      return str.match("[a-zA-Z]+") == str;
  }

  return arr.reduce(
      function (valueSoFar, elem) {
          if (isString(test))
              key = elem.test;
          else
              key = test(elem);
          valueSoFar.key.push(elem);
      },
      {}
  );
}


function ourFlatten(arr) {
    return arr.reduce(
        function (valueSoFar, elem) {
            return valueSoFar.concat(elem);
        },
        []
    );
}

function ourCompact(arr) {
    //Return all falsy value removed
    return arr.filter (function (elem) {
        if (!elem)
            return true;
        else {
            return false;
        }
    });

}
