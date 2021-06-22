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
    const movies = localStorage.getItem('savedMovies');
    if (movies) setMovies(JSON.parse(movies));
    const params = localStorage.getItem('paramsSaved');
    if (params) setParams(JSON.parse(params));
    const filtered = localStorage.getItem('filteredSaved');
    if (filtered) setFiltered(JSON.parse(filtered));
  }, []);

  useEffect(() => {
    if (!movies) {
      const token = localStorage.getItem('token');
      api.setToken(token);
      setPreloader(true);
      api.getSavedMovies()
      .then(data => {
        setError(false);
        setMovies(data.movies);
        localStorage.setItem('savedMovies', JSON.stringify(data.movies));
        setPreloader(false);
      })
      .catch(err => setError(true));
    }

    const filtered = movies
    ?.filter(movie => filter(movie, params));
    setFiltered(filtered);
    localStorage.setItem('filteredSaved', JSON.stringify(filtered));
  }, [params, movies]);

  const handleSearch = (params) => {
    if (!params.query && !params.isShort) {

      return;
    }
    localStorage.setItem('paramsSaved', JSON.stringify(params));
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

  useEffect(() => {
    setSavedParams(params)
  }, [params]);

  const [savedParams, setSavedParams] = useState(null);

  const handleChange = (params) => setSavedParams(params)

  return (
    <div className="movies">
      <SearchForm onSearch={handleSearch} params={savedParams} onChange={handleChange} />
      {preloader && <Preloader />}
      {error
        ? <h2 className="movies__not-found">Что-то пошло не так...</h2>
        : (
          <>
            {filtered?.length === 0 && <h2 className="movies__not-found">Ничего не найдено</h2>}
            <MoviesCardList savedCard list={filtered} onRemove={handleRemove} />
          </>
        )
      }

    </div>
  )
}

export default SavedMovies;