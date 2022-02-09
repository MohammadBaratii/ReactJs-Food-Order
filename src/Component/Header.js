import React from "react";
import { MdRestaurant } from "react-icons/md";
import Card from "./Card";
import HeaderCart from "./HeaderCart";
const Header = (props) => {
  return (
    <Card className="header-card">
      <div className="header">
        <h1>
          YUMMY FOOD
          <MdRestaurant />
        </h1>
        <HeaderCart onCartModalOpen={props.onCartModalOpen} />
      </div>
    </Card>
  );
};

export default Header;
