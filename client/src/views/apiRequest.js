import ajaxHelper from '../helper/ajaxHelper.js';

//http://www.omdbapi.com/?i= + filmId + &plot=short&r=json

const returnFilmInfo = array => {
  for (const film of array) {
    console.log(film)
    const url = "http://www.omdbapi.com/?t=" + film + "&y=&plot=short&r=json"
    ajaxHelper.makeGetRequest(url, getFilmTitle);
  };

};

const getFilmTitle = film => {
  const filmInfo = JSON.parse(film)
  console.log(filmInfo)
  console.log(filmInfo.Title)
}

export default returnFilmInfo;