import React, { useState} from 'react';
import './Card.css';

export default function Card(props) {
  let {title, price, speed, isTop} = props;
  let cardColor = '';
  if (title === '300'){
    cardColor = '--blue'
  } else if (title === '450'){
    cardColor = '--green'
  } else if (title === '550'){
    cardColor = '--red'
  } else if (title === '1000'){
    cardColor = '--black'
  }

  const [pressed, setPressed] = useState(false);
  const handleChange = () => {
    setPressed(!pressed);
  }
  return (
    <div className={ isTop ? "card card--top" : "card"}>
        <div className={`header header${cardColor}`}>
            <h2 className="title">Безлимитный {title}</h2>
        </div>
        <div className={`price  price${cardColor}`}>
            <p>руб <span className="priceBold">{price}</span> /мес</p>
        </div>
        <div  className="speed"><p>до <span>{speed}</span> Мбит/сек</p></div>
        <button className='btn' {...props} onClick={handleChange}>
          {pressed ? "Тариф выбран" : "Выбрать этот тариф"}
        </button>
        <div className="info">Объем вклюсенного трафика не ограничен</div>
    </div>
  )
}
