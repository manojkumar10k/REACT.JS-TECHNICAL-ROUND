import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; 
import { toast } from 'react-toastify/unstyled';

function View() {
  const { viewId } = useParams();
  const [product, setProduct] = useState({});
  const [rate, setRate] = useState(null);
  const [count, setCount] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    
    axios.get(`https://fakestoreapi.com/products/${viewId}`)
      .then((response) => {
        const data = response.data;
        setProduct(data);
        setTitle(data.title);
        setImage(data.image);
        setPrice(data.price);
        setRate(data.rating.rate);
        setCount(data.rating.count);
        setDescription(data.description);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });
  }, [viewId]);

  
  
  const handleAddtoCart = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      const cartKey = `cart_${user.id}`;
      const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

      const productIndex = cart.findIndex((item) => item.id === viewId);

      if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem(cartKey, JSON.stringify(cart));
       setTimeout(() => {
              navigate('/cart');
              window.location.reload();

       }, 5000);
      
      // toast.success("add data")
      toast.success("data add")
    }
  };
  return (
    <div>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    {/* Product Image */}
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                          <img src={image} className="img-fluid product-thumbnail" style={{ width: '200px', height: '200px' }} />
                        </div>
                        <a href="#!">
                          <div className="hover-overlay">
                            <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }} />
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* Product Details */}
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>{title}</h5>
                      <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <span>{rate}   <span>Count: {count}</span></span>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">${price}</h4>
                      </div>
                      <h6 className="text-success">Free shipping</h6>
                      <div className="d-flex flex-column mt-4">
                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm" type="button" onClick={handleAddtoCart} >Buy now</button>
                        <Link to="/product" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <h5>Description</h5>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default View;
