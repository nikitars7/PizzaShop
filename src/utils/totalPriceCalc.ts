import { Item } from "../redux/slices/cartSlice";

export const totalPriceCalc = (items: Item[]) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
