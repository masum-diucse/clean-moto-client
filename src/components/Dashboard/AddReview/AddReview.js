import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Shared/Sidebar/Sidebar/Sidebar';
import { useHistory } from 'react-router';
const axios = require('axios');
const AddReview = () => {
    document.title = "Add Review";
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    let history = useHistory();

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'acf4bf1ed9badbca5bd6940704c04aff');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageURL(res.data.data.display_url));
    }


    const onSubmit = (data) => {
        console.log(data);
        const reviewData = {
            reviewerName: data.reviewerName,
            reviewerCompanyName: data.reviewerCompanyName,
            reviewerDesignation: data.reviewerDesignation,
            reviewerMessage: data.reviewerMessage,
            reviewerImageURL: imageURL
        };
        const url = 'https://secret-scrubland-36797.herokuapp.com/addReview';
        fetch(url, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewData)
        }).then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Package Added Successfully");
                    history.push("/dashboard");
                }
            })
    };
    return (
        <section className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-lg-10 col-md-6 mx-auto">
                <h3 className="text-center">Add Review</h3>
                <hr style={{ backgroundColor: 'lightgray' }} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-center">
                        <Row className="m-3">
                            <Col>
                                <div>
                                    <label for="reviewerName">Your Name</label><br />
                                    <input type="text" {...register('reviewerName', { required: true })} />
                                    {errors.reviewerName && <p>Please enter your name.</p>}
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <label for="reviewerCompanyName">Your Company Name</label><br />
                                    <input type="text" {...register('reviewerCompanyName', { required: true })} />
                                    {errors.reviewerCompanyName && <p>Please enter your company name.</p>}
                                </div>
                            </Col>
                        </Row>
                        <Row className="m-3">
                            <Col>
                                <div>
                                    <label for="reviewerDesignation">Designation</label><br />
                                    <input type="text" {...register('reviewerDesignation', { required: true })} />
                                    {errors.reviewerDesignation && <p>Please enter your designation.</p>}
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <label for="imageUpload">Upload Image</label><br />
                                    <input name="imageUpload" type="file" accept="image/*" onChange={handleImageUpload} />
                                    <p>{imageURL ? <span style={{ color: 'green' }}>Image uploaded successfully in cloud</span> : <span style={{ color: 'red' }}>Please wait before submitting after choosing image file</span>}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="px-5">
                                <div className="form-group">
                                    <label for="reviewerMessage">Your message</label><br />
                                    <textarea {...register('reviewerMessage', { required: true })} className="form-control" cols="30" rows="10"></textarea>
                                    {errors.reviewerMessage && <p>Please enter your message.</p>}
                                </div>
                            </Col>
                        </Row>
                        <input type="submit"></input>
                    </div>

                </form>

            </div>
        </section>
    );
};

export default AddReview;