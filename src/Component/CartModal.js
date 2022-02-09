import React, { useContext } from "react";
import CartContext from "../Store/cart-context";
import CartModalItem from "./CartModalItem";

const CartModal = (props) => {
  const modalCtx = useContext(CartContext);

  const handleCartItemRemove = (id) => {
    modalCtx.removeItem(id);
  };
  const handleCartItemAdd = (item) => {
    modalCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <>
      <div
        className="cart-modal--background"
        onClick={props.onCartModalClose}
      ></div>
      <div className="cart-modal">
        <main>
          {modalCtx.items.map((item) => (
            <CartModalItem
              item={item}
              key={item.id}
              onRemove={handleCartItemRemove.bind(null, item.id)}
              onAdd={handleCartItemAdd.bind(null, item)}
            />
          ))}
        </main>
        <div className="cart-modal__amount">
          <span>Total Amount</span>
          <span>${modalCtx.totalAmount.toFixed(2)}</span>
        </div>
        <div className="cart-modal__actions">
          <button
            className="cart-modal__actions--close"
            onClick={props.onCartModalClose}
          >
            CLOSE
          </button>
          {modalCtx.items.length > 0 && (
            <button className="cart-modal__actions--order">ORDER</button>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;
