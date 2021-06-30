import React from 'react'
import './Signin.style.css';
import { signInWithGoogle } from '../../firebase/firebase';
import { auth, createUserProfileDoc } from "../../firebase/firebase";

const submitHandler =  async event => {
    event.preventDefault();
    const email = document.querySelector("#signinEmail").value;
    const password = document.querySelector("#signinPassword").value;

    try{
      await auth.signInWithEmailAndPassword(email, password);
    }catch(e){
      console.error(e.message);
    }
};

const signUpSubmitHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#signupEmail").value;
    const password = document.querySelector("#signupPassword").value;
    const confirmPassword = document.querySelector("#cpassword").value;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDoc(user, { displayName: name });
    } catch (e) {
      console.error(e.message);
    }
};

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
                        <form action="" onSubmit={submitHandler}>
                            <input type="text" className="inputs" name="email" id="signinEmail" placeholder="email" />
                            <input type="password" className="inputs" name="password" id="signinPassword" placeholder="password" />
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
                    <form action="" id="signup" onSubmit={signUpSubmitHandler}>
                            <input type="text" className="inputs" name="name" id="name" placeholder="Display Name" />
                            <input type="text" className="inputs" name="email" id="signupEmail" placeholder="Email" />
                            <input type="password" className="inputs" name="password" id="signupPassword" placeholder="Password" />
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