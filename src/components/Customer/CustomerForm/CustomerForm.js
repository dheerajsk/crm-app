function CustomerForm() {
  return (
    <div className="container">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input type="text" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Website
        </label>
        <input type="text" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Turnover
        </label>
        <input type="number" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          No Of Employees
        </label>
        <input type="number" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          CEO
        </label>
        <input type="text" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Established In
        </label>
        <input type="number" className="form-control"></input>
      </div>
      <button className="btn btn-primary float-end" type="button">
        Create New Customer
      </button>
    </div>
  );
}

export default CustomerForm;
