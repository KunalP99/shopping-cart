import { Link } from "react-router-dom";
import "./styles/css/main.css";

function App() {
  return (
    <div className='main-container'>
      <Link to='shop'>
        <button>Shop Now</button>
      </Link>
    </div>
  );
}

export default App;
