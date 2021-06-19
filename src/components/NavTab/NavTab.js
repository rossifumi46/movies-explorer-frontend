import './NavTab.css';

import { Link } from 'react-router-dom';

import { ReactComponent as CloseIcon } from '../../images/close-icon.svg';

function NavTab({ modal, handleClick }) {
  return (
    <div className={`nav-tab ${modal ? 'nav-tab__show' : ''}`}>
      <div className="nav-tab__wrapper">
        <CloseIcon className="nav-tab__close-icon" onClick={handleClick} />
        <ul className="nav-tab__list">
          <li className="nav-tab__list-item"><Link className="nav-tab__link" to="/">Главная</Link></li>
          <li className="nav-tab__list-item"><Link className="nav-tab__link" to="/movies">Фильмы</Link></li>
          <li className="nav-tab__list-item"><Link className="nav-tab__link" to="/saved">Сохранённые фильмы</Link></li>
        </ul>
        <Link className="nav-tab__link nav-tab__link__account" to="/profile">Account</Link>
      </div>
    </div>
  )
}

export default NavTab;