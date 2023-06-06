import React, { useContext, useRef, useState } from "react";
import Productctx from "../context/Product";

const AddProduct = () => {
    const[id,setId]=useState(0)
  const ctxData = useContext(Productctx);
  console.log(ctxData);
  const name = useRef();
  const description = useRef();
  const price = useRef();
  const l = useRef();
  const m = useRef();
  const s = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: name.current.value,
      description: description.current.value,
      price:Number (price.current.value),
      l: Number(l.current.value),
      m:Number (m.current.value),
      s:Number( s.current.value),
      id:Number(id)
    };
    ctxData.addFunc(obj);
  };
  return (
    <form className="form flex justify-center bg-slate-500 mt-5" onSubmit={handleSubmit}>
      <div className="mx-3">
        <label>T-Shirt Name</label>
        <div>
          <input className="w-16 border border-black" ref={name} />
        </div>
      </div>
      <div className="mx-3">
        <label>Description</label>
        <div>
          <input className="w-16 border border-black" ref={description} />
        </div>
      </div>
      <div className="mx-3">
        <label>Price</label>
        <div>
          <input className="w-16 border border-black" ref={price} />
        </div>
      </div>
      <div className="mx-3">
        <label>L</label>
        <div>
          <input className="w-16 border border-black" ref={l} />
        </div>
      </div>
      <div className="mx-3">
        <label>M</label>
        <div>
          <input className="w-16 border border-black" ref={m} />
        </div>
      </div>
      <div className="mx-3">
        <label>S</label>
        <div>
          <input className="w-16 border border-black" ref={s} />
        </div>
      </div>
      <button type="submit" onClick={()=>{setId(id+1)}} className="w-16 h-6 bg-red-950 my-6 text-white">
        Add
      </button>
    </form>
  );
};

export default AddProduct;
