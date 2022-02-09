import React from "react";

const CartModalItem = ({ item, onAdd, onRemove }) => {
  return (
    <div className="cart-modal-item">
      <div className="cart-modal-item__info">
        <h3>{item.name}</h3>
        <h4>${item.price}</h4>
        <p>×{item.amount}</p>
      </div>
      <div className="cart-modal-item__actions">
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
  );
};

export default CartModalItem;
