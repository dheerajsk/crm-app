import "./CustomerList.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Navbar/Navbar";
import SideMenu from "../../SideMenu/SideMenu";
import CustomerDashboard from "../../CustomerDashbaord/CustomerDashboard";


function CustomerList() {
  // Storing data in state
  console.log("rendering");
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers]=useState([]);
  const [counts, setCounts]=useState({});
  const [pages, setPages]=useState([]);
  
  const navigate = useNavigate();

  // Call the api.
  useEffect(() => {
    load(1);
  }, []);

  function load(pageNo){
    fetch(process.env.REACT_APP_APIURL+"customer/page/"+pageNo)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCustomers(res.records);
        setFilteredCustomers(res.records);

        let newCounts = res.records.filter(c=> c.status=="New").length;
        let acceptedCounts = res.records.filter(c=> c.status=="Accepted").length;
        let rejectedCounts = res.records.filter(c=> c.status=="Rejected").length;
        let countObj = {
          "new":newCounts,
          "accepted":acceptedCounts,
          "rejected":rejectedCounts,
          "total":res.records.length
        };
        setCounts(countObj);

        let totalPages = Math.floor(res.totalCount/100);
        let arrayOfPages = new Array(totalPages).fill(0);
        console.log(arrayOfPages);
        setPages(arrayOfPages);
      });
  }

  function handleNewCustomerClick() {
    navigate("form");
  }

  function handleDeleteClick(name) {
    fetch(process.env.REACT_APP_APIURL+"customer/"+name, {
      method:"DELETE"
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCustomers(res);
        setFilteredCustomers(res);
      });
  }

  function handleEditClick(name) {
    console.log(name);
    navigate("/form/" + name);
  }

  function getStatusCSS(status){
    if(status=="New"){
      return "st_blue";
    }else if(status=="Accepted"){
      return "st_green";
    }else{
      return "st_red";
    }
  }

  function handleSearch(key){
    if(!key || key.length==0){
      setFilteredCustomers(customers);
    }else{
      const result = customers.filter(c=> c.name.includes(key));
      setFilteredCustomers([...result]);
      console.log(filteredCustomers);
    }
  }

  return (
    <div>
      <SideMenu />
       <NavBar />
    <div className="container">

      <CustomerDashboard counts={counts} />
      <hr />
     <div className="table-header">
     <button onClick={handleNewCustomerClick} className="btn btn-success">
        New Customer
      </button>
      <div className="search-box-wrapper">
        <input
        placeholder="Search..."
        onInput={(e)=>{handleSearch(e.target.value)}}
        className="search-box" type="search" />&nbsp;&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </div>
      
     </div>
     
      {filteredCustomers.length === 0 && (
        <div class="alert alert-primary mt-3" role="alert">
          No Customers are available im system.
        </div>
      )}
      {filteredCustomers.length > 0 && (
        <div className="table-parent">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Website</th>
              <th scope="col">Turnover</th>
              <th>Status</th>
              <th scope="col">NumberOfEmployees</th>
              <th scope="col">CEO</th>
              <th scope="col">Established Year</th>
            </tr>
          </thead>
          <tbody>
            {/* rendering data in table rows. */}
            {filteredCustomers.map((c) => (
              <tr>
                <td>{c.name}</td>
                <td>{c.website}</td>
                <td>{c.turnover}</td>
                <td className={
                  c.status=="New" ? 'st_blue':
                  c.status=="Accepted" ? 'st_green':
                  'st_red'
                  }>
                  {c.status}
                </td>
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
        <nav aria-label="Page navigation example">
      <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    {
      pages.map((p,i)=>
        <li class="page-item"><button class="page-link" 
        onClick={()=>{
          load(i+1);
        }}
        >{i+1}</button></li>
        )
    }
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
        </div>
      )}
    </div>
    </div>
  );
}

export default CustomerList;
