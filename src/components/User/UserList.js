import { useEffect, useState } from "react";
import NavBar from "../Navbar/Navbar";


function UserList(){
    // state is storage which when changes, 
    // refreshes component.
    const [users, setUsers]=useState([]);

    useEffect(()=>{
        // call api to get data.
        fetch("http://localhost:4000/api/user")
            .then(
                // convert data to json format.
                res => res.json()
            ).then((parsedResult)=>{
                // update state with data.
                setUsers(parsedResult);
            })
    },[]);

    return(
        <div>
            <NavBar />

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
      <th scope="col">IsActive</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map(u=>
            <tr>
            <td scope="row">{u.name}</td>
            <td>{u.email}</td>
            <td>{u.username}</td>
            <td>{u.isActive ? 'Yes' : 'No'}</td>
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