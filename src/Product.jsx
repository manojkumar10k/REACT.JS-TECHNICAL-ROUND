import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]); // State for storing products

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=30") // Fetching 30 products
      .then((response) => {
        setProducts(response.data); // Set products in state
      })
      .catch((error) => {
        console.error("Error fetching products:", error); // Handle error
      });
  }, []);

  return (
    <div>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Product Grid</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>
          <div className="row">
          <div className="row">
  {products && products.map((product) => (
    <div className="col-sm-6 col-md-4 col-lg-4 mb-5" key={product.id}>
      <div className="box">
        <div className="option_container">
          <div className="options">
            <Link to={`/view/${product.id}`} href className="option1" >View</Link>
            {/* <a href className="option2">Buy Now</a> */}
          </div>
        </div>
        <div className="img-box">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <div className="detail-box">
          {/* <h5>{product.title}</h5> */}
          <h5>{product.title.split(" ")[0]}</h5>

          <h6>${product.price}</h6>
        </div>
      </div>
    </div>
  ))}
</div>
          </div>
          <div className="btn-box">
            <a href="#">View All products</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
