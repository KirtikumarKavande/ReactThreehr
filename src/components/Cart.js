import React, { useContext } from "react";
import Productctx from "../context/Product";

const Cart = () => {
  const ctxData = useContext(Productctx);
  ctxData.cartItems.map(()=>{
    
  })
  return (
    <div className="w-96 h-48 bg-red-400  mt-[1rem] ">
      {ctxData?.cartItems?.map((item) => {
        return (
          <div className="flex ">
            <div className="w-28">{item.name}</div>
            <div className="flex space-x-2 w-28">
              <div>L-{item.l}</div>
              <div>M-{item.m}</div>
              <div>S-{item.s}</div>
            </div>
            <div>{item.price*(item.l+item.m+item.s)}</div>
          </div>

        );
      })}

      <div>total</div>
    </div>
  );
};

export default Cart;
