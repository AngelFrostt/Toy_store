import React from "react";
import "./BestSellers.css";

export default function HomeBestSellers() {
  return (
    <div className="wrapper">
      <div className="cards__column">
        <div className="cards__row">
          <div class="card__item">
            <img src="/img/toy4.png" alt="" />
            <div class="card__list">
              <h3>Конструктор LEGO Creator Дикие животные сафари</h3>
              <span class="price">6 583 ₽</span>
              <a href="#" class="card__btn__look">
                Посмотреть
              </a>
            </div>
          </div>

          <div class="card__item">
            <img src="/img/toy5.png" alt="" />
            <div class="card__list">
              <h3>Прозрачная самодвижущаяся машинка CONCEPT RECING</h3>
              <span class="price">₽ 1999</span>
              <a href="#" class="card__btn__look">
                Посмотреть
              </a>
            </div>
          </div>

          <div class="card__item">
            <img src="/img/toy6.png" alt="" />
            <div class="card__list">
              <h3>Конструктор LEGO Creator Дикие животные сафари</h3>
              <span class="price">₽ 1999</span>
              <a href="#" class="card__btn__look">
                Посмотреть
              </a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
