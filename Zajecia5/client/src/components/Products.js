import React, {useState, useEffect} from 'react';
import '../stylesheets/Products.css';
import  {Link} from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotalCost] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(products => setProducts(products))
            .catch(err => console.error(err));
    }, []);

    const addToCart = (product) => {
        const updatedCart = [...cart];
        const cartItem = updatedCart.find(item => item.id === product.id);

        if (cartItem) {
            cartItem.quantity = cartItem.quantity + 1;
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }

        setTotalCost(total + product.price); // Dodajemy cenę produktu do całkowitej wartości koszyka
        setCart(updatedCart);
    };

    const removeFromCart = (product) => {
        const cartProducts = [...cart];
        const cartItem = cartProducts.find(item => item.id === product.id);
        if(cartItem) {
            if(cartItem.quantity  === 1) {
                setCart(cart.filter(item => item.id !== product.id));
            }
            else {
                cartItem.quantity = cartItem.quantity - 1;
                setCart(cartProducts);
            }
            setTotalCost(total - cartItem.price);
        }
    };

    const isProductInCart = (product) => {
        const cartItem = cart.find(item => item.id === product.id);
        return cartItem && cartItem.quantity > 0;
    };


    return (
        <div className='products-container'>
            <h1>Products</h1>
            <ul className='list'>
                {products.map(product => (
                    <li key={product.id} className='item'>
                        <span className="product-name">{product.name}</span> - <span className="product-price">${product.price.toFixed(2)}</span>
                        {isProductInCart(product) ? (
                            <button onClick={() => removeFromCart(product)}>Remove from cart</button>
                        ) : ''}
                        <button onClick={() => addToCart(product)}>Add to cart</button>
                    </li>
                ))}
            </ul>
            <div className='summary'>
                <h2>Summary</h2>
                <p>Total Cost: ${total.toFixed(2)}</p>
                {cart.length > 0 && (
                    <Link to="/payments">
                        <button>Pay</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Products;