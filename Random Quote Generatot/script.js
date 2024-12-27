const quoteText = document.querySelector(".quote"),
    quoteBtn = document.querySelector("button")
const authorname = document.querySelector(".name")
soundBtn = document.querySelector(".sound")
copyBtn = document.querySelector(".copy")
twitterBtn = document.querySelector(".twitter")



function randomQuote() {
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote..."
    fetch("http://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerHTML = result.content
        authorname.innerHTML = "-- " + result.author
        quoteBtn.innerText = "New Quote"
        quoteBtn.classList.remove("loading")
    })
}
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText)
})


twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank")
})

soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorname.innerText}`)
    speechSynthesis.speak(utterance)
})
quoteBtn.addEventListener("click", randomQuote)
