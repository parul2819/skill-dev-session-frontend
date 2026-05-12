import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import {addItem, clearCart, removeItem} from "../utils/cartSlice";

const MenuItem = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");











  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://127.0.0.1:8000/menu-items/");

        if (!response.ok) {
          throw new Error(`Failed to load menu items: ${response.status}`);
        }

        const data = await response.json();
        const allMenuItems = Array.isArray(data) ? data : data.results || [];
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
  if (!menuItems.length) return <div className="p-4">No menu items found.</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Menu Items</h2>

      <div className="space-y-3">
        {menuItems.map((item) => (
          <div
            key={item.item_id}
            className="border border-gray-200 p-4 rounded-md flex items-start justify-between gap-4"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{item.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700">
                  {item.is_veg ? "Veg" : "Non-Veg"}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {item.description || "No description"}
              </p>
              <p className="text-sm font-semibold mt-2">Rs. {item.price}</p>
              <p className="text-sm text-gray-500">
                {item.is_available ? "Available" : "Unavailable"}
              </p>
            </div>

            <button
              type="button"
              className="shrink-0 px-4 py-2 rounded-md border border-green-600 text-green-700 font-medium hover:bg-green-600 hover:text-white transition-colors"
              onClick={() => dispatch(addItem(item))}
            >
              Add
            </button>

            <button
              type="button"
              className="shrink-0 px-4 py-2 rounded-md border border-green-600 text-green-700 font-medium hover:bg-green-600 hover:text-white transition-colors"
              onClick={() => dispatch(removeItem(item.item_id))}
            >
              Remove This Item
            </button>

            <button
              type="button"
              className="shrink-0 px-4 py-2 rounded-md border border-green-600 text-green-700 font-medium hover:bg-green-600 hover:text-white transition-colors"
              onClick={() => dispatch(clearCart())}
            >
              Remove All Items
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
