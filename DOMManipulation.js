<body>
  <h1>
    Dom Manipulation
  </h1>

  <div class="animator">
     &nbsp;
    <div class="animatee"></div>
  </div>

  <div class="image-holder">
    <!-- This is where the <img> lives -->
  </div>
  <!-- this is where the <p> tag will live -->
</body>

div.image-holder {
  width: 400px;
  height: 500px;
  background-color:steelblue;
}

.animator{
  background-color:blue;
  width:400px;
  height: 200px;
}

.animatee {
  width: 40px;
  height: 40px;
  background-color: red;
}

img {
  border: 3px solid red;
}

var redSquare = document.querySelector('.animatee'); //The smaller div will randomly change position inside bigger div
function runAnimation(){
    redSquare.style['margin-left'] = parseInt(Math.random() * 360) + 'px';
    redSquare.style['margin-top'] = parseInt(Math.random() * 160) + 'px';
    setTimeout(runAnimation, 500);
}
runAnimation()

setTimeout(function () {
  var div = document.querySelector(".image-holder") //The tag is already in html. Associate div to that tag which has this classname
  var img = document.createElement('img'); //Create a tag not present in html
  img.src = 'Some url';
  div.appendChild(img) //Add that inside div
}, 2000);   //Wait 2seconds before displaying image

var paragraph = document.createElement('p');
paragraph.innerHTML = "My name is <strong>Neha</strong>!"
document.body.appendChild(paragraph);
