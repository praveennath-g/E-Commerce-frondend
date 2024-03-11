import React, { useState,useEffect } from "react";
import { FiTruck } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./nav.css";
const Nav = ({ searchbtn }) => {
  
  const [search, setSearch] = useState();
  
  const [mode, setMode] = useState("light");
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  //update page style based on the current mode 
  useEffect(()=>{
    const root =document.documentElement;
    if(mode === "dark"){
      root.style.setProperty("--background-color","#B4BDFF");//#B4BDFF #86B6F6 #AAD9BB #7FC7DCF  #92C7CF
      root.style.setProperty("--text-color","fff");
    }else{
      root.style.setProperty("--background-color","#fff");
      root.style.setProperty("--text-color","#000");
    }
  },[mode]);
  const toggleMode = () =>{
    setMode((prevMode)=>(prevMode === "light"?"dark":"light"));
  }
  return (
    <>
    
      <div className="free">
        <div className="icon">
          <FiTruck />
        </div>

        <p> FREE Shipping When Shopping Upto $1000</p>
        <button onClick={toggleMode}>Toggle mode</button>
      </div>
      
             <div className="main-header">
             
      <marquee behavior="scroll" direction="left" scrollamount="5" Color="green">"Shop Now for Exclusive Deals & Offers! 🛍️ Hurry, Limited Stock Available! 💥 Explore Our Latest Collection Today! 🌟 Fast Shipping & Easy Returns! 🚚💨" The offers get close soon !!!</marquee>
    
            <div className="container">
            <div className="logo">
            <img src="./images/logo.png" width="100px" alt=" Company logo" />
                      </div>
             <div className="search-box">
            <input type="text"value= {search}placeholder="Search your product... "autoComplete=""onChange={(e) => setSearch(e.target.value)}></input>
              <button onClick={() => searchbtn(search)}>Search</button>
            </div>
          <div className="icon">
            {isAuthenticated && (
              <div className="account">
                <div className="user-icon">
                  <FaRegUser />
                </div>
                <p>Hello,{user?.name}</p>
              </div>
            )}

            <div className="second-icon">
              <Link to="/" className="link">
                <FaRegHeart />
              </Link>
              <Link to="/ cart" className="link">
                <IoCartOutline />
              </Link>
              </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="Nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="link">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  about
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="auth">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })}>Logout
                <CiLogout />
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>Login
                <CiLogin />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
