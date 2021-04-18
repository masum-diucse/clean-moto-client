import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact  py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h2>Request A Call Back</h2>
                </div>
                <div className="col-md-6 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name *" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Phone Number *" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Choose Service *" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-primary"> Send </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;