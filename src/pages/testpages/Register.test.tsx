import { fireEvent,screen } from "@testing-library/react";
import { renderWithRouterRedux } from "../../tests/helpers/renderWithRouterRedux";
describe('register test',()=>{
   test('should redirect to register page',()=>{
      renderWithRouterRedux(null,'/');
      const loginButton = screen.getByTestId('register');
      fireEvent.click(loginButton);
      expect(screen.getByTestId('register-page')).toBeInTheDocument()
   })
   test('should register',() =>{
      renderWithRouterRedux(null,'/register');
      expect(screen.getByTestId('register-page')).toBeInTheDocument()
      const registerEmail = screen.getByTestId('register-input-email');
      const registerPassword = screen.getByTestId('register-input-password');
      fireEvent.input(registerEmail,{
      target:{
         value: 'test1234@test.net'
      }
      })
      fireEvent.input(registerPassword,{
         target:{
            value: 12345678
         }
         })
      const buttonLogin = screen.getByTestId('register-button-signup');
      fireEvent.click(buttonLogin);
   })
})