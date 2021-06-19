import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register">
      <div className="register__container">
      <img src={logo} alt="logo" className="register__logo"/>
      <h1 className="register__title">Добро Пожаловать!</h1>
      <form className="register__form">
        <div className="register__inputs">
          <div className="input__container">
            <label htmlFor="" className="register__label">Имя</label>
            <input className="register__input" type="text"/>
          </div>
          <div className="input__container">
            <label htmlFor="" className="register__label">Email</label>
            <input className="register__input" type="text"/>
          </div>
          <div className="input__container">
            <label htmlFor="" className="register__label">Пароль</label>
            <input className="register__input" type="text"/>
          </div>
        </div>
        <button className="register__submit" type="submit">Зарегестрироваться</button>
      </form>
      <p className="register__already-text">Уже зарегестрированы? <Link className="register__link" to="/login">Войти</Link></p>
      </div>
    </div>
  )
}

export default Register;