const container = document.querySelector(".container");
const img = document.querySelector("img");
const animeName = document.querySelector(".animename");
const animeYear = document.querySelector(".animeyear");
const animeDuration = document.querySelector(".animeduration");

fetch(`https://api.jikan.moe/v4/anime?q=naruto ${input.value}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
