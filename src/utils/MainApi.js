class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  setToken(token) {
    this._headers = {
      ...this._headers,
      "Authorization" : `Bearer ${token}`
    };
  }

  _makeRequest(endPoint, method='GET', body) {
    return fetch(this._baseUrl + endPoint, {
      method,
      headers: this._headers,
      body
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        console.log(res);
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  getProfile() {
    return this._makeRequest('/users/me');
  }

  getSavedMovies() {
    return this._makeRequest('/movies/');
  }

  editProfile(body) {
    return this._makeRequest(
      '/users/me',
      'PATCH',
      JSON.stringify(body)
    )
  }

  removeMovie(movieId) {
    return this._makeRequest('/movies/' + movieId, 'DELETE')
  }

  saveMovie(body) {
    return this._makeRequest('/movies', 'POST', JSON.stringify(body));
  }

  signup(body) {
    return this._makeRequest('/signup', 'POST', JSON.stringify(body));
  }

  login(body) {
    return this._makeRequest('/signin', 'POST', JSON.stringify(body));
  }
}

const api = new Api({
  baseUrl: 'https://api.sheshen.students.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;