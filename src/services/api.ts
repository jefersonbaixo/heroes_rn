import axios from 'axios';
import Config from 'react-native-config';
import MD5 from 'crypto-js/md5';

const getTs = () => new Date().getTime();
const publicKey = Config.PUBLIC_KEY;
const hash = MD5(`${getTs()}${Config.PRIVATE_KEY}${publicKey}`);
// get md5 hash

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    apikey: publicKey,
    hash: hash,
    ts: getTs(),
  },
});

export default api;
