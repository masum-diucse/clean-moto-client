import React, { useEffect, useState } from 'react';
import david from '../../../images/review-person/david.png'
import TestimonialCard from '../TestimonialCard/TestimonialCard';
// const testimonialsData=[
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'David Lerk',
//         designation:'CEO',
//         company: 'Mazda',
//         img : david
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'David Lerk',
//         designation:'CEO',
//         company: 'Mazda',
//         img : david
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'David Lerk',
//         designation:'CEO',
//         company: 'Mazda',
//         img : david
//     }
// ]

const Testimonials = () => {
    const [testimonialsData,setTestimonialsData]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/getAllReviews')
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