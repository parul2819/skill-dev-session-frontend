import {useContext} from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router";
import UserContext from "@utils/UserContext";
import { RESTAURANT_CARD_IMAGE_BASE_URL } from "@utils/constants";

const RestaurantCard = (props) => {
  const { userName } = useContext(UserContext);
  const { restaurantData } = props;
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const { name, address, phone_number, status, restaurant_id } = restaurantData;

  return (
    <Link to={`/restaurant/${restaurant_id}`}
        className={`restaurant-card m-[20px] w-[265px] overflow-hidden rounded-2xl border shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md ${
        isDarkMode ? "border-slate-700 bg-slate-800 text-slate-100" : "border-rose-100 bg-gradient-to-br from-white via-rose-50/60 to-sky-50/60 text-slate-900"
        }`}>
        <img
          alt="Restaurant"
          loading="lazy"
          src={`${RESTAURANT_CARD_IMAGE_BASE_URL}${restaurant_id}`}
          className="h-[180px] w-full object-cover"
        />

      <div className="restaurant-card-body space-y-2 p-4">
        <h3 className="text-base font-semibold">{name}</h3>
        <h4 className="text-sm text-slate-600">{status}</h4>
        <span className="block text-sm text-slate-600">{address || "No address added"}</span>
        <span className="block text-sm text-slate-600">{phone_number || "No phone number added"}</span>
        <p className="text-sm text-slate-500">User: {userName}</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
