import "./css/main.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { useState } from "react";
import { products } from "./components/Products";

function App() {
  const INITIAL_MONEY = 420_000_000_000;
  const [money, setMoney] = useState<number>(INITIAL_MONEY);
  const [inventory, setInventory] = useState<{ [title: string]: number }>({})
  const spent = Math.max(0, INITIAL_MONEY - money);
  const percentSpent = (spent / INITIAL_MONEY) * 100;

  return (
    <div>
      <Header money={money} percentSpent={percentSpent} />
      <div className="card">
        {products.map(
          (
            product: {
              title: string;
              price: number;
              image: string;
              unique?: boolean;
              music?: boolean;
            },
            index: number
          ) => (
            <Card
              key={index}
              money={money}
              setMoney={setMoney}
              title={product.title}
              price={product.price}
              image={product.image}
              unique={product.unique || false}
              inventory={inventory}
              setInventory={setInventory}
              initialMoney={INITIAL_MONEY}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
