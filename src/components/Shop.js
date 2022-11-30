import Header from "./Header";
import items from "../data/items";
import Card from "./Card";

export default function Shop() {
  console.log(items);
  return (
    <div>
      <Header />
      <div className='shop-container'>
        {items.map((item) => {
          return (
            <Card
              key={item.id}
              coverImg={require(`../images/items/item-${item.id}.png`)}
              name={item.name}
              price={item.price}
              class={item.class}
            />
          );
        })}
      </div>
    </div>
  );
}
