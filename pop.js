var parent = document.querySelector(".modal-parent"),
    btn = document.querySelector("button"),
    X = document.querySelector(".X"),
    section = document.querySelector("section");

btn.addEventListener("click", appear);

function appear() {
  parent.style.display = "block";
  section.style.filter = "blur(10px)"
}
X.addEventListener("click", disappearX);
function disappearX() {
  parent.style.display = "none";
  section.style.filter = "blur(0px)"
}
parent.addEventListener("click", disappearParent)
function disappearParent(e) {
  if (e.target.className == "modal-parent") {
    parent.style.display = "none";
    section.style.filter = "blur(0px)"
  }
}

document.getElementById('myForm').addEventListener('submit', function(e) {
  // get the value of the name input field
  var name = document.getElementsById('num').value;
  var name1 = document.getElementsById('name1').value;
  var name2 = document.getElementsById('name2').value;
  var name3 = document.getElementsById('name3').value;
  var name4 = document.getElementsById('name4').value;
  var name5 = document.getElementsById('name5').value;
  var name6 = document.getElementsById('name6').value;
  var name7 = document.getElementsById('name7').value;
  var name8 = document.getElementsById('name8').value;
  var name9 = document.getElementsById('name9').value;
  var name10= document.getElementsById('name10').value;
  var name11= document.getElementsById('name11').value;
  var name12= document.getElementsById('name12').value;

  var data = {name, name1, name2, name3, name4, name5, name6, name7, name8, name9, name10, name11, name12}
  // redirect to a new page and pass the name as a URL parameter
  // window.location = 'results.html?name=' + name + 'name=' + name1;
  localStorage.setItem("userdata", JSON.stringify(data))
});




// get the name from the URL parameter
var urlParams = new URLSearchParams(window.location.search);
// var name = urlParams.get('name');

