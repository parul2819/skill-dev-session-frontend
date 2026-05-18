import { addItem, removeItem } from "@features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const MenuItemCount = ({ item, menuItemCount }) => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const cartItem = menuItemCount.find(
    (i) => i.item_id === item.item_id
  );

  const itemCount = cartItem?.quantity || 0;

  const dispatch = useDispatch();

  return (
    <div className={`flex items-center gap-3 rounded-full border px-3 py-2 ${
      isDarkMode ? "border-slate-700 bg-slate-950" : "border-slate-200 bg-slate-50"
    }`}>
      <button
        type="button"
        className={`shrink-0 rounded-full px-4 py-2 font-medium transition-colors ${
          isDarkMode
            ? "border border-emerald-400 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950"
            : "border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
        }`}
        onClick={() => dispatch(addItem(item))}
      >
        +
      </button>

      <p className={isDarkMode ? "min-w-6 text-center font-semibold text-slate-100" : "min-w-6 text-center font-semibold text-slate-900"}>{itemCount}</p>

      <button
        type="button"
        className={`shrink-0 rounded-full px-4 py-2 font-medium transition-colors ${
          isDarkMode
            ? "border border-emerald-400 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950"
            : "border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
        }`}
        onClick={() => dispatch(removeItem(item.item_id))}
      >
        -
      </button>
    </div>
  );
};

export default MenuItemCount;
