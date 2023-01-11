import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CustomerForm() {
  const [customerToUpdate, setUpdateCustomer] = useState({});
  // useParams allows access to route parameters.
  const { customerName } = useParams();
  console.log(customerName);

  useEffect(() => {
    if (customerName) {
      fetch("http://localhost:4000/api/customer")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let result = res.find((c) => c.name === customerName);
          if (result) {
            setUpdateCustomer(result);
          }
        });
    }
  }, []);

  const navigate = useNavigate();

  function handleFormSubmit() {
    console.log(customerToUpdate);
    fetch("http://localhost:4000/api/customer", {
      method: "POST",
      body: JSON.stringify(customerToUpdate),
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
          value={customerToUpdate.name}
          onInput={(e) => {
            setUpdateCustomer({ name: e.target.value });
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Website
        </label>
        <input
          value={customerToUpdate.website}
          onInput={(e) => {
            setUpdateCustomer({ website: e.target.value });
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Turnover
        </label>
        <input
          value={customerToUpdate.turnover}
          onInput={(e) => {
            setUpdateCustomer({ turnover: e.target.value });
          }}
          type="number"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          No Of Employees
        </label>
        <input
          value={customerToUpdate.employees}
          onInput={(e) => {
            setUpdateCustomer({ employees: e.target.value });
          }}
          type="number"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          CEO
        </label>
        <input
          value={customerToUpdate.ceo}
          onInput={(e) => {
            setUpdateCustomer({ ceo: e.target.value });
          }}
          type="text"
          className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Established In
        </label>
        <input
          value={customerToUpdate.year}
          onInput={(e) => {
            setUpdateCustomer({ year: e.target.value });
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
