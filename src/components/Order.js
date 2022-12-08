import { Link } from "react-router-dom";

export default function Order() {
  return (
    <div className='order-container'>
      <h1>Order Successful</h1>
      <Link to='/shopping-cart/shop' className='shop-link'>
        <button>Back to Shop</button>
      </Link>
    </div>
  );
}
