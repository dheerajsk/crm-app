import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../Navbar/Navbar";

function UserForm() {
  const [userToUpdate, setUser] = useState({});

  const navigate = useNavigate();

  function handleFormSubmit() {
    console.log(userToUpdate);
    fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      body: JSON.stringify(userToUpdate),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        navigate("/users");
      });
  }

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            value={userToUpdate.name}
            onInput={(e) => {
              let obj = { ...userToUpdate };
              obj.name = e.target.value;
              setUser(obj);
            }}
            type="text"
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            value={userToUpdate.email}
            onInput={(e) => {
              setUser({
                ...userToUpdate,
                email: e.target.value,
              });
            }}
            type="text"
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            value={userToUpdate.password}
            onInput={(e) => {
              let obj = { ...userToUpdate };
              obj.password = e.target.value;
              setUser(obj);
            }}
            type="password"
            className="form-control"></input>
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Username
          </label>
          <input
            value={userToUpdate.username}
            onInput={(e) => {
              let obj = { ...userToUpdate };
              obj.username = e.target.value;
              setUser(obj);
            }}
            type="text"
            className="form-control"></input>
        </div>
        <div className="mb-3">
        <div className="form-check">
  <input 
  onChange={(e) => {
    console.log(e.target.checked);
    let obj = { ...userToUpdate };
    obj.isActive = e.target.checked;
    setUser(obj);
  }}
  className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminateDisabled">
</input>
  <label className="form-check-label" for="flexCheckIndeterminateDisabled">
    IsActive
  </label>
</div>
        </div>
        <button
          onClick={handleFormSubmit}
          className="btn btn-primary float-end"
          type="button">
          Create New User
        </button>
      </div>
    </div>
  );
}

export default UserForm;
