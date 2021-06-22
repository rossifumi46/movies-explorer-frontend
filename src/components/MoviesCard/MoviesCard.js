import './MoviesCard.css';
import { URL } from '../../utils/MoviesApi';

import { ReactComponent as SavedIcon } from '../../images/saved.svg'
import { ReactComponent as RemoveIcon } from '../../images/remove.svg'

function MoviesCard({ card, saved, savedCard, onRemove, onLike }) {
  return (
    <a className="movies-card" href={savedCard ? card.trailer : card.trailerLink } target="_blank" rel="noreferrer">
      <div className="movies-card__info">
        <h3 className="movies-card__name">{card.nameRU}</h3>
        <p className="movies-card__time">{card.duration} минут</p>
      </div>
      <img src={savedCard ? card.image : URL + card.image.url} alt="preview" className="moviescard__preview"/>
      {!savedCard ? (
        <button
          onClick={(event) => { event.preventDefault(); onLike(card, !saved)}}
          className={`movies-card__save-btn ${saved ? 'movies-card_saved' : ''}`}
        >
          {saved ? <SavedIcon /> : `Сохранить`}
        </button>
      ) : (
        <button
          onClick={(event) => { event.preventDefault(); onRemove(card._id);}}
          className="movies-card__save-btn">
          <RemoveIcon />
        </button>
      )}
    </a>
  )
}

export default MoviesCard;