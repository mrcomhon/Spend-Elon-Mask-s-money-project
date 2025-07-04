import { useState } from 'react';
import AllowOnlyNumbers from './OnlyNumbers';
import WithoutZeroBeginning from './WithoutZeroBegging';

type CardProps = {
  title: string;
  price: number;
  image: string;
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
};

function Card({ title, price, image, money, setMoney }: CardProps) {
  const [input, setInput] = useState("")

  const handleBuy = () => {
    if (money >= price) {
      setMoney(money - price);
    } else {
      alert("lol, you do not have enough money");
    }
  };

  const handleSell = () => {
    setMoney((prev) => Math.min(prev + price, 420000000000));
  };

  return (
    <>
      <div className="card__wrapper container">
        <div className="card__image">
          <img className='card__image-image' src={image} alt={title} />
        </div>
        <div className="card__body">
          <p className="card__body-title">{title}</p>
          <p className="card__body-price">
            ${price.toLocaleString()}
          </p>
        </div>
        <div className="card__purchase">
          <button className="card__purchase-sell" onClick={handleSell}>
            Продать
          </button>
          <input
            type="number"
            className="card__purchase-input"
            value={input}
            onKeyDown={AllowOnlyNumbers}
            onChange={WithoutZeroBeginning(setInput)}
          />
          <button className="card__purchase-buy" onClick={handleBuy}>
            Купить
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
