import React from 'react';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../InfoCard/InfoCard';

const BusinessInfo = () => {
    const infoData = [
        {
            key: 1,
            title: 'Opening Hours',
            description: 'We are open 24/7',
            bgColor: 'primary',
            icon: faClock
        },
        {
            key: 2,
            title: 'Visit Our Location',
            description: 'Brooklyn, NY 10036, United States',
            bgColor: 'dark',
            icon: faMapMarkerAlt
        },
        {
            key: 3,
            title: 'Contact Us Now',
            description: '+000 123 456780',
            bgColor: 'primary',
            icon: faPhoneAlt
        }
    ]
    return (
        <section className='container'>
            <div className="row gx-3 mb-2 px-md-3">
                {
                    infoData.map(info=> <InfoCard info={info} key={info.key}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;