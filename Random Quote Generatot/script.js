const quoteText = document.querySelector(".quote"),
    quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".name");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";

    // Using the ZenQuotes API
    fetch("https://zenquotes.io/api/random")
        .then(res => res.json())
        .then(result => {
            // API returns an array; the quote and author are in the first object
            quoteText.innerHTML = result[0].q;
            authorName.innerHTML = "-- " + result[0].a;
            quoteBtn.innerText = "New Quote";
            quoteBtn.classList.remove("loading");
        })
        .catch(() => {
            // Handle any errors with a fallback quote
            quoteText.innerHTML = "Be the change that you wish to see in the world.";
            authorName.innerHTML = "-- Mahatma Gandhi";
            quoteBtn.innerText = "New Quote";
            quoteBtn.classList.remove("loading");
        });
}

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorName.innerText}`;
    window.open(tweetUrl, "_blank");
});

soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

quoteBtn.addEventListener("click", randomQuote);

// Initial quote load
randomQuote();
