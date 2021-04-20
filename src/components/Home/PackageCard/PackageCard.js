import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PackageBookingForm from '../../Dashboard/PackageBookingForm/PackageBookingForm';

const PackageCard = ({ pkd, isHome,date }) => {
    const { packageName, packageImageURL, packagePrice, packageDescription } = pkd;
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card shadow-sm border-0 bg-transparent text-center">
                <img className="mx-auto" style={{ height: '100px', width: '100px' }} src={packageImageURL} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-center">{packageName}</h5>
                    <h4>${packagePrice}</h4>
                    {
                        (isHome) && <p>{packageDescription}</p>
                    }
                </div>
                {
                    (!isHome) &&
                    <div className="py-3">
                        <Button onClick={openModal} className="text-center w-50" variant="outline-dark" >Order</Button>
                        <PackageBookingForm  packageName={packageName} packageImageURL={packageImageURL} date={date} modalIsOpen={modalIsOpen} closeModal={closeModal}></PackageBookingForm>
                    </div>
                
                }

            </div>
        </div>
    );
};

export default PackageCard;