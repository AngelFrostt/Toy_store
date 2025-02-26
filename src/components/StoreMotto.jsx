import React from "react";

export default function StoreMotto() {
  return (
    <div className="deviz__cards-all">
      <p className="deviz">KIDS SITY TOY — мир игрушек, где начинается детская радость!</p>
      <div className="deviz__cards">
        <div className="card-1">
        <img src="/img/toy1.png" alt="" />
        <p className="card__text">Мягкие игрушки</p>
        </div>
        <div className="card-2">
        <p className="card__text">Лего</p>
        <img src="/img/toy2.png" alt="" />
        </div>
        <div className="card-3">
        <img src="/img/toy3.png" alt="" />
        <p className="card__text">Мягкие игрушки</p>
        </div>
      </div>
    </div>
  );
}
