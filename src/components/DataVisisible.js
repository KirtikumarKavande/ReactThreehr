import React, { useContext, useState } from "react";
import Productctx from "../context/Product";

const DataVisisible = ({ name, description, price, l, m, s,id }) => {
  const ctxData = useContext(Productctx);
  const [sizel, setSizel] = useState(l);
  const [sizem, setSizem] = useState(m);
  const [sizes, setSizes] = useState(s);

  const lFunc = () => {
    setSizel(sizel - 1);
    ctxData.cartItemsFunc({ name, description, price, l: 1, m: 0, s: 0,id });
  };
  const mFunc = () => {
    setSizem(sizem - 1);
    ctxData.cartItemsFunc({ name, description, price, m: 1, l: 0, s: 0,id });
  };
  const sFunc = () => {
    setSizes(sizes - 1);
    ctxData.cartItemsFunc({ name, description, price, s: 1, l: 0, m: 0,id });
  };
  return (
    <div>
      <div className="justify-center space-x-14 text-white flex pt-6">
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
        <div>
          <button className="bg-amber-400 w-16 h-8 rounded-lg" onClick={lFunc}>
            L({sizel})
          </button>
        </div>
        <div>
          <button className="bg-amber-400 w-16 h-8 rounded-lg" onClick={mFunc}>
            M({sizem})
          </button>
        </div>
        <div>
          <button className="bg-amber-400 w-16 h-8 rounded-lg" onClick={sFunc}>
            S({sizes})
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataVisisible;
