const app = () => {
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