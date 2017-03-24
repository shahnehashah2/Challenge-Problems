/* Extend a text field so that when the user types, a list of suggested values
is shown below the field. You have an array of possible values available and
should show those that start with the text that was typed. When a suggestion is
clicked, replace the text field’s current value with it.
*/

<input type="text" id="field">
<div id="suggestions" style="cursor: pointer"></div>

<script>
  // Builds up an array with global variable names, like
  // 'alert', 'document', and 'scrollTo'
  var terms = [];
  for (var name in window)
    terms.push(name);

  var text = document.querySelector("#field");
  var div = document.querySelector("#suggestions");

  text.addEventListener("input", function(e) {
    var partialWord = text.value;
    var listOfSuggestions = findSuggestions(partialWord);
    displaySuggestions(listOfSuggestions);
  });

  function findSuggestions(partialWord) {
    var listofSuggestions = [];
  	for (var i=0; i<terms.length; i++) {
      keyword = terms[i];
      if (keyword.startsWith(partialWord))
        listofSuggestions.push(keyword);
    }
    return listofSuggestions;
  }

  function displaySuggestions(listOfSuggestions) {
    console.log(listOfSuggestions);
    div.innerText = '';
  	for(var i=0; i<listOfSuggestions.length; i++) {
      suggest = listOfSuggestions[i];
      var p = document.createElement("p");
      p.innerText = suggest;
      div.appendChild(p);
      p.addEventListener("click", function(e) {
        replaceSelection(e.target.innerText);
      });
  	}
  }

  function replaceSelection(word) {
  	text.value = String(word);
  }
</script>
