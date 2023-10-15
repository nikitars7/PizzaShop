import { render, screen } from "@testing-library/react";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MemoryRouter } from "react-router-dom";
describe("TEST APP", () => {
  test("header logo test", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </MemoryRouter>
    );
    const headerLogo = screen.getByTestId("header-logo");
    expect(headerLogo).toBeInTheDocument();
  });
});
