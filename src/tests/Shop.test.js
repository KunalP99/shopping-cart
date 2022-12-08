import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Shop from "../components/Shop";

it("should render Shop component", () => {
  render(<Shop />, { wrapper: BrowserRouter });

  expect(screen.getByText("Nike Training Dri-FIT fleece hoodie in black"));
  expect(screen.getByText("Farah Gladstone back print cotton hoodie in black"));
  expect(screen.getByText("Jordan Jumpman mini logo fleece hoodie in gym red"));
});

it("should add item to cart once the relevant button is clicked", () => {
  
});
