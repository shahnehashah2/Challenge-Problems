/* In this exercise, I want you to implement a mouse trail.
Use absolutely positioned <div> elements with a fixed size and background color
(refer to the code in the “Mouse Clicks” section for an example).
Create a bunch of such elements and, when the mouse moves, display them in the
wake of the mouse pointer.
*/

<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  var dots = []
  for (var i =0; i<4; i++) {
    var dot = document.createElement("div");
    dot.className = "trail";
    dots.push(dot);
    document.body.appendChild(dot);
  }

  var currentDot = 0;

  addEventListener("mousemove", function(event) {
    var dot = dots[currentDot];
    currentDot= (currentDot+1) % dots.length;
    dot.style.left = (event.pageX - 3) + "px";
    dot.style.top = (event.pageY - 3) + "px";
  });

</script>
