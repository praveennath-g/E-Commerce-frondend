import React from "react";
 import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./cart.css";


 const Cart = ({ cart, setCart }) => {
  

  console.log("Cart Component - cart:",cart);
  console.log("Cart Component -setCart:",setCart);
  //increase quantity
  const incqty =(Product)=>
  {
    const exist = cart.find((x)=>
    {
      return x.id === Product.id
    })
    setCart(cart.map((curElm)=>{
      return curElm.id=== Product.id ?{...exist,qty:exist.qty +1}:curElm
    }))

  };
//decrease quantity
const decqty =(Product)=>
  {
    const exist = cart.find((x)=>
    {
      return x.id === Product.id
    })
    setCart(cart.map((curElm)=>{
      return curElm.id=== Product.id ?{...exist,qty:exist.qty - 1}:curElm
    }))

  }
  //remove cart product
  const removeproduct=(Product)=>
  {
    const exist = cart.find((x)=>
    {
      return x.id ===Product.id
    })
    if(exist.qty > 0)
    {
      setCart(cart.filter((x)=>
      {
        return x.id !== Product.id
      }))
    }
  }
  
  //Total price

  const Totalprice=cart.reduce((price,item)=>price +item.qty*item.price,0)
  
  return (
    <>
      <div className="cartcontainer">
        {
        cart.length === 0 && 
        (
          <div className="emptycart">
            <h2 className="empty">Cart is Empty</h2>
            <Link to="/product" className="emptycartbtn">shop Now </Link>
          </div>
        )}
        <div className="contant">
          {cart.map((curElm) => 
          {
            return (
              <div className="cart-item" key={curElm.id}>
                <div className="img-box">
                  <img src={curElm.Img} alt={curElm.Title}></img>
                </div>
                <div className="detail">
                  <div className="info">
                  <h4>{curElm.cat}</h4>
                  <h3>{curElm.Title}</h3>
                  <p>Price:{curElm.price}</p>
                  <div className="qty">
                    <button className="incqty" onClick={()=>incqty(curElm)}>+</button>
                    <input type="text" value={curElm.qty}></input>
                    <button className="decqty" onClick={()=>decqty(curElm)}>-</button>
                  </div>
                  
                  <h4 className="subtotal">sub total:${curElm.price * curElm.qty}</h4>
                  </div>
                  <div className="close">
                  <button onClick={()=>removeproduct(curElm)}><AiOutlineClose /></button>
                </div>
                </div>
              </div>
            );
          })
          }
        </div>
        {
          cart.length > 0 &&
          <>
            <h2 className="totalprice">total:${Totalprice}</h2>
            <button className="checkout">Checkout</button>
          </>
        }
          
      </div>
    </>
  );
};

export default Cart;