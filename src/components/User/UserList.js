import { useEffect, useState } from "react";
import NavBar from "../Navbar/Navbar";
import SideMenu from "../SideMenu/SideMenu";
import "./UserList.css";

function UserList(){
    // state is storage which when changes, 
    // refreshes component.
    const [users, setUsers]=useState([]);

    useEffect(()=>{
        // call api to get data.
        fetch(process.env.REACT_APP_APIURL+"user")
            .then(
                // convert data to json format.
                res => res.json()
            ).then((parsedResult)=>{
                // update state with data.
                setUsers(parsedResult);
            })
    },[]);

    function handleActivateClick(username){
      fetch(process.env.REACT_APP_APIURL+"user/activate/"+username, {
        method:"PUT"
      }).then(res=> res.json())
          .then(parsedResponse => setUsers(parsedResponse));
    }

    function handleDeActivateClick(username){
      fetch(process.env.REACT_APP_APIURL+"user/deactivate/"+username, {
        method:"PUT"
      }).then(res=> res.json())
          .then(parsedResponse => setUsers(parsedResponse));
    }


    return(
        <div>
            <NavBar />
            <SideMenu />
            <div className="container">
            <a href="/userForm" className="btn btn-success">
                New User
            </a>

            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col" className="activeStatus">IsActive</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map(u=>
            <tr>
            <td scope="row">{u.name}</td>
            <td>{u.email}</td>
            <td>{u.username}</td>
            <td className="activeStatus">
            {
              !u.isActive && 
            <button 
            onClick={()=>{handleActivateClick(u.username)}}
            className="btn btn-primary">Activate</button>
            }
            {
              u.isActive && 
            <button 
            onClick={handleDeActivateClick}
            className="btn btn-danger">De-Activate</button>
            }
            
            </td>
          </tr>
            
            )
    }
   
  </tbody>
</table>
            </div>
        </div>
    );
}

export default UserList;