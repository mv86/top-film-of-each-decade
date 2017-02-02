const makeGetRequest = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = () => {
    if (this.status !== 200) {
      console.log('Request failed: ', this.status);
    } else {
      callback(this.responseText);
    }
    request.send();
  }
};

export default makeGetRequest; 