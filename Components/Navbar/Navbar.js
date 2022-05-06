import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../images/logo.svg";
import { AiOutlineCloseCircle } from "react-icons/ai"

function Navbar() {
  const showNav = () => {
    var navItems = document.getElementById("navBar");
    navItems.classList.add("show-nav")
  }
  const hideNav = () => {
    var navItems = document.getElementById("navBar");
    if (navItems.classList.value === "show-nav") {
      navItems.classList.remove("show-nav")
    }
  }
  return (
    <div className="navbar">
      <div className="Box-nav">
        <Image src={Logo} alt="home" />
        <div className="nav-links">
          <span className="icon" id="show-nav-btn" onClick={showNav}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul id="navBar">
            <li className="close-nav" onClick={hideNav}>
              <span><AiOutlineCloseCircle /></span>
            </li>
            <li>
              <Link className="link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" href="/offers">
                Offers
              </Link>
            </li>
            <li>
              <Link className="link" href="/restaurants">
                Restaurants
              </Link>
            </li>
            <li>
              <Link className="link" href="/partner">
                Partner
              </Link>
            </li>
            <li className="login-nav-link">
              <Link className="link" href="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
