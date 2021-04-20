import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const { isSignedIn, name } = props.user;
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light nav-color p-3">
                <div className="container-fluid">
                    <Link to="/" className="logo">
                        Sungur<span className="logo-title">WEB</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="list-item nav-link text-white">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="list-item nav-link text-white" to="/userDashboard">Purchase Bundle</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="list-item nav-link text-white" to="/admindashboard">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="list-item nav-link text-white">Blog</Link>
                            </li>
                        </ul>
                        {
                            (props.user.isSignedIn) ?  <Link to="/login"><button type="button" class="btn btn-outline-light mr-3">{name}</button></Link>
                            :
                            <Link to="/login"><button type="button" class="btn btn-outline-light mr-3">Login</button>{name}</Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;