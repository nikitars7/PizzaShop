import { fireEvent,screen } from "@testing-library/react";
import { renderWithRouterRedux } from "../../tests/helpers/renderWithRouterRedux";
describe('register test',()=>{
   test('should redirect to register page',()=>{
      renderWithRouterRedux(null,'/');
      const loginButton = screen.getByTestId('register');
      fireEvent.click(loginButton);
      expect(screen.getByTestId('register-page')).toBeInTheDocument()
   })
})