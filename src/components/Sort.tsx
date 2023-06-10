import { useEffect, useRef, useState,memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SortPropEnum, setSortBy } from "../redux/slices/filterSlice";
import { RootState } from "../redux/store";
interface RateList  {
name:string,
sortProperty:SortPropEnum
}
// or type rateList = {name:string;sortProperty:string;}
export const ratingList:RateList[] = [
  { name: "популярность (DESC)", sortProperty: SortPropEnum.RATING_DESC },
  { name: "популярность (ASC)", sortProperty: SortPropEnum.RATING_ASC },
  { name: "цене (DESC)", sortProperty:SortPropEnum.PRICE_DESC },
  { name: "цене (ASC)", sortProperty: SortPropEnum.PRICE_ASC },
  { name: "алфавиту (DESC)", sortProperty: SortPropEnum.TITLE_DESC },
  { name: "алфавиту (ASC)", sortProperty:  SortPropEnum.TITLE_ASC },
];
const Sort:React.FC = () => {
  const { sort } = useSelector((state:RootState) => state.filterReducer);
  const dispatch = useDispatch();
  const sortRef = useRef<HTMLDivElement>(null);
  const [isSort, setIsSort] = useState(false);
  const onClickSelected = (obj:RateList) => {
    dispatch(setSortBy(obj));
    setIsSort(!isSort);
  };
  
  useEffect(()=> {
   const handleSortClick = (event:MouseEvent) => {
    if(sortRef.current && !event.composedPath().includes(sortRef.current)){
     setIsSort(false)
    }
  }
  document.body.addEventListener('click', handleSortClick)
  return () => document.body.removeEventListener('click',handleSortClick)
  },[])
  return (
    <div ref={sortRef}className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsSort(!isSort)}>{sort.name}</span>
      </div>
      {isSort ? (
        <div className="sort__popup">
          <ul>
            {ratingList.map((obj, index) => {
              return (
                <li
                  key={index}
                  onClick={() => onClickSelected(obj)}
                  className={
                    sort.sortProperty === obj.sortProperty ? "active" : ""
                  }
                >
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default memo(Sort);
