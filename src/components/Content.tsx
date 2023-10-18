import { useCallback, useEffect,  useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import qs from "qs";
import {
  setCategoryId,
  setPageCount,
  setFilters,
} from "../redux/slices/filterSlice";
import { ratingList } from "./Sort";
import {Categories,Pagination,Sort,Skeleton,PizzaItem} from '../components'
import { FetchParams, fetchItems } from "../redux/slices/itemsSlice";
import { RootState, useAppDispatch } from "../redux/store";
const Content:React.FC = () => {
  const { categoryId, sort, pageCount, searchValue } = useSelector(
    (state:RootState) => state.filterReducer
  );
  const sortBy = sort.sortProperty;
  const { items, isLoading } = useSelector((state:RootState) => state.itemsReducer);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const getAllFood = async () => {
    const order = sortBy.includes("-") ? "ask" : "desc";
    const sorted = sortBy.replace("-", "");
    const search = searchValue ? `&search=${searchValue}` : "";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    dispatch(
      // @ts-ignore
      fetchItems({
        order,
        sorted,
        search,
        category,
        pageCount,
      })
    );
  };
  // Если изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        pageCount,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortBy, pageCount]);
  // если был 1 рендер то проверяем URL параметры и сохраняем в редукс
  useEffect(() => {
    if (window.location.search) {
      const params = (qs.parse(window.location.search.substring(1))as unknown) as FetchParams;
      const sort = ratingList.find(
        (obj) => obj.sortProperty === params.sorted
      );
      dispatch(
        setFilters({
          searchValue:params.search,
          sort : sort || ratingList[0],
          categoryId:Number(params.category),
          pageCount:params.pageCount
        })
      );
      isSearch.current = true;
    }
  }, []);
  // если был 1 рендер то запрашиваем пиццы
  useEffect(() => {
    if (!isSearch.current) {
      getAllFood();
    }
    isSearch.current = false;
  }, [categoryId, sortBy, searchValue, pageCount]);

  const onClickCategory = useCallback((index:number) => {
      dispatch(setCategoryId(index));
  },[])

  const onChangePage = (page:number) => {
    dispatch(setPageCount(page));
  };

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Pizzas</h2>
      {isLoading === "error" ? (
        <div className="content__error">
          <h2> Something went wrong 😕</h2>
          <p>
            {" "}
            Unfortunately,during fetching occured an error. Try again later
          </p>
        </div>
      ) : (
        <div className="content__items">
          {isLoading === "loading"
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj:any) => {
                return <PizzaItem {...obj} key={obj.id} />;
              })}
        </div>
      )}
      <Pagination pageCount={pageCount} onChangePage={onChangePage} />
    </>
  );
};

export default Content;
