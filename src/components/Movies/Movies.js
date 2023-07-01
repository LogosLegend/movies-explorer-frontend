import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js'
import Preloader from '../Preloader/Preloader.js'
import MoviesCardList from '../MoviesCardList/MoviesCardList.js'

function Movies(props) {

  return (
  <>

    <main className="content">

      <SearchForm />
      <Preloader preloader={props.preloader} />
      <MoviesCardList movies={props.movies} isSaved={props.isSaved} onSavedMovie={props.onSavedMovie} />

    </main>
  </>
  );
}

export default Movies;