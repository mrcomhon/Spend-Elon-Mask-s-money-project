import "./css/main.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { useState } from "react";
import { products } from "./components/Products";

function App() {
  const [money, setMoney] = useState<number>(420_000_000_000);
  const [inventory, setInventory] = useState<{[title:string]: number}>({})

  return (
    <div>
      <Header money={money} />
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
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
