// récupérer le form
let quoteCount = 0;
const form = document.querySelector("#form-citation"); //# dièse si c'est un id
form.addEventListener("submit", function (event) {
  event.preventDefault(); //annule le chargement de page très important
  const text = document.querySelector("#citation").value;
  const author = document.querySelector("#author").value;
  addQuote(text, author);
  console.log(text);
  console.log(author);
});

function addQuote(quote, author) {
  const quotetext = document.createElement("p");
  const authortext = document.createElement("p");
  quotetext.classList.add("text");
  authortext.classList.add("author");
  quotetext.textContent = quote;
  authortext.textContent = author;
  const quoteDiv = document.createElement("div");
  quoteDiv.classList.add("quote");
  quoteDiv.appendChild(quotetext);
  quoteDiv.appendChild(authortext);
  const quoteList = document.getElementById("quote-list");
  quoteList.appendChild(quoteDiv);
  quoteCount += 1;
  const h3 = document.getElementById("count");
  h3.textContent = quoteCount;
}
//creer un variable quotecount init a 0
//ajouter 1 a la valeur de quotecount dans addQuote
//récupérer le h3 avec un getElementById
//remplacer son textcontent avec la valeur de quoteCount
