import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [loginDetails, setLoginDetails]=useState({});
  const [invalidCreds, setInvalidCreds]=useState(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    console.log(loginDetails);
    setInvalidCreds(false);
    fetch("http://localhost:4000/api/user/signin",{
      method:"POST",
      body:JSON.stringify(loginDetails),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(
      (res)=>{
        console.log(res);
        if(res.status==400){
          setInvalidCreds(true);
        }else if(res.status==200){
          console.log("200");
          localStorage.setItem("loggedIn", "true");
          navigate("/");
        }
      }
    ).catch(err=>{
      // server errors
      console.log(err);
    });
  }

  return (
    <div className="signincontainer">
      <div className="left">
        <img
          src="https://img.freepik.com/premium-vector/crm-icons-customer-relationship-management-vector-infographics-template_116137-3703.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <h3 className="mb-3 ">Please login.</h3>
        <hr className="header"></hr>
        {
          invalidCreds && 
        <div class="alert alert-danger" role="alert">
          Invalid Credentials.
        </div>
        }
        <div className="mb-3">
 <label htmlFor="email" className="form-label">
 Enter Your Email
</label>
         
          <input 
          onInput={(e)=>{
            setLoginDetails({...loginDetails, 
            email:e.target.value})}}
          type="email" name="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Enter Your Password
          </label>
          <input 
           onInput={(e)=>{
            setLoginDetails({...loginDetails, 
            password:e.target.value})}}
          type="password" name="password" className="form-control" />
        </div>
        <input
          onClick={handleLoginClick}
          className="btn btn-primary float-end"
          type="button"
          value="Sign In"></input>
      </div>
    </div>
  );
}

export default SignIn;
