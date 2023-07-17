import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export enum SortPropEnum{
 RATING_DESC = 'rating',
 RATING_ASC = '-rating',
 TITLE_DESC = 'title',
 TITLE_ASC = '-title',
 PRICE_DESC = 'price',
 PRICE_ASC = '-price',
}
export type Sort = {
  name: string;
  sortProperty: SortPropEnum;
};
interface FilterInitState {
  searchValue: string;
  categoryId: number;
  pageCount: number;
  sort: Sort;
}
const initialState: FilterInitState = {
  searchValue: "",
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: "rating",
    sortProperty: SortPropEnum.RATING_DESC,
  },
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSeatchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSortBy(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterInitState>) {
      if (Object.keys(action.payload).length) {
        state.pageCount = Number(action.payload.pageCount);
        state.sort = action.payload.sort;
        state.categoryId = Number(action.payload.categoryId);
      } else {
        state.pageCount = 1;
        state.categoryId = 0;
        state.sort = {
          name: "rating",
          sortProperty: SortPropEnum.RATING_DESC,
        };
      }
    },
  },
});

export const {
  setCategoryId,
  setSortBy,
  setPageCount,
  setFilters,
  setSeatchValue,
} = filterSlice.actions;
export default filterSlice.reducer;
