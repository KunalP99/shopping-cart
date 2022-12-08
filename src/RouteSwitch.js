import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Order from "./components/Order";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/shopping-cart' element={<App />} />
        <Route path='/shopping-cart/shop' element={<Shop />} />
        <Route path='/shopping-cart/order' element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}
