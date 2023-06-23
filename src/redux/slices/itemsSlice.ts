import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Sort } from "./filterSlice";
export type FetchParams = {
  order: string;
  sorted: string;
  search: string;
  category: string;
  pageCount: number;
};
// createAsyncThunk<FetchItem[],FetchParams>
export const fetchItems = createAsyncThunk(
  "pizza/fetchItemsStatus",
  async (
    params: FetchParams,
    {
      /* rejectWithValue */
    }
  ) => {
    const { order, sorted, search, category, pageCount } = params;

    const res = await axios.get<FetchItem[]>(
      `https://6404ecfc40597b65de2d48a6.mockapi.io/Pizzas?page=${pageCount}&limit=4&${category}&sortBy=${sorted}&order=${order}${search}`
    );

    return res.data as FetchItem[];
  }
);
type FetchItem = {
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  id: string;
};
export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
interface ItemInitState {
  isLoading: Status;
  items: FetchItem[];
}
const initialState: ItemInitState = {
  items: [],
  isLoading: Status.LOADING, // loading | success | error
  //error : null,
};
const itemsSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = Status.SUCCESS;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.isLoading = Status.ERROR;
        state.items = [];
        //state.error = action.payload
      });
  },
});
export const { setItems } = itemsSlice.actions;
export default itemsSlice.reducer;
