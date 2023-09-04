/*  1. Click on Join Race
    2. Right CLick on webpage and click "Inspect"
    3. Now, Click on Console.
    4. Paste it, and hit enter
    5. Place your Mouse in racing Placeholder, and press any key to type automatically 

                          Enjoy!
*/ 

var spans = [...document.querySelectorAll("span[unselectable]")];
var input = document.querySelector(".txtInput");
var text = spans.map(span => span.textContent).join("");
var j = 0;

input.addEventListener("keypress", function(e) {
  e.preventDefault();
  input.value += text[j++];
});
