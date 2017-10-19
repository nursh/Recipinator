const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const ms = require('ms');
const compression = require('compression');
const bodyParser = require('body-parser');
require('dotenv').config();
const firebase = require('./firebaseConfig');


const port = process.env.PORT || 3000;
const app = express();
const database = firebase.database();

app.use(helmet());
app.use(helmet.hsts({
  maxAge: ms('1y'),
}));
app.use(morgan('tiny'));
app.use(compression());
const files = path.resolve(__dirname, 'build');
app.use(express.static(files));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/api/recipe/:recipeId', (req, res) => {
  database.ref('recipes')
    .child(`${req.params.recipeId}`)
    .once('value', (snapshot) => {
      res.json(snapshot.val());
    });
});

app.get('/api/recipes', (req, res) => {
  database.ref('recipes').on('value',
    (snapshot) => {
      const recipes = Object.values(snapshot.val());
      res.json(recipes);
    },
    () => console.log('Error occurred'),
  );
});

app.post('/recipify', (req, res) => {
  database.ref(`recipes/${req.body.id}`).set({
    main: req.body.main,
    directions: req.body.directions,
    keywords: req.body.keywords,
    imageUrl: req.body.imageUrl,
    ingredients: req.body.ingredients,
    id: req.body.id,
  });
  res.status(200).send({ recipe: req.body });
});

app.post('/search', (req, res) => {
  res.send('This is it');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('build/index.html'));
});

app.listen(port, () => console.log('app is running'));
