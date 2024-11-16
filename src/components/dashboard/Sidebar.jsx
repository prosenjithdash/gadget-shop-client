import {  NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="bg-gray-200 border-r-2 min-h-screen ">
            <ul className="flex flex-col gap-2">
                <li>
                    <NavLink to='/dashboard/overview'>Overview</NavLink>
                </li>
                
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <button>Logout</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;