
const buttonElement=document.getElementById("calculate");
let resultElement=document.getElementById("result")
const height = document.getElementById("height");
const weight = document.getElementById("weight");



buttonElement.addEventListener("click",()=>{
const heightValue=parseFloat(document.getElementById("height").value) ;
const weightValue=parseFloat(document.getElementById("weight").value );
let Bmi=((weightValue)/((heightValue/100)**2)).toFixed(2)
if (isNaN(heightValue) || isNaN(weightValue)){
    resultElement.innerText="Please enter valid numbers"

}
else{
    if (Bmi<18.5){
  
  resultElement.innerText=`BMI Value: ${Bmi} (Underweight)`

}
else if(Bmi>=18.5 && Bmi<=24.9 ){
    
   resultElement.innerText=`BMI Value: ${Bmi} (Normal)`
}
else if(Bmi>=25 && Bmi<=29.9){
     
  resultElement.innerText=`BMI Value: ${Bmi} (Overweight)`
}
else if (Bmi>=30){
   resultElement.innerText=`BMI Value: ${Bmi} (Obese)`
}

}



})
height.addEventListener("input", () => resultElement.innerText = "");
weight.addEventListener("input", () => resultElement.innerText = "");

