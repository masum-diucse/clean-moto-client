import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
        <div className="dashboard-container container-fluid row">
            <Sidebar></Sidebar>
            {/* <div className="col-md-5 d-flex align-items-center justify-content-center">
                <Calendar className="my-5" onChange={handleDateChange} value={new Date()} />
            </div>
            <div className="col-md-5">
                <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
            </div> */}
        </div>
    </div>
    );
};

export default Dashboard;