import { useEffect, useState } from "react";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/customer")
      .then((res) => {
        return res.json();
      })
      .then((res) => setCustomers(res));
  }, []);

  return (
    <div className="container">
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
          {customers.map((c) => (
            <tr>
              <td>{c.name}</td>
              <td>{c.website}</td>
              <td>{c.turnover}</td>
              <td>{c.employees}</td>
              <td>{c.ceo}</td>
              <td>{c.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
