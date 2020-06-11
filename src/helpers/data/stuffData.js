import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getStuffByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/stuff.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbStuff = response.data;
      const stuff = [];
      if (fbStuff !== null) {
        Object.keys(fbStuff).forEach((stuffId) => {
          fbStuff[stuffId].id = stuffId;
          stuff.push(fbStuff[stuffId]);
        });
      }
      resolve(stuff);
    })
    .catch((err) => resolve(err));
});

const getSingleItem = (itemId) => axios.get(`${baseUrl}/stuff/${itemId}.json`);

export default { getStuffByUid, getSingleItem };
