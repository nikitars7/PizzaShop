import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addtoCart } from "../redux/slices/cartSlice";
import { selectorCartItemById } from "../redux/slices/cartSlice";
import { Item } from "../redux/slices/cartSlice";
import "../scss/components/_item-page.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
const ItemPage:React.FC = () => {
  interface Product {
    imageUrl: string;
    title: string;
    price: number;
    types: number[];
    sizes: number[];
    id: string ;
  }
  const [item, setItem] = useState<Product>();
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typeNames = ["thin", "thick"];
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getItem = async () => {
      try {
        const { data } = await axios.get(
          `https://6404ecfc40597b65de2d48a6.mockapi.io/Pizzas/${id}`
        );
        setItem(data);
      } catch (e) {
        alert("Not found");
        navigate("/");
      }
    };
    getItem();
  }, []);
  const dispatch = useDispatch();
  if (!item) {
    return <div>Loading...</div>;
  }
const onCLickAdd = () => {
  const itemToAdd:Item = {
    id: item.id,
    imageUrl : item.imageUrl,
    title: item.title,
    price: item.price,
    type: typeNames[activeType],
    size: item.sizes[activeSize],
    count: 0,
  }
  dispatch(addtoCart(itemToAdd))
}
  
  return (
    <div className="container">
      <div className="item">
        <div className="item__body">
          <img className="item__body-img" src={item.imageUrl} alt="item" />
          <div className="item__body-title">{item.title}</div>
          <div className="item__body-selector">
            <ul>
              {item.types.map((type, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setActiveType(type)}
                    className={activeType === type ? "active" : ""}
                  >
                    {type === 0 ? typeNames[0] : typeNames[1]}
                  </li>
                ); // or typeNames[type]
              })}
            </ul>
            <ul>
              {item.sizes.map((size, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setActiveSize(index)}
                    className={activeSize === index ? "active" : ""}
                  >
                    {size}см
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="item__body__bottom">
            <div className="item__body-price">{item.price} $</div>
            <button onClick={onCLickAdd} className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              {/* addedItem > 0 && <i>{addedItem}</i> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
