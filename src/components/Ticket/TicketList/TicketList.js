import { useEffect, useState } from "react";
import NavBar from "../../Navbar/Navbar";
import "./TicketList.css";

function TicketList(){

    const [tickets, setTickets]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/api/ticket")
            .then((res)=> res.json())
                .then((parsedRes)=>{
                    setTickets(parsedRes);
                });
    },[])
    

    return (
        <div>
            <NavBar />
            <div className="container">

            <table className="table">
  <thead>
    <tr>
      <th scope="col">Customer</th>
      <th scope="col">Description</th>
      <th scope="col">Assigned To</th>
      <th scope="col">Status</th>
      <th scope="col">Raised On</th>
    </tr>
  </thead>
  <tbody>
    {
        tickets.map(t=>
            <tr>
            <td>{t.customer}</td>
            <td>{t.desc}</td>
            <td>{t.assignedTo}</td>
            <td>{t.status}</td>
            <td>{t.raisedOn}</td>
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