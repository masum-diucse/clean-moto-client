import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar/Sidebar';
import OrderDataTable from '../OrderDataTable/OrderDataTable';

const OrderList = () => {
    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch('https://secret-scrubland-36797.herokuapp.com/getAllBookingList')
            .then(res => res.json())
            .then(data => setAllBookings(data));
    }, [])
    return (
        <section className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-lg-10 col-md-6 mx-auto">
                <h3 className="text-center">Order List</h3>
                <hr style={{ backgroundColor: 'lightgray' }} />
                <OrderDataTable orders={allBookings}></OrderDataTable>
            </div>
        </section>
    );
};

export default OrderList;