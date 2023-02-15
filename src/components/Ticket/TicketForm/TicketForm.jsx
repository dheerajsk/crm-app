import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../Navbar/Navbar";
import {Dropdown} from "primereact/dropdown";

function TicketForm(){

    const navigate = useNavigate();
    const { desc } = useParams();

    const [users, setUsers]=useState([]);
    const [customers, setCustomers]=useState([]);
    const [ticket, setTicket] = useState({});
    const [valueMissing, setValueMissing]=useState(false);


    useEffect(()=>{
      // To get users.
      fetch(process.env.REACT_APP_APIURL+"user")
        .then((res)=> res.json())
          .then((parsedRes)=> setUsers(parsedRes));
      
      // To get customers.
      fetch(process.env.REACT_APP_APIURL+"customer")
        .then(res=> res.json())
          .then(parsedRes=> setCustomers(parsedRes));
      
      if(desc){
        fetch(process.env.REACT_APP_APIURL+"ticket/"+desc)
        .then(res=> res.json())
        .then(parsedRes=> setTicket(parsedRes));
      }
    },[])

    function handleNewTicketClick(){
        setValueMissing(false);
        if(!ticket.status){
            setValueMissing(true);
        }
        fetch(process.env.REACT_APP_APIURL+"ticket",{
            method:desc ? 'PUT' : "POST",
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
              <div>
          <label htmlFor="customer" className="form-label">
            Customer Name
          </label>
          </div>
          {/* <select 
            name="customer"
            disabled={desc}
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
                <option selected={c.name==ticket.customer} value={c.name}>{c.name}</option>
                )
            }
          </select> */}
          {/* <Dropdown 
          disabled={desc}
          value={
           customers.find(c=> c.name==ticket.customer)
          }
          onChange={(e) => {   
            let obj = { ...ticket };
            obj.customer = e.value.name;
            setTicket(obj);
          }
          }
          options={customers}
          optionLabel="name"
          placeholder="Select a customer"
          filter
          className="w-full"
          /> */}
          <Dropdown
         disabled={desc}
         value={customers.find(c => c.name == ticket.customer)}
          onChange={(e) => {setTicket({...ticket,customer: e.value.name})}}
          options={customers}
          optionLabel="name"
          placeholder="Select a customer"
          filter
          className="w-full mb-3"
          />
        
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            name="desc"
            value={ticket.desc}
            onInput={(e) => {
              // let obj = { ...ticket };
              // obj.desc = e.target.value;
              // setTicket(obj);
              setTicket({
                ...ticket,
                desc: e.target.value,
              });
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
                <option 
                selected={u.name==ticket.assignedTo} 
                value={u.name}>{u.name}</option>
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
            <option  selected={"New"==ticket.status} value="New">New</option>
            <option selected={"Assigned"==ticket.status}value="Assigned">Assigned</option>
            <option selected={"In Progress"==ticket.status}value="In Progress">In Progress</option>
            <option selected={"Resolved"==ticket.status} value="Resolved">Resolved</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="raisedOn" className="form-label">
            Raised On
          </label>
          <input
            name="raisedOn"
            value={ticket.raisedOn}
            readOnly={desc}
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
        className="btn btn-success float-end">
          {
            desc &&
            <span>Update Ticket</span>
          }
          {
            !desc &&
            <span>Create Ticket</span>
          }
        
          </button>
            
            </div>
        </div>
    )
}

export default TicketForm;