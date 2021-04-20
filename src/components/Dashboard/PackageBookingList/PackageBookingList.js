import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar/Sidebar';
import jwt_decode from "jwt-decode";
import PackageBookingCard from '../PackageBookingCard/PackageBookingCard';
const PackageBookingList = () => {
    const [bookingsData, setBookingsData] = useState([]);
    const token = sessionStorage.getItem('token');
    let decodedToken;
    if (token) {
        decodedToken = jwt_decode(token);
    }
    const data = { email: decodedToken.email };
    useEffect(() => {
        fetch('http://localhost:5000/getBookingListByEmail', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setBookingsData(data);
            })
    }, [])
    return (
        <div>
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="container">
                    <div className="row my-3 py-3">
                        {
                            bookingsData.map(bkd => <PackageBookingCard booking={bkd}></PackageBookingCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageBookingList;