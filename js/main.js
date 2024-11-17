const arrayOfQuotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * arrayOfQuotes.length); 
    const randomQuote = arrayOfQuotes[randomIndex]; 

    document.querySelector('#quoteDisplay').textContent = `"${randomQuote.quote}"`;
    document.querySelector('#authorDisplay').textContent = `--${randomQuote.author}`;
}
