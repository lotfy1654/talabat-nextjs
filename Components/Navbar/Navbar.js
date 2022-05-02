import Image from "next/image";
import Link from "next/link";
import Logo from "../../images/logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="Box-nav">
        <Image src={Logo} alt="home" />
        <div className="nav-links">
          <span className="icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul>
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
              <Link className="link" href="/partner">
                Partner
              </Link>
            </li>
            <li>
              <Link className="link" href="/restaurants">
                Restaurants
              </Link>
            </li>
            <li>
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
