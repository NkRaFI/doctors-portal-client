import React from 'react';
import chair from '../../../images/Chair.png';

const HeaderMain = () => {
    return (
        <main className="row my-5 d-flex align-items-center p-3 ms-auto">
            <div className="col-md-4 offset-md-1 mb-5">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nemo atque iste, quidem vero dolorum.</p>
                <button className="button-bg">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6 mb-5">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;