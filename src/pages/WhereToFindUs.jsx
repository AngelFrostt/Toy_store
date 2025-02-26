import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../components/WhereToFindUs.css";

export default function WhereToFindUs() {
  return (
    <div className="wrapper">
      <Header />
      <div className="maps__container">
        <h1 className="maps__title">Где мы находимся</h1>
        <iframe
          className="google__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5540.995331308179!2d48.29868755250831!3d54.273856993453016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415d3421b9f6999b%3A0x55b688ae0e59dd87!2z0JTQtdGC0YHQutC40Lkg0LzQuNGA!5e0!3m2!1sru!2sru!4v1739512004055!5m2!1sru!2sru"
          width="600"
          height="450"
          style={{ border: "13px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contacts__container">
          <p className="contacts">Контактные данные</p>
          <p>Адрес: ул. Рябикова, ул 70, Ульяновск, Ульяновская обл</p>
          <p>Номер телефона: +7(979)977-97-73</p>
          <p>Почта: kidsSityToy73@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
