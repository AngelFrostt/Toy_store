import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation(); // Получаем текущий путь
  const isAuthenticated = false;

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
            {isAuthenticated ? (
              <>
                <p className="p__reg__log">
                  <Link className="p__reg__log" to="/profile">Личный кабинет</Link>
                </p>
                <p className="p__reg__log">
                  <Link className="p__reg__log" to="/">Выйти</Link>
                </p>
              </>
            ) : (
              <>
                <p className="p__reg__log">
                  <Link className="p__reg__log" to="/form-register">Регистрация</Link>
                </p>
                <p className="p__reg__log">
                  <Link className="p__reg__log" to="/form-login">Войти</Link>
                </p>
              </>
            )}
          </div>
        </div>

        <nav className="header__nav">
          <ul className="nav__menu">
            <li>
              <Link
                className={`menu__li__link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                О нас
              </Link>
            </li>
            {/* <li>
              <Link
                className={`menu__li__link ${location.pathname === "CatalogHome" ? "active" : ""}`}
                to="CatalogHome"
              >
                Каталог
              </Link>
            </li> */}
            <li>
              <Link
                className={`menu__li__link ${location.pathname === "/where-to-find-us" ? "active" : ""}`}
                to="/where-to-find-us"
              >
                Где нас найти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="header">
//       <div className="header__wrapper">
//         <div className="header__logo__regLog">
//           <div className="header__logo">
//             <p className="logo__text_kids-bold">KIDS</p>
//             <p className="logo__text_sity-red">sity</p>
//             <p className="logo__text_toy-red">TOY</p>
//           </div>
//           <div className="register__login">
//             <p className="p__reg__log">
//               <Link className="p__reg__log" to="/form-register">Регистрация</Link>
//             </p>
//             <p className="p__reg__log">
//               <Link className="p__reg__log" to="/form-login">Войти</Link>
//             </p>
//           </div>
//         </div>
//         <nav className="header__nav">
//           <ul className="nav__menu">
//             <li>
//               <Link className="menu__li__link" to="/">О нас</Link>
//             </li>
//             <li>
//               <Link className="menu__li__link" to="/catalog">Каталог</Link>
//             </li>
//             <li>
//               <Link className="menu__li__link" to="/where-to-find-us">Где нас найти</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }
