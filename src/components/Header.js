import Basket from "../images/basket.svg";
import Sidebar from "./Sidebar";

export default function Header(props) {
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar-container");
    sidebar.classList.add("show");
  };

  return (
    <header>
      <h1>HOODIES</h1>
      <div className='basket-container'>
        <button>
          <img onClick={showSidebar} src={Basket} alt='Basket' />
        </button>
        <p>{props.basket.length === 0 ? "x0" : `x${props.basket.length}`}</p>
      </div>
      <Sidebar basket={props.basket} />
    </header>
  );
}
