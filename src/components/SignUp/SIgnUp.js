import "./SignUp.css";

function SignUp() {
  return (
    <div className="container">
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
          <input type="text" name="name" className="form-control" />
        </div>
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
          className="btn btn-success float-end"
          type="button"
          value="Register"></input>
      </div>
    </div>
  );
}

export default SignUp;
