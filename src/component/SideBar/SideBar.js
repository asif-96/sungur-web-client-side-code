import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsFillGridFill, BsPencilSquare } from "react-icons/bs";


const SideBar = () => {

    return (
        <div className="pt-4">
            <Link className="nav-link" to="/admindashboard"><h5><BsFillGridFill /> Manage Service</h5></Link>
            <Link className="nav-link" to="/addService"><h5><BsPlus /> Add Service</h5></Link>
            <Link className="nav-link"><h5><BsPencilSquare /> Edit Service</h5></Link>
        </div>
    );
};

export default SideBar;