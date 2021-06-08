import './AboutMe.css';
import ava from '../../images/ava.png';
import svg from '../../images/link.svg';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__title-wrapper">
        <h2 className="about-me__title">Студент</h2>
      </div>
      <div className="about-me__row">
        <div className="about-me__info">
          <div className="about-me__text">
            <h3 className="about-me__name">Рустем</h3>
            <p className="about-me__hobby">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <div className="about-me__social-links">
            <a href="" className="about-me__social-link">Facebook</a>
            <a href="" className="about-me__social-link">Github</a>
          </div>
        </div>
        <img src={ava} alt="" className="about-me__ava"/>
      </div>
      <div className="about-me__portfolio">
        <h3 className="about-me__portfolio-title">Портфолио</h3>
        <div className="about-me__portfolio">
        <div className="about-me__wrapper">
          <div className="about-me__portfolio-link">
            <h4 className="about-me__link-title">Статичный сайт</h4>
            <img src={svg} alt="" className="about-me__svg"/>
          </div>
        </div>
        <div className="about-me__wrapper">
          <div className="about-me__portfolio-link">
            <h4 className="about-me__link-title">Статичный сайт</h4>
            <img src={svg} alt="" className="about-me__svg"/>
          </div>
        </div>
        <div className="about-me__wrapper">
          <div className="about-me__portfolio-link">
            <h4 className="about-me__link-title">Статичный сайт</h4>
            <img src={svg} alt="" className="about-me__svg"/>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;