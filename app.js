const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const ms = require('ms');
const compression = require('compression');
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000;
const app = express();


const files = path.resolve(__dirname, 'build');
app.use(express.static(files));
app.use(helmet());
app.use(helmet.hsts({
  maxAge: ms('1y'),
}));
app.use(morgan('tiny'));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, () => console.log('app is running'));
