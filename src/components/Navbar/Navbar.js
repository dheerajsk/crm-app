
import {useEffect, useState} from "react";

function NavBar(){

  const [isLoggedIn, setLoggedInStatus]=useState(false);

  useEffect(()=>{
    const value = localStorage.getItem("loggedIn");
    if(value && value=="true"){
      setLoggedInStatus(true);
    }else{
      setLoggedInStatus(false);
    }
  });

    return (
<nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
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
      <a className="btn btn-primary" href="#">Sign Out</a>
     }
    
    </div>
  </div>
</nav>
    );
}

export default NavBar