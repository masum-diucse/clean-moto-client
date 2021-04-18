import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt, faLongArrowAltRight, } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div>
                            <h4>Contact Us</h4>
                            <p className="text-secondary py-2"><FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> +880-171-8888888</p>
                        </div>
                        <div>
                            <h4>Office Address</h4>
                            <p className="text-secondary py-2"><FontAwesomeIcon className="text-primary" icon={faMapMarkerAlt} /> 421/1 Narsingdi Hub A-Block <br /> 2nd Floor, Narsingdi</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled mt-4">
                            <li className="py-2"><Link to="/history" className="text-secondary">Company History</Link></li>
                            <li className="py-2"><Link to="/service" className="text-secondary">Latest Services</Link></li>
                            <li className="py-2"><Link to="/meetAdvisor" className="text-secondary">Meet Our Advisor</Link></li>
                            <li className="py-2"><Link to="/wedo" className="text-secondary">What We Do</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h4>Opening Hours</h4>
                        <div className="text-secondary py-2">
                            <p>Monday - Friday</p>
                            <p>8:00 AM - 9:00 PM</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h4>Join Newsletter</h4>
                        <div className="form-group py-3">
                            <div className="d-flex">
                                <input type="text" className="form-control" placeholder="Email" />
                                <button className="btn btn-primary"><FontAwesomeIcon className="text-light" icon={faLongArrowAltRight} /> </button>
                            </div>
                        </div>
                        <div>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;