import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setIsLogin(!!user);

    if (user) {
      const cart = JSON.parse(localStorage.getItem(`cart_${user.id}`)) || [];
      setCartCount(cart.length);
    } else {
      setCartCount(0);
    }
  }, []);

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <img width={250} src="images/logo.png" alt="E-Commerce Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                {!isLogin ? (
                  <>
                    <li className="nav-item">
                      <Link to="/registration" className="nav-link">Register</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">Login</Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link btn btn-dark btn-sm text-white"><i className="fa-solid fa-user fa-xl" style={{ color: "#FFD43B" }}></i> {user.name[0].toUpperCase()}</Link>
                  </li>
                )}
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    {/* Cart Icon SVG */}
<i className="fa badge fa-lg" value={8}></i>

                    <span className="cartCount">{cartCount}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
