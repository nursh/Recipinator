const AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');
const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: 'recipes-list' },
});