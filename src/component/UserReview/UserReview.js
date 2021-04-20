import React from 'react';
import './UserReview.css'
import UserSideBar from '../UserSideBar/UserSideBar';
import { useForm } from "react-hook-form";


const UserReview = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const eventData = {
            userName: data.name,
            userProfession: data.profession,
            review: data.description
        }
        console.log(eventData);
        // const url = `http://localhost:5000/userDashboard`;
        const url = `https://protected-atoll-74380.herokuapp.com/userDashboard`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response!', res))
    }

    return (
        <div className="container p-3">
            <div className="row border-bottom">
                <h3 className="display-6">Review</h3>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <UserSideBar></UserSideBar>
                </div>
                <div className="col-md-9 div-border">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} type="text" placeholder="Enter Name" />
                        <br/>
                        <input {...register("profession")} type="text" placeholder="Enter Your Profession" />
                        <br />
                        {/* <input {...register("description", { required: true })} type="text" placeholder="Write Your Review Here" /> */}
                        <textarea {...register("description", { required: true })} placeholder="Write Your Review Here" cols="50" rows="5"></textarea>
                        <br />
                        <input className="btn btn-outline-success" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserReview;