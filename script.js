


// Our variables
const key = "2a1e6341044b471598c5a17647fff5db"
const url = `https://newsapi.org/v2/everything?q=hj%C3%A4lte%0D%0A AND kris OR hj%C3%A4lte%0D%0A AND olycka OR hero&sortBy=relevancy&pageSize=50&apiKey=${key}`
const urlHero = `https://newsapi.org/v2/everything?q=hero AND crisis OR accident&sortBy=relevancy&pageSize=50&apiKey=${key}`



// Our main function
const recievedNews = (newsdata) => {
document.querySelector(".allNews").innerHTML = ""

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {
        if(article.urlToImage) {

					//Here we create and add html elements to our html file
					document.querySelector(".allNews").innerHTML +=
            `<div class="news">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}"/>
            <p>${article.description}</p>
            <a href="${article.url}">${article.url}</a>
            </div>`
    }})
}

//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(urlHero)
  .then(response => response.json())
  .then(recievedNews)

    const keyHero = () => {
      fetch(urlHero)
        .then(response => response.json())
        .then(recievedNews)
    }

  document.querySelector(".heroButton").onclick = keyHero


  const keySve = () => {
    fetch(url)
      .then(response => response.json())
      .then(recievedNews)
  }
  document.querySelector(".heroSveButton").onclick = keySve
