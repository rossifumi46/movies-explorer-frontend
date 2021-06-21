import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ list, onRemove, savedCard, onLike }) {
  return (
    <div className="movies-card-list">
      {list?.map(card => (
        <MoviesCard key={savedCard ? card._id : card.id} saved={card.saved} savedCard={savedCard} card={card} onRemove={onRemove} onLike={onLike}/>
      ))}
    </div>
  )
}

export default MoviesCardList;