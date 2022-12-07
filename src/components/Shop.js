import Header from "./Header";
import items from "../data/items";
import { useState, useEffect } from "react";

export default function Shop() {
  const [basket, setBasket] = useState([]);

  // Gets the value saved under the key name so when the page refreshes or the browser is closed, the basket array will be saved and that array will be set in state
  useEffect(() => {
    const data = window.localStorage.getItem("HOODIE_BASKET");
    if (data.length !== 0) {
      setBasket(JSON.parse(data));
    }
  }, []);

  // Sets a key value pair where the value is the basket array and updates everytime basket updates
  useEffect(() => {
    localStorage.setItem("HOODIE_BASKET", JSON.stringify(basket));
  }, [basket]);

  return (
    <div>
      <Header basket={basket} setBasket={setBasket} />
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
                  // If the item is not already in the basket, then add item else increment quantitiy of item
                  if (!basket.some((product) => product.id === item.id)) {
                    setBasket([...basket, items[item.id]]);
                  } else {
                    /* We are copying the basket array, mapping over it, and checking if the id of the object is the same as the item which if it is, then return a copy of that object with the quantity incremented by 1 */
                    setBasket(
                      [...basket].map((object) => {
                        if (object.id === item.id) {
                          return {
                            ...object,
                            quantity: object.quantity + 1,
                          };
                        } else {
                          return object;
                        }
                      })
                    );
                  }
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
