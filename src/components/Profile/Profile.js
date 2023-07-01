import React from 'react';

function Profile(props) {

  return (
    <main className="content">
      <section className="account__container">
        <h2 className="account__title">Привет, Виталий!</h2>

        <div className="account__info">
          <p className="account__name">Имя</p>
          <p className="account__name">Виталий</p>
        </div>

        <div className="account__info">
          <p className="account__name">E-mail</p>
          <p className="account__name">pochta@yandex.ru</p>
        </div>

        <div className="account__links">
          <button className="account__link button-without-styles button-hovered">Редактировать</button>
          <button className="account__link button-without-styles button-hovered" onClick={props.OnClickNavigateSignOut}>Выйти из аккаунта</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;