import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Cart() {
  const [cartItem, setCartItem] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')); 
    if (user) {
      const cart = JSON.parse(localStorage.getItem(`cart_${user.id}`)) || [];
      setCartItem(cart);
    }
  }, []);

  useEffect(() => {
    const subtotal = cartItem.reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0);
    setSubtotal(subtotal);
    setTotal(subtotal);  
  }, [cartItem]);

  const handleDeleteCart = (item) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const cartKey = `cart_${user.id}`;
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    cart = cart.filter((i) => i.id !== item.id);
    localStorage.setItem(cartKey, JSON.stringify(cart));

    setCartItem(prevItems => prevItems.filter(i => i.id !== item.id));

    toast.success('Item deleted successfully');
    window.location.href="/";
  };

  const handelchange = (productId, quantity) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const cartKey = `cart_${user.id}`;

    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    cart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });

    localStorage.setItem(cartKey, JSON.stringify(cart));

    setCartItem(cart);

    toast.success('Cart item quantity updated');
  };

  return (
    <div className="container mt-5">
      {/* Cart Header */}
      <header className="text-center mb-4">
        <h1>Your Cart</h1>
      </header>

      {/* Cart Items */}
      <section className="cart-items mb-5">
        {cartItem.map((item) => (
          <div key={item.id} className="card mb-3">
            <div className="card-body d-flex align-items-center">
              {/* Product Image */}
              <img src={item.image} alt={item.title} className="img-fluid" style={{ width: '150px', height: '150px' }} />

              {/* Product Info */}
              <div className="ml-3 flex-grow-1">
                <h5>{item.title}</h5>
                <p className="text-muted">${item.price}</p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => item.quantity > 1 && handelchange(item.id, item.quantity - 1)}>-</button>
                  <span className="mx-3">{item.quantity}</span>
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => handelchange(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>

              {/* Product Total */}
              <div className="text-right">
                <p className="mb-0">${(item.quantity * parseFloat(item.price)).toFixed(2)}</p>
                <button className="btn btn-danger btn-sm mt-2" onClick={() => handleDeleteCart(item)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Cart Totals */}
      <section className="cart-totals d-flex justify-content-between mb-4">
        <div className="totals">
          <h2>Cart Totals</h2>
          <div className="d-flex justify-content-between">
            <h6>Subtotal : </h6>
            <h6>${subtotal.toFixed(2)}</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Total:</h6>
            <h6>${total.toFixed(2)}</h6>
          </div>
        </div>

        {/* Checkout Actions */}
        <div className="checkout-actions">
          <Link to="/" className="btn btn-outline-primary btn-block mb-3">Continue Shopping</Link>
          <button className="btn btn-success btn-block">Proceed to Checkout</button>
        </div>
      </section>
    </div>
  );
}

export default Cart;
