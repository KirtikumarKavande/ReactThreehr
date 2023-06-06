import React, { useContext } from "react";
import Productctx from "../context/Product";
import DataVisisible from "./DataVisisible";

const ShowProduct = () => {
  const ctxData = useContext(Productctx);
  console.log("----------------------", ctxData);
  return (
    <div className="w-[100vw] h-[30vh] bg-slate-800 mt-5 rounded-md ">
      {ctxData?.itemsArray?.map((items) => {
        return (
          <DataVisisible
            key={items.name}
            name={items.name}
            description={items.description}
            price={items.price}
            l={items.l}
            m={items.m}
            s={items.s}
            id={items.id}
          />
        );
      })}
    </div>
  );
};

export default ShowProduct;
