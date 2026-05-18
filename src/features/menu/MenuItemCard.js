// import {addItem, clearCart, removeItem} from "../utils/cartSlice";
import React from "react";
import { useSelector } from "react-redux";

const MenuItemCard = ({ item }) => {
    const isDarkMode = useSelector((store) => store.theme.isDarkMode);
return (
    // <div className="p-4">
    //   <h2 className="text-xl font-semibold mb-4">Menu Items</h2>

      <div className={`flex items-start justify-between gap-4 rounded-2xl border p-4 shadow-sm ${
        isDarkMode ? "border-slate-700 bg-slate-900" : "border-rose-100 bg-gradient-to-br from-white via-rose-50/50 to-sky-50/50"
      }`}>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className={`font-semibold ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>{item.name}</h3>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
                  {item.is_veg ? "Veg" : "Non-Veg"}
                </span>
              </div>
              <p className={`mt-1 text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                {item.description || "No description"}
              </p>
              <p className={`mt-2 text-sm font-semibold ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>Rs. {item.price}</p>
              <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                {item.is_available ? "Available" : "Unavailable"}
              </p>
            </div>
          </div>
    // </div>
  );
}

export default MenuItemCard;
