const container = document.querySelector(".container");
const img = document.querySelectorAll("img");
const animeName = document.querySelector(".animename");
const animeYear = document.querySelector(".animeyear");
const animeDuration = document.querySelector(".animeduration");
const moredetails = document.querySelectorAll(".moredetails");
let detailsMovieTitle;

moredetails.addEventListener("click", () => {
  fetch(`https://api.jikan.moe/v4/anime?q=${value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
});
