import "./css/main.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { useState, type Key } from "react";
import { products } from "./components/Products";

function App() {
  const [money, setMoney] = useState<number>(420_000_000_000);

  return (
    <div>
      <Header money={money} />
      <div className="card">
        {products.map(
          (
            product: { title: string; price: number; image: string },
            index: Key | null | undefined
          ) => (
            <Card
              key={index}
              money={money}
              setMoney={setMoney}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
