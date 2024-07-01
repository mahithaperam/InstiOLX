// components/Product.js
import React from 'react';

const Product = ({ id, name, price, onAddToCart }) => {
    return (
        <div className="product">
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={() => onAddToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Product;
// pages/ProductsPage.js
import React from 'react';
import Product from '../components/Product';

const ProductsPage = ({ products, onAddToCart }) => {
    return (
        <div className="products">
            {products.map(product => (
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
};

export default ProductsPage;
// components/CartItem.js
import React from 'react';

const CartItem = ({ id, name, price }) => {
    return (
        <div className="cart-item">
            <h3>{name}</h3>
            <p>${price}</p>
        </div>
    );
};

export default CartItem;
// pages/CartPage.js
import React from 'react';
import CartItem from '../components/CartItem';

const CartPage = ({ cart }) => {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cart.map(item => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                    <p>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
                    <button>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
// App.js
import React, { useState } from 'react';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (productId) => {
        // Logic to add product to cart based on productId
        // Assuming products are fetched or defined somewhere
        const productToAdd = products.find(product => product.id === productId);
        setCart([...cart, productToAdd]);
    };

    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 }
    ];

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to our Web Shop</h1>
            </header>
            <main>
                <ProductsPage products={products} onAddToCart={addToCart} />
                <CartPage cart={cart} />
            </main>
        </div>
    );
};

export default App;
