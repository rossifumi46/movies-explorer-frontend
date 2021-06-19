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
        <div className="about-project__backend-progress"><span className="about-project__progress-text about-project__progress-text_white">1 неделя</span></div>
        <div className="about-project__frontend-progress"><span className="about-project__progress-text">4 неделя</span></div>
      </div>
      <div className="about-project__progress about-project__progress_after">
        <div className="about-project__backend-progress about-project__progress_transparent"><span className="about-project__progress-text about-project__progress-text_grey">Back-end</span></div>
        <div className="about-project__frontend-progress about-project__progress_transparent"><span className="about-project__progress-text about-project__progress-text_grey">Front-end</span></div>
      </div>
    </div>
  )
}

export default AboutProject;