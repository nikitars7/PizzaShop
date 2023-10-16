import { screen } from "@testing-library/react";
import { renderWithRouterRedux } from "./tests/helpers/renderWithRouterRedux";
describe("TEST APP", () => {
  test("header logo test", () => {
    renderWithRouterRedux(null,'/')
    const headerLogo = screen.getByTestId("header-logo");
    expect(headerLogo).toBeInTheDocument();
  });
  test("login button",()=>{
    renderWithRouterRedux(null,'/')
   expect(screen.getByTestId('login')).toBeInTheDocument()
  })
  test("register button",()=>{
    renderWithRouterRedux(null,'/')
    expect(screen.getByTestId('register')).toBeInTheDocument()
  })
  test('search input',()=>{
    renderWithRouterRedux(null,'/')
    expect(screen.getByTestId('search-input')).toBeInTheDocument()
  })
});
