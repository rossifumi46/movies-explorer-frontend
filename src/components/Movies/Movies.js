import { useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import getMovies from '../../utils/MoviesApi';
import './Movies.css';
import Preloader from '../Preloader/Preloader';
import api from "../../utils/MainApi";
import { URL } from '../../utils/MoviesApi';

function getLength() {
  if (window.screen.width > 1024) {
    return 12
  }
  if (window.screen.width > 480) {
    return 8
  }
  return 5;
}

function getChange() {
  if (window.screen.width > 1024) {
    return 3
  }
  return 2;
}

const filter = (movie, params) => movie.nameRU.toLowerCase().includes(params.query.toLowerCase()) && (params.isShort ? movie.duration <= 40 : true);

function Movies() {
  const [preloader, setPreloader] = useState(false);
  const [movies, setMovies] = useState(null);
  const [params, setParams] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const [list, setList] = useState(null);
  const [length, setLength] = useState(getLength());
  const [showBtn, setShowBtn] = useState(false);
  const [savedMovies, setSavedMovies] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const movies = localStorage.getItem('movies');
    if (movies) setMovies(JSON.parse(movies));
    const params = localStorage.getItem('params');
    if (params) setParams(JSON.parse(params));
    const filtered = localStorage.getItem('filtered');
    if (filtered) setFiltered(JSON.parse(filtered));
  }, []);

  useEffect(() => {
    if (savedMovies && movies && params) {
      const filtered = movies
        ?.filter(movie => filter(movie, params));
      const newFiltered = filtered?.map(movie => {
        const saved = savedMovies.find(saved => saved.movieId === movie.id);
        if (saved) {
          return {
            ...movie,
            saved: true,
            _id: saved._id
          }
        }
        return movie;
      });
      localStorage.setItem('filtered', JSON.stringify(newFiltered));
      setFiltered(newFiltered);
    } else {
      if (!movies) {
        setPreloader(true);
        getMovies()
          .then(data => {
            setMovies(data);
            localStorage.setItem('movies', JSON.stringify(data));
            setPreloader(false);
          })
          .catch(err => {
            setPreloader(false);
            setError(true)
          });
      }
      if (!savedMovies) {
        const token = localStorage.getItem('token');
        api.setToken(token);
        setPreloader(true);
        api.getSavedMovies()
          .then(data => {
            setError(false);
            setSavedMovies(data.movies);
            setPreloader(false);
        })
        .catch(err => {
          setPreloader(false);
          setError(true)
        });
      }
    }
  }, [params, movies, savedMovies]);

  useEffect(() => {
    const list = filtered?.slice(0, length);
    setList(list);
    filtered?.length > length ? setShowBtn(true) : setShowBtn(false);
  }, [filtered, length]);

  const handleSearch = (params) => {
    if (!params.query && !params.isShort) {
      return;
    }
    localStorage.setItem('params', JSON.stringify(params));
    setParams(params)
  }

  useEffect(() => {
    setSavedParams(params)
  }, [params]);

  const [savedParams, setSavedParams] = useState(null);

  const handleChange = (params) => setSavedParams(params)

  const handleLike = ({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    id,
    nameRU,
    nameEN,
    _id
  }, saved) => {
    const token = localStorage.getItem('token');
    api.setToken(token);
    if (saved) {
      api.saveMovie({
        country,
        director,
        duration,
        year,
        description,
        image: URL + image.url,
        thumbnail: URL + image.url,
        trailer: trailerLink,
        movieId: id,
        nameRU,
        nameEN
      })
        .then((res) => {
          const newFiltered = filtered?.map(movie => {
            if (movie.id === id) {
              return {
                ...movie,
                saved: true,
                _id: res.movie._id
              }
            }
            return movie;
          });
          setFiltered(newFiltered);
        })
        .catch();
    } else {
      api.removeMovie(_id)
        .then((res) => {
          const newFiltered = filtered?.map(movie => {
            if (movie.id === res.movie.movieId) {
              return {
                ...movie,
                saved: false,
                _id: res.movie._id
              }
            }
            return movie;
          });
          setFiltered(newFiltered);
        })
    }
  }

  return (
    <div className="movies">
      <SearchForm onSearch={handleSearch} params={savedParams} onChange={handleChange} />
      {preloader && <Preloader />}
      {error
        ? <h2 className="movies__not-found">Что-то пошло не так...</h2>
        : (
          <>
          {list?.length === 0 && <h2 className="movies__not-found">Ничего не найдено</h2>}
          <MoviesCardList list={list} onLike={handleLike}/>
          <button
            className={`movies__more-btn ${showBtn ? 'movies__more-btn_show' : ''}`}
            onClick={() => setLength(length+getChange())}
          >
            Еще
          </button>
          </>
        )
      }

    </div>
  )
}

export default Movies;