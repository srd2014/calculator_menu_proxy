var express = require('express');
var app = express();
var axios = require('axios'); 
const port = 3010; 


app.use(express.static('public'));

// calculator module : homes request
app.get('/homes', (req, res) => {
  console.log(req.url);
  axios.get(`http://localhost:3002${req.url}`, {
  })
  .then(({ data }) => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
  });
});

// calculator module : bank request
app.get('/bank', (req, res) => {
  axios.get('http://localhost:3002/bank')
  .then(({ data }) => {
    res.send(data); 
  })
  .catch(err => {
    console.log(err);
  });
});

// image carousel : image request
app.get('/image', (req, res) => {
  axios.get(`http://localhost:3001${req.url}`)
  .then(({ data }) => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
  });
});

// static image carousel : image request 
app.get('/images', (req, res) => {
  axios.get(`http://localhost:3004${req.url}`)
  .then(({ data }) => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
  });
});

// app.use('/image', proxy({ target: 'http://localhost:3003/' }));
app.listen(port, () => {console.log(`Listening on port: ${port}`)});

