import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { LuBadgePercent } from "react-icons/lu";
import { FaHeadphones } from "react-icons/fa";
import { FaShoppingCart,} from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineEye } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";
import Homeproduct from "./homeproduct";
import "./home.css";
const Home = ({detail,view,close,setClose,addtocart}) => {
  return (
    <>
    {
      close ?
      <div className="product-detail">
      <div className="container">
        <button onClick={()=>setClose(false)} className='closebtn'><IoIosCloseCircleOutline/></button>
        {
          detail.map((curElm)=>
          {
              return (
                <div className="productbox">
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                <div className="detail">
                  <h4>{curElm.cat}</h4>
                  <h2>{curElm.Title}</h2>
                  <p>A Screen Eveyone Love:Whether your family is streaming or video chatting with friends tablet A8...</p>
                  <h3>{curElm.price}</h3>
                  <button>Add To Cart</button>
                </div>
                </div>
              )
          })
        }
        <div className="productbox"></div>
      </div>
    </div>:null 
    }
      <div className="top-banner">
        <div className="container">
          <div className="detail">
            <h2>TheBest Note Book Collectios 2023</h2>
            <Link to="/product" className="link">shop now<FaArrowRight /></Link>
          </div>
          <div className="img-box">
            <img src="./images/hplaptop.png" alt="sliderimage"></img>
          </div>
        </div>
      </div>
      <div className="product-type">
        <div className="container">
          <div className="box">
            <div className="img-box">
              <img src="./images/mobile.jpg" width="80%" alt="mobile"></img>
            </div>
            <div className="detail">
              <p>23 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img
                src="./images/headphone.jpg"
                width="80%"
                alt="headphone"
              ></img>
            </div>
            <div className="detail">
              <p>52 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./images/shoes.jpg" width="80%" alt="cpu heat"></img>
            </div>
            <div className="detail">
              <p>63 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./images/smartwatch.jpg" width="80%" alt="smartwatch"></img>
            </div>
            
            <div className="detail">
              <p>18 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>order above $1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FiDollarSign />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Money Back Guarantee</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <LuBadgePercent />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On Every Order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaHeadphones />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>Every Time call support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {
          Homeproduct.map((curElm) =>
           {
            return (
              <div className="box" key={curElm.id}>
                <div className="img-box">
                  <img src={curElm.Img} alt={curElm.title}></img>
                  <div className="icon">
                    <li onClick={()=> addtocart(curElm)}><FaShoppingCart/></li>
                    <li onClick={()=>view(curElm)}><AiOutlineEye/></li>
                    <li> <IoHeartOutline/></li>
                                               
                  </div>
                </div>
                <div className="detail">
                  <p>{curElm.cat}</p>
                  <h3>{curElm.title}</h3>
                  <h4>${curElm.price}</h4>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
      <div className="banner">
        <div className="container">
        <div className="detail">
          <h4>LATEST TECHNOLOGY ADDED</h4>
          <h3>Apple ipad 10.2 9th Gen -2021</h3>
          <p>$ 48,500</p>
          <Link to='/product' className="link">Shop Now< BiRightArrowAlt/></Link>
        </div>
        <div className="img-box">
          <img src="./images/9th.png"  alt="sliderimg"></img>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Home;
