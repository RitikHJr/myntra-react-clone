import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdMenu } from "react-icons/io";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [hideActionBar, setHideActionBar] = useState(false);
  const bag = useSelector((store) => store.bag);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <Link to="/men">Men</Link>
        {/* <a href="#"></a> */}
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>

      {/* ---- action bar */}

      <div
        className={`action_bar  ${hideActionBar ? "hide-mobile-menu" : ""} `}
      >
        <div className="action_container">
          <BsFillPersonFill />
          <span className="action_name">Profile</span>
        </div>
        <div className="action_container">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>
        <div className="bag_link_container">
          <Link className="action_container" to="/bag">
            <FaShoppingBag />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </div>
      <IoMdMenu
        className="menu-icon"
        // onClick={
        //   hideActionBar ? setHideActionBar(false) : setHideActionBar(true)
        // }
        onClick={() => {
          {
            hideActionBar ? setHideActionBar(false) : setHideActionBar(true);
          }
        }}
      />
    </header>
  );
};

export default Navbar;
