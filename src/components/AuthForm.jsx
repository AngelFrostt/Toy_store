import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
// import "./Form.css";
import '../components/FormaRegister.css';

export default function AuthForm({ isLogin }) {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    name: "",
    surname: "",
    email: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Вход" : "Регистрация", formData);

    if (isLogin) {
      navigate("/cart");
    }
  };

  return (
    <div className="wrapper">
      <div className="form__container">
        <form className="forma" onSubmit={handleSubmit}>
          <h1 className="form__title">{isLogin ? "Вход" : "Регистрация"}</h1>

          {!isLogin && (
            <>
              <div className="form__inpt">
                <label>Имя</label>
                <input type="text" name="name" required placeholder="Имя" onChange={handleChange} />
              </div>
              <div className="form__inpt">
                <label>Фамилия</label>
                <input type="text" name="surname" required placeholder="Фамилия" onChange={handleChange} />
              </div>
              <div className="form__inpt">
                <label>Email</label>
                <input type="email" name="email" required placeholder="Email" onChange={handleChange} />
              </div>
            </>
          )}

          <div className="form__inpt">
            <label>Логин</label>
            <input type="text" name="login" required placeholder="Login" onChange={handleChange} />
          </div>
          <div className="form__inpt">
            <label>Пароль</label>
            <input type="password" name="password" required placeholder="Пароль" onChange={handleChange} />
          </div>

          <button type="submit" className="form__btn">
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>
      </div>
    </div>
  );
}