const firebase = require('firebase');


const config = {
  apiKey: process.env.FIRE_KEY,
  authDomain: 'recipitopia.firebaseapp.com',
  databaseURL: 'https://recipitopia.firebaseio.com',
  projectId: 'recipitopia',
  storageBucket: 'recipitopia.appspot.com',
  messagingSenderId: process.env.FIRE_MESS_ID,
};

firebase.initializeApp(config);
module.exports = firebase;
