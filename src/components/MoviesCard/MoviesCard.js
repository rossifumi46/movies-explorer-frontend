import './MoviesCard.css';
import preview from '../../images/preview.png';

function MoviesCard() {
  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <h3 className="movies-card__name">В погоне за Бенкси</h3>
        <p className="movies-card__time">27 минут</p>
      </div>
      <img src={preview} alt="" className="moviescard__preview"/>
      <button className="movies-card__save-btn">Сохранить</button>
    </div>
  )
}

export default MoviesCard;