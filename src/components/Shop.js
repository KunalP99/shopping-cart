import Header from "./Header";
import Item1 from "../images/items/item-1.png";

export default function Shop() {
  return (
    <div>
      <Header />
      <div className='shop-container'>
        <div className='card'>
          <img src={Item1} alt='Nike Training Dri-FIT fleect hoodie in black' />
          <p className='name'>Nike Training Dri-FIT fleece hoodie in black</p>
          <p className='price'>£40.00</p>
          <button>Add to basket</button>
        </div>
      </div>
    </div>
  );
}
