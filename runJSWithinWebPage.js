/* Build an interface that allows people to type and run pieces of JavaScript code.
Put a button next to a <textarea> field, which, when pressed, uses the Function
constructor we saw in Chapter 10 to wrap the text in a function and call it.
Convert the return value of the function, or any error it raised, to a string
and display it after the text field.
*/

<textarea id="code">return "hi";</textarea>
<button id="button">Run</button>
<pre id="output"></pre>

<script>
  button = document.querySelector("#button");
  button.addEventListener("click", function() {
    textarea = document.querySelector("#code");
    output = document.querySelector("#output");
    try {

      // This is how we run the javascript command.
      // We need to pass it to a function and return the result as a String
      var result = new Function(textarea.value)();
      output.innerText = String(result);
    } catch (e) {
      output.innerText = "Error: " + e;
    }
  });
</script>
