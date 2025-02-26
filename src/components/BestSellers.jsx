import React, { useState, useEffect } from "react";
import "./BestSellers.css";
import { Link } from "react-router-dom";

export default function BestSellers() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    try {
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error("Ошибка", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity < product.stock) {
          alert("Товар добавлен в корзину!");
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          alert("Нельзя добавить больше товаров, чем есть в наличии!");
          return prevCart;
        }
      } else {
        alert("Товар добавлен в корзину!");
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const products = [
    {
      id: 1,
      name: "Конструктор LEGO Creator Дикие животные сафари",
      price: 6583,
      image: "/img/toy4.png",
      stock: 5,
    },
    {
      id: 2,
      name: "Прозрачная самодвижущаяся машинка CONCEPT RECING",
      price: 399,
      image: "/img/toy5.png",
      stock: 10,
    },
    {
      id: 3,
      name: "Кукольный домик Barbie Dreamhouse Дом Мечты",
      price: 34209,
      image: "/img/toy6.png",
      stock: 2,
    },
    {
      id: 4,
      name: "Робот собака - игрушка для девочек",
      price: 3380,
      image: "/img/toy7.png",
      stock: 2,
    },
    {
      id: 5,
      name: "Кукольный домик Barbie Dreamhouse Дом Мечты",
      price: 34209,
      image: "/img/toy8.png",
      stock: 2,
    },
    {
      id: 6,
      name: "Кукольный домик Barbie Dreamhouse Дом Мечты",
      price: 34209,
      image: "/img/toy6.png",
      stock: 2,
    },
    {
      id: 7,
      name: "Кукольный домик Barbie Dreamhouse Дом Мечты",
      price: 34209,
      image: "/img/toy6.png",
      stock: 2,
    },
    {
      id: 8,
      name: "Кукольный домик Barbie Dreamhouse Дом Мечты",
      price: 34209,
      image: "/img/toy6.png",
      stock: 2,
    },
    {
      id: 9,
      name: "Кукольный домик Barbie Dreamhouse Дом Мечты",
      price: 34209,
      image: "/img/toy6.png",
      stock: 2,
    },
  ];

  return (
    <div className="wrapper">
      <div className="cards__column">
        <div className="cards__row">
          {products.map((product) => (
            <div className="card__item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="card__list">
                <h3>{product.name}</h3>
                <span className="price">{product.price} ₽</span>
                <p className="card__btn__look">
                  <Link className="p__reg__log" to="/product">
                    Посмотреть
                  </Link>
                </p>
                <button
                  className="card__btn"
                  onClick={() => addToCart(product)}
                >
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



