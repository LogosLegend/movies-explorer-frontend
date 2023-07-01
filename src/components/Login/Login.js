import React from 'react';

function Login(props) {

  return(
    <main className="auth">
      <section class="auth__container">
        <h2 class="auth__title">Рады видеть!</h2>
        <form class="auth__form">

          <div class="auth__input-container">
            <input class="auth__input" required id="email" name="email" type="email" placeholder="E-mail"/>
            <label class="auth__label" title="E-mail"></label>
            <span class="auth__error">Что-то пошло не так...</span>
          </div>

          <div class="auth__input-container">
            <input class="auth__input" required id="password" name="password" type="password" placeholder="Пароль"/>
            <label class="auth__label" title="Пароль"></label>
            <span class="auth__error">Что-то пошло не так...</span>
          </div>
          <button type="submit" class="auth__button button-hovered" onClick={props.OnClickNavigateMovies}>Войти</button>
        </form>

        <p class="auth__switch">Ещё не зарегистрированы? <button className="auth__switch-link button-without-styles button-hovered" onClick={props.OnClickNavigateSignUp}>Регистрация</button>
        </p>
      </section>
    </main>
  );
}

export default Login;