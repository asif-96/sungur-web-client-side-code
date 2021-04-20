import React from 'react';
import aboutPic from '../../images/about.jpg'

const About = () => {
    return (
        <div className="container p-5">
            <h2 className="text-center p-3 display-5 text-danger">About Us</h2>
            <div className="row">
                <div className="col-md-6 text-center" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident doloribus natus, facere perspiciatis nam magnam omnis iusto cupiditate quod quasi facilis! Provident quo sapiente magni nam iusto mollitia molestias quam?
                    </p>
                </div>
                <div className="col-md-6">
                    <img style={{width: '100%'}} src={aboutPic} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default About;