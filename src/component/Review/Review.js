import React, { useEffect, useState } from 'react';
import ShowReview from '../ShowReview/ShowReview';

const Review = () => {

    const color = {
        color: '#009432',
        marginBottom: '20px'
    }

    const [displayReview, setDisplayReview] = useState([]);

    useEffect(() => {
        // fetch(`http://localhost:5000/showUserReview`)
        fetch(`https://protected-atoll-74380.herokuapp.com/showUserReview`)
            .then(res => res.json())
            .then(data => setDisplayReview(data))
    }, [])



    return (
        <div className="container-fluid bg-light border-top p-3">
            <div className="container p-3">
                <h2 style={color} className="text-center display-5">Review</h2>
                <div className="row">
                    {
                        displayReview.map(sr => <ShowReview sr={sr}></ShowReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;