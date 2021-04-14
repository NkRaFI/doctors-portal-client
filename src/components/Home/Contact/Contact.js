import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 style={{ color: '#1CC7C1' }}>Contact</h5>
                    <h1>Always  connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group my-4">
                            <input type="text" className="form-control py-3" placeholder="Email Address *" />
                        </div>
                        <div className="form-group my-4">
                            <input type="text" className="form-control py-3" placeholder="Subject *" />
                        </div>
                        <div className="form-group my-4">
                            <textarea name="" className="form-control py-3" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center my-4">
                            <button type="button" className="button-bg"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;