/* The getElementsByTagName method returns all child elements with a given tag
name. Implement your own version of it as a regular nonmethod function that
takes a node and a string (the tag name) as arguments and returns count of all
descendant element nodes with the given tag name.

To find the tag name of an element, use its tagName property.
But note that this will return the tag name in all uppercase.
*/

<script>
  function byTagName(node, tagName) {
    var count = 0;

    function inside(node) {
      for(var i=0; i<node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType == document.ELEMENT_NODE)
          if (node.childNodes[i].tagName == tagName.toUpperCase())
          	count++;
        inside(node.childNodes[i]);
      }
    }
    inside(node);
    return count;
  }

  console.log(byTagName(document.body, "h1"));
  // → 1
  console.log(byTagName(document.body, "span"));
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span"));
  // → 2
</script>
