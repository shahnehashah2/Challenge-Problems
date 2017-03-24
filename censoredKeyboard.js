/* Between 1928 and 2013, Turkish law forbade the use of the letters Q, W, and X
in official documents. This was part of a wider initiative to stifle
Kurdish culture—those letters occur in the language used by Kurdish people
but not in Istanbul Turkish.
As an exercise in doing ridiculous things with technology, I’m asking you to
program a text field (an <input type="text"> tag) that these letters cannot be
typed into.

(Do not worry about copy and paste and other such loopholes.)
*/

<input type="text">
<script>
  var field = document.querySelector("input");
  field.addEventListener("keydown", function(event) {
    if (event.keyCode == "Q".charCodeAt(0) ||
        event.keyCode == "X".charCodeAt(0) ||
        event.keycode == "W".charCodeAt(0))
      event.preventDefault();
  });
</script>
