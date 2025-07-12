import { useState } from "react";
import classNames from 'classnames';

type CardProps = {
  title: string;
  price: number;
  image: string;
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  unique: boolean;
  inventory: { [title: string]: number };
  setInventory: React.Dispatch<React.SetStateAction<{ [title: string]: number }>>
  initialMoney: number;
};



function Card({ title, price, image, money, unique = false, setMoney, }: CardProps) {
  const [isBought, setIsBought] = useState(false);
  const [inventory, setInventory] = useState<{ [title: string]: number }>({});
  const count = inventory[title] || 0;
  const [input, setInput] = useState<string>("0");


  const handleBuy = () => {
    if (money >= price) {
      setInventory((prev) => ({
        ...prev,
        [title]: (prev[title] || 0) + 1,
      }))

      setInput((prev) => (parseInt(prev, 10) + 1).toString());

      if (unique && isBought) {
        alert("You have already bought it!");
        return;
      }

      setMoney(money - price);

      if (unique) {
        setIsBought(true);
      }
    } else {
      alert("lol, you do not have enough money");
    }
  };

  const handleSell = () => {
    if (count > 0) {
      setInventory((prev) => ({
        ...prev,
        [title]: prev[title] - 1,
      }))
      setMoney((prev) => Math.min(prev + price, 420000000000));

      setInput((prev) => (parseInt(prev, 10) - 1).toString())
      
      if (unique && isBought) {
        setIsBought(false)
      }
    }
  };

  return (
    <>
      <div className="card__wrapper container">
        <div className="card__image">
          <img className="card__image-image" src={image} alt={title} />
        </div>
        <div className="card__body">
          <p className="card__body-title">{title}</p>
          <p className="card__body-price">${price.toLocaleString()}</p>
        </div>
        <div className="card__purchase">
          <button
            className={classNames("card__purchase-sell", {
              inactive: count === 0,
              active: count > 0,
            })}
            onClick={handleSell}
          >
            Sell
          </button>
          <p className='card__purchase-input h3'>{input }</p>
          <button
          className={classNames("card__purchase-buy", {
              inactive: money < price,
              active: count > 0,
            })}
            onClick={handleBuy}
            disabled={unique && isBought}
          >
            {isBought && unique ? "Bought" : "Buy"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
