import { Api } from "./Api"

export default {
  login(user) {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json'
      },
    };
    return Api.post('users/login', user, requestOptions);
  },
  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('access_token');
  },
  register(user) {
    return Api.post('users/register', user);
  },

  getPromotions(config) {
    return Api.get('api/promotions', config);
  },

  getHotWords(config) {
    return Api.get('api/hotwords', config)
  }
}