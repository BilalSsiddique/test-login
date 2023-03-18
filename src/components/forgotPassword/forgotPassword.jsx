import React, { useState } from "react";
import "../login/login.css";
import { Link } from "react-router-dom";
// import {app, database} from '..';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
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
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        toast.success("Email sent Succesfully");
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
              Email
            </label>

            <input
              onChange={(event) => handleInputs(event)}
              type="email"
              name="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="check-forgsc"></div>
          <div>
            <button type="submit">Reset Password</button>
          </div>
          <Link to="/login" className="link route">
            Login?
          </Link>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
