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

  app.get('/stabilizer', (req, res) => {
    res.render('stabilizer');
  });

  app.get('/powerpod', (req, res) => {
    res.render('powerpod');
  });


 

  //File Downloads --- FILE DOWNLOADS --- File Downloads


 // Flow Stabilizer
 app.get('/download/flow-stabilizer-full', function(req, res){
  const file = `${__dirname}/public/plan-pdfs/full/Flow-Stabilizer.pdf`;
  res.download(file); // Set disposition and send it.
});

app.get('/download/flow-stabilizer-tiled', function(req, res){
  const file = `${__dirname}/public/plan-pdfs/tiled/Flow-Stabilizer-tiled.pdf`;
  res.download(file); // Set disposition and send it.
});  


  // Contraction Section

  app.get('/download/contraction-base-full', function(req, res){
    const file = `${__dirname}/public/plan-pdfs/full/Contraction-Base.pdf`;
    res.download(file); // Set disposition and send it.
  });

  app.get('/download/contraction-base-tiled', function(req, res){
    const file = `${__dirname}/public/plan-pdfs/tiled/Contraction-Base-tiled.pdf`;
    res.download(file); // Set disposition and send it.
  });  

  app.get('/download/contraction-side-full', function(req, res){
    const file = `${__dirname}/public/plan-pdfs/full/Contraction-Sides.pdf`;
    res.download(file); // Set disposition and send it.
  });

  app.get('/download/contraction-side-tiled', function(req, res){
    const file = `${__dirname}/public/plan-pdfs/tiled/Contraction-Base-tiled.pdf`;
    res.download(file); // Set disposition and send it.
  });

  app.get('/download/contraction-hood-full', function(req, res){
    const file = `${__dirname}/public/plan-pdfs/full/Contraction-Hood.pdf`;
    res.download(file); // Set disposition and send it.
  });

  app.get('/download/contraction-hood-tiled', function(req, res){
    const file = `${__dirname}/public/plan-pdfs/tiled/Contraction-Hood-tiled.pdf`;
    res.download(file); // Set disposition and send it.
  });

  //Test Section
  app.get('/download/test-section-full', function(req, res){
    const file = `${__dirname}/public/plan-pdfs/full/Test-Section-Build.pdf`;
    res.download(file); // Set disposition and send it.
  });
  
  app.get('/download/test-section-tiled', function(req, res){
    const file = `${__dirname}/public/plan-pdfs/tiled/Test-Section-tiled.pdf`;
    res.download(file); // Set disposition and send it.
  });    

  //Diffuser

  app.get('/download/diffuser-hood-full', function(req, res){
    const file = `${__dirname}/public/plan-pdfs/full/Diffuser-Hood.pdf`;
    res.download(file); // Set disposition and send it.
  });
  
  app.get('/download/diffuser-hood-tiled', function(req, res){
    const file = `${__dirname}/public/plan-pdfs/tiled/Diffuser-Hood-tiled.pdf`;
    res.download(file); // Set disposition and send it.
  }); 

  app.get('/download/diffuser-side&base-full', function(req, res){
    const file = `${__dirname}/public/plan-pdfs/full/Diffuser-Base-and-Sides.pdf`;
    res.download(file); // Set disposition and send it.
  });
  
  app.get('/download/diffuser-side&base-tiled', function(req, res){
    const file = `${__dirname}/public/plan-pdfs/tiled/Diffuser-Base-and-Side-tiled.pdf`;
    res.download(file); // Set disposition and send it.
  }); 




 


  
  
  
  const PORT = process.env.PORT || 4000; 
  app.listen(PORT, () => console.log(`Windtunnel app listening on port ${PORT}!`));