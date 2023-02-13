
import "./TicketDashbaord.css";

function TicketDashbaord(props){
    return ( 
    <div className="dashboard">
        <div className="tile tile-all">
            <p className="tile-text">Total</p>
            <hr />
            <p className="tile-value">{props.dashbaordCounts.total}</p>
        </div>
        <div className="tile tile-new">
            <p className="tile-text">New</p>
            <hr />
            <p className="tile-value">{props.dashbaordCounts.new}</p>
        </div>
        <div className="tile tile-assigned">
            <p className="tile-text">Assigned</p>
            <hr />
            <p className="tile-value">{props.dashbaordCounts.assigned}</p>
        </div>
        <div className="tile tile-resolved">
            <p className="tile-text">Resolved</p>
            <hr />
            <p className="tile-value">{props.dashbaordCounts.resolved}</p>
        </div>
        <div className="tile tile-progress">
        <p className="tile-text">In Progress</p>
            <hr />
            <p className="tile-value">{props.dashbaordCounts.progress}</p>
        </div>
    </div>
    );
}

export default TicketDashbaord;