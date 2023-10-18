import { fireEvent,screen } from "@testing-library/react";
import { renderWithRouterRedux } from "../../tests/helpers/renderWithRouterRedux";
describe('login test',()=>{
test('should redirect to login page',()=>{
 renderWithRouterRedux(null,'/');
 const loginButton = screen.getByTestId('login');
 fireEvent.click(loginButton);
 expect(screen.getByTestId('login-page')).toBeInTheDocument()
})
test('should login',() =>{
   renderWithRouterRedux(null,'/login');
   expect(screen.getByTestId('login-page')).toBeInTheDocument()
   const loginEmail = screen.getByTestId('login-input-email');
   const loginPassword = screen.getByTestId('login-input-password');
   fireEvent.input(loginEmail,{
   target:{
      value: 'test123@test.net'
   }
   })
   fireEvent.input(loginPassword,{
      target:{
         value: 1234567
      }
      })
   const buttonLogin = screen.getByTestId('login-button-signin');
   // fireEvent.click(buttonLogin);
})
})