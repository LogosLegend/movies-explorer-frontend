import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js'
import Preloader from '../Preloader/Preloader.js'
import MoviesCardList from '../MoviesCardList/MoviesCardList.js'

function SavedMovies(props) {

  return (
  <>

    <main className="content">

      <SearchForm />
      <Preloader preloader={props.preloader} />
      <MoviesCardList movies={props.movies} />

    </main>
  </>
  );
}

export default SavedMovies;