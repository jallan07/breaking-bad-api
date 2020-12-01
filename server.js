const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// static css
app.use(express.static('public'));

// parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
const exphbs = require('express-handlebars');
app.set('view engine', 'handlebars');
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);

// Require routes
require('./routes/html')(app);

app.listen(PORT, (res) => {
  console.log(`App listening on http://localhost:${PORT}`);
});
