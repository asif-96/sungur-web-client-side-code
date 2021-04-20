import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';

const UserSideBar = () => {
    return (
        <div className="pt-4">
            <Link className="nav-link" to="/userDashboard"><h5><AiOutlineShoppingCart /> Purchase Bundle</h5></Link>
            <Link className="nav-link" to="/purchaseList"><h5><BsCardList /> Purchase List</h5></Link>
            <Link className="nav-link" to="/purchaseHistory"><h5><BsCardList /> Purchase History</h5></Link>
            <Link className="nav-link" to="/review"><h5><BiMessageDetail /> Review</h5></Link>
        </div>
    );
};

export default UserSideBar;