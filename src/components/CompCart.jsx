import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleQuantityChange = (id, change) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        if (newQuantity > 0 && newQuantity <= item.stock) {
          return { ...item, quantity: newQuantity };
        }
        if (newQuantity > item.stock) {
          alert('Вы выбрали максимальное количество товара!');
        }
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleOrder = () => {
    const password = prompt('Введите пароль для подтверждения заказа:');
    if (!password) {
      alert('Пароль не может быть пустым!');
      return;
    }

    if (password === '12345') {
      alert('Заказ успешно оформлен!');
      setCart([]);
      localStorage.removeItem('cart');
      navigate('/orders');
    } else {
      alert('Неверный пароль! Попробуйте снова.');
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  

  return (
    <div className="cart">
      <div className="profile__container">
        <h1>Личный кабинет</h1>
        <div className='profile__info'>
          <p className='title__profile'>Ваши данные:</p>
          <p>Имя: Ангелина</p>
          <p>Фамилия: Морозова</p>
          <p>Почта: angelinamoroz13@gmal.com</p>
        </div>
      </div>
      <h2>Ваша корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста :/</p>
      ) : (
        <>
          <div className='carts__all'>
            <div className='card__items'>
              {cart.map((item) => (
                <div key={item.id} className="cart__item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart__details">
                    <h3>{item.name}</h3>
                    <p>{item.price} ₽</p>
                    <div className="cart__btn">
                      <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    </div>
                    <button className='btn__delete' onClick={() => handleRemoveItem(item.id)}>Удалить</button>
                  </div>
                </div>
              ))}
            </div>
              <div className='cart__order'>
                <h3 className='order__title'>Итого: {totalPrice} ₽</h3>
                <button className="order-btn" onClick={handleOrder}>Сформировать заказ</button>
              </div>
          </div>
        </>
      )}
    </div>
  );
}