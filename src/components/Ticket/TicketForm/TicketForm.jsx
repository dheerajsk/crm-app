import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Navbar/Navbar";


function TicketForm(){

    const navigate = useNavigate();

    const [users, setUsers]=useState([]);
    const [customers, setCustomers]=useState([]);
    const [ticket, setTicket] = useState({});
    const [valueMissing, setValueMissing]=useState(false);

    useEffect(()=>{
      // To get users.
      fetch("http://localhost:4000/api/user")
        .then((res)=> res.json())
          .then((parsedRes)=> setUsers(parsedRes));
      
      // To get customers.
      fetch("http://localhost:4000/api/customer")
        .then(res=> res.json())
          .then(parsedRes=> setCustomers(parsedRes));
    })

    function handleNewTicketClick(){
        setValueMissing(false);
        if(!ticket.status){
            setValueMissing(true);
        }
        fetch("http://localhost:4000/api/ticket",{
            method:"POST",
            body:JSON.stringify(ticket),
            headers: {
                "Content-Type": "application/json",
              }
        }).then((res)=>{
            navigate("/tickets");
        }).catch(err=>{
            console.log(err);
        })
    }
    
    return (
        <div>
            <NavBar />
            <div className="container">
                {
valueMissing &&
<div class="alert alert-danger" role="alert">
Please select a status.
</div>
                }
            <div className="mb-3">
          <label htmlFor="customer" className="form-label">
            Customer Name
          </label>
          <select 
            name="customer"
            onChange={
              (e)=>{
                let obj = { ...ticket };
                obj.customer = e.target.value;
                setTicket(obj);
              }
            }
          className="form-select">
            {
              customers.map(c=>
                <option value={c.name}>{c.name}</option>
                )
            }
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            name="desc"
            value={ticket.desc}
            onInput={(e) => {
              let obj = { ...ticket };
              obj.desc = e.target.value;
              setTicket(obj);
            }}
            type="text"
            className="form-control"></input>
        </div>

        <div className="mb-3">
          <label htmlFor="assignedTo" className="form-label">
            Assigned To
          </label>
          <select 
            onChange={
              (e)=>{
                let obj = { ...ticket };
                obj.assignedTo = e.target.value;
                setTicket(obj);
              }
            }
          className="form-select">
            {
              users.map(u=>
                <option value={u.name}>{u.name}</option>
                )
            }
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select 
            onChange={
              (e)=>{
                let obj = { ...ticket };
                obj.status = e.target.value;
                setTicket(obj);
              }
            }
          className="form-select">
            <option value="Select">Please Select</option>
            <option value="New">New</option>
            <option value="Assigned">Assigned</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="raisedOn" className="form-label">
            Raised On
          </label>
          <input
            name="raisedOn"
            value={ticket.raisedOn}
            onInput={(e) => {
              let obj = { ...ticket };
              obj.raisedOn = e.target.value;
              setTicket(obj);
            }}
            type="date"
            className="form-control"></input>
        </div>

        <button 
        onClick={handleNewTicketClick}
        className="btn btn-success float-end">Create Ticket</button>
            
            </div>
        </div>
    )
}

export default TicketForm;