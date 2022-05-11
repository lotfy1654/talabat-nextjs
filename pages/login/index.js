import React from "react";
import Login from "../../Components/Login/Login";
import { AiFillFacebook } from "react-icons/ai";
import GoogleIcon from "../../images/google-icon.png"
import FacebookIcon from "../../images/facebook.png"
import Link from "next/link";
import Image from "next/image"
class LoginPage extends React.Component {
  render() {
    return (
      <>
        {/* <Login /> */}
        <div className="contaier">
          <div className="login">
            <div className="box-center">
              <div className="title">
                <h5>login</h5>
              </div>
              <div className="social-box">
                <div className="item">
                  <div className="icon">
                    <div>
                      <Image className="img" src={GoogleIcon} alt=".." />
                    </div>
                  </div>
                  <div className="title">
                    <div>
                      <h5>Continue with Google</h5>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <div>
                      <Image className="img" src={FacebookIcon} alt=".." />
                    </div>
                  </div>
                  <div className="title">
                    <div>
                      <h5>Continue with facebook</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="or">
                or
              </div>
              <div className="form-login">
                <div className="item">
                  <input type="email" placeholder="Email" className="email" />
                </div>
                <div className="item">
                  <input type="password" className="pass" placeholder="Password" />
                </div>
                <div className="item check">
                  <label>
                    <input type="checkbox" name="keep-login" id="" />
                    <span> Keep Me logged in</span>
                  </label>
                  <label>Forgot password?</label>
                </div>
                <div className="item login-btn">
                  <button className="btn">login</button>
                </div>
                <div className="item create">
                  <span>Don{"'"}t have an account? <Link href="/create">Create an account</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
