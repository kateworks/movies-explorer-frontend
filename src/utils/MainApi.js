//--------------------------------------------------------------------------------------
// Модуль api.js
// Класс Api
//--------------------------------------------------------------------------------------
import { BASE_URL } from './Auth';

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(res.status);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this.getHeaders()
    })
    .then(res => this._handleResponse(res));
  }

  patchUserProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.getHeaders(),
      body: JSON.stringify({name: data.name, email: data.email})
    })
    .then(res => this._handleResponse(res));
  }

  getHeaders() {
    const token = localStorage.getItem('jwt');
    return {
      ...this._headers,
      'Authorization': `Bearer ${token}`,
    }
  }
}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default mainApi;