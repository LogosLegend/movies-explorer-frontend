import React from 'react';
import Logo from '../../images/logo.svg';
import { Route, Routes } from "react-router-dom";
import Navigation from '../Navigation/Navigation.js'

function Header(props) {

  const currentPath = window.location.pathname;

  return(
    
      <Routes>
        <Route path="/" element={
        	<header className="header">
          <button className="header__logo-link button-without-styles" onClick={props.OnClickNavigateMain}>
          	<img className="header__logo button-hovered" src={Logo} alt="Логотип" />
          </button>

          <div className="header__container">
            <button className="header__auth button-without-styles header__reg button-hovered" onClick={props.OnClickNavigateSignUp}>Регистрация</button>
            <button className="header__auth button-without-styles header__in button-hovered" onClick={props.OnClickNavigateSignIn}>Войти</button>
          </div>
          </header>
        } />

        <Route path="/sign-in" element={
          <header className="header auth-success header-login">
            <button className="header__logo-link button-without-styles" onClick={props.OnClickNavigateMain}>
              <img src={Logo} alt="Логотип" />
            </button>
          </header>
        } />

        <Route path="/sign-up" element={
          <header className="header auth-success header-login">
            <button className="header__logo-link button-without-styles" onClick={props.OnClickNavigateMain}>
              <img src={Logo} alt="Логотип" />
            </button>
          </header>
        } />

        <Route path="/not-found" element={
          <>

          </>
        } />

        <Route path="*" element={

          <header className="header auth-success">
            <Navigation
              isOpen={props.isOpen}
              onOpenBurger={props.onOpenBurger}
              onCloseBurger={props.onCloseBurger}
              onClickCloseBurger={props.onClickCloseBurger}
              OnClickNavigateMain={props.OnClickNavigateMain}
              OnClickNavigateMovies={props.OnClickNavigateMovies}
              OnClickNavigateSavedMovies={props.OnClickNavigateSavedMovies}
              OnClickNavigateProfiles={props.OnClickNavigateProfiles}
              currentPath={currentPath} />
          </header>

        } />

      </Routes>
    
  );
}

export default Header;