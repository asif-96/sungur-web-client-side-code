import React from 'react';

const ManageServices = ({ ms }) => {

    const deleteService = (id) => {
        // fetch(`http://localhost:5000/deleteService/${id}`, {
        fetch(`https://protected-atoll-74380.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',
            // headers: {
            //     'Content-type': 'application/json'
            // }
        })
            .then(res => res.json())
            .then(result => {
                alert('Bundle successfully deleted. Reload page...!');
                console.log('Deleted item successfully!', result);
            })
        console.log(id);
    }

    return (
        <tr>
            <td>{ms.serviceName}</td>
            <td>{ms.repair}</td>
            <td>{ms.repairType}</td>
            <td>{ms.price}</td>
            <td>{ms.bundleSpeed}</td>
            <td>
                <button className="btn btn-success mr-1">Edit</button>
                <button onClick={() => deleteService(ms._id)} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
};

export default ManageServices;