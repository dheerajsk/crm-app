
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function NavBar(){

  const [isLoggedIn, setLoggedInStatus]=useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    const value = localStorage.getItem("loggedIn");
    if(value && value=="true"){
      setLoggedInStatus(true);
    }else{
      setLoggedInStatus(false);
    }
  });

  const handleLogOutClick = () =>{
    localStorage.removeItem("loggedIn");
    navigate("/signin");
  }

    return (
<nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Home</a>
    <a className="navbar-brand" href="/users">Users</a>
    <a className="navbar-brand" href="/tickets">Tickets</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
      </ul>
     {
      !isLoggedIn &&
      <span>
        <a className="btn btn-success" href="/signup">Sign Up</a>&nbsp;&nbsp;&nbsp;
        <a className="btn btn-primary" href="/signin">Sign In</a>
      </span>
     }
     {
      isLoggedIn &&
      <button className="btn btn-primary" onClick={handleLogOutClick}>Sign Out</button>
     }
    
    </div>
  </div>
</nav>
    );
}

export default NavBar