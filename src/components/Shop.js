import Header from "./Header";
import items from "../data/items";
import { useState } from "react";

export default function Shop() {
  const [basket, setBasket] = useState([]);

  return (
    <div>
      <Header basket={basket} />
      <div className='shop-container'>
        {items.map((item) => {
          return (
            <div key={item.id} className='card'>
              <img
                src={require(`../images/items/item-${item.id}.png`)}
                alt={item.name}
              />
              <p className='name'>{item.name}</p>
              <p className='price'>{`£${item.price}`}</p>
              <button
                onClick={() => {
                  setBasket([...basket, items[item.id]]);
                }}
              >
                Add to basket
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
