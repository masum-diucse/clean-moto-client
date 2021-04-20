import React from 'react';

const OrderDataTable = ({ orders }) => {
    document.title="Order List"
    const handleSelection = (e, id) => {
        console.log(e.target.value);
        const status = { taskStatus: e.target.value };
        console.log(status);
        fetch(`https://secret-scrubland-36797.herokuapp.com/updateBookingStatus/${id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                      alert("Status Updated");  
                }else{
                    alert("Choose Other Status");  
                }
            })
    }
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Package</th>
                    <th className="text-secondary" scope="col">Booking Date</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) =>

                        <tr>
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.phone}</td>
                            <td>{order.packageName}</td>
                            <td>{order.bookingDate}</td>
                            <td>
                                <select id="status-select" onChange={(e) => handleSelection(e, order._id)}>
                                    <option value={order.taskStatus} className="bg-danger">{order.taskStatus}</option>
                                    <option value="Pending">Pending</option>
                                    <option value="On Going">On Going</option>
                                    <option value="Done">Done</option>
                                </select>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );

};
export default OrderDataTable;