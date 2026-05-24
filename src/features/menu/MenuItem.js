import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {useSelector} from "react-redux";
import MenuItemCard from "@features/menu/MenuItemCard";
import MenuItemCount from "@features/menu/MenuItemCount";
import {API_BASE_URL, MENU_ITEMS_API_URL} from "@utils/constants";

const MenuItem = () => {
  const {restaurantId} = useParams();
  const menuItemCount = useSelector((store) => store.cart.items);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        setError("");

        // const response = await fetch("http://127.0.0.1:8000/menu-items/");
        const menuItemsResponse = await axios.get(
            API_BASE_URL + MENU_ITEMS_API_URL
            // "http://127.0.0.1:8000/menu-items/"
        );

        // const data = await response.json();
        const allMenuItems = Array.isArray(menuItemsResponse.data)
            ? menuItemsResponse.data
            : menuItemsResponse.data.results || [];

        const filteredMenuItems = allMenuItems.filter(
            (item) => item.restaurant_id === Number(restaurantId)
        );

        setMenuItems(filteredMenuItems);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (restaurantId) {
      fetchMenuItems();
    }
  }, [restaurantId]);

  if (loading) return <div className="p-4">Loading menu items...</div>;
  if (error) return <div className="p-4">Error: {error}</div>;

  if (!menuItems.length)
    return <div className="p-4">No menu items found.</div>;

  return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Menu Items</h2>

        <div className="space-y-3">
          {menuItems.map((item) => {
            return (
                <div
                    key={item.item_id}
                    className="border border-gray-200 p-4 rounded-md flex items-start justify-between gap-4"
                >
                  <MenuItemCard item={item}/>
                  <MenuItemCount item={item} menuItemCount={menuItemCount} />

                </div>
            );
          })}
        </div>
      </div>
  );
}

export default MenuItem;
