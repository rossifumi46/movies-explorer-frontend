import { useState, useRef } from 'react';

import './SearchForm.css';
import './Slider.css';
import icon from '../../images/search-icon.svg';

function SearchForm({ onSearch }) {
  const [query, setQeury] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, isShort: ref.current.checked});
  }

  const onChange = () => {
    onSearch({ query, isShort: ref.current.checked});
  }

  const ref = useRef(null);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <img src={icon} alt="search" className="search-form__icon"/>
        <input required type="text" className="search-form__input" placeholder="Фильм" value={query} onChange={e => setQeury(e.target.value)} />
        <button className="search-form__submit" type="submit">Найти</button>
      </div>
      <div className="search-form__checkbox">
        <label className="switch">
          <input type="checkbox" ref={ref} onChange={onChange} />
          <span className="slider round"></span>
        </label>
        <label htmlFor="checkbox" className="search-form__label-text">Короткометражка</label>
      </div>
    </form>
  )
}

export default SearchForm;