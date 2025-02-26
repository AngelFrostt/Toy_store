import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo__regLog">
          <div className="header__logo">
            <p className="logo__text_kids-bold">KIDS</p>
            <p className="logo__text_sity-red">sity</p>
            <p className="logo__text_toy-red">TOY</p>
          </div>

          <div className="register__login">
            <p className="p__reg__log">
            <Link className="p__reg__log" to="/cart">Корзина</Link>
            </p>
            <p className="p__reg__log">
              <Link className="p__reg__log" to="/">
                Выйти
              </Link>
            </p>
          </div>
        </div>

        <nav className="header__nav">
          <ul className="nav__menu">
            <li>
              <Link className="menu__li__link" to="/catalog">
                Каталог
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

