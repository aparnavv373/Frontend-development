const buttonElement=document.getElementById("btn")
const pageElement=document.body
buttonElement.addEventListener("click",()=>{
    pageElement.classList.toggle("dark")
});