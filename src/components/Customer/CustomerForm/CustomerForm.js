import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../Navbar/Navbar";

function CustomerForm() {
  const [customerToUpdate, setUpdateCustomer] = useState({});
  // useParams allows access to route parameters.
  const { customerName } = useParams();
  console.log(customerName);


  const navigate = useNavigate();
  useEffect(() => {
    if (customerName) {
      fetch(process.env.REACT_APP_APIURL+"customer/"+customerName)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setUpdateCustomer(res);
        });
    }
  }, []);

  function handleFormSubmit() {

    console.log(customerToUpdate);
    fetch(process.env.REACT_APP_APIURL+"customer", {
      method: customerName ? "PUT" : "POST",
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
    <div>
      <NavBar />
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            value={customerToUpdate.name}
            onInput={(e) => {
              let obj = { ...customerToUpdate };
              obj.name = e.target.value;
              setUpdateCustomer(obj);
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
              setUpdateCustomer({
                ...customerToUpdate,
                website: e.target.value,
              });
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
              let obj = { ...customerToUpdate };
              obj.turnover = e.target.value;
              setUpdateCustomer(obj);
            }}
            type="number"
            className="form-control"></input>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Status
          </label>
          <select 
            onChange={
              (e)=>{
                let obj = { ...customerToUpdate };
                obj.status = e.target.value;
                setUpdateCustomer(obj);
              }
            }
          className="form-select">
            <option value="New">New</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            No Of Employees
          </label>
          <input
            value={customerToUpdate.employees}
            onInput={(e) => {
              let obj = { ...customerToUpdate };
              obj.employees = e.target.value;
              setUpdateCustomer(obj);
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
              let obj = { ...customerToUpdate };
              obj.ceo = e.target.value;
              setUpdateCustomer(obj);
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
              let obj = { ...customerToUpdate };
              obj.year = e.target.value;
              setUpdateCustomer(obj);
            }}
            type="number"
            className="form-control"></input>
        </div>
        <button
          onClick={handleFormSubmit}
          className="btn btn-primary float-end"
          type="button">
           {
            customerName &&
           <span> Update Customer</span>
           }
            {
            !customerName &&
           <span> Create New Customer</span>
           }
        </button>
      </div>
    </div>
  );
}

export default CustomerForm;
