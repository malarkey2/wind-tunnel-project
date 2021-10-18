const express = require('express');
const app = express();


//MIDDLEWARE
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    res.render('home');
  });
  
  
  const PORT = process.env.PORT || 4000; 
  app.listen(PORT, () => console.log(`Windtunnel app listening on port ${PORT}!`));