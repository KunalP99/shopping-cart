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
        <p>
          {typeof props.basket !== "undefined"
            ? `x${props.basket.length}`
            : "x0"}
        </p>
      </div>
      <Sidebar basket={props.basket} />
    </header>
  );
}
