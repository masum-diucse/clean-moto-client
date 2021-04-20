import React from 'react';
import { Col, Row } from 'react-bootstrap';
import deleteImage from '../../../images/icon/delete_icon.png';

const ManageServiceTable = ({serviceInfo}) => {
    const {_id,packageName,packagePrice}=serviceInfo;
    const handleDeleteService=(event,id) => {
        fetch(`https://secret-scrubland-36797.herokuapp.com/deleteService/${id}`,{
            method:'DELETE'
        }).then(res=>res.json())
        .then(result=>{
            if(result){
                alert("Product Deleted")
                {event.target.parentNode.parentNode.style.display="none";}
            }
        })
    }
    return (
        <Row className="m-2 text-center">
            <Col xs={4}>{packageName}</Col>
            <Col xs={4}>{packagePrice}</Col>
            <Col xs={4}>
                <input type="image" src={deleteImage} style={{height: '30px'}} onClick={(event)=>handleDeleteService(event,_id)}/>
            </Col>
        </Row>
    );
};

export default ManageServiceTable;