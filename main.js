const express = require('express');
const path = require('path');
const rootDir = require('./util/path.js');
const port = 3853;

const app = express();
app.set('view engine', 'ejs');

app.use(express.static(path.join(rootDir, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

app.get('/home', (req, res) => {
  /* res.sendFile(path.join(rootDir, 'views', 'index.html')); */
  res.render('home.ejs', {}, (err, bodyContent) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    res.send(bodyContent);
  });
});

app.get('/users', (req, res) => {
  /* res.sendFile(path.join(rootDir, 'views', 'users.html')); */
  res.render('users.ejs', {}, (err, bodyContent) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    res.send(bodyContent);
  });
});

app.get('/message', (req, res) => {
  res.send('<p>Blondel</p>');
});

app.listen(port, () => {
  console.log(`Server at port ${port}`);
});
