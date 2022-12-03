import Close from "../images/close.svg";

export default function Sidebar(props) {
  const closeSidebar = () => {
    const sidebar = document.querySelector(".sidebar-container");

    sidebar.classList.remove("show");
    console.log(props.basket);
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
        {props.basket.map((item) => {
          return (
            <div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
