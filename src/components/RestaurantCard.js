import {useContext} from "react";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
import { Link } from "react-router";

const RestaurantCard = (props) => {
  const { userName } = useContext(UserContext);
  const { restaurantData } = props;
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const { name, address, phone_number, status, restaurant_id } = restaurantData;

  return (
    <Link to={`/restaurant/${restaurant_id}`}
        className={`restaurant-card p-[10px] w-[265px] m-[20px] ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-[#f0f0f0] text-black"
        }`}>
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
        <p className="my-text-sm text-gray-600"> User: { userName }</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;