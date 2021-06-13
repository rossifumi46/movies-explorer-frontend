import './Header.css';

import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

import { ReactComponent as BurgerMenu } from '../../images/burger-menu.svg';
import NavTab from '../NavTab/NavTab';
import { useState } from 'react';

function Header({ Login }) {
  const [modal, setModal] = useState(false);

  return (
    <div className={`header ${Login ? 'header__white' : ''}`}>
      <img src={logo} alt="logo" className="header__logo"/>
      <div className="header__links">
      {!Login ? (
        <>
        <Link className="header__signup" to="/signup">Регистрация</Link>
        <Link className="header__signin" to="/login">Войти</Link>
        </>
      ) : (
        <>
        <div className="header__desktop">
          <ul className="header__list">
            <li className="header__list-item"><Link className="header__account-link" to="/movies">Фильмы</Link></li>
            <li className="header__list-item"><Link className="header__account-link" to="/saved">Сохранённые фильмы</Link></li>
          </ul>
          <Link className="header__account-link header__account-link__account" to="/profile">Аккаунт</Link>
        </div>
        <BurgerMenu className="header__burger" onClick={() => setModal(true)}/>
        </>
      )}
      </div>
      <NavTab modal={modal} handleClick={() => setModal(false)} />
    </div>
  )
}

export default Header;