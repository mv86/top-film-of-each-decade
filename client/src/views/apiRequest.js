import makeGetRequest from '../helper/ajaxHelper.js';

const returnFilmInfo = array => {
  for (film of array) {
    console.log('returnFilmInfo callings')
    makeGetRequest(film, getFilmTitle);
  };

};

getFilmTitle = film => {
  console.log('getFilmTitle calling')
}