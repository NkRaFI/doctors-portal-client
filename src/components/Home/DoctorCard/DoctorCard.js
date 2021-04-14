import React from 'react';
import doctorSm from '../../../images/doctor-sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const DoctorCard = () => {
    return (
        <div className="col-12 col-md-4 text-center mb-3">
            <img style={{ height: '300px' }} className="img-fluid mb-3" src={doctorSm} alt="" />
            <h4>Dr. Coudi</h4>
            <p> <FontAwesomeIcon className="text-success" icon={faPhoneAlt} /> +880-188-934789</p>
        </div>
    );
};

export default DoctorCard;