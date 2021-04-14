import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link ms-5 active" aria-current="page" href="#">Home</a>
                            <a className="nav-link ms-5" href="#">About</a>
                            <a className="nav-link ms-5" href="#">Dental Services</a>
                            <a className="nav-link ms-5 text-white" href="#">Reviews</a>
                            <a className="nav-link ms-5 text-white" href="#">Blogs</a>
                            <a className="nav-link ms-5 text-white" href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;