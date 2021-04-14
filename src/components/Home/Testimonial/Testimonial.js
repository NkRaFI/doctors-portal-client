import React from 'react';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonial.css';

const Testimonial = () => {
    const testimonials = [
        {
            key: 1,
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Wilson Harry',
            from: 'California',
            img: wilson
        },
        {
            key: 2,
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Ema Gomez',
            from: 'California',
            img: ema
        },
        {
            key: 3,
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Aliza Farari',
            from: 'California',
            img: aliza
        }
    ]
    return (
        <section className="container my-5 ms-auto px-3 testimonial-container">
            <div className="my-5">
                <h5 className="my-3" style={{ color: '#1CC7C1' }}>TESTIMONIAL</h5>
                <h1>What's Our Patients <br /> Says</h1>
            </div>
            <div className="row">
                {
                    testimonials.map(testimonial => <TestimonialCard testimonial={testimonial} key={testimonial.key}></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;