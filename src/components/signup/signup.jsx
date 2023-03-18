import React, { useState } from "react";
import "../login/login.css";
import { Link } from "react-router-dom";
import { database, app } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignupScreen = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth();

  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        // console.log();
        toast.success("Sign Up Successfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
          <div className="form-container">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="form-inputs">
                <label id="label" htmlFor="login">
                  Sign Up
                </label>

                <input
                  onChange={(event) => handleInputs(event)}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <input
                  onChange={(event) => handleInputs(event)}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="check-forg">
                <label>
                  <input type="checkbox" value="Remember me" />
                  Remember me
                </label>
                <Link to="/forgotpassword" className="link forgot">
                  Forgot Password
                </Link>
              </div>
              <div>
                <button type="submit">Sign Up</button>
              </div>
              <Link to="/login" className="link route">
                Login?
              </Link>
            </form>
          </div>
        
    </>
  );
};

export default SignupScreen;
