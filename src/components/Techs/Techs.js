import './Techs.css';
import  { TECHS } from '../../consts';

function Techs() {
  return (
    <div className="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__info-wrapper">
        <div className="techs__row">
          <h3 className="techs__text-title">7 технологий</h3>
          <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <div className="techs__cards">
          {TECHS.map((techTitle) => {
            return (
              <div className="techs__card">{techTitle}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Techs;