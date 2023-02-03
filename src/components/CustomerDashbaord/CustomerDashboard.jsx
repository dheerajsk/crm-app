
import "./CustomerDashboard.css";

function CustomerDashboard(){
    return ( 
    <div className="dashboard">
        <div className="tile tile-all">
            <p className="tile-text">Total</p>
            <hr />
            <p className="tile-value">200</p>
        </div>
        <div className="tile tile-new"></div>
        <div className="tile tile-accepted"></div>
        <div className="tile tile-rejected"></div>
    </div>
    );
}

export default CustomerDashboard;