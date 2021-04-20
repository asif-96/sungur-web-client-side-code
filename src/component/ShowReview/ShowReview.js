import React from 'react';
import { FcBusinessman } from "react-icons/fc";
import '../../Responsive.css';

const ShowReview = ({ sr }) => {

    const style = {
        margin: '45px',
        boxShadow: '2px -1px 22px -6px rgba(156, 56, 56, 0.75)',
        borderRadius: '5px'
    }


    return (
        <div style={style} className="col-md-3 bg-light p-3 card-body">
            <h4 className="mt-4 mb-4">{sr.userName}</h4>
            <h6 className="mt-4 mb-4"><FcBusinessman /> {sr.userProfession}</h6>
            <p>{sr.review}</p>
        </div>
    );
};

export default ShowReview;