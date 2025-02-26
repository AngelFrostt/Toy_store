import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer.jsx";
import HeaderProfile from "../components/HeaderProfile.jsx";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div className='wrapper'>
        <HeaderProfile />
        <div className="order-history">
          <h2>Ваши заказы</h2>
          {orders.length === 0 ? (
            <p>Заказов пока нет</p>
          ) : (
            orders
              .slice()
              .reverse()
              .map((order) => (
                <div key={order.id} className="order-item">
                  <h3>Заказ #{order.id}</h3>
                  <p>Статус: {order.status}</p>
                  <div className="order-products">
                    {order.items.map((item) => (
                      <div key={item.id} className="order-product">
                        <img src={item.image} alt={item.name} />
                        <div>
                          <p>{item.name}</p>
                          <p>Количество: {item.quantity}</p>
                          <p>Цена: {item.price} ₽</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {order.status === 'Новый' && (
                    <button onClick={() => handleDeleteOrder(order.id)}>Удалить заказ</button>
                  )}
                </div>
              ))
          )}
          <Link to="/catalog">Вернуться в каталог</Link>
        </div>
        <Footer />
    </div>
  );
}
