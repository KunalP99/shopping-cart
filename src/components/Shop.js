import Header from "./Header";
import items from "../data/items";

export default function Shop() {
  return (
    <div>
      <Header />

      <div className='shop-container'>
        {items.map((item) => {
          return (
            <div className='card'>
              <img
                src={require(`../images/items/item-${item.id}.png`)}
                alt={item.name}
              />
              <p className='name'>{item.name}</p>
              <p className='price'>{`£${item.price}`}</p>
              <button>Add to basket</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
