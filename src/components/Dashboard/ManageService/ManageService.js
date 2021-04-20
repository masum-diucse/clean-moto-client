import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar/Sidebar';
import ManageServiceTable from '../ManageServiceTable/ManageServiceTable';

const ManageService = () => {
    const [allService, setAllService] = useState([]);
    useEffect(() => {
        fetch('https://secret-scrubland-36797.herokuapp.com/getAllPackage')
            .then(res => res.json())
            .then(data => setAllService(data));
    }, []);

    return (
        <section className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-lg-10 col-md-6 mx-auto">
                <h3 className="text-center">Manage Service</h3>
                <hr style={{ backgroundColor: 'lightgray' }} />
                <Container>
                    <Row className="bg-warning p-3  text-center">
                        <Col xs={4}><h6>Title</h6></Col>
                        <Col xs={4}><h6>Price</h6></Col>
                        <Col xs={4}><h6>Action</h6></Col>
                    </Row>
                    {
                       allService.map(as=><ManageServiceTable serviceInfo={as}></ManageServiceTable>) 
                    }
                </Container>
            </div>
        </section>
    );
};

export default ManageService;