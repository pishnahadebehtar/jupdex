import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import pic from "../New Microsoft PowerPoint Presentation.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav">
      <h1>SHOP SHOP SHOP</h1>
      <Link className="cart-link">
        <div className="counter"></div>
        <img src={pic} className="shopping-cart" />
      </Link>
    </div>
  );
}

export default Nav;
