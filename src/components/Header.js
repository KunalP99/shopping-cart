import { useState } from "react";
import { useEffect } from "react";
import Basket from "../images/basket.svg";
import Sidebar from "./Sidebar";

export default function Header(props) {
  const [numOfItems, setNumOfItems] = useState(0);

  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar-container");
    sidebar.classList.add("show");
  };

  // Gets the total of the quantity of the items in the basket
  const basketQuantity = () => {
    if (typeof props.basket !== "undefined") {
      props.basket.map((item, index, arr) => {
        setNumOfItems(
          arr.reduce((accum, curr) => {
            return accum + curr.quantity;
          }, 0)
        );
      });
    }
  };

  useEffect(() => {
    basketQuantity();
  }, [props.basket]);

  return (
    <header>
      <h1>HOODIES</h1>
      <div className='basket-container'>
        <button>
          <img onClick={showSidebar} src={Basket} alt='Basket' />
        </button>
        <p>{typeof props.basket !== "undefined" ? `x${numOfItems}` : "x0"}</p>
      </div>
      <Sidebar
        basket={props.basket}
        setBasket={props.setBasket}
        setNumOfItems={setNumOfItems}
      />
    </header>
  );
}
