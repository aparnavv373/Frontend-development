const buttonElement=document.getElementById("calculate");
const tipElement=document.getElementById("tip");
const totalElement=document.getElementById("total");
const personElement=document.getElementById("person");
buttonElement.addEventListener("click",()=>{
const amountValue=parseFloat(document.getElementById("amount").value) ;
const numberOfPeople=parseFloat(document.getElementById("people").value) ;
const PercentageValue = parseFloat(document.getElementById("percentage").value);
  
     if (isNaN(amountValue) || isNaN(numberOfPeople) ||isNaN(PercentageValue))  {
        alert("Please enter valid numbers");
        return;
    }

    const tipAmount=amountValue*(PercentageValue/100);
    const totalAmount=amountValue+tipAmount;
    const perPerson=totalAmount/numberOfPeople;

    tipElement.innerText=`Tip Amount:${tipAmount.toFixed(2)}`;
    totalElement.innerText=`Total Amount:${totalAmount.toFixed(2)}`;
    personElement.innerText=`Per Person:${perPerson.toFixed(2)}`; 

    
   

});
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", () => {
    tipElement.innerText = "";
    totalElement.innerText = "";
    personElement.innerText = "";
  });
});

