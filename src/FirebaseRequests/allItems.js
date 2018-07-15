import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/allItems.json`)
      .then((results) => {
        const all = [];
        if (results.data !== null) {
          Object.keys(results.data).forEach(fbKey => {
            results.data[fbKey].id = fbKey;
            all.push(results.data[fbKey]);
          });
        }
        resolve(all);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {getRequest};
