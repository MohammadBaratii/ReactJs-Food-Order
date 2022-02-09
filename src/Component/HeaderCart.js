import React, { useContext, useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import CartContext from "../Store/cart-context";

const HeaderCart = (props) => {
  const [bump, setBump] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBump(true);
    const timer = setTimeout(() => {
      setBump(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      className={`header-cart ${bump ? "bump" : ""}`}
      onClick={props.onCartModalOpen}
    >
      <MdShoppingCart />
      <p>Your cart</p>
      <p className="header-cart__amount">{numberOfCartItems}</p>
    </button>
  );
};

export default HeaderCart;
