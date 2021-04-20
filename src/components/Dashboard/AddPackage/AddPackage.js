import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Shared/Sidebar/Sidebar/Sidebar';
import { useHistory } from 'react-router';
const axios = require('axios');

const AddPackage = () => {
    document.title = "Add Package";
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
        const packageData = {
            packageName: data.packageName,
            packagePrice: data.packagePrice,
            packageDescription: data.packageDescription,
            packageImageURL: imageURL
        };
        const url = 'https://secret-scrubland-36797.herokuapp.com/addPackage';
        fetch(url, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(packageData)
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
                <h3 className="text-center">Add Package</h3>
                <hr style={{ backgroundColor: 'lightgray' }} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-center">
                        <Row className="m-3">
                            <Col>
                                <div>
                                    <label for="packageName">Package Name</label><br />
                                    <input type="text" {...register('packageName', { required: true })} />
                                    {errors.packageName && <p>Please enter package name.</p>}
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <label for="packagePrice">Package Price</label><br />
                                    <input type="number" {...register('packagePrice',{ required: true },{ pattern: /\d+/ })} />
                                    {errors.packagePrice && <p>Please enter package price.</p>}
                                </div>
                            </Col>
                        </Row>
                        <Row className="m-3">
                            <Col>
                                <div>
                                    <label for="packageDescription">Package Description</label><br />
                                    <input type="text" {...register('packageDescription', { required: true })} />
                                    {errors.packageDescription && <p>Please enter package description.</p>}
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
                        <input type="submit"></input>
                    </div>

                </form>

            </div>
        </section>
    );
};

export default AddPackage;