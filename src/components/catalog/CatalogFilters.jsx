import React from 'react'
import "./CatalogFilters.css"; 


export default function CatalogFilters() {
  return (
    <div className='filletr__wrapper'>
        <div className='Filers'>
            <p className='fillers__title'>Отфильтровать</p>
            <hr className='fillter__hr' />
            <div className="fillters__btns">
                <p className='title__filter__btn'>Возраст:</p>
                <input className='filter__inpt' type="text" placeholder='От'/>
                <input className='filter__inpt' type="text" placeholder='До'/>
            </div>
            <div className="fillters__btns">
                <p className='title__filter__btn'>Катагории:</p>
                <select name="/" id="/">
                <option value="option1">Плюшевые игруки</option>
                <option value="option2">Лего</option>
                <option value="option3">Развивающие</option>
                <option value="option3">Для девочек</option>
                <option value="option3">Для мальчиков</option>
                <option value="option3">Для малышей</option>
                </select>
            </div>
            <div className="fillters__btns">
                <p className='title__filter__btn'>Пол ребенка:</p>
                <select name="/" id="/">
                <option value="option1">Девочка</option>
                <option value="option2">Мальчик</option>
                </select>
            </div>
            <div className="fillters__btns">
                <p className='title__filter__btn'>Цвет:</p>
                <select name="/" id="/">
                <option value="option1">Белый</option>
                <option value="option2">Красный</option>
                <option value="option1">Синий</option>
                <option value="option2">Зеленый</option>
                <option value="option2">Розовый</option>
                <option value="option2">Желтый</option>
                </select>
            </div>
            <div className="fillters__btns">
                <p className='title__filter__btn'>Цена:</p>
                <input className='filter__inpt' type="text" placeholder='От'/>
                <input className='filter__inpt' type="text" placeholder='До'/>
            </div>
        </div>
    </div>
  )
}
