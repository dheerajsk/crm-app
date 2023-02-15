import { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handleRegister() {
    console.log(user);
    // fetch returns a promise.
    fetch(process.env.REACT_APP_APIURL+"user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        // request is completed.
        console.log(res);
        navigate("/signin");
      })
      .catch((err) => {
        // request has some errors.
        console.log(err);
      });
  }

  return (
    <div className="signup-container">
      <div className="left">
        <img
          src="https://img.freepik.com/premium-vector/crm-icons-customer-relationship-management-vector-infographics-template_116137-3703.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <h3 className="mb-3 ">Please register to get started.</h3>
        <hr className="header"></hr>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter Your Name
          </label>
          <input
            onInput={(e) => setUser({ ...user, name: e.target.value })}
            type="text"
            name="name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Enter Your Email
          </label>
          <input
            onInput={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Enter Your Password
          </label>
          <input
            onInput={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            name="password"
            className="form-control"
          />
        </div>
        <input
          onClick={handleRegister}
          className="btn btn-success float-end"
          type="button"
          value="Register"></input>
      </div>
    </div>
  );
}

export default SignUp;
