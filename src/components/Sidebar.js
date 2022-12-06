import { useState, useEffect } from "react";

import Close from "../images/close.svg";
import Minus from "../images/minus.svg";
import Plus from "../images/plus.svg";

export default function Sidebar(props) {
  const [total, setTotal] = useState([]);

  const closeSidebar = () => {
    const sidebar = document.querySelector(".sidebar-container");
    sidebar.classList.remove("show");
  };

  const addQuantity = (item) => {
    props.setBasket(
      [...props.basket].map((object) => {
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
  };

  const minusQuantity = (item) => {
    props.setBasket(
      [...props.basket].map((object) => {
        if (object.id === item.id && object.quantity > 1) {
          return {
            ...object,
            quantity: object.quantity - 1,
          };
        } else {
          return object;
        }
      })
    );
  };

  useEffect(() => {
    if (typeof props.basket !== "undefined") {
      // Gets the total of all items in the basket (arr is the current array)
      props.basket.map((item, index, arr) => {
        setTotal(
          // Adds the previous value to the total of the price multiplied by the quantity and every time the basket updates, a new total will be calculated
          arr.reduce((accum, curr) => {
            return accum + curr.price * curr.quantity;
          }, 0)
        );
        return;
      });
    }
  }, [props.basket]);

  return (
    <div className='sidebar-container'>
      <img
        onClick={closeSidebar}
        className='close-icon'
        src={Close}
        alt='Close sidebar'
      />
      <div className='checkout-container'>
        <h2>CHECKOUT</h2>
        {typeof props.basket !== "undefined" &&
          props.basket.map((item, index) => {
            return (
              <div
                className={`checkout-item-${index} checkout-item`}
                key={index}
              >
                <div className='name-price-container'>
                  <p>{item.name}</p>
                  <p
                    className={`checkout-item-${index}-price`}
                  >{`£${item.price}`}</p>
                </div>
                <div className='quantity-remove-container'>
                  <div className='quantity-container'>
                    <img
                      onClick={() => minusQuantity(item)}
                      src={Minus}
                      alt='Minus quantity'
                    />
                    <p>{item.quantity}</p>
                    <img
                      onClick={() => addQuantity(item)}
                      src={Plus}
                      alt='Add quantity'
                    />
                  </div>
                  <button>Remove</button>
                </div>
              </div>
            );
          })}
        <p className='total'>{`Sub-total: £${total} `}</p>
      </div>
    </div>
  );
}
