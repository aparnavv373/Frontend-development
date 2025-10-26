const incrementElement=document.getElementById("increment");
const decrementElement=document.getElementById("decrement");
const resetElement=document.getElementById("reset");
const numberElement=document.getElementById("number");
let number=0
incrementElement.addEventListener("click",()=>{
    numberElement.innerText=number+=1
    numberElement.style.color="green"
    
})
decrementElement.addEventListener("click",()=>{
    numberElement.innerText=number-=1
    numberElement.style.color="red"
})
resetElement.addEventListener("click",()=>{
    number=0;
    numberElement.innerText=number;
     numberElement.style.color="black"
    
})