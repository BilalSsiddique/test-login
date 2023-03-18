import React, { useState  } from "react";
import "../login/login.css";
import { Link} from "react-router-dom";
// import {app, database} from '..';
import { confirmPasswordReset,getAuth } from "firebase/auth";
import { toast } from "react-toastify";

const ResetPassword = () => {
  
  const [data, setData] = useState({
    password: "",
  });
  const auth = getAuth();
  const handleInputs = (event) => {
    console.log("handleInputs");
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams(window.location.search);
    const oobCode = queryParams.get("oobCode");
    console.log(oobCode);
    confirmPasswordReset(auth,oobCode, data.password)
      .then(() => {
        toast.success("Password Reset Successfully");
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
                  Reset Password
                </label>

                <input
                  onChange={(event) => handleInputs(event)}
                  type="password"
                  name="password"
                  placeholder="Enter new password"
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

export default ResetPassword;
