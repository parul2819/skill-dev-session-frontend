import { useSelector } from "react-redux";
import MenuItemCard from "../menu/MenuItemCard";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    console.log("cart items ----- ", cartItems);

    return (
        <div className="cartpage p-20 max-w-4xl mx-auto">
            <h1>Cart</h1>

            {cartItems.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                cartItems.map((item, index) => (
                    <MenuItemCard key={`${item.item_id}-${index}`} item={item} />
                ))
            )}
        </div>
    );
};

export default Cart;
