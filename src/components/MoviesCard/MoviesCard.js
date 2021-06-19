import './MoviesCard.css';
import preview from '../../images/preview.png';

import { ReactComponent as SavedIcon } from '../../images/saved.svg'
import { ReactComponent as RemoveIcon } from '../../images/remove.svg'

function MoviesCard({ saved, savedCard }) {
  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <h3 className="movies-card__name">В погоне за Бенкси</h3>
        <p className="movies-card__time">27 минут</p>
      </div>
      <img src={preview} alt="preview" className="moviescard__preview"/>
      {savedCard ? (
        <button disabled={saved} className={`movies-card__save-btn ${saved ? 'movies-card_saved' : ''}`}>{saved ? <SavedIcon /> : `Сохранить`}</button>
      ) : (
        <button className="movies-card__save-btn"><RemoveIcon /></button>
      )}
    </div>
  )
}

export default MoviesCard;