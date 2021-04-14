import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4">
            <div className={`info-${info.bgColor} p-4 rounded d-flex justify-content-between text-white mb-3`}>
                <div>
                    <FontAwesomeIcon style={{fontSize:'3em'}} icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;