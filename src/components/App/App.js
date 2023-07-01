import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import '../../index.css';
import moviesList from '../../utils/constants.js';
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import Movies from '../Movies/Movies.js'
import SavedMovies from '../SavedMovies/SavedMovies.js'
import Profile from '../Profile/Profile.js'
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'
import Footer from '../Footer/Footer.js'
import NotFoundError from '../NotFoundError/NotFoundError.js'

function App() {

  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isSavedMovie, setIsSavedMovie] = React.useState(false);

  const navigate = useNavigate();

  function handleOpenBurgerClick () {
    setIsBurgerOpen(true)
  }

  function handleCloseBurgerClick () {
    setIsBurgerOpen(false)
  }

  function handleSavedMovieClick () {
    setIsSavedMovie(true)
  }

  function closeBurger (event) {

    if (event.target.closest('.button-close') || !event.target.closest('[class*="container"]')) {
      handleCloseBurgerClick();
    }
  }

  const handleOnClickNavigateMain = () => navigate('/');
  const handleOnClickNavigateSignUp = () => navigate('/sign-up');
  const handleOnClickNavigateSignIn = () => navigate('/sign-in');
  const handleOnClickNavigateSignOut = () => navigate('/sign-out');
  const handleOnClickNavigateMovies = () => navigate('/movies');
  const handleOnClickNavigateSavedMovies = () => navigate('/saved-movies');
  const handleOnClickNavigateProfile = () => navigate('/profile');

  React.useEffect(() => {

    setIsLoaded(true)
  }, [isLoaded]);

return (
  <>
    <div className="page">
        <Header isOpen={isBurgerOpen}
          onOpenBurger={handleOpenBurgerClick}
          onCloseBurger={handleCloseBurgerClick}
          onClickCloseBurger={closeBurger}
          OnClickNavigateMain={handleOnClickNavigateMain}
          OnClickNavigateSignUp={handleOnClickNavigateSignUp}
          OnClickNavigateSignIn={handleOnClickNavigateSignIn}
          OnClickNavigateMovies={handleOnClickNavigateMovies}
          OnClickNavigateSavedMovies={handleOnClickNavigateSavedMovies}
          OnClickNavigateProfiles={handleOnClickNavigateProfile}
           />

        <Routes>
          <Route path="/" element={ <Main /> }/>

          <Route path="/movies" element={
            <Movies
              preloader={isLoaded}
              movies={moviesList}
              isSaved={isSavedMovie}
              onSavedMovie={handleSavedMovieClick}
            />}
          />
          
          <Route path="/saved-movies" element={
            <SavedMovies
              preloader={isLoaded}
              movies={moviesList}
            />}
          />

          <Route path="/profile" element={
            <Profile
              OnClickNavigateSignOut={handleOnClickNavigateSignOut}
            />}
          />

          <Route path="/sign-up" element={
            <Register
              OnClickNavigateSignIn={handleOnClickNavigateSignIn}
              OnClickNavigateMovies={handleOnClickNavigateMovies}
            />}
          />

          <Route path="/sign-in" element={
            <Login
              OnClickNavigateSignUp={handleOnClickNavigateSignUp}
              OnClickNavigateMovies={handleOnClickNavigateMovies}
            />}
          />

          <Route path="/not-found" element={ <NotFoundError /> } />
          <Route path="*" element={ <Navigate to="/not-found" replace /> } />
        </Routes>

        <Footer />
    </div>
  </>

  );
}

export default App;