"use client";

import { addToCart, removeFromCart } from "@/store/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const { Button } = require("../ui/button");

function AddToCartButton({ productItem }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(productItem));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(productItem?.id));
  }

  return (
    <div className="mt-8 max-w-md">
      <Button
        type="button"
        onClick={
          cart?.cartItems?.some((item) => item.id === productItem?.id)
            ? handleRemoveFromCart
            : handleAddToCart
        }
      >
        {cart?.cartItems?.some((item) => item.id === productItem?.id)
          ? "Remove from cart"
          : "Add to cart"}
      </Button>
    </div>
  );
}

export default AddToCartButton;
