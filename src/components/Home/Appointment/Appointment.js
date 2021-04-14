import React from 'react';
import doctor from '../../../images/doctor.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <section className="appointment-container">
            <div className="row ms-auto appointment">
                <div className="col-12 col-md-6 order-2 order-md-1 d-flex justify-content-center">
                    <img src={doctor} className="img-fluid" alt="" />
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-start my-3 align-items-center">
                    <div>
                        <h5 style={{color:'#1CC7C1'}} className="my-3">APPOINTMENT</h5>
                        <h1 className="text-white my-4">Make an Appointment <br/> Today</h1>
                        <p className="text-white my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, ipsa.</p>
                        <button className="button-bg">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;