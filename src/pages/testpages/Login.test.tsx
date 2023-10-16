import { fireEvent,screen } from "@testing-library/react";
import { renderWithRouterRedux } from "../../tests/helpers/renderWithRouterRedux";
describe('login test',()=>{
test('should redirect to login page',()=>{
 renderWithRouterRedux(null,'/');
 const loginButton = screen.getByTestId('login');
 fireEvent.click(loginButton);
 expect(screen.getByTestId('login-page')).toBeInTheDocument()
})
})