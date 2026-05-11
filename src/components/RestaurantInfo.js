import React from "react";
import { useParams } from "react-router";

const RestaurantInfo = () => {
  const { restaurantId } = useParams();

  return (
    <div className="restaurant-info p-6 max-w-4xl mx-auto">
      <h1>Restaurant Details</h1>
      <p>Restaurant ID: {restaurantId}</p>
      <p>
        This page will display detailed information for the selected restaurant.
      </p>   
    </div>
  );
};

export default RestaurantInfo;
