import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const Loginscreen = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth();

  const handleInputs = (event) => {
    console.log("handleInputs");
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };

  const handleSubmit = (event) => {
    console.log("render");
    event.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        toast.success("Successfully Log In");
      })
      .catch((err) => {
        toast.error(err.message);
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
              Login
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
            <button type="submit">Login</button>
          </div>
          <Link to="/" className="link route">
            Sign Up?
          </Link>
        </form>
      </div>
    </>
  );
};

export default Loginscreen;
