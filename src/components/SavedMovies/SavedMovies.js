import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList savedCard/>
    </>
  )
}

export default SavedMovies;