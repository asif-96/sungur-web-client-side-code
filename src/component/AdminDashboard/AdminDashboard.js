import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import '../AddService/AddService.css'
import ManageServices from '../ManageServices/ManageServices';

const AdminDashboard = () => {

    const [manageService, setManageService] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:5000/showServices')
        fetch('https://protected-atoll-74380.herokuapp.com/showServices')
            .then(res => res.json())
            .then(data => setManageService(data))
    }, [])

    return (
        <div className="container p-3">
            <div className="row border-bottom">
                <h3 className="display-6">Manage Bundle</h3>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9 div-border">
                    {
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Bundle Name</th>
                                    <th scope="col">Repair</th>
                                    <th scope="col">Repair Type</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Speed</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {manageService.map(ms => <ManageServices ms={ms}></ManageServices>)}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;