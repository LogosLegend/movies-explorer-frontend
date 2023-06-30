import React from 'react';

function Register(props) {

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
      <section className="auth__container">
        <h2 className="auth__title">Добро пожаловать!</h2>
        <form className="auth__form">

          <div className="auth__input-container">
            <input className="auth__input" required="" id="username" name="username" type="text" />
            <label className="auth__label" htmlFor="username" title="Имя"></label>
            <span className="auth__error">Что-то пошло не так...</span>
          </div>

          <div className="auth__input-container">
            <input className="auth__input" required="" id="email" name="email" type="email" />
            <label className="auth__label" htmlFor="email" title="E-mail"></label>
            <span className="auth__error">Что-то пошло не так...</span>
          </div>

          <div className="auth__input-container">
            <input className="auth__input auth__input_type_error" required id="password" name="password" type="password" />
            <label className="auth__label" htmlFor="password" title="Пароль"></label>
            <span className="auth__error auth__error_visible">Что-то пошло не так...</span>
          </div>
          <button type="submit" className="auth__button button-hovered" onClick={props.OnClickNavigateMovies}>Зарегистрироваться</button>
        </form>

        <p className="auth__switch">Уже зарегистрированы? <button className="auth__switch-link button-without-styles button-hovered" onClick={props.OnClickNavigateSignIn}>Войти</button>
        </p>
      </section>
    </main>
  );
}

export default Register;