import React from "react";
import Header from "../components/Header.jsx";
import AuthForm from "../components/AuthForm.jsx";

export default function Login() {
  return (
      <div className="wrapper">
        <Header />
        <AuthForm isLogin={true} />
      </div>
  );
}



// import React from 'react'
// import Header from '../components/Header.jsx';
// import '../components/FormaRegister.css'

// export default function Login() {
//   return (
//    <div className='wrapper'>
//           <Header />
//           <div className='form__container'>
//             <form className='forma__log' action="/">
//             <h1 className='form__title'>Вход</h1>
//             <div className='form__inpt'>
//               <label htmlFor="fg">Введите login</label>
//               <input type="text" required placeholder='Login'/>
//             </div>
//             <div className='form__inpt'>
//               <label htmlFor="fg">Введите пароль</label>
//               <input type="password" required placeholder='Пароль'/>
//             </div>
//             <div className='form__inpt'>
//             <a className='form__login__btn' href="#">Войти</a>
//             </div>
//             </form>
//           </div>
//        </div>
//   )
// }
