import React from 'react';
import dentalCare from '../../../images/dentalCare.png'

const DentalCare = () => {
    return (
        <section className="container">
            <div className="row ms-auto my-5">
                <div className="col-12 col-md-4 col-md-offset-2">
                    <img style={{width: '400px'}} src={dentalCare} alt="" className="img-fluid"/>
                </div>
                <div className="col-12 col-md-6 align-self-end mt-5">
                    <h1 style={{color: '#3A4256'}} className="mb-5">Exceptional Dental Care, on Your Terms</h1>
                    <p className="text-secondary mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae veritatis quasi dolore assumenda obcaecati iure accusamus adipisci iusto, exercitationem perferendis magni dolorum sed ipsam tenetur in eligendi architecto voluptatum, quaerat praesentium at natus mollitia? Autem nam nisi vero perferendis libero rerum unde assumenda, voluptate mollitia reiciendis maiores asperiores fugiat animi! Ab repellat esse maiores officiis voluptas est. Et, ratione?
                    </p>
                    <button className="button-bg">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;