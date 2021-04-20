import React, { useEffect, useState } from 'react';
import { BsCheckBox } from "react-icons/bs";
import cheetah from '../../images/Cheetah.png';
import eagle from '../../images/Eagle.png';
import extream from '../../images/extreme-plan.png'
import ShowService from '../ShowService/ShowService';

const Service = () => {

    const style = {
        boxShadow: '2px -1px 22px -6px rgba(156, 56, 56, 0.75)',
    }

    const color = {
        color: '#7158e2',
        marginBottom: '20px'
    }

    const containerBG = {
        backgroundColor: '#ddd'
    }

    const [showService, setShowService] = useState([]);

    useEffect(() => {
        // fetch(`http://localhost:5000/showServices`)
        fetch(`https://protected-atoll-74380.herokuapp.com/showServices`)
            .then(res => res.json())
            .then(data => setShowService(data))
    }, [])

    return (
        <div className="container-fluid p-3" style={containerBG}>
            <div className="container p-3">
                <h2 style={color} className="text-center display-5">Services</h2>
                <div className="row">
                    {
                        showService.map(ss => <ShowService key={ss._id} ss={ss}></ShowService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;