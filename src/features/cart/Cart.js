import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@features/cart/cartSlice";
import MenuItemCard from "@features/menu/MenuItemCard";
import MenuItemCount from "@features/menu/MenuItemCount";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const isDarkMode = useSelector((store) => store.theme.isDarkMode);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const dispatch = useDispatch();

    return (
        <div className={`cartpage mx-auto max-w-5xl px-4 py-24 ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>
            <h1 className="mb-6 text-2xl font-semibold">Cart</h1>

            {cartItems.length === 0 ? (
                <p className={isDarkMode ? "text-slate-400" : "text-slate-500"}>No items in the cart.</p>
            ) : (
                <div className="space-y-4">
                {cartItems.map((item, index) => (
                    <div
                    key={item.item_id}
                    className={`flex items-center justify-between gap-4 rounded-2xl border p-4 shadow-sm ${
                        isDarkMode
                            ? "border-slate-700 bg-slate-900"
                            : "border-rose-100 bg-gradient-to-br from-white via-rose-50/50 to-sky-50/50"
                    }`}
                >
                    <MenuItemCard item={item} />
                    <div className="flex items-center gap-4">
                        <MenuItemCount item={item} menuItemCount={cartItems} />
                        <p className={`min-w-[100px] text-right text-sm font-semibold ${
                            isDarkMode ? "text-slate-100" : "text-slate-900"
                        }`}>
                            Rs. {(item.price * item.quantity).toFixed(2)}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            )}
            <div className="mt-6 flex justify-end">
                <h1 className={`min-w-[100px] text-right text-lg font-semibold ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>
                    Total Price: Rs. {totalPrice.toFixed(2)}
                </h1>
            </div>
             <button
            type="button"
            className={`mt-4 rounded-lg border px-4 py-2 font-medium transition-colors ${
                isDarkMode
                    ? "border-emerald-400 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950"
                    : "border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
            }`}
            onClick={() => dispatch(clearCart())}
          >
            Remove All Items
          </button>
        </div>
    );
};

export default Cart;
