import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

it("should render the Shop Now button", () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText("Shop Now"));
});