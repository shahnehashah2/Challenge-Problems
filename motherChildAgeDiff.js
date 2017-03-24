/* Using the example data set from this chapter, compute the average
age difference between mothers and children (the age of the mother when
the child is born). Assume ancestry is a JSON like:
0:	{
    name:	"Carolus Haverbeke"
    sex:	"m"
    born:	1832
    died:	1905
    father:	"Carel Haverbeke"
    mother:	"Maria van Brussel"
}
1:	{
    name:	"Emma de Milliano"
    sex:	"f"
    born:	1876
    died:	1956
    father:	"Petrus de Milliano"
    mother:	"Sophia van Damme"
}
2:	{name: "Maria de Rycke", sex: "f", …}
3:	{name: "Jan van Brussel", sex: "m", …}
4:	{name: "Philibert Haverbeke", sex: "m", …}
5:	{name: "Jan Frans van Brussel", …}
6:	{name: "Pauwels van Haverbeke", …}
7:	{name: "Clara Aernoudts", sex: "f", …}
8:	{name: "Emile Haverbeke", sex: "m", …}
9:	{name: "Lieven de Causmaecker", …}

*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function knownMother(p) { return byName[p.mother] != null; }
function age(p) { return p.born - byName[p.mother].born; }
console.log(average(ancestry.filter(knownMother).map(age)));
