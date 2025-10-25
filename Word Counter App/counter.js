const text=document.getElementById("text") ;

const wordElement=document.getElementById("words");
const characterElement=document.getElementById("characters")
   
 text.addEventListener("input",()=>{
   
        const textValue=text.value ;
    const Text=textValue.trim() ;
    const words = Text.split(/\s+/).filter(word => word.length > 0);
    const wordsCount = words.length;

    const characterCount=Text.length;
    
    wordElement.innerText=`Words:${wordsCount}`;

    characterElement.innerText=`Characters:${characterCount}`;
  
    

});

