import { useState, useEffect } from "react";

import api from '../../utils/MainApi';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from '../Preloader/Preloader';

const filter = (movie, params) =>
  movie.nameRU.toLowerCase().includes(params ? params.query.toLowerCase() : '')
  && ((params && params.isShort) ? movie.duration <= 40 : true);

function SavedMovies() {
  const [preloader, setPreloader] = useState(false);
  const [movies, setMovies] = useState(null);
  const [params, setParams] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movies) {
      const token = localStorage.getItem('token');
      api.setToken(token);
      setPreloader(true);
      api.getSavedMovies()
      .then(data => {
        setError(false);
        setMovies(data.movies);
        setPreloader(false);
      })
      .catch(err => setError(true));
    }

    const filtered = movies
    ?.filter(movie => filter(movie, params));
    console.log(filtered);
    setFiltered(filtered);
  }, [params, movies]);

  const handleSearch = (params) => {
    if (!params.query && !params.isShort) {

      return;
    }
    setParams(params);
  }

  const handleRemove = (id) => {
    const token = localStorage.getItem('token');
    api.setToken(token);
    api.removeMovie(id)
      .then(() => {
        const newFiltered = filtered.filter(movie => movie._id !== id);
        setFiltered(newFiltered);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="movies">
      <SearchForm onSearch={handleSearch} />
      {preloader && <Preloader />}
      {error && <h2 className="movies__not-found">Что-то пошло не так...</h2>}
      {filtered?.length === 0 && <h2 className="movies__not-found">Ничего не найдено</h2>}
      <MoviesCardList savedCard list={filtered} onRemove={handleRemove} />
    </div>
  )
}

export default SavedMovies;