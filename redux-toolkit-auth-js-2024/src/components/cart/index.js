"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { removeFromCart } from "@/store/slices/cart-slice";

function Cart() {
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);
  console.log(cart?.cartItems);

  useEffect(()=>{
    setTotalAmount(cart?.cartItems.reduce((acc,curr)=>acc+curr?.price,0))
  },[cart?.cartItems])

  function handleRemoveFromCart(getCurrentItemId){
    dispatch(removeFromCart(getCurrentItemId));
  }

  if (!cart?.cartItems.length)
    return <h1 className="text-4xl font-bold">Cart is empty.</h1>;

  return (
    <div className="bg-white py-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#333] ">Cart</h2>
        <div className="overflow-y-auto">
          <table className="mt-12 w-full border-collapse divide-y ">
            <thead className="whitespace-nowrap text-left">
              <tr>
                <th className="text-base text-gray-700 p-4">Title</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap divide-y">
              {cart?.cartItems.map((item) => (
                <tr key={item?.id}>
                  <td className="py-5 px-4 ">
                    <div className="flex items-center gap-6 w-max">
                      <div className="h-36 shrink-0">
                        <img
                          src={item?.thumbnail}
                          alt={item?.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-lg font-bold text-black">
                        {item?.title}
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-4">
                    <p>{item?.price}</p>
                  </td>
                  <td className="py-5 px-4">
                    <Button onClick={()=> handleRemoveFromCart(item?.id)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="max-w-xl ml-auto mt-6">
        <div>
          <p className="text-lg font-bold"><span>Total Amount: ${totalAmount.toFixed(0)}</span></p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
