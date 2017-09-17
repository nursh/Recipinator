const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const ms = require('ms');
const compression = require('compression');
const bodyParser = require('body-parser');
// const expressStaticGzip = require('express-static-gzip');
const fileUpload = require('express-fileupload');
const recipes = require('./assets.json');


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
app.use(fileUpload());


app.get('/api/recipe/:recipeId', (req, res) => {
  const id = req.params.recipeId;
  const recipe = recipes[id];
  res.json(recipe);
});

app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.post('/recipify', (req, res) => {
  res.status(200).send({ recipe: req.body });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('build/index.html'));
});

app.listen(port, () => console.log('app is running'));
