import './Profile.css';
import { useContext } from 'react';
import { useFormWithValidation } from '../../utils/hooks';
import api from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import { useState } from 'react';

function Profile({ onSignout }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { values, handleChange, errors, isValid } = useFormWithValidation(currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api.editProfile(values)
      .then(res => {
        setLoading(false);
        setError(false);
        setCurrentUser(res.user);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      })
  };

  return (
    <form className="profile" onSubmit={handleSubmit}>
      <h1 className="profile__welcome">Привет, Виталий!</h1>
      <div className="profile__container profile__container_first">
        <label htmlFor="" className="profile__label">Имя</label>
        <input
          className="profile__value"
          type="text"
          name="name"
          value={values?.name}
          onChange={handleChange}
        />
      </div>
      <div className="profile__line"></div>
      {errors.name && <span className="register__error register__error_mb">{errors.name}</span>}
      <div className="profile__container">
        <label htmlFor="" className="profile__label">Почта</label>
        <input
          className="profile__value"
          type="text"
          name="name"
          value={values?.email}
          onChange={handleChange}
        />
      </div>
      {errors.email && <span className="register__error register__error_mt">{errors.email}</span>}
      {loading && <Preloader />}
      {error && <span className="register__error">Что-то пошло не так...</span>}
      <button disabled={!isValid} className="profile__edit" type="submit">Редактировать</button>
      <button className="profile__logout" onClick={onSignout}>Выйти из аккаунта</button>
    </form>
  )
}

export default Profile;