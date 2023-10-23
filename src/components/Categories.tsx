import {memo} from 'react';
import { useWhyDidYouUpdate } from 'ahooks';
type CategoriesProps = {
  categoryId:number,
  onClickCategory:(index:number) => void,
}
const Categories:React.FC<CategoriesProps> = ({categoryId ,onClickCategory}) => {
 useWhyDidYouUpdate('Categories',{categoryId ,onClickCategory})
  const categories = [
    "All",
    "Meaty",
    "Vegan",
    "Grill",
    "Spicy",
    "Enclosed",
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              data-testid='categories-id'
              key={index}
              onClick={() => onClickCategory(index)}
              className={categoryId === index ? "active" : ""}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(Categories);
