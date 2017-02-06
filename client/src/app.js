import returnFilmInfo from './views/apiRequest.js'

const app = () => {

  const sixtees = [
  'Psycho',
  'The Apartment',
  'To Kill a Mockingbird',
  'Lawrence of Arabia',
  'Dr. Strangelove',
  'The Good, the Bad and the Ugly',
  'Bonnie and Clyde',
  'Once Upon a Time in the West',
  '2001: A Space Odyssey',
  'Butch Cassidy and the Sundance Kid'
  ];

  returnFilmInfo(sixtees);

  const viewHomeBtn = document.getElementById('home-btn');
  const viewVotesBtn = document.getElementById('vote-btn');

  viewHomeBtn.onclick = () => {
    const homeDiv = document.getElementById('home-div');
    homeDiv.scrollIntoView();
  };

  viewVotesBtn.onclick = () => {
    const voteDiv = document.getElementById('vote-div');
    voteDiv.scrollIntoView();
  };

};

window.onload = app;