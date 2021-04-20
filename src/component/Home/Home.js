import React from 'react';
import './Home.css';
import About from '../About/About'
import Service from '../Service/Service'
import WhyChoose from '../WhyChoose/WhyChoose';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <div className="fluid-container-bg">
                <div className="fluid-container-overlay">
                    <div className="container display-2">
                        Welcome To <span className="welcome-title">
                            SUNGURWEB
                    </span>
                    </div>
                    <p className="text-color">Choose your package and ready to fly!</p>
                </div>
            </div>
            <About></About>
            <Service></Service>
            <WhyChoose></WhyChoose>
            <Review></Review>
        </div>
    );
};

export default Home;