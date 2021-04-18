import React from 'react';

const PackageCard = ({pkd}) => {
    const {packageName,packageImage,packagePrice,packageDescription}=pkd;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card shadow-sm border-0 bg-transparent text-center">
                <img className="mx-auto" style={{ height: '100px' ,width:'100px'}} src={packageImage} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-center">{packageName}</h5>
                    <h4>${packagePrice}</h4>
                    <p>{packageDescription}</p>
                </div>

            </div>
        </div>
    );
};

export default PackageCard;