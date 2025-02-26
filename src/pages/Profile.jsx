import React, { useState } from "react";
import "../components/Profile.css";
// import Header from "../components/Header.jsx";
import HeaderProfile from "../components/HeaderProfile.jsx";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Ангелина",
    surname: "Морозова",
    email: "angelfrost0713@gmail.com",
  });

  return (
   
      <div className="wrapper">
        <HeaderProfile />
        <div className="profile__container">
          <h1>Личный кабинет</h1>
          <div className="profile__info">
            <p><strong>Имя:</strong> {user.name}</p>
            <p><strong>Фамилия:</strong> {user.surname}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
          <div className="profile__info">
            <p><strong>Корзина:</strong> </p>
          </div>
        </div>
      </div>
   
  );
}