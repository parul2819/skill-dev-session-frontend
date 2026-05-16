import React from "react";
import { useParams } from "react-router";
import MenuItem from "../menu/MenuItem";

const RestaurantInfo = () => {
  const { restaurantId } = useParams();

  return (
    <div className="restaurant-info p-20 max-w-4xl mx-auto">

      <MenuItem />
    </div>
  );
};

export default RestaurantInfo;
