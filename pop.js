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

function calculatesum(){
  var name3 = parseInt(document.getElementById('name3').value);
  var name4 = parseInt(document.getElementById('name4').value);
  var name5 = parseInt(document.getElementById('name5').value);
  var name6 = parseInt(document.getElementById('name6').value);
  var name7 = parseInt(document.getElementById('name7').value);
  var name8 = parseInt(document.getElementById('name8').value);
  var name9 = parseInt(document.getElementById('name9').value);
  var name10 = parseInt(document.getElementById('name10').value);
  var name11 = parseInt(document.getElementById('name11').value);
  var name12 = parseInt(document.getElementById('name12').value);
  // var totalPrint = document.getElementById("total-print")

 
  let total = name3 + name4 + name5 + name6 + name7 + name8 + name9 + name10 + name11 + name12; 
  document.getElementById('total').innerHTML = total;

  return total
  
}
// window.location.href = "results.html?total=" + total;

// export let tots = calculatesum()

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
  var total = document.getElementsById('total').value;

  

  localStorage.setItem("userdata", JSON.stringify(data))
});



// get the name from the URL parameter
var urlParams = new URLSearchParams(window.location.search);
// var name = urlParams.get('name');

