import React from "react"
import Footer from "../../Components/Footer/Footer"
import Image from "next/image"
import Link from "next/link"
import GoogleIcon from "../../images/google-icon.png"
import FacebookIcon from "../../images/facebook.png"
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
                                                <label htmlFor="male">male</label>
                                            </div>
                                            <div className="radio-input">
                                                <input type="radio" name="Female" id="gender" value="Female" />
                                                <label htmlFor="Female">Female</label>
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
                                            <label htmlFor="newsletter">Subscribe to our Newsletter</label>
                                        </div>
                                    </label>
                                </div>
                                <div className="item">
                                    <label className="newsletter">
                                        <div className="head">Subscribe to SMS</div>
                                        <div className="input-filed">
                                            <input type="radio" name="SMS" id="SMS" />
                                            <label htmlFor="SMS">Subscribe to SMS</label>
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
                                        Already have an account? <Link href="/login">Login</Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Create;