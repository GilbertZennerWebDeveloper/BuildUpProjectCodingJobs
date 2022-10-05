//const Form = document.querySelector(`#form`);
const SearchButton = document.querySelector(`#searchButton`);
const SearchInput = document.querySelector(`#searchInput`);
//let searchTerm = SearchInput.value;
const LatestAnimesContainer = document.querySelector(
  `#Latest-Animes-Container`
);
const LatestAnimesContainerDivs = document.querySelectorAll(
  `#Latest-Animes-Container-Divs`
);
const SearchResultsContainer = document.querySelector(
  `#Search-Results-Container`
);

const log = (a) => console.log(a);

const AllAnimeAiringDates = [];
const AllYears = [];


/*
Form.addEventListener(`submit`, (event) => {
  event.preventDefault();
});
*/
// use "aired-to:" in fetchedData to select the latest 4 animes: fetchedData.data.aired.prop.to

const CollectAiringDates = function () {
  fetch(`https://api.jikan.moe/v4/anime?q=`)
    .then((response) => {
      return response.json();
    })
    .then((fetchedData) => {
      fetchedData.data.forEach((anime, index) => {
        fetchedData.data[index].aired.prop.to.day !== null ? AllAnimeAiringDates.push(fetchedData.data[index].aired.prop.to.day) : 0;
        fetchedData.data[index].aired.prop.to.month !== null ? AllAnimeAiringDates.push(fetchedData.data[index].aired.prop.to.month) : 0;
        fetchedData.data[index].aired.prop.to.year !== null ? AllAnimeAiringDates.push(fetchedData.data[index].aired.prop.to.year) : 0;
        fetchedData.data[index].aired.prop.to.year !== null ? AllYears.push(Number(fetchedData.data[index].aired.prop.to.year)) : 0;



        /*AllAnimeAiringDates.push(fetchedData.data[index].aired.prop.to.day);
        AllAnimeAiringDates.push(fetchedData.data[index].aired.prop.to.month);
        AllAnimeAiringDates.push(fetchedData.data[index].aired.prop.to.year);*/
      })
    });
    AllYears.forEach((year) => {
      log(`forEachYear`+year);
      log(typeof year);
    });
    
    //log(`AllAnimeAiringDates: ${AllAnimeAiringDates}`);
    AllAnimeAiringDates.sort();
    log(AllAnimeAiringDates.sort());
    log(AllYears.sort());
};

CollectAiringDates();


const FetchLatestAnimes = function () {
  fetch(`https://api.jikan.moe/v4/anime?q={searchTerm}`)
    .then((response) => {
      return response.json();
    })
    .then((fetchedData) => {
      LatestAnimesContainerDivs.forEach((div, index) => {
        const score = fetchedData.data.score;
        const genres = fetchedData.data.genres[index].mal_id;
        fetchedData.data.aired.prop.to; //the useful data to get the latest. I guess I have to collect all those dates into an array and them use array.sort.reverse and then use the first 4 ones.
        // here we store the data from a specific Anime for the "Latest" Section.
      });
    });
};
/*
SearchButton.addEventListener(`click`, function () {
  fetch(`https://api.jikan.moe/v4/anime?q=${input.value}`)
    .then((response) => {
      return response.json();
    })
    .then((fetchedData) => {
      //fetchedData.title.toLowerCase().includes(SearchInput.value.toLowerCase()) ?
    });
});
*/

FetchLatestAnimes();
