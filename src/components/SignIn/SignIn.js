import { useState } from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="container">
      <div className="left">
        <img
          src="https://img.freepik.com/premium-vector/crm-icons-customer-relationship-management-vector-infographics-template_116137-3703.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <h3 className="mb-3 ">Please login.</h3>
        <hr className="header"></hr>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Enter Your Email
          </label>
          <input type="email" name="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Enter Your Password
          </label>
          <input type="password" name="password" className="form-control" />
        </div>
        <input
          className="btn btn-primary float-end"
          type="button"
          value="Sign In"></input>
      </div>
    </div>
  );
}

export default SignIn;
