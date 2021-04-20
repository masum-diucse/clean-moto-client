import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonials = () => {
    const [testimonialsData,setTestimonialsData]= useState([]);
    useEffect(()=>{
        fetch('https://secret-scrubland-36797.herokuapp.com/getAllReviews')
        .then(res => res.json())
        .then(data=>setTestimonialsData(data))
    },[])
    return (
        <section className="bg-light pb-5 mt-5">
        <div className="container">
                <div className="text-center text-uppercase my-4">
                    <h2>Testimonials</h2>
                    <hr style={{width:'150px',backgroundColor:'lightgray'} }/>
                </div>
                <div className="row my-3 py-3">
                    {
                        testimonialsData.map(td=><TestimonialCard testimonial={td}></TestimonialCard>)
                    }
                </div>
        </div>
    </section>
    );
};

export default Testimonials;