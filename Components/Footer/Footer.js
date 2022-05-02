import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTimes,
  FaArrowDown,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-head">
          <Link href="/">feedback</Link>
          <Link href="/">careers</Link>
          <Link href="/">terms</Link>
          <Link href="/">FAQ</Link>
          <Link href="/">privacy</Link>
          <Link href="/">contact us</Link>
          <Link href="/">sitemap</Link>
        </div>
        <div className="footer-md">
          <div className="footer-center-info">
            <div className="row">
              <div className="col-md-3">
                <h6>Restaurants</h6>
                <p>Most Selling</p>
                <p>Taboon</p>
                <p>Dawar Farah - Mohandiseen</p>
                <p>Planet Africa</p>
                <p>Indira</p>
                <p>Al Aseel El Demashky</p>
              </div>
              <div className="col-md-3">
                <h6>Popular Cuisines</h6>
                <p>Italian</p>
                <p>Mexican</p>
                <p>Sandwiches</p>
                <p>Japanese</p>
                <p>Pizza</p>
              </div>
              <div className="col-md-3">
                <h6>Popular Areas</h6>
                <p>Mostashfa AlHommeyat</p>
                <p>Salah ElDin Street</p>
                <p>Salah Nessim Street</p>
                <p>Shabab El Mosalas</p>
              </div>
              <div className="col-md-3">
                <h6>Follow us on</h6>
                <div className="social-icon">
                  <div className="icon">
                    <FaFacebookF />
                  </div>
                  <div className="icon">
                    <FaTwitter />
                  </div>
                  <div className="icon">
                    <FaInstagram />
                  </div>
                  <div className="icon">
                    <FaLinkedinIn />
                  </div>
                  <div className="icon">
                    <FaYoutube />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="end-footer-md">
            <p>For any support or help you can contact us via our Live Chat</p>
            <p>&copy; 2022 Talabat</p>
          </div>
        </div>
        <div className="footer-sm">
          <div className="footer-sm-items">
            <div className="item">
              <div className="item-head">
                <h6>Restaurants</h6>
                <div className="show">
                  <FaArrowDown />
                </div>
                <div className="hide">
                  <FaTimes />
                </div>
              </div>
              <div className="item-link">
                <p>Most Selling</p>
                <p>Taboon</p>
                <p>Dawar Farah - Mohandiseen</p>
                <p>Planet Africa</p>
                <p>Indira</p>
                <p>Al Aseel El Demashky</p>
              </div>
            </div>
            <div className="item">
              <div className="item-head">
                <h6>Popular Cuisines</h6>
                <div className="show">
                  <FaArrowDown />
                </div>
                <div className="hide">
                  <FaTimes />
                </div>
              </div>
              <div className="item-link">
                <p>Italian</p>
                <p>Mexican</p>
                <p>Sandwiches</p>
                <p>Japanese</p>
                <p>Pizza</p>
              </div>
            </div>
            <div className="item">
              <div className="item-head">
                <h6>Popular Areas</h6>
                <div className="show">
                  <FaArrowDown />
                </div>
                <div className="hide">
                  <FaTimes />
                </div>
              </div>
              <div className="item-link">
                <p>Mostashfa AlHommeyat</p>
                <p>Salah ElDin Street</p>
                <p>Salah Nessim Street</p>
                <p>Shabab El Mosalas</p>
              </div>
            </div>
            <div className="social-icon">
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
              <div className="icon">
                <FaLinkedinIn />
              </div>
              <div className="icon">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
