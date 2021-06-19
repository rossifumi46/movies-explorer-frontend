import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const card = {
  saved: true,
}

const anotherCard = {
  saved: false,
}

function MoviesCardList({ savedCard }) {
  return (
    <div className="movies-card-list__wrapper">
      <div className="movies-card-list">
        {!savedCard ? (
          <>
            <MoviesCard saved={true} savedCard />
            <MoviesCard saved={true} savedCard/>
            <MoviesCard saved={true} savedCard />
            <MoviesCard saved={true} savedCard />
            <MoviesCard saved={true} savedCard />
            <MoviesCard saved={false} savedCard />
            <MoviesCard saved={false} savedCard />
            <MoviesCard saved={false} savedCard />
            <MoviesCard saved={false} savedCard />
          </>
        ): (
          <>
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </>
        )}
      </div>
      <button className="movies-card-list__more_btn">Еще</button>
    </div>
  )
}

export default MoviesCardList;