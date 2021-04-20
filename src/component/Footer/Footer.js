import React from 'react';
import './Footer.css'
import '../Header/Header.css'
import { Link } from 'react-router-dom';
import './FooterResponsive.css'


const Footer = () => {
    return (
        <div className="container-fluid bottom-bg">
            <div className="bottom-section">
                <div className="address">
                    <Link to="/" className="logo">
                        Sungur<span className="logo-title">WEB</span>
                    </Link>
                    <ul>
                        <li>Address: 60-49 Road 11378 New York</li>
                        <li>Phone: +65 11.188.888</li>
                        <li>Email: hello@colorlib.com</li>
                    </ul>
                </div>
                <div className="links">
                    <h4 className="links-txt">Useful Action Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>Bundle</li>
                        <li>Connection infomation</li>
                        <li>Privacy Policy</li>
                        <li>Our Sitemap</li>
                    </ul>
                </div>
                <div className="subscribe">
                    <h4 className="subs-txt">Join Our Newsletter Now</h4>
                    <p className="subs-para">Get E-mail updates about our     latest shop and special offers.
                 </p>
                    <input type="email" placeholder="Enter Email Address" />
                    <a className="btn-subscribe" href="#">Subscribe</a>
                </div>
            </div>
            <p className="text-center text-white">
                Copyright ©2021 All rights reserved | This template is made with by ❤️ by <a target="_blank" className="text-warning" href="https://asif-96.github.io/PortfolioWebsite/">Asif Muntasir</a>
            </p>
        </div>
    );
};

export default Footer;