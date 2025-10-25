
const buttonElement=document.getElementById("btn")
const pageElement=document.getElementById("page")
const paragraphElement=document.getElementById("paragraph")
buttonElement.addEventListener("click",()=>{
       
        let red=Math.floor(Math.random()*256);
        let green=Math.floor(Math.random()*256);
        let blue=Math.floor(Math.random()*256);
        let colors=`rgb(${red},${green},${blue})`
        pageElement.style.backgroundColor=colors;
        paragraphElement.innerText=`Color-Code:${colors}`;
});