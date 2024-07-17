// var num1 = prompt("enter your first number");
// var num2 = prompt("enter your last second");

/*
// sorting the array
var arr = [2, 54, 10, 30, 20];
arr.sort(function (a, b) {
  return a - b;
});
document.write(arr);
*/
/*
// findi high score from the array
arr = [2, 54, 10, 30, 20];
function highScore(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
var result = highScore(arr);
document.write("<br> Highest number of array is: " + result);
*/
// for (var i = 0; i < 3; i++){
//     for (var j = 0; j < 2; j++){
//         document.write("<h1>" + playersifo[i][j] + "</h1>");
//     }
// }

var link = document.getElementsByTagName("a")[0];
link.innerHTML = "google.com";
link.href = "https://www.google.com";
link.style.textDecoration = "none";
link.style.backgroundColor = "red";
link.style.border = "2px solid blue";
link.style.marginTop = "10px";
link.style.display = "inline-block"


// create a html tag and add some text inside the tag using js dom(document object model)
var headline2 = document.createElement("h2");
var text = document.createTextNode("I am Enamul Haque Zihad");
headline2.appendChild(text);

// catch the divison 
var division_text = document.getElementsByClassName("text_div")[0];
division_text.appendChild(headline2);

division_text.style.backgroundColor = "Yellow";
headline2.style.fontSize = "4rem";

// change the h1 tag inside text
var heading_text = document.getElementsByTagName("h1");
heading_text[0].innerHTML = "Hello Mahmudul World";
heading_text[0].style.fontSize = "4rem";

// make slider using js
var photos = [
  "img/Rectangle 6.png",
  "img/Rectangle 7.png",
  "img/Rectangle 8.png",
  "img/Rectangle 9.png",
];
var imgTag = document.querySelectorAll("img");
var count = 0;
//adding class in html element
var image_div = document.querySelector(".imgae");
var color_arr = ["add", "remove"];
var togol = true;
function next() {
  count++;
  if (count >= photos.length) {
    count = 0;
  } 
  imgTag[0].src = photos[count];
  imgTag[1].src = photos[count];
  image_div.classList.add("addcolor1");
  image_div.classList.remove("addcolor2");
  if (togol) {
    imgTag[0].classList.add("img1");
    imgTag[1].classList.add("img2");
    imgTag[0].classList.remove("img2");
    imgTag[1].classList.remove("img1");
  } else {
     imgTag[0].classList.remove("img1");
     imgTag[1].classList.remove("img2");
    imgTag[0].classList.add("img2");
    imgTag[1].classList.add("img1");  
  }
  togol = !togol;
  
}
function prev() {
  count--;
  if (count < 0) {
    count = photos.length - 1;
  } 
  imgTag[0].src = photos[count];
  imgTag[1].src = photos[count];
  image_div.classList.remove("addcolor1");
  image_div.classList.add("addcolor2");
  if (togol) {
    imgTag[0].classList.add("img1");
    imgTag[1].classList.add("img2");
    imgTag[0].classList.remove("img2");
    imgTag[1].classList.remove("img1");
  } else {
    imgTag[0].classList.remove("img1");
    imgTag[1].classList.remove("img2");
    imgTag[0].classList.add("img2");
    imgTag[1].classList.add("img1");
  }
  togol = !togol;
    
}
// eventListener in button
var heading1 = document.getElementById("heading1");
var heading1_text = heading1.innerHTML;
var btnTag = document.querySelectorAll(".btn");
var len = document.querySelectorAll(".btn").length;
for (var i = 0; i < len - 1; i++){
  btnTag[i].addEventListener("click", function () {
    var text = this.innerHTML;
    heading1.innerHTML = "you click " + text;
  })
}

btnTag[2].addEventListener("click", function () {
  var text = heading1_text;
  heading1.innerHTML = text;
})

// play song with js
var len = document.querySelectorAll(".song").length;
var audio = new Audio("song/Satyanaas.mp3");
for (var i = 0; i < len; i++){
  document.querySelectorAll(".song")[i].addEventListener("click", function () {
    var text = this.innerHTML;
    switch (text) {
      case "play song":
        audio.play();
        break;
      case "stop song":
        audio.pause();
        audio.currentTime = 0;
        break;
      case "pause song":
        audio.pause();
        break;
    }
  })
}
