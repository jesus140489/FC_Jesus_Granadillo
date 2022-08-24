const api_url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
var _author = document.getElementById("author");
var _text = document.getElementById("text");
var _new_quote = document.getElementById("new-quote");

_new_quote.addEventListener("click", newQuote);

window.onload = function()
{ 
  getQuote(api_url);
}

function newQuote()
{ 
  getQuote(api_url);
}

async function getQuote(url) 
{
    const response = await fetch(url);
    var data = await response.json();
    var random = Math.floor(Math.random()*(101-0+1)+0);
    _author.innerText = data.quotes[random].author;
  _text.innerText = data.quotes[random].quote;
}