
import {Sidebar} from "primereact/sidebar";
import "./SideMenu.css";

function SideMenu(){
    return (
        <div>
            <Sidebar visible="true">
            <div className="menus">
                <p>
                    <a className="navbar-brand" href="/">Home</a>
                </p>
                <p>
                    <a className="navbar-brand" href="/users">Users</a>
                </p>
                <p>
                     <a className="navbar-brand" href="/tickets">Tickets</a>
                </p>
            </div>
            </Sidebar>
        </div>
    );
}

export default SideMenu;