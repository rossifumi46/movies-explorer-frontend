import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/hooks';

function Register({ onSignup }) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(values);
  };

  return (
    <div className="register">
      <div className="register__container">
      <img src={logo} alt="logo" className="register__logo"/>
      <h1 className="register__title">Добро Пожаловать!</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__inputs">
          <div className="input__container">
            <label htmlFor="" className="register__label">Имя</label>
            <input
              className="register__input"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <span className="register__error">{errors.name}</span>}
          </div>
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
              required
              minLength="8"
              className="register__input"
              type="text"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <span className="register__error">{errors.password}</span>}
          </div>
        </div>
        <button disabled={!isValid} className={`register__submit ${!isValid ? 'register__submit_disabled' : ''}`} type="submit">Зарегестрироваться</button>
      </form>
      <p className="register__already-text">Уже зарегестрированы? <Link className="register__link" to="/login">Войти</Link></p>
      </div>
    </div>
  )
}

export default Register;