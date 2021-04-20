import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import UserSideBar from '../UserSideBar/UserSideBar';

const PurchaseList = (props) => {

    const { isSignedIn, name } = props.user
    console.log(isSignedIn, name);
    const { id } = useParams();
    const [event, setEvent] = useState({});
    const user = JSON.parse(localStorage.getItem('user'));

    const [registration, setRegistration] = useState({
        userName: props.user.name,
        email: props.user.email
    })

    // console.log(bundleName, repair, repairType, bundleSpeed, price)
    const { serviceName, repair, repairType, bundleSpeed, price } = event;
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (registration.date) {
            fetch('https://protected-atoll-74380.herokuapp.com/submitOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registration)
            })
                .then(res => res.json())
                .then(data => {
                    alert('Your order is successful');
                    history.replace('/userDashboard');
                    console.log(data);
                })
        }
    }

    const handleDateChange = (e) => {
        const newRegistration = registration;
        newRegistration.date = e.target.value;
        setRegistration(newRegistration);
    }


    useEffect(() => {
        // fetch(`http://localhost:5000/broadbands/${id}`)
        fetch(`https://protected-atoll-74380.herokuapp.com/broadbands/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
                const newRegistration = registration;
                newRegistration.serviceName = data.serviceName;
                newRegistration.bundleSpeed = data.bundleSpeed;
                newRegistration.price = data.price;

                setRegistration(newRegistration);
            })
    }, [])


    return (
        <div className="container p-3">
            <div className="row border-bottom">
                <h3 className="display-6">Purchase List</h3>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <UserSideBar></UserSideBar>
                </div>
                <div className="col-md-9 div-border">
                    <form onSubmit={handleSubmit}>
                        <input className="form-control w-50" type="text" placeholder="Bundle Name" value={event.serviceName} /> <br />
                        <input className="form-control w-50" type="text" placeholder="Bundle Speed" value={event.bundleSpeed} /> <br />
                        <input className="form-control w-50" type="text" placeholder="Price" value={event.price} /> <br />
                        <input className="form-control w-50" type="date" onChange={handleDateChange} /> <br />
                        <button className="btn btn-outline-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseList;