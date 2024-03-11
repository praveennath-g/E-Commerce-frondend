
import Productdetail from "./productdetail";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import "./product.css";
// import { useState } from "react";

const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart,
}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  
  const filterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.cat === product;
    });
    setProduct(update);
  };
  const AllProducts = () => {
    setProduct(Productdetail);
  };

  return (
    <>
      {close ? (
        <div className="product-detail">
          <button onClick={() => setClose(false)} className="closebtn">
            <IoIosCloseCircleOutline />
          </button>
          <div className="container">
            {detail.map((curElm) => {
              return (
                <div className="productbox">
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className="detail">
                    <h4>{curElm.cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>
                      A Screen Eveyone Love:Whether your family is streaming or
                      video chatting with friends tablet A8...
                    </p>
                    <h3>{curElm.price}</h3>
                    <button>Add To Cart</button>
                  </div>
                </div>
              );
            })}

            <div className="productbox"></div>
          </div>
        </div>
      ) : null}
      {close && (
        <div className="product-detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              {" "}
              <IoIosCloseCircleOutline />
            </button>

            {detail.map((curElm) => {
              return (
                <div className="productbox">
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className="detail">
                    <h4>{curElm.cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>
                      {" "}
                      A Screen Eveyone Love:Whether your family is streaming or
                      video chatting with friends tablet A8...
                    </p>
                    <h3>{curElm.price}</h3>
                    <button>Add To Cart</button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
          </div>
        </div>
      )}
      <div className="products">
        <h2># Products</h2>
        <p>Home . Products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filterproduct("Tablet")}>Tablet</li>
                <li onClick={() => filterproduct("Smart watch")}>
                  Smart watch
                </li>
                <li onClick={() => filterproduct("Headphone")}>Headphone</li>
                <li onClick={() => filterproduct("Camera")}>Camera</li>
                <li onClick={() => filterproduct("Gaming pad")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((curElm) => {
                return (
                  <>
                    <div className="box" key={curElm.id}>
                      <div className="img-box">
                        <img src={curElm.Img} alt={curElm.title}></img>
                        <div className="icon">
                          {isAuthenticated ? (
                            <li onClick={() => addtocart(curElm)}>
                              <FaShoppingCart />
                            </li>
                          ) : (
                            <li onClick={() => loginWithRedirect()}>
                              <FaShoppingCart />
                            </li>
                          )}
                          <li onClick={() => view(curElm)}>
                            <AiOutlineEye />
                          </li>
                          <li>
                            <IoHeartOutline />
                          </li>
                        </div>
                      </div>
                      <div className="detail">
                        <p>{curElm.cat}</p>
                        <h3>{curElm.Title}</h3>
                        <h4>${curElm.price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
