import { useState, useEffect } from "react";
import Close from "../images/close.svg";
import Minus from "../images/minus.svg";
import Plus from "../images/plus.svg";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const [total, setTotal] = useState(0);

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

  // Remove item from basket array
  const removeItem = (item) => {
    const index = props.basket.indexOf(item);

    // Only splice if the index does exist
    if (index > -1) {
      props.basket.splice(index, 1);

      // This will update state, so that the component will re-render when remove button is clicked
      props.setBasket([...props.basket]);

      // Sets the number of items in the header to 0 once the last item is removed from the basket
      if (props.basket.length === 0) {
        props.setNumOfItems(0);
      }
    }
  };

  const orderBtnClick = () => {
    // Empties basket when Buy Now button is clicked
    localStorage.setItem("HOODIE_BASKET", JSON.stringify([]));
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
      });
    }
  }, [props.basket]);

  return (
    <div data-test-sidebar='sidebar' className='sidebar-container'>
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
                      data-test-minus={`minus-${item.id}`}
                      onClick={() => minusQuantity(item)}
                      src={Minus}
                      alt='Minus quantity'
                    />
                    <p>{item.quantity}</p>
                    <img
                      data-test-plus={`plus-${item.id}`}
                      onClick={() => addQuantity(item)}
                      src={Plus}
                      alt='Add quantity'
                    />
                  </div>
                  <button onClick={() => removeItem(item)}>Remove</button>
                </div>
              </div>
            );
          })}
        <p className='total'>
          {typeof props.basket !== "undefined" && props.basket.length < 1
            ? `Sub-total: £${0}`
            : `Sub-total: £${total}`}
        </p>
      </div>
      {typeof props.basket !== "undefined" && props.basket.length > 0 && (
        <Link to='/shopping-cart/order' className='order-link'>
          <button
            data-test-buy-btn={"buy-now-btn"}
            onClick={orderBtnClick}
            className='buy-now-btn'
          >
            Buy Now
          </button>
        </Link>
      )}
    </div>
  );
}
