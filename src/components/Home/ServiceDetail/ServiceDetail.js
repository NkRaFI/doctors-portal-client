import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-12 col-md-4 my-5 text-center">
            <div>
                <img style={{height:'50px'}} src={service.img} alt=""/>
            </div>
            <h5 className="my-4">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ut.</p>
        </div>
    );
};

export default ServiceDetail;