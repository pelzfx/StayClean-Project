var urlParams = new URLSearchParams(window.location.search);
var total = urlParams.get("total");
document.getElementById('total').innerHTML = total;
// var total = name3 + name4 + name5 + name6 + name7 + name8 + name9 + name10 + name11 + name12; 

// update the page to display the name
document.getElementById('num').innerHTML = urlParams.get('name');
document.getElementById('name1').innerHTML = urlParams.get('name1');
document.getElementById('name2').innerHTML = urlParams.get('name2');
document.getElementById('name3').innerHTML = urlParams.get('name3');
document.getElementById('name4').innerHTML = urlParams.get('name4');
document.getElementById('name5').innerHTML = urlParams.get('name5');
document.getElementById('name6').innerHTML = urlParams.get('name6');
document.getElementById('name7').innerHTML = urlParams.get('name7');
document.getElementById('name8').innerHTML = urlParams.get('name8');
document.getElementById('name9').innerHTML = urlParams.get('name9');
document.getElementById('name10').innerHTML = urlParams.get('name10');
document.getElementById('name11').innerHTML = urlParams.get('name11');
document.getElementById('name12').innerHTML = urlParams.get('name12');
// document.getElementById('total').innerHTML = urlParams.get('total');

window.onload = function() {
    // var url = new URL(window.location.href);
    // var total = url.searchParams.get("total");
  }
 
  

function printPage(){
    window.print();
}