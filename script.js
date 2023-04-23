/****************The code for the marquee text in the navigation bar********* */
let userName = prompt('* Please couild tell me your name? Name should be more than 3 letters');
 document.querySelector('#blink').innerHTML = `Income`;
 document.querySelector('#blink2').innerHTML = `Balance`;
 document.querySelector('#enter').innerHTML = `${userName}, enter your income amt`;
 document.querySelector('#userExpense').innerHTML = `${userName}, your expense(s) goes here`;

function autoRefresh(t) {
     setTimeout("location.reload(true);", t);
}

if (userName == null || userName == "" || userName.length <= 2) {
     autoRefresh(0000);
}

/********END of The code for the marquee text in the navigation bar********* */
//Getting the element (total income, and the input_expenses) 

//Cloned Inputs-------------
$(document).ready(function(){
              
     $('#clone').click(function(){
      
        // Create clone of <div class='input-form'>
        var newel = $('.inputs:last').clone();
        newel.find('input').val('');
        // Add after last <div class='input-form'>
        $(newel).insertAfter(".inputs:last");
     });
 
 });

function additon() {
     // let x = document.getElementById("income_submit").value;
     // let g = document.getElementById("inputexpenses").value;

     // document.getElementById("income_display").innerHTML =`Ghc: ${x}`;
     // document.getElementById("total_balance").innerHTML =`Ghc: ${(x) -(g)}`;


     // Select all cloned input elements
const inputs = document.querySelectorAll('#inputexpenses');
// Initialize a variable to store the sum
let sum = 0;
// Loop through the input elements
for (let i = 0; i < inputs.length; i++) {
  // Get the value of each input and parse it to a number
  const value = parseFloat(inputs[i].value);
  

  // Add the parsed value to the sum
  sum += value;
}

let x = document.getElementById("income_submit").value;
inputs.value;
document.getElementById("income_display").innerHTML =`Ghc: ${x}`;
document.getElementById("total_balance").innerHTML =`Ghc: ${(x) -(sum)}`;

}



