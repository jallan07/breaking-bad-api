const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (res) => {
  console.log(`App listening on http://localhost:${PORT}`);
});
