// import {addItem, clearCart, removeItem} from "../utils/cartSlice";
import React from "react";

const MenuItemCard = ({ item }) => {
    console.log("menu item card --- ", item)
return (
    // <div className="p-4">
    //   <h2 className="text-xl font-semibold mb-4">Menu Items</h2>

      <div className="border border-gray-200 p-4 rounded-md flex items-start justify-between gap-4">
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
          </div>
    // </div>
  );
}

export default MenuItemCard;