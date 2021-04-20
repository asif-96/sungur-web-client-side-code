import React, { useState } from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            serviceName: data.serviceName,
            price: data.price,
            repair: data.oneTimeRepair,
            repairType: data.repairType,
            bundleSpeed: data.speed,
            imageURL: imageURL
        }
        console.log(eventData);
        // const url = `http://localhost:5000/admindashboard`;
        const url = `https://protected-atoll-74380.herokuapp.com/admindashboard`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response!', res))
    }


    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '49a1a5294c7364eef4344d47e5486bae');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                // console.log(response);
                // console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    
    return (
        <div className="container p-3">
            <div className="row border-bottom">
                <h3 className="display-6">Add Bundle</h3>
            </div>
            <div className="row">
                <div className="col-md-3 p-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9 pt-5 pb-5 pl-3 div-border">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("serviceName")} type="text" placeholder="Enter Bundle Name" />
                        <br />
                        <input {...register("price", { required: true })} type="number" placeholder="Enter Price" />
                        <br />
                        <input {...register("oneTimeRepair", { required: true })} type="text" placeholder="Enter Repair" />
                        <br />
                        <input {...register("repairType", { required: true })} type="text" placeholder="Enter Repair Type" />
                        <br />
                        <input {...register("speed", { required: true })} type="text" placeholder="Enter Bundle Speed" />
                        <br />
                        <input type="file" onChange={handleImageUpload}/>
                        <br/>
                        <input className="btn btn-outline-success" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;