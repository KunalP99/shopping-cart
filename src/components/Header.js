import Basket from "../images/basket.svg";
import Sidebar from "./Sidebar";

export default function Header() {
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
        <p>x0</p>
      </div>
      <Sidebar />
    </header>
  );
}
