import React from 'react';

const PackageBookingCard = ({booking}) => {
    const {packageName,packageImageURL,taskStatus,bookingDate}=booking;
    let classString="btn btn-success";
    if(taskStatus==="Pending"){
        classString="btn btn-danger";
    }
    if(taskStatus==="On Going"){
        classString="btn btn-warning text-dark";
    }
    const cl="btn btn-warning text-light";
    return (
        <div className="col-lg-4 col-md-6 col-sm-6  mt-4">
            <div style={{backgroundColor: '#f1f8e9' }} className="card shadow-sm border-0 text-center">
                <img className="mx-auto" style={{ height: '100px', width: '100px' }} src={packageImageURL} alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title text-center">{packageName}</h4>
                    <h6>{bookingDate}</h6>
                    <button className={classString}>{taskStatus}</button>
                </div>
             

            </div>
        </div>
    );
};

export default PackageBookingCard;