var quotes = [
    ['Classes will dull your mind, destroy the potential for authentic creativity.', '- John Nash'], 
    ['If you\'re changing the world, you\'re working on important things. You\'re excited to get up in the morning.', '- Larry Page'],
    ['Trust yourself. Create the kind of self that you will be happy to live with all your life. Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement.', '- Golda Meir'],
    ['Daydreams are fertile ground for the imagination. While daydreaming rational thought goes out the window, so new perspectives can find their way in.', '- Linda Naiman'],
    ['Life is not about finding yourself. Life is about creating yourself.', '- George Bernard Shaw'],
    ['It is better to begin in the evening than not at all.', '- English proverb'],
    ['Whatever you do, or dream you can, begin it. Boldness has genius and power and magic in it.', '- Goethe'],
    ['Tetris taught me that when you try to fit in you’ll disappear.', 'Somebody']
];

var randomNumber;
var quotesNew = new Array();
var message = "Sorry, there is nothing to show";
var quote = "";
var author = "";

function newQuote(){
    if(quotes.length <= 0){
        document.getElementById('quoteDisplay').innerHTML = message;
    } else if(quotes.length > 1){
        randomNumber = Math.floor(Math.random() * quotes.length);
        quote = document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber][0];
        author = document.getElementById('authorDisplay').innerHTML = quotes[randomNumber][1];       
        quotesNew.push(quotes.splice(randomNumber,1)[0]);         
    } else if(quotes.length === 1){
        randomNumber = Math.floor(Math.random() * quotes.length);
        quote = document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber][0];
        author = document.getElementById('authorDisplay').innerHTML = quotes[randomNumber][1];
        quotesNew.push(quotes.splice(randomNumber,1)[0]);      
        quotes = quotesNew;
        quotesNew = [];
    }   
}

function twitter(){
    if(quote != "") {
        var url = 'https://twitter.com/intent/tweet?text=' + quote + ' by ' + author;
            window.open(url, 'twitter');  
        
    } else {  
        var url = 'https://twitter.com/intent/tweet?text=' + 'No quotes were selected.';
            window.open(url, 'twitter');  
    }
} 

