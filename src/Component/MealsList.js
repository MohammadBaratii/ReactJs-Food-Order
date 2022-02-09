import React from "react";
import Card from "./Card";
import MealItem from "./MealItem";

const MealList = (props) => {
  return (
    <Card className="meals-list-card">
      <div className="meals-list">
        {props.DUMMY_MEALS.map((item) => {
          return <MealItem item={item} key={item.id} />;
        })}
      </div>
    </Card>
  );
};

export default MealList;
