import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./nav.css";

const Nav = () => {
const [navshow,setNavShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100) {
                setNavShow(true)
            }else{
                setNavShow(false)
            }
        })
    })


  return (
    <div className={`nav_container ${navshow && "nav_container_balce"}`}>
      <div className="nav_item">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" className="nav_logo" />
      </div>

      <div className="nav_item">
        <button className="nav_button">Sign Up</button>
      </div>
    </div>
  );
};

export default Nav;
