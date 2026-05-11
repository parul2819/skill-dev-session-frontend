import {useContext} from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { userName } = useContext(UserContext);
  const { restaurantData } = props;
  const { name, address, phone_number, status, restaurant_id } = restaurantData;

  return (
    <div className="restaurant-card p-[10px] w-[265px] bg-[#f0f0f0] m-[20px]">
      <img
        alt="Restaurant"
        loading="lazy"
        src={`https://picsum.photos/300/200?random=${restaurant_id}`}
      />

      <div className="restaurant-card-body p-[0px_10px]">
        <h3 className="m-[10px_0px]">{name}</h3>
        <h4 className="m-[10px_0px]">{status}</h4>
        <span>{address || "No address added"}</span>
        <span>{phone_number || "No phone number added"}</span>
        <p className="my-text-sm text-gray-600:"> User: { userName }</p>
      </div>
      </div>
  );
};

export default RestaurantCard;