import './Profile.css';
import { useContext, useEffect } from 'react';
import { useFormWithValidation } from '../../utils/hooks';
import api from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import { useState } from 'react';

import { ReactComponent as CloseIcon } from '../../images/close-icon.svg';

function Profile({ onSignout }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues])

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api.editProfile(values)
      .then(res => {
        setLoading(false);
        setSuccess(true);
        setError(false);
        setCurrentUser({
          name: res.user.name,
          email: res.user.email
        });
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      })
  };

  const handleClose = () => {
    setSuccess(false);
  }

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
          name="email"
          value={values?.email}
          onChange={handleChange}
        />
      </div>
      {errors.email && <span className="register__error register__error_mt">{errors.email}</span>}
      {loading && <Preloader />}
      {error && <span className="register__error">Что-то пошло не так...</span>}
      {success && <div className="register__success"><span className="register__success-message">Профиль изменен</span><CloseIcon onClick={handleClose} /></div>}
      <button disabled={!isValid} className="profile__edit" type="submit">Редактировать</button>
      <button className="profile__logout" onClick={onSignout}>Выйти из аккаунта</button>
    </form>
  )
}

export default Profile;