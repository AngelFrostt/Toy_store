import React, { useState } from 'react';
import './ProductCard.css'; 

const ProductCard = () => {
  const [selectedImage, setSelectedImage] = useState('/img/toy4.png');

  const product = {
    name: 'Конструктор LEGO Creator Дикие животные сафари',
    country: 'Чехия',
    brend: 'Lego',
    tip: 'Конструктор пластиковый',
    images: [
      '/img/toy4.png',
      '/img/toy6.png',
      '/img/toy7.png',
    ],
  };

  return (
    <div className="product-card">
      <div className="product-images">
        <div className="main-image">
          <img src={selectedImage} alt="Main product" className="main-image-style" />
        </div>
        <div className="image-thumbnails">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(image)}
              className="thumbnail-image"
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">6583₽</p>
        <div className="product-specs">
          <p><strong>Страна производителя:</strong> {product.country}</p>
          <p><strong>Бренд:</strong> {product.brend}</p>
          <p><strong>Тип:</strong> {product.tip}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
