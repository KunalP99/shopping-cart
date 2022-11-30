export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.coverImg} alt={props.name} />
      <p className='name'>{props.name}</p>
      <p className='price'>{`£${props.price}`}</p>
      <button>Add to basket</button>
    </div>
  );
}
