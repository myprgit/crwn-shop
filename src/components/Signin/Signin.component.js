import React from 'react'
import './Signin.style.css';
import { signInWithGoogle } from '../../firebase/firebase';
const Signin = () => {
    return (
        <div className="container">
            <div className="signinWrap">
                <div className="signinLeft">
                    <div className="signinTitle">
                        <h2>I already have an account</h2>
                        <small>Sign in with your email and password</small>
                    </div>
                    <div className="forms">
                        <form action="">
                            <input type="text" className="inputs" name="email" id="email" placeholder="email" />
                            <input type="password" className="inputs" name="password" id="password" placeholder="password" />
                            <div className="btns">
                                <button type="submit" className="btn" id="signin">SIGN IN</button>
                                <button type="button" onClick={signInWithGoogle} className="btn" id="google">SIGN IN WITH GOOGLE</button>
                            </div> 
                            
                        </form>
                    </div>
                </div>
                <div className="signinRight">
                    <div className="signinTitle">
                        <h2>I do not have an account</h2>
                        <small>Sign up with your email and password</small>
                    </div>
                    <div className="forms">
                    <form action="" id="signup">
                            <input type="text" className="inputs" name="name" id="name" placeholder="Display Name" />
                            <input type="text" className="inputs" name="email" id="email" placeholder="Email" />
                            <input type="password" className="inputs" name="password" id="password" placeholder="Password" />
                            <input type="password" className="inputs" name="cpassword" id="cpassword" placeholder="Confirm Password" />
                            <div className="btns">
                                <button type="submit" className="btn">SIGN UP</button>
                            </div> 
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;