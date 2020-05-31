const express = require('express');

const app = express();

app.use('/', () => {
  console.log('Learning MongDB')
});

app.listen('8080', () => {
  console.log('Server is listening in PORT 8080');
})