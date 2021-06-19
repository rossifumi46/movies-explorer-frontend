import './SearchForm.css';
import './Slider.css';
import icon from '../../images/search-icon.svg';

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <img src={icon} alt="search" className="search-form__icon"/>
        <input required type="text" className="search-form__input" placeholder="Фильм"/>
        <button className="search-form__submit" type="submit">Найти</button>
      </div>
      <div className="search-form__checkbox">
        <label class="switch">
          <input type="checkbox"/>
          <span class="slider round"></span>
        </label>
        <label htmlFor="checkbox" class="search-form__label-text">Короткометражка</label>
      </div>
    </form>
  )
}

export default SearchForm;