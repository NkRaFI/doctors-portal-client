import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="col-12 col-md-4">
            <div className="px-3 py-5 card-shadow my-3">
                <p className="text-center">{testimonial.quote}</p>
                <div className="d-flex justify-content-around mt-5 px-4">
                    <div>
                        <img style={{ height: '50px' }} src={testimonial.img} alt="" />
                    </div>
                    <div>
                        <h6 style={{color:'#1CC7C1'}}>{testimonial.name}</h6>
                        <small className="text-secondary">{testimonial.from}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;