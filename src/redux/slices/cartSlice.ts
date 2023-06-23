import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { localStorageItems } from "../../utils/localStorageItems";
import { totalPriceCalc } from "../../utils/totalPriceCalc";
export type Item ={
  id: string;
  title: string;
  price: number;
  size: number;
  imageUrl: string;
  type: string;
  count:number;
}
interface CartStateInit {
items: Item[];
totalPrice:number;
}
const {items,totalPrice} = localStorageItems();
const initialState:CartStateInit = {
  items,
  totalPrice,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart(state, action:PayloadAction<Item>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id && obj.type === action.payload.type && obj.size === action.payload.size);
      if (findItem) {
        findItem.count++;
      } 
      else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = totalPriceCalc(state.items);
    },
    plusItem(state,action:PayloadAction<Item>){
       const addedItem = state.items.find((obj) => obj.id === action.payload.id && obj.type === action.payload.type && obj.size === action.payload.size);
       if(addedItem){
        addedItem.count++;
       }
       state.totalPrice = totalPriceCalc(state.items);
    },
    minusItem(state,action:PayloadAction<Item>){
      const findItem = state.items.find((obj) => obj.id === action.payload.id && obj.type === action.payload.type && obj.size === action.payload.size)
      if(findItem){
        findItem.count--;
        state.totalPrice = totalPriceCalc(state.items);
      }
    },
    removeFromCart(state, action:PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = totalPriceCalc(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});
export const selectCart = (state:RootState) => state.cartReducer;
export const selectorCartItemById = (item:Item) => (state:RootState) => state.cartReducer.items.find(obj => obj.id === item.id && obj.type === item.type && obj.size === item.size )
export const { addtoCart, removeFromCart,plusItem, minusItem,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
