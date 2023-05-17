class DataSource {
  static searchMovie(keyword) {
    return fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=c84505ca`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.Search) {
          return Promise.resolve(responseJson.Search);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      })
      .catch((err) => console.error(err));
  }
}

export default DataSource;
