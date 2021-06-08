import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <h1 className="profile__welcome">Привет, Виталий!</h1>
      {/* <form>
        <input type="text" className="profile__input"/>
        <input type="text" className="profile__input"/>
      </form> */}
      <div className="profile__container profile__container_first">
        <label htmlFor="" className="profile__label">Имя</label>
        <span className="profile__value">Виталий</span>
      </div>
      <div className="profile__line"></div>
      <div className="profile__container">
        <label htmlFor="" className="profile__label">Почта</label>
        <span className="profile__value">pochta@yandex.ru</span>
      </div>
      <button className="profile__edit">Редактировать</button>
      <button className="profile__logout">Выйти из аккаунта</button>
    </div>
  )
}

export default Profile;