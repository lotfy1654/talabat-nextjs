import React from "react";
import Link from "next/link"
import Image from "next/image";
import LogoImg from "/images/logo-tlb.svg";
import FristBenfit from "/images/benefits-1.png";
import SecBenefit from "/images/benefits-2.png";
import ThirdBenfit from "/images/benefits-3.png";
import FristDeliver from "/images/delivery-1.png";
import SecDelivery from "/images/delivery-2.png";
import ThirdDeliver from "/images/delivery-3.png";
import Fleet from "/images/fleet-min.png";
import Order from "/images/order_placed.svg";
import Prep from "/images/prep.svg";
import Delivered from "/images/delivered.svg";
import GooglePlay from "/images/google_play.svg";
import AppStore from "/images/appstore.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
class Partner extends React.Component {
  render() {
    return (
      <div className="partner">
        <div className="part-head">
          <div className="container">
            <div className="logo-head">
              <Image src={LogoImg} alt="." />
              <div>
                <Link href="/partner">Vendor Portal</Link>
              </div>
            </div>
            <div className="partner-form-section">
              <div className="row">
                <div className="col-sm col-md-5">
                  <div className="box-info">
                    <h1>Reach new customers, get more sales</h1>
                    <h3>
                      Join talabat, the Middle Easts largest delivery platform.
                    </h3>
                  </div>
                </div>
                <div className="col-sm col-md-7">
                  <div className="form-box">
                    <div className="form-head">
                      <h3>Join MENAs leading delivery app</h3>
                      <p>
                        Join an ever-growing community of businesses in the
                        Middle East and grow together with us.
                      </p>
                    </div>
                    <div className="form-section">
                      <div className="items-row">
                        <div className="item">
                          <label>store name</label>
                          <input
                            className="store-name"
                            type="text"
                            placeholder="Enter your store name"
                            required
                          />
                        </div>
                        <div className="item">
                          <label>No. of Branches</label>
                          <input type="text" placeholder="O+" />
                        </div>
                      </div>
                      <div className="items-row">
                        <div className="item line">
                          <label>Website / Social media</label>
                          <input
                            className="line"
                            type="text"
                            placeholder="www.example.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="items-row">
                        <div className="item line">
                          <label>Website / Social media</label>
                          <input
                            className="line"
                            type="search"
                            placeholder="search here"
                            required
                          />
                        </div>
                      </div>
                      <div className="items-row">
                        <div className="item">
                          <label>frist name</label>
                          <input
                            className="name"
                            type="text"
                            placeholder="Enter your frist name"
                            required
                          />
                        </div>
                        <div className="item">
                          <label>last name</label>
                          <input
                            className="name"
                            type="text"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      <div className="items-row">
                        <div className="item line">
                          <label>mobile number</label>
                          <input
                            className="line"
                            type="number"
                            placeholder="+01XXXXXXX"
                            required
                          />
                        </div>
                      </div>
                      <div className="items-row">
                        <div className="item line">
                          <label>email address</label>
                          <input
                            className="line"
                            type="email"
                            placeholder="enter your email address"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="submit-btn">
                      <div>
                        <button>SUBMIT DETAILS</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="benefit">
          <h1>Benefits of being a talabat partner</h1>
          <div className="container">
            <div className="benefit-box">
              <div className="box">
                <Image src={FristBenfit} alt="." />
                <h4>Additional revenue stream</h4>
                <p>get more orders</p>
              </div>
              <div className="box">
                <Image src={SecBenefit} alt="." />
                <h4>Additional revenue stream</h4>
                <p>get more orders</p>
              </div>
              <div className="box">
                <Image src={ThirdBenfit} alt="." />
                <h4>Additional revenue stream</h4>
                <p>get more orders</p>
              </div>
            </div>
            <div className="benefits-delivery">
              <h1>Benefits of our own delivery</h1>
              <div className="benefits-delivery-boxs">
                <div className="row">
                  <div className="col-sm col-md-4 mt-3 mb-3">
                    <div className="box">
                      <Image src={FristDeliver} alt="." />
                      <h4>Live tracking</h4>
                      <p>
                        Dont worry about sourcing drivers to deliver your
                        orders. Leave the logistics to us, so you can focus on
                        making great food!
                      </p>
                      <div className="end-box-line">
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm col-md-4 mt-3 mb-3">
                    <div className="box">
                      <Image src={SecDelivery} alt="." />
                      <h4>Great delivery prices</h4>
                      <p>
                        Customers pay a low delivery fee for orders delivered
                        with Talabat.
                      </p>
                      <div className="end-box-line">
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm col-md-4 mt-3 mb-3">
                    <div className="box">
                      <Image src={ThirdDeliver} alt="." />
                      <h4>Live tracking</h4>
                      <p>
                        Customers can enjoy live tracking of their orders to
                        their doorsteps, giving them an even better experience.
                      </p>
                      <div className="end-box-line">
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fleet">
                  <Image src={Fleet} alt="." />
                  <h1>Fleet of over 16,000 riders</h1>
                </div>
                <div className="how-works">
                  <h1>how it works?</h1>
                  <div className="works-box">
                    <div className="box-item">
                      <Image src={Order} alt="." />
                      <h5>order placed</h5>
                    </div>
                    <div className="box-item">
                      <Image src={Prep} alt="." />
                      <h5>prep</h5>
                    </div>
                    <div className="box-item">
                      <Image src={Delivered} alt="." />
                      <h5>delivered</h5>
                    </div>
                  </div>
                  <h1>ready to join us?</h1>
                  <div className="join-btn">
                    <button>join now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-partner">
            <div className="footer-partner-boxs">
              <div className="box-item">
                <Image className="logo-img" src={LogoImg} alt="." />
              </div>
              <div className="box-item">
                <h6>about us</h6>
                <p>about us</p>
                <p>terms</p>
                <p>FAQ</p>
                <p>Social Responsibility</p>
              </div>
              <div className="box-item">
                <h6>contact us</h6>
                <p>Feedback</p>
                <p>contact us</p>
              </div>
              <div className="box-item">
                <div className="box-apps">
                  <img className="app-img" src={`https://ae.partner.talabat.com/resource/SSUTalabat/assets/images/google_play.svg`} alt="." />
                  {/* <span className="mr-3"> */}
                  {/* </span> */}
                  <img className="app-img" src={`https://ae.partner.talabat.com/resource/SSUTalabat/assets/images/appstore.svg`} alt="." />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="footer-part-end">
                <div className="box-item">
                  <p>&copy;2022 Talabat</p>
                </div>
                <div className="box-item">
                  <div className="item">
                    <FaFacebookF />
                  </div>
                  <div className="item">
                    <FaTwitter />
                  </div>
                  <div className="item">
                    <FaInstagram />
                  </div>
                  <div className="item">
                    <FaLinkedinIn />
                  </div>
                  <div className="item">
                    <FaYoutube />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
