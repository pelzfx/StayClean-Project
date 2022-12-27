var urlParams = new URLSearchParams(window.location.search); 
 data  =  localStorage.getItem("currentUserTotal")
 console.log(data)
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
// document.getElementById('name11').innerHTML = urlParams.get('name11');
// document.getElementById('name12').innerHTML = urlParams.get('name12');
document.getElementById('total-print').innerHTML = urlParams.get('total')

// function calculatesum(){
//     // var name3 = parseInt(document.getElementById('name3').value);
//     // var name4 = parseInt(document.getElementById('name4').value);
//     // var name5 = parseInt(document.getElementById('name5').value);
//     // var name6 = parseInt(document.getElementById('name6').value);
//     // var name7 = parseInt(document.getElementById('name7').value);
//     // var name8 = parseInt(document.getElementById('name8').value);
//     // var name9 = parseInt(document.getElementById('name9').value);
//     // var name10 = parseInt(document.getElementById('name10').value);
//     // var name11 = parseInt(document.getElementById('name11').value);
//     // var name12 = parseInt(document.getElementById('name12').value);
//     var totalPrint = document.getElementById("total-print")
  
   
//     // var total = name3 + name4 + name5 + name6 + name7 + name8 + name9 + name10 + name11 + name12; 
//     // document.getElementById('total').innerHTML = total;

//     totalPrint.textContent= total
    
//   }

// calculatesum()
function printPage(){
    window.print();
}


