import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Navbar/Navbar";


function TicketForm(){

    const navigate = useNavigate();

    const [ticket, setTicket] = useState({});
    const [valueMissing, setValueMissing]=useState(false);

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
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Customer Name
          </label>
          <input
            value={ticket.customer}
            onInput={(e) => {
              let obj = { ...ticket };
              obj.customer = e.target.value;
              setTicket(obj);
            }}
            type="text"
            className="form-control"></input>
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
          <input
            name="assignedTo"
            value={ticket.assignedTo}
            onInput={(e) => {
              let obj = { ...ticket };
              obj.assignedTo = e.target.value;
              setTicket(obj);
            }}
            type="text"
            className="form-control"></input>
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