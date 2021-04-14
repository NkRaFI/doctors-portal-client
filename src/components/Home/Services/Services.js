import React from 'react';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import cavity from '../../../images/cavity.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const serviceData = [
        {
            key: 1,
            name: "Fluoride Treatment",
            img: fluoride,
        },
        {
            key: 2,
            name: "Cavity Filling",
            img: cavity,
        },
        {
            key: 3,
            name: "Teeth Whitening",
            img: whitening,
        },
    ]
    return (
        <section className="container my-5">
            <div className="text-center mb-5 pt-3">
                <h5 style={{color:'#1CC7C1'}} className="mb-3">OUR SERVICES</h5>
                <h1 style={{color:'#3A4256'}}>Services We Provide</h1>
            </div>
            <div className="row">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.key}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;