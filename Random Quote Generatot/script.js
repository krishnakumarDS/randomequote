const quoteText = document.querySelector(".quote"),
    quoteBtn = document.querySelector("button"),
    authorname = document.querySelector(".name"),
    soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter");

// Prewritten quotes
const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { quote: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "If you can dream it, you can do it.", author: "Walt Disney" },
    { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { quote: "You have to be odd to be number one.", author: "Dr. Seuss" },
    { quote: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    { quote: "The difference between who you are and who you want to be is what you do.", author: "Unknown" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "The mind is everything. What you think you become.", author: "Buddha" },
    { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "We cannot solve our problems with the same thinking we used when we created them.", author: "Albert Einstein" },
    { quote: "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.", author: "Lao Tzu" },
    { quote: "Imagination is more important than knowledge.", author: "Albert Einstein" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "To handle yourself, use your head; to handle others, use your heart.", author: "Eleanor Roosevelt" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { quote: "Nothing is impossible, the word itself says ‘I’m possible’!", author: "Audrey Hepburn" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "You must do the things you think you cannot do.", author: "Eleanor Roosevelt" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
    { quote: "Nothing will work unless you do.", author: "Maya Angelou" },
    { quote: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", author: "Brian Tracy" },
    { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { quote: "Don’t give up on your dreams, or your dreams will give up on you.", author: "John Wooden" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { quote: "If you can dream it, you can do it.", author: "Walt Disney" },
    { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "Keep your dreams alive. Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination, and dedication.", author: "Gail Devers" },
    { quote: "Don’t quit. Suffer now and live the rest of your life as a champion.", author: "Muhammad Ali" },
    { quote: "The harder the battle, the sweeter the victory.", author: "Les Brown" },
    { quote: "It’s never too late to be what you might have been.", author: "George Eliot" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
    { quote: "If you’re going through hell, keep going.", author: "Winston Churchill" },
    { quote: "Failure is the condiment that gives success its flavor.", author: "Truman Capote" },
    { quote: "A dream doesn’t become reality through magic; it takes sweat, determination and hard work.", author: "Colin Powell" },
    { quote: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
    { quote: "Dreams don’t work unless you do.", author: "John C. Maxwell" },
    { quote: "Nothing is impossible, the word itself says ‘I’m possible’!", author: "Audrey Hepburn" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Dream big. Start small. Act now.", author: "Robin Sharma" },
    { quote: "Your dreams are never too big, your goals are never too far.", author: "Unknown" },
    { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { quote: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { quote: "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.", author: "Anatole France" },
    { quote: "There is only one thing that makes a dream impossible to achieve: the fear of failure.", author: "Paulo Coelho" },
    { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { quote: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    { quote: "If you want something you’ve never had, you must be willing to do something you’ve never done.", author: "Thomas Jefferson" },
    { quote: "There are no shortcuts to any place worth going.", author: "Beverly Sills" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Don’t let the noise of others’ opinions drown out your own inner voice.", author: "Steve Jobs" },
    { quote: "It’s never too late to be what you might have been.", author: "George Eliot" },
    { quote: "Dreams are the touchstones of our character.", author: "Henry David Thoreau" },
    { quote: "Your life is your message to the world. Make sure it’s inspiring.", author: "Unknown" },
    { quote: "Opportunities don’t happen, you create them.", author: "Chris Grosser" },
    { quote: "To live a creative life, we must lose our fear of being wrong.", author: "Joseph Chilton Pearce" },
    { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford" },
    { quote: "Dream big. Set your goals. Take action.", author: "Unknown" },
    { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" }

]
    ;

// Function to display a random quote
function randomQuote() {
    quoteBtn.classList.add("loading");
    // Select a random quote from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Update the quote and author in the DOM
    quoteText.innerHTML = randomQuote.quote;
    authorname.innerHTML = "-- " + randomQuote.author;

    // Update button text
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");
}

// Event listener for the "New Quote" button
quoteBtn.addEventListener("click", randomQuote);

// Copy quote to clipboard
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

// Share quote on Twitter
twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorname.innerText}`;
    window.open(tweetUrl, "_blank");
});

// Read the quote aloud
soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorname.innerText}`);
    speechSynthesis.speak(utterance);
});
