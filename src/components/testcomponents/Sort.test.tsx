import { screen ,fireEvent} from "@testing-library/react";
import { renderWithRouterRedux } from "../../tests/helpers/renderWithRouterRedux";
describe('Sort test',()=>{
   test('Sort value should change',()=>{
      renderWithRouterRedux(null,'/')
      const sortLable = screen.getByTestId('sort-title');
      expect(sortLable).toBeInTheDocument();
      expect(screen.queryByTestId('sort-value')).not.toBeInTheDocument();
      fireEvent.click(sortLable)
      expect(screen.getByTestId('sort-value')).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('sort-value'))
      expect(sortLable).toHaveTextContent('rating (ASC)')
    })
})