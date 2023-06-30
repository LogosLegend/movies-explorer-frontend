import React from 'react';
import '../../utils/constants.js';

function MoviesCardList(props) {

  const currentPath = window.location.pathname;

  const movieSaveButtonClassName = (`${currentPath === '/movies' ? `gallery__saved-button` : `gallery__delete-button`} button-hovered ${props.isSaved && `gallery__saved-button_type_active`}`);

  function handleSaveMovie() {
    props.onSavedMovie(props.movie);
  }

  return(
    <div className="gallery__film">
      <a target="_blank" rel="noopener noreferrer" href={props.trailerLink}>
        <img className="gallery__img" src={props.image} alt={props.nameRU} />
      </a>
  
      <div className="gallery__description">
  
        <div className="gallery__info">
          <h2 className="gallery__title">{props.nameRU}</h2>
          <p className="gallery__duration">{Math.trunc(props.duration / 60) + 'ч' + props.duration % 60 + 'м'}</p>
        </div>
  
        <button className={movieSaveButtonClassName} type="button" onClick={handleSaveMovie}></button>
      </div>
    </div>
  );
}

export default MoviesCardList;