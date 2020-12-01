// required packages
const axios = require('axios').default;

module.exports = (app) => {
  //! GET request for the index page
  app.get('/', (req, res) => {
    res.render('index');
  });

  //* Get request for the characters data
  app.get('/characters', (req, res) => {
    axios
      .get('https://breakingbadapi.com/api/characters')
      .then((response) => {
        console.log(response);
        res.render('characters', { characters: response.data });
      })
      .catch((err) => console.log(err));
  });

  //* GET request for the episodes data
  app.get('/episodes', (req, res) => {
    axios
      .get('https://breakingbadapi.com/api/episodes')
      .then((response) => {
        console.log(response);
        res.render('episodes', { episodes: response.data });
      })
      .catch((err) => console.log(err));
  });

  //* GET request for the quotes data
  app.get('/quotes', (req, res) => {
    axios
      .get('https://breakingbadapi.com/api/quotes')
      .then((response) => {
        console.log(response);
        res.render('quotes', { quotes: response.data });
      })
      .catch((err) => console.log(err));
  });

  //* GET request for the deaths data
  app.get('/deaths', (req, res) => {
    axios
      .get('https://breakingbadapi.com/api/deaths')
      .then((response) => {
        console.log(response);
        res.render('deaths', { deaths: response.data });
      })
      .catch((err) => console.log(err));
  });
};
