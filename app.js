const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const ms = require('ms');
const compression = require('compression');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');


const port = process.env.PORT || 3000;
const app = express();


app.use(helmet());
app.use(helmet.hsts({
  maxAge: ms('1y'),
}));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
const files = path.resolve(__dirname, 'build');
app.use('/', expressStaticGzip(files));
app.use(express.static(files));

app.post('/recipe', (req, res) => {
  res.status(200).send({ item: 'success' });
});

app.get('*', (req, res) => res.sendFile(path.resolve('build/index.html')));


app.listen(port, () => console.log('app is running'));
