/*
An HTML table is built with the following tag structure:
<table>
  <tr>
    <th>name</th>
    <th>height</th>
    <th>country</th>
  </tr>
  <tr>
    <td>Kilimanjaro</td>
    <td>5895</td>
    <td>Tanzania</td>
  </tr>
</table>

Write a function buildTable that, given an array of objects that all have the
same set of properties, builds up a DOM structure representing a table.
The table should have a header row with the property names wrapped in <th>
elements and should have one subsequent row per object in the array, with its
property values in <td> elements.

The Object.keys function, which returns an array containing the property names
that an object has, will probably be helpful here.
*/


<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    var table = document.createElement("table");
    var tr = document.createElement("tr");


    // Get keys from the first object in data. All objects have same keys
    fields = Object.keys(data[0]);

   	for (var i=0; i<fields.length; i++) {
      var th = document.createElement("th");
      //Use textContent to store the text
      th.textContent = fields[i];
      tr.appendChild(th);
    }

    table.appendChild(tr);

    for(var i=0; i<data.length; i++) {
      var tr = document.createElement("tr");
      for (var j=0; j<fields.length; j++) {
        var td = document.createElement("td");
        td.textContent = data[i][fields[j]];
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>

/* Output styled pretty

name	height	country
Kilimanjaro	5895	Tanzania
Everest	8848	Nepal
Mount Fuji	3776	Japan
Mont Blanc	4808	Italy/France
Vaalserberg	323	Netherlands
Denali	6168	United States
Popocatepetl	5465	Mexico
*/
