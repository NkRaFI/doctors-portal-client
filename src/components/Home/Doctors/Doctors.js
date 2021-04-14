import React from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';
import './Doctors.css';

const Doctors = () => {
    return (
        <section className="container doctors-container">
            <h5 className="my-5 text-center" style={{ color: '#1CC7C1' }}>OUR DOCTORS</h5>
            <div className="row">
                <DoctorCard></DoctorCard>
                <DoctorCard></DoctorCard>
                <DoctorCard></DoctorCard>
            </div>
        </section>
    );
};

export default Doctors;