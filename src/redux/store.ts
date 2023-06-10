import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import cartReducer from './slices/cartSlice'
import itemsReducer from './slices/itemsSlice'
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
    filterReducer,
    cartReducer,
    itemsReducer,
  },
});
type FuncType = typeof store.getState;
 export type RootState = ReturnType<FuncType>;

type AppDispatch = typeof store.dispatch;
 export const useAppDispatch = () => useDispatch<AppDispatch>()