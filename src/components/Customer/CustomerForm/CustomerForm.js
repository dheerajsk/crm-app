import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CustomerForm() {
  const [customer, setCustomer] = useState({});
  // useParams allows access to route parameters.
  const { customerName } = useParams();
  console.log(customerName);

  if (customerName) {
    fetch("http://localhost:4000/api/customer")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let result = res.find((c) => c.name === customerName);
        if (result) {
          setCustomer(result);
        }
      });
  }

  const navigate = useNavigate();

  function handleFormSubmit() {
    console.log(customer);
    fetch("http://localhost:4000/api/customer", {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  }

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          value={customer.name}
          onChange={(e) => {
            customer.name = e.target.value;
            setCustomer(customer);
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Website
        </label>
        <input
          value={customer.website}
          onChange={(e) => {
            customer.website = e.target.value;
            setCustomer(customer);
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Turnover
        </label>
        <input
          value={customer.turnover}
          onChange={(e) => {
            customer.turnover = e.target.value;
            setCustomer(customer);
          }}
          type="number"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          No Of Employees
        </label>
        <input
          value={customer.employees}
          onChange={(e) => {
            customer.employees = e.target.value;
            setCustomer(customer);
          }}
          type="number"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          CEO
        </label>
        <input
          value={customer.ceo}
          onChange={(e) => {
            customer.ceo = e.target.value;
            setCustomer(customer);
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Established In
        </label>
        <input
          value={customer.year}
          onChange={(e) => {
            customer.year = e.target.value;
            setCustomer(customer);
          }}
          type="number"
          className="form-control"></input>
      </div>
      <button
        onClick={handleFormSubmit}
        className="btn btn-primary float-end"
        type="button">
        Create New Customer
      </button>
    </div>
  );
}

export default CustomerForm;
