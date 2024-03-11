import React, { useState } from "react";
import PaymentProcess from "./paymentGateway";
import Nav from "./nav";
import Rout from "./rout";
import { BrowserRouter } from "react-router-dom";
import Footer from "./footer";
import Productdetail from "./productdetail";


const App = () => {
  //add to cart
  const [cart, setCart] = useState([
    { id: 1, title: "Product 1", qty: 2, price: 10 },
    { id: 2, title: "Product 1", qty: 1, price: 20 },
  ]);

  const handlePaymentCancel = () => {
    alert("Payment canceled of failed.Please try again");
  };

  const handlePaymentSuccess = () => {
    alert("Payment successfull Thank you for your purchase");
  };

  //product detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  //filter product
  const [product, setProduct] = useState(Productdetail);
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.cat === product;
    });
    setProduct(change);
  };
  //product detail
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  //add to cart

  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("this product is already added to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("product is added to the cart");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />

        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addtocart={addtocart}
        />
        

        <PaymentProcess
          cart={cart}
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentCancel={handlePaymentCancel}
        />
        
        
        <Footer />
        
        
      </BrowserRouter>
      
    </>
  );
};

export default App;
