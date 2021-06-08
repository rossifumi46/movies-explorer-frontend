import './AboutProject.css';
import promoImg from '../../images/promo.png';

function AboutProject() {
  return (
    <div className="about-project">
      <div className="about-project__wrapper">
        <h2 className="about-project__title">О проекте</h2>
      </div>
      <div className="about-project__row">
        <div className="about-project__text-block">
          <h3 className="about-project__text-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__text-block">
          <h3 className="about-project__text-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__progress">
        <div className="about-project__backend-progress"></div>
        <div className="about-project__frontend-progress"></div>
      </div>
    </div>
  )
}

export default AboutProject;