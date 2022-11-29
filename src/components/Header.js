import Basket from "../images/basket.svg";

export default function Header() {
  return (
    <header>
      <h1>HOODIES</h1>
      <div className='basket-container'>
        <button>
          <img src={Basket} alt='Basket' />
        </button>
        <p>x2</p>
      </div>
    </header>
  );
}
