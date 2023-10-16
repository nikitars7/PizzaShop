import { screen ,fireEvent} from "@testing-library/react";
import { renderWithRouterRedux } from "../../tests/helpers/renderWithRouterRedux";
describe('Search Test',()=>{
   test("Search value should change",() => {
      renderWithRouterRedux(null,'/')
      const input = screen.getByPlaceholderText(/Search.../i)
      expect(input).toBeInTheDocument();
      fireEvent.input(input,{
        target:{
          value:'123'
        }
      })
      expect(screen.getByTestId('search-input')).toHaveAttribute('value','123')
    })
})