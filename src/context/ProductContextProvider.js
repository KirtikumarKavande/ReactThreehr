import React, { useState } from "react";
import Productctx from "./Product";

const ProductContextProvider = (props) => {
  const [newItems, setNewItems] = useState([]);
  const [cart, setCart] = useState([]);
  const addFunc = (item) => {
    setNewItems([...newItems, item]);
  };
  const cartItemsFunc = (item) => {
    const index = cartObj.cartItems.findIndex((object) => {
      return object.id === item.id;
    });
    const existingCartItem = cartObj.cartItems[index];
    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        l: existingCartItem.l + item.l,
        m: existingCartItem.m + item.m,
        s: existingCartItem.s + item.s,
      };
      const newUpdatedObj = [...cartObj.cartItems];
      newUpdatedObj[index] = updatedItem;
      setCart(newUpdatedObj);
    }else{
        setCart([...cart, item]);

    }

  };
  const cartObj = {
    itemsArray: newItems,
    addFunc: addFunc,
    cartItems: cart,
    cartItemsFunc: cartItemsFunc,
  };
  return (
    <Productctx.Provider value={cartObj}>{props.children}</Productctx.Provider>
  );
};

export default ProductContextProvider;
