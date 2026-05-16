import { addItem, removeItem } from "../cart/cartSlice";
import { useDispatch } from "react-redux";

const MenuItemCount = ({ item, menuItemCount }) => {
  const cartItem = menuItemCount.find(
    (i) => i.item_id === item.item_id
  );

  const itemCount = cartItem?.quantity || 0;

  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        className="shrink-0 px-4 py-2 rounded-md border border-green-600 text-green-700 font-medium hover:bg-green-600 hover:text-white transition-colors"
        onClick={() => dispatch(addItem(item))}
      >
        +
      </button>

      <p>{itemCount}</p>

      <button
        type="button"
        className="shrink-0 px-4 py-2 rounded-md border border-green-600 text-green-700 font-medium hover:bg-green-600 hover:text-white transition-colors"
        onClick={() => dispatch(removeItem(item.item_id))}
      >
        -
      </button>
    </>
  );
};

export default MenuItemCount;