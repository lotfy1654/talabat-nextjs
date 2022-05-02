import React from "react"
class Create extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div className="create">
                    <div className="container create-box">
                        <div className="create-center">
                            <div className="title">
                                <h5>Create an Account</h5>
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
                            <div className="or"><span>or</span></div>
                            <div className="form-create">
                                <div className="item">
                                    <label>
                                        <div className="head">first name</div>
                                        <div className="input-filed">
                                            <input type="text" name="" id="" />
                                        </div>
                                    </label>
                                </div>
                                <div className="item">
                                    <label>
                                        <div className="head">last name</div>
                                        <div className="input-filed">
                                            <input type="text" name="" id="" />
                                        </div>
                                    </label>
                                </div>
                                <div className="item">
                                    <label>
                                        <div className="head">email</div>
                                        <div className="input-filed">
                                            <input type="email" name="" id="" />
                                        </div>
                                    </label>
                                </div>
                                <div className="item">
                                    <label>
                                        <div className="head">password</div>
                                        <div className="input-filed">
                                            <input type="password" name="" id="" />
                                        </div>
                                    </label>
                                </div>
                                <div className="item">
                                    <label>
                                        <div className="head">confirm password</div>
                                        <div className="input-filed">
                                            <input type="password" name="" id="" />
                                        </div>
                                    </label>
                                </div>
                                <div className="item">
                                    <label>
                                        <div className="head">gender</div>
                                        <div className="input-filed radio-inputs">
                                            <div className="radio-input">
                                                <input type="radio" name="male" id="gender" value="male" />
                                                <label for="male">male</label>
                                            </div>
                                            <div className="radio-input">
                                                <input type="radio" name="Female" id="gender" value="Female" />
                                                <label for="Female">Female</label>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className="item">
                                    <label>
                                        <div className="head">Date of birth</div>
                                        <div className="input-filed">
                                            <input type="date" name="date" id="date" />
                                        </div>
                                    </label>
                                </div>
                                <div className="item">
                                    <label className="newsletter">
                                        <div className="head">Subscribe to our Newsletter</div>
                                        <div className="input-filed">
                                            <input type="radio" name="newsletter" id="newsletter" />
                                            <label for="newsletter">Subscribe to our Newsletter</label>
                                        </div>
                                    </label>
                                </div>
                                <div className="item">
                                    <label className="newsletter">
                                        <div className="head">Subscribe to SMS</div>
                                        <div className="input-filed">
                                            <input type="radio" name="SMS" id="SMS" />
                                            <label for="SMS">Subscribe to SMS</label>
                                        </div>
                                    </label>
                                </div>
                                <div className="item">
                                    <label>
                                        By creating an account you agree to the Privacy Policy and to the terms of use
                                    </label>
                                </div>
                                <div className="item">
                                    <label>
                                        <button className="btn create-btn">Create your account</button>
                                    </label>
                                </div>
                                <div className="item line-item">
                                    <label>
                                        Already have an account? <a href="/login">Login</a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Create;