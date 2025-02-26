import React from "react";
import Header from "../components/Header.jsx";
import AuthForm from "../components/AuthForm.jsx";

export default function Register() {
  return (
    <div className="wrapper">
      <Header />
      <AuthForm isLogin={false} />
    </div>
  );
}

// import React from 'react'
// import Header from '../components/Header.jsx';
// import '../components/FormaRegister.css'

// export default function FormRegister() {
//   return (
//     <div className='wrapper'>
//        <Header />
//        <div className='form__container'>
//          <form className='forma__reg' action="/">
//          <h1 className='form__title'>Регестрация</h1>
//          <div className='form__inpt'>
//            <label htmlFor="">Имя</label>
//            <input type="text" required placeholder='Имя'/>
//          </div>
//          <div className='form__inpt'>
//            <label htmlFor="fg">Фамилия</label>
//            <input type="text" required placeholder='Фамилия'/>
//          </div>
//          <div className='form__inpt'>
//            <label htmlFor="fg">Отчество</label>
//            <input type="text" placeholder='Отчество'/>
//          </div>
//          <div className='form__inpt'>
//            <label htmlFor="fg">Придумайте свой логин login</label>
//            <input type="text" required placeholder='Login'/>
//          </div>
//          <div className='form__inpt'>
//            <label htmlFor="fg">Email </label>
//            <input type="email" required placeholder='Email'/>
//          </div>
//          <div className='form__inpt'>
//            <label htmlFor="fg">Придумайте пароль</label>
//            <input type="password" required placeholder='Пароль'/>
//          </div>
//          <div className='form__inpt'>
//            <label htmlFor="fg">Придумайте пароль</label>
//            <input type="password" required placeholder='Пароль'/>
//          </div>
//          <div className='form__inpt'>
//            <label htmlFor="fg">Вы даете право на использование ваших данных.</label>
//            <input type="checbox" required placeholder='Пароль'/>
//          </div>
//          <div className='form__inpt'>
//          <a className='form__reg__btn' href="#">Зарегестрироваться</a>
//          </div>
//          </form>
//        </div>
//     </div>
//   )
// }
