import React from 'react';
import Find from '../../images/find.svg';

function SearchForm(props) {

  return(
    <>
      <section className="search">
        <form className="search__form"> 
          <input className="search__input" name="search" required placeholder="Фильм" type="text" autoComplete="off" />
          <button className="search__button-submit button-hovered" type="submit">
            <img src={Find} alt="Найти" />
          </button>
        </form>

        <div className="selectbox">
          <label className="selectbox__switch" htmlFor="selectbox__input">
            <input id="selectbox__input" className="selectbox__input" type="checkbox" />
            <span className="selectbox__round"></span>
          </label>
          <p className="selectbox__subtitle">Короткометражки</p>
        </div>
      </section>
    </>
  );
}

export default SearchForm;