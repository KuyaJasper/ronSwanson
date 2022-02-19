var queryUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var quoteElement = document.querySelector("#quote");
var pictureElement = document.querySelector("#picture");
var ronSwansonElement = document.querySelector(".ronSwanson");
var ronSwansonPicutre = "./Assets/ronSwansonPicture.jpeg";

async function ronSwanson() {
  const response = await fetch(queryUrl);
  const data = await response.json();
  quoteElement.innerHTML = `<h1>"${data}"</h1>`;
  pictureElement.innerHTML = `<img src="${ronSwansonPicutre}" class="ronSwanson" alt="picture of Ron Swanson">`;
  
}

function refreshPage(){
  window.location.reload()
}

pictureElement.addEventListener("click", refreshPage)


ronSwanson();
