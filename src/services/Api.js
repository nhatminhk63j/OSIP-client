import axios from 'axios'

export const Api = axios.create({
  baseURL: `https://osip-server.herokuapp.com/`
})