import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Order from "./components/Order";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}
