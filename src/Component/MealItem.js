import React, { useContext, useState } from "react";
import CartContext from "../Store/cart-context";

const MealItem = (props) => {
  const [input, setInput] = useState(1);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const cartCtx = useContext(CartContext);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleAddToCart = (amount) => {
    cartCtx.addItem({
      id: props.item.id,
      name: props.item.name,
      amount: amount,
      price: props.item.price,
    });
  };
  const handleSubmit = () => {
    if (Number(input) < 1 || Number(input) > 5) {
      setAmountIsValid(false);
      return;
    } else {
      handleAddToCart(Number(input));
      setAmountIsValid(true);
    }
  };
  return (
    <div className="meal-item">
      <div className="meal-item__name">{props.item.name}</div>
      <div className="meal-item__description">{props.item.description}</div>
      <div className="meal-item__price">${props.item.price}</div>
      <div className="meal-item__amount">
        <label>Amount</label>
        <input
          type="number"
          min={1}
          step={1}
          value={input}
          onChange={handleInput}
        />
      </div>
      <button className="meal-item__btn" onClick={handleSubmit}>
        + Add
      </button>
      {!amountIsValid && (
        <p
          style={{
            position: "absolute",
            color: "crimson",
            top: "1rem",
            right: "7rem",
          }}
        >
          Please enter a valid number (1 - 5)
        </p>
      )}
    </div>
  );
};

export default MealItem;
