import axios from 'axios';

//const BASE_URL = `http://localhost:8080`;
const BASE_URL = process.env.NODE_ENV === 'production' ? `https://cs-5278-proj.uc.r.appspot.com` : 'http://localhost:8080';
const SOCKET_URL = process.env.NODE_ENV === 'production' ? `wss://cs-5278-proj.uc.r.appspot.com/socket-connect` : 'ws://localhost:8080/socket-connect';

export default {
  activeGames() {
    return axios.get(`${BASE_URL}/activeGames`);
  },
  newGame({ name, password }) {
    return axios.post(`${BASE_URL}/newGame`, { name, password })
  },
  joinGame({ gameId, name, password }) {
    return axios.post(`${BASE_URL}/joinGame/${gameId}`, { name, password })
  },
  sendCommand({ gameId, playerId, command }) {
    return axios.post(`${BASE_URL}/executeCommand/${gameId}/${playerId}`, {
      command
    })
  },
  onConnect({ gameId, playerId}) {
    return axios.get(`${BASE_URL}/onConnect/${gameId}/${playerId}`);
  },
  BASE_URL,
  BASE_IMAGE_URL: `${BASE_URL}/images`,
  SOCKET_URL
}