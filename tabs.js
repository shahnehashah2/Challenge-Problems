/*  tabbed interface is a common design pattern. It allows you to select an
interface panel by choosing from a number of tabs “sticking out” above an element.

In this exercise you’ll implement a simple tabbed interface. Write a function,
asTabs, that takes a DOM node and creates a tabbed interface showing the child
elements of that node. It should insert a list of <button> elements at the top
of the node, one for each child element, containing text retrieved from the
data-tabname attribute of the child. All but one of the original children should
be hidden (given a display style of none), and the currently visible node can be
selected by clicking the buttons.
*/

<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    var tabContent = node.querySelectorAll("data-tabname");;
    var tabName = [];
    // Can also use a for loop with index tabContent[ix]
    // Another way is to say tabContent = Array.from(tabContent)
    // Then use regular forEach()
    Array.prototype.forEach.call(tabContent, function (tc) {
      	tabName.push(tc.getAttribute('data-tabname'));
    });

    function hideAllButOne(tab) { //Hide all but the provided tab
     	Array.prototype.forEach.call(tabContent, function (tc) {
         	if (tc.getAttribute('data-tabname') == tab) {
              tc.style['display'] = '';
        	}
    	else tc.style['display'] = 'none';
    	});
    }

    // Create a div and add buttons inside it. It is just good practice
    // to encapsulate the buttons inside a list or a div
    var tabButtons = document.createElement("div");

    // The following won't work with just for loop and index. Because the
    // anonymous function is called on click, the value of index is out of bounds
    tabNames.forEach(function (tabName) {
      var button = document.createElement("button");
      button.innerText = tabName;
      button.addEventListener('click', function() {
        hideAllButOne(tabName);
      });
      tabButtons.appendChild(button);
    });

    node.insertBefore(tabButtons, node.firstChild);

    // Starting out, display only contents of first tab
    hideAllButOne(tabNames[0]);
  }
  asTabs(document.querySelector("#wrapper"));
</script>
