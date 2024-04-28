function generate(){
    var quotes=[  
      '"The only way to do great work is to love what you do."- Steve Jobs',
      '"In the middle of difficulty lies opportunity." - Albert Einstein',
      '"Believe you can and you\'re halfway there."- Theodore Roosevelt',
      '"The only limit to our realization of tomorrow will be our doubts of today."- Franklin D. Roosevelt',
      '"Don\'t watch the clock; do what it does. Keep going." - Sam Levenson',
      '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
     '"The best way to predict the future is to invent it." - Alan Kay',
      '"It does not matter how slowly you go as long as you do not stop." - Confucius',
     '"Your limitation—it\'s only your imagination."',
      '"Push yourself, because no one else is going to do it for you."']
    
    var author=quotes[Math.floor(Math.random()*quotes.length)];
    
  
    document.getElementById("quote").innerHTML=author;
    
}