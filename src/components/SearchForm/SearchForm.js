import { useState, useRef } from 'react';

import './SearchForm.css';
import './Slider.css';
import icon from '../../images/search-icon.svg';

function SearchForm({ onSearch, params, onChange }) {

  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query: params?.query || '', isShort: params?.isShort || false});
  }

  const handleChange = (e) => {
    onChange({query: e.target.value, isShort: params?.isShort || false });
  }

  const handleCheckbox = () => {
    onChange({ ...params, isShort: params?.isShort});
    onSearch({ query: params?.query || '', isShort: !params?.isShort});
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <img src={icon} alt="search" className="search-form__icon"/>
        <input required type="text" className="search-form__input" placeholder="Фильм" value={params?.query || ''} onChange={handleChange} />
        <button disabled={!params?.query} className={`search-form__submit ${!params?.query ? 'search-form__submit_disabled' : ''}`} type="submit">Найти</button>
      </div>
      <div className="search-form__checkbox">
        <label className="switch">
          <input type="checkbox" checked={params?.isShort || false} onChange={handleCheckbox} />
          <span className="slider round"></span>
        </label>
        <label htmlFor="checkbox" className="search-form__label-text">Короткометражка</label>
      </div>
    </form>
  )
}

export default SearchForm;