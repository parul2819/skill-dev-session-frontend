import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../cart/cartSlice";
import MenuItemCard from "../menu/MenuItemCard";
import MenuItemCount from "../menu/MenuItemCount";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price + item.quantity, 0);
    const dispatch = useDispatch();

    console.log("cart items ----- ", cartItems);

    return (
        <div className="cartpage p-20 max-w-4xl mx-auto">
            <h1>Cart</h1>

            {cartItems.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                cartItems.map((item, index) => (
                    <div
                    key={item.item_id}
                    className="border border-gray-200 p-4 rounded-md flex items-center justify-between gap-4"
                >
                    {/*<MenuItemCard key={`${item.item_id}-${index}`} item={item} />*/}
                    <MenuItemCard item={item} />
                    <MenuItemCount item={item} menuItemCount={cartItems} />
                    <p>Rs. {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))
            )}
            <h1> Total Price: {totalPrice}</h1>
             <button
            type="button"
            className="mt-4 shrink-0 px-4 py-2 rounded-md border border-green-600 text-green-700 font-medium hover:bg-green-600 hover:text-white transition-colors"
            onClick={() => dispatch(clearCart())}
          >
            Remove All Items
          </button>
        </div>
    );
};

export default Cart;
