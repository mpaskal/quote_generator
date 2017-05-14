var quotes = [
    'Classes will dull your mind, destroy the potential for authentic creativity. - John Nash 1', 
    'If you\'re changing the world, you\'re working on important things. You\'re excited to get up in the morning. - Larry Page 2',
    'Trust yourself. Create the kind of self that you will be happy to live with all your life. Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement. - Golda Meir 3',
    'Daydreams are fertile ground for the imagination. While daydreaming rational thought goes out the window, so new perspectives can find their way in. - Linda Naiman 4',
    'Life is not about finding yourself. Life is about creating yourself. - George Bernard Shaw 5',
    'It is better to begin in the evening than not at all. - English proverb 6',
    'Whatever you do, or dream you can, begin it. Boldness has genius and power and magic in it. - Goethe 7'
];

var randomNumber;
var quotesNew = [];
var message = "Sorry, there is nothing to show";

function newQuote(){
    if(quotes.length <= 0){
        document.getElementById('quoteDisplay').innerHTML = message;
    } else if(quotes.length > 1){
        randomNumber = Math.floor(Math.random() * quotes.length);
        document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
        quotesNew.push(quotes.splice(randomNumber,1));          
    } else if(quotes.length === 1){
        randomNumber = Math.floor(Math.random() * quotes.length);
        document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
        quotesNew.push(quotes.splice(randomNumber,1));        
        quotes = quotesNew;
        quotesNew = [];
    }   
}
