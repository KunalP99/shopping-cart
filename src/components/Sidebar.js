import Close from "../images/close.svg";
import Minus from "../images/minus.svg";
import Plus from "../images/plus.svg";

export default function Sidebar(props) {
  const closeSidebar = () => {
    const sidebar = document.querySelector(".sidebar-container");
    sidebar.classList.remove("show");
  };

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
                    <img src={Minus} alt='Minus quantity' />
                    <p>1</p>
                    <img src={Plus} alt='Add quantity' />
                  </div>
                  <button>Remove</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
