import React from "react";
import { useParams } from "react-router";
import MenuItem from "../menu/MenuItem";

const RestaurantInfo = () => {
  const { restaurantId } = useParams();

  return (
    <div className="restaurant-info p-20 max-w-4xl mx-auto">
      {/*<h1>Restaurant Details</h1>*/}
      {/*<p>Restaurant ID: {restaurantId}</p>*/}
      {/*<p>*/}
      {/*  This page will display detailed information for the selected restaurant.*/}
      {/*</p>*/}
      <MenuItem />
    </div>
  );
};

export default RestaurantInfo;
