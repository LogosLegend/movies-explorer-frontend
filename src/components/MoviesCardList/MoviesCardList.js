import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js'

function MoviesCardList(props) {

  return(
    <section className="gallery">
      <div className="gallery__container">

      	{props.movies.map((movie) => (
          <MoviesCard
          	key={movie._id}
          	movie={movie}
          	duration={movie.duration}
          	nameRU={movie.nameRU}
          	image={movie.image}
            trailerLink={movie.trailerLink}
            isSaved={props.isSaved}
            onSavedMovie={props.onSavedMovie}
          />
        ))}

      </div>
      <button className="gallery__more-button button-hovered">Ещё</button>

    </section>
  );
}

export default MoviesCardList;