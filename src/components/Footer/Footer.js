import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__title-container">
          <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__year">2020</p>
        <ul className="footer__links-list">
          <li className="footer__link">Яндекс.Практикум</li>
          <li className="footer__link">Github</li>
          <li className="footer__link">Facebook</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;