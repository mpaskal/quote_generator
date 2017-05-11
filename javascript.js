var quotes = [
    'Classes will dull your mind, destroy the potential for authentic creativity. - John Nash', 
    'If you\'re changing the world, you\'re working on important things. You\'re excited to get up in the morning. - Larry Page',
    'Trust yourself. Create the kind of self that you will be happy to live with all your life. Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement. — Golda Meir',
    'Daydreams are fertile ground for the imagination. While daydreaming rational thought goes out the window, so new perspectives can find their way in. — Linda Naiman',
    'Life isn’t about finding yourself. Life is about creating yourself. —George Bernard Shaw',
    'It is better to begin in the evening than not at all. — English proverb',
    'Whatever you do, or dream you can, begin it. Boldness has genius and power and magic in it. — Goethe'
];

function newQuote(){
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
