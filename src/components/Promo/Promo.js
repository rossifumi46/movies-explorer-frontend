import './Promo.css';
import promoImg from '../../images/promo.png';

function Promo() {
  return (
    <div className="promo">
      <div className="promo__row">
        <div className="promo__info">
          <h1 className="promo__title">Учебный проект студента факультета<br/>Веб-разработки.</h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img src={promoImg} className="promo__img"></img>
      </div>


      <a href="" className="promo__link">Узнать больше</a>
    </div>
  )
}

export default Promo;