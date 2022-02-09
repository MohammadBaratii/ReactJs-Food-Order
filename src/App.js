import React from "react";
import { useState } from "react/cjs/react.development";
import CartModal from "./Component/CartModal";
import Header from "./Component/Header";
import MealList from "./Component/MealsList";
import MealsSummary from "./Component/MealsSummary";
import CartProvider from "./Store/CartProvider";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const App = () => {
  const [cartModal, setCartModal] = useState(false);
  const handleCartModalClose = () => {
    setCartModal(false);
  };
  const handleCartModalOpen = () => {
    setCartModal(true);
  };

  return (
    <CartProvider>
      {cartModal && (
        <CartModal
          onCartModalClose={handleCartModalClose}
          DUMMY_MEALS={DUMMY_MEALS}
        />
      )}
      <Header onCartModalOpen={handleCartModalOpen} />
      <div className="app__img"></div>
      <MealsSummary />
      <MealList DUMMY_MEALS={DUMMY_MEALS} />
    </CartProvider>
  );
};

export default App;
