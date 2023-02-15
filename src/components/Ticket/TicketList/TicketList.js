import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Navbar/Navbar";
import SideMenu from "../../SideMenu/SideMenu";
import TicketDashbaord from "../TicketDashbaord/TicketDashbaord";
import "./TicketList.css";

function TicketList(){

    const [tickets, setTickets]=useState([]);
    const [counts, setCounts]=useState({});
    const [filteredTickets, setFilteredTickets]=useState([]);
    const naviagte = useNavigate();

    useEffect(()=>{
        fetch(process.env.REACT_APP_APIURL+"ticket")
            .then((res)=> res.json())
                .then((parsedRes)=>{
                    setTickets(parsedRes);
                    setFilteredTickets(parsedRes);
                    // Filter based on different statuses and update count state.
                    let obj={};
                    obj.total = parsedRes.length;
                    obj.new = parsedRes.filter(t=> t.status=="New").length;
                    obj.progress = parsedRes.filter(t=> t.status=="In Progress").length;
                    obj.assigned = parsedRes.filter(t=> t.status=="Assigned").length;
                    obj.resolved = parsedRes.filter(t=> t.status=="Resolved").length;
                    setCounts(obj);
                });
    },[]);

    function handleEditClick(desc){
        naviagte("/ticketform/"+desc);
    }
    
    function handleSearch(key){
       const result= tickets.filter(t=> t.desc.includes(key));
       setFilteredTickets(result);
    }

    function getStatusStyle(status){
        switch(status){
            case "New":
                return "td-status-new";
            case "Assigned":
                return "td-status-assigned";
            case "In Progress":
                return "td-status-progress";
            case "Resolved":
                return "td-status-resolved";
        }
    }

    return (
        <div>
            <NavBar />
            <SideMenu />
            <TicketDashbaord dashbaordCounts={counts} />
            <div className="container">
           <div className="table-header">
            <a 
            href="/ticketform"
            className="btn btn-success mb-3">
                New Ticket
            </a>
            <div className="ticket-search-box-wrapper">
                <input
                    placeholder="Search..."
                    onInput={(e)=>{handleSearch(e.target.value)}}
                    className="ticket-search-box" type="search" />&nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </div>
            </div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Customer</th>
      <th scope="col">Description</th>
      <th scope="col">Assigned To</th>
      <th scope="col">Status</th>
      <th scope="col">Raised On</th>
      <th> Update </th>
    </tr>
  </thead>
  <tbody>
    {
        filteredTickets.map(t=>
        <tr>
            <td>{t.customer}</td>
            <td>{t.desc}</td>
            <td>{t.assignedTo}</td>
            <td 
            className={getStatusStyle(t.status)}
            >{t.status}</td>
            <td>{t.raisedOn}</td>
            <td>
                <button 
                    onClick={()=>{handleEditClick(t.desc)}}
                className="btn btn-warning">Edit</button>
            </td>
        </tr>
            )
    }
   
  </tbody>
</table>
            </div>
        </div>
    );
}

export default TicketList;