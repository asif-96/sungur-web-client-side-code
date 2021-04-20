import React from 'react';
import UserSideBar from '../UserSideBar/UserSideBar';
import './UserDashboard.css';
import { FaCreditCard, FaMobileAlt } from "react-icons/fa";

const UserDashboard = () => {
    return (
        <div className="container p-3">
            <div className="row border-bottom">
                <h3 className="display-6">Purchase Bundle</h3>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <UserSideBar></UserSideBar>
                </div>
                <div className="col-md-9 div-border">
                    <form>
                        <input type="text" name="name" placeholder="Enter Name"/>
                        <br/>
                        <input type="email" name="email" placeholder="Enter Email"/>
                        <br/>
                        <input type="text" name="bundleName" placeholder="Enter Bundle Name"/>
                        <br/>
                        <label htmlFor="pay">Pay with</label> <br/>
                        <input className="radio" type="radio" name="bkash"/><span  className="radio-text"> <FaMobileAlt/>Bkash</span>
                        <input className="radio" type="radio" name="creditCard"/> <FaCreditCard/>Credit Card
                        <br/>
                        <input className="pay-input" type="number" name="phoneNumber" placeholder="Enter Phone or Credit Card Number"/>
                        <input className="pay-input" type="date" name="date" placeholder="Select Date"/>
                        <input type="text" name="pin" placeholder="Enter Pin"/>
                        <br/>
                        <input className="btn btn-outline-success pl-5 pr-5" type="button" value="pay"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;