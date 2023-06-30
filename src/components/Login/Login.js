import React from 'react';

function Login(props) {

  const authInput = document.querySelectorAll('.auth__input');

  authInput.forEach(function(e) {
  
    e.addEventListener('blur', function() {

      if (e.value !== '') {
        e.nextElementSibling.classList.add('auth__label_active');
      } else {
        e.nextElementSibling.classList.remove('auth__label_active');
      }
    });
  });

  return(
    <main className="auth">
      <section class="auth__container">
        <h2 class="auth__title">Рады видеть!</h2>
        <form class="auth__form">

          <div class="auth__input-container">
            <input class="auth__input" required="" id="email" name="email" type="email" />
            <label class="auth__label" title="E-mail"></label>
            <span class="auth__error">Что-то пошло не так...</span>
          </div>

          <div class="auth__input-container">
            <input class="auth__input" required="" id="password" name="password" type="password" />
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