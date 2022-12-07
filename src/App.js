import { Link } from "react-router-dom";
import Header from "./components/Header";
import "./styles/css/main.css";

function App() {
  return (
    <div className='main-container'>
      <Link to='shop'>Shop Now</Link>
    </div>
  );
}

export default App;
