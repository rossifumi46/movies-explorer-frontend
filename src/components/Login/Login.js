import '../Register/Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="register">
      <div className="register__container">
      <img src={logo} alt="" className="register__logo"/>
      <h1 className="register__title">Рады видеть!</h1>
      <form className="register__form">
        <div className="register__inputs">
          <div className="input__container">
            <label htmlFor="" className="register__label">Email</label>
            <input className="register__input" type="text"/>
          </div>
          <div className="input__container">
            <label htmlFor="" className="register__label">Пароль</label>
            <input className="register__input" type="text"/>
          </div>
        </div>
        <button className="register__submit" type="submit">Войти</button>
      </form>
      <p className="register__already-text">Ещё не зарегистрированы? <Link className="register__link" to="/signup">Регистрация</Link></p>
      </div>
    </div>
  )
}

export default Login;