import React from 'react';
import { BsCheckBox } from "react-icons/bs";
import { Link } from 'react-router-dom';
import '../../Responsive.css';

const ShowService = ({ ss }) => {

    // event = ss.event;
    // const {_id} = event

    const style = {
        margin: '45px',
        boxShadow: '2px -1px 22px -6px rgba(156, 56, 56, 0.75)',
        borderRadius: '5px'
    }

    return (
        <div style={style} className="col-md-3 bg-light p-3 card-body">
            <img src={ss.imageURL} style={{ height: '180px', width: '100%', backgroundColor: '#273c75' }} alt="..." />
            <h2 className="mt-4 mb-4">{ss.serviceName}</h2>
            <p><BsCheckBox /> {ss.repair}</p>
            <p><BsCheckBox /> {ss.repairType}</p>
            <p><BsCheckBox /> BDT {ss.price}</p>
            <p><BsCheckBox /> {ss.bundleSpeed}</p>
            <Link className="nav-link" to={`/purchaseList/${ss._id}`}>
                <button type="button" class="btn btn-outline-info mt-2">Take Now</button>
            </Link>
        </div>
    );
};

export default ShowService;