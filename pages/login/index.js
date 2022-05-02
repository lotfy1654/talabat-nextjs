import React from "react";
import Login from "../../Components/Login/Login";
import { AiFillFacebook } from "react-icons/ai";
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
                      <img className="img" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png" alt=".." />
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
                      <img className="img" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook2_colored_svg-128.png" alt=".." />
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
                  <span>Don't have an account? <a href="/create">Create an account</a></span>
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
