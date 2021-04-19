import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { reviewerName, reviewerCompanyName, reviewerDesignation, reviewerMessage, reviewerImageURL } = testimonial;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card shadow-sm border-0 bg-transparent">
            <div className="card-header bg-transparent border-0 d-flex align-items-center mx-auto">
                    <img className="mx-3" src={reviewerImageURL} alt="" width="60" />
                    <div>
                        <h6 className="text-success">{reviewerName}</h6>
                        <p>{reviewerDesignation},{reviewerCompanyName}</p>
                    </div>
                </div>
                <div className="card-body">
                    <p className="text-justify card-text">{reviewerMessage}</p>
                </div>
               
            </div>
        </div>
    );
};

export default TestimonialCard;