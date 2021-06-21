import '../Register/Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/hooks';

function Login({ onLogin }) {

  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  return (
    <div className="register">
      <div className="register__container">
      <img src={logo} alt="logo" className="register__logo"/>
      <h1 className="register__title">Рады видеть!</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__inputs">
          <div className="input__container">
            <label htmlFor="" className="register__label">Email</label>
            <input
              className="register__input"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <span className="register__error">{errors.email}</span>}
          </div>
          <div className="input__container">
            <label htmlFor="" className="register__label">Пароль</label>
            <input
              className="register__input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button disabled={!isValid} className={`register__submit ${!isValid ? 'register__submit_disabled' : ''}`} type="submit">Войти</button>
      </form>
      <p className="register__already-text">Ещё не зарегистрированы? <Link className="register__link" to="/signup">Регистрация</Link></p>
      </div>
    </div>
  )
}

export default Login;