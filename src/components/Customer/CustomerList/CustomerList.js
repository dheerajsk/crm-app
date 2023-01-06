function CustomerList() {
  return (
    <div className="container">
      <table class="table">
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
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
