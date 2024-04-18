import React, { useContext } from "react";
import {CartContext} from "../CartContext";
import { Link } from "react-router-dom";
import "../stylesheets/Cart.css";


const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                {item.name} - Price: {item.price.toFixed(2)} - Quantity: {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <Link to="/payments">
                        <button>Proceed to Payment</button>
                    </Link>
                </>
            )}
            <Link to="/products">
                <button>Back to Products</button>
            </Link>
        </div>
    );
};

export default Cart;