const express = require('express');
const app = express();


//MIDDLEWARE
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    res.render('home');
  });

  app.get('/components', (req, res) => {
    res.render('components');
  });

  app.get('/build', (req, res) => {
    res.render('build');
  });
  
  
  
  const PORT = process.env.PORT || 4000; 
  app.listen(PORT, () => console.log(`Windtunnel app listening on port ${PORT}!`));