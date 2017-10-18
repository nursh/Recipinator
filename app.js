const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const ms = require('ms');
const compression = require('compression');
const bodyParser = require('body-parser');
// const expressStaticGzip = require('express-static-gzip');
require('dotenv').config();
const recipes = require('./assets.json');
const firebase = require('./firebaseConfig');


const port = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(helmet.hsts({
  maxAge: ms('1y'),
}));
app.use(morgan('tiny'));
app.use(compression());
const files = path.resolve(__dirname, 'build');
app.use(express.static(files));
// app.use('/', expressStaticGzip(files));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/api/recipe/:recipeId', (req, res) => {
  const id = req.params.recipeId;
  const recipe = recipes[id];
  res.json(recipe);
});

app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.post('/recipify', (req, res) => {
  const database = firebase.database();
  database.ref(`recipes/${req.body.id}`).set({
    main: req.body.main,
    directions: req.body.directions,
    keywords: req.body.keywords,
    imageUrl: req.body.imageUrl,
    ingredients: req.body.ingredients,
  });
  res.status(200).send({ recipe: req.body });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('build/index.html'));
});

app.listen(port, () => console.log('app is running'));
