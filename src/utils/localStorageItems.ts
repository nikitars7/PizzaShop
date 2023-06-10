import { totalPriceCalc } from "./totalPriceCalc";
import { Item } from "../redux/slices/cartSlice";
export const localStorageItems = () => {
  const json = localStorage.getItem("cart");
  const items = json ? JSON.parse(json) : [];
  const totalPrice = totalPriceCalc(items);
   return {
      items: items as Item[],
      totalPrice,
   }
};
