import "./CustomerList.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Navbar/Navbar";

function CustomerList() {
  // Storing data in state
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  // Call the api.
  useEffect(() => {
    fetch("http://localhost:4000/api/customer")
      .then((res) => {
        return res.json();
      })
      .then((res) => setCustomers(res));
  }, []);

  function handleNewCustomerClick() {
    navigate("form");
  }

  function handleDeleteClick(name) {
    fetch("http://localhost:4000/api/customer/"+name, {
      method:"DELETE"
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => setCustomers(res));
  }

  function handleEditClick(name) {
    console.log(name);
    navigate("/form/" + name);
  }

  return (
    <div>
       <NavBar />
    <div className="container">
     
      <button onClick={handleNewCustomerClick} className="btn btn-success">
        New Customer
      </button>

      {customers.length === 0 && (
        <div class="alert alert-primary mt-3" role="alert">
          No Customers are available im system.
        </div>
      )}
      {customers.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Website</th>
              <th scope="col">Turnover</th>
              <th scope="col">NumberOfEmployees</th>
              <th scope="col">CEO</th>
              <th scope="col">Established Year</th>
            </tr>
          </thead>
          <tbody>
            {/* rendering data in table rows. */}
            {customers.map((c) => (
              <tr>
                <td>{c.name}</td>
                <td>{c.website}</td>
                <td>{c.turnover}</td>
                <td>{c.employees}</td>
                <td>{c.ceo}</td>
                <td>{c.year}</td>
                <td>
                  <button
                    onClick={() => handleEditClick(c.name)}
                    className="btn btn-warning">
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteClick(c.name)}
                    className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
}

export default CustomerList;
