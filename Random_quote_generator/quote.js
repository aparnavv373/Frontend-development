const quotes = [
  { text: "All our dreams can come true, if we have the courage to pursue them.", author: " Walt Disney " },
  { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt " },
  { text: "Dream big. Work hard.", author: "APJ Abdul Kalam" },
  { text: "If at first you don’t succeed, try, try again.", author: "W. E. Hickson" },
    { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
      { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
        
      { text: " Education is what remains after one has forgotten what one has learned in school.", author: "Albert Einstein" },
      { text:"Spread love everywhere you go. Let no one ever come without leaving happier.", author: "Mother Teresa" },
      { text: "You have to believe in yourself when no one else does", author: "Serena Williams" },
];

const quoteText=document.getElementById("text")
const author=document.getElementById("author")
const buttonElement=document.getElementById('new-button')
buttonElement.addEventListener("click",()=>{
    const randomIndex=Math.floor(Math.random()*quotes.length);
      quoteText.innerText=quotes[randomIndex].text
      author.innerText=quotes[randomIndex].author

})