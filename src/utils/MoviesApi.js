export const URL = 'https://api.nomoreparties.co';

export default function getMovies() {
  return fetch(URL + '/beatfilm-movies', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .catch(err => console.log(err));
}
