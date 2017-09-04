const express = require('express');
const path = require('path');


const port = process.env.PORT || 3000;
const app = express();


const files = path.resolve(__dirname, 'build');
app.use(express.static(files));

app.listen(port, () => console.log('app is running'));
