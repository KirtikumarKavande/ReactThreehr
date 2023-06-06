import React, { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  const[show,setShow]=useState(false)
  return (
    <div>
      <div className=" bg-gray-400 h-12 flex justify-between">
        <div className="text-lg">YourTshirt</div>
        <div className="mt-2">
          <button className="bg-green-300 w-8 h-7 rounded-md  " onClick={()=>{setShow(!show)}}>Cart</button>
         {show && <Cart/>} 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
