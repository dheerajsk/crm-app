import { useState } from "react";

function CustomerForm() {

  const [customer, setCustomer] = useState({});

  function handleFormSubmit(){
    console.log(customer);
  }

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
        onChange={
          (e)=>{
            customer.name = e.target.value; 
            setCustomer(customer);
          }}
        type="text" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Website
        </label>
        <input 
        onChange={
          (e)=>{
            customer.website = e.target.value; 
            setCustomer(customer);
          }}
          type="text" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Turnover
        </label>
        <input 
        onChange={
          (e)=>{
            customer.turnover = e.target.value; 
            setCustomer(customer);
          }}
          type="number" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          No Of Employees
        </label>
        <input 
        onChange={
          (e)=>{
            customer.employees = e.target.value; 
            setCustomer(customer);
          }}
          type="number" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          CEO
        </label>
        <input 
        onChange={
          (e)=>{
            customer.ceo = e.target.value; 
            setCustomer(customer);
          }}
          type="text" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Established In
        </label>
        <input 
        onChange={
          (e)=>{
            customer.year = e.target.value; 
            setCustomer(customer);
          }}
          type="number" className="form-control"></input>
      </div>
      <button onClick={handleFormSubmit} className="btn btn-primary float-end" type="button">
        Create New Customer
      </button>
    </div>
  );
}

export default CustomerForm;
