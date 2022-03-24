import React from 'react';
import logo from '../../images/Logo.svg'
import './Nav.css'
const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={logo}alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Order</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Order Review</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Manage Inventory</a>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;