import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar/Sidebar';
import './PackageBook.css';
import carwash from '../../../images/bg-opacity/car-wash-bg.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PackageCard from '../../Home/PackageCard/PackageCard';
const PackageBook = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [packagesData, setPackagesData] = useState([]);
    const [isHome, setIsHome] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/getAllPackage')
            .then(res => res.json())
            .then(data => setPackagesData(data))
    }, [])

    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <section className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-lg-10 col-md-6 mx-auto">
                <h3 className="text-center">Book</h3>
                <hr style={{ backgroundColor: 'lightgray' }} />
                <div >
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-3 ">
                            <Calendar onChange={handleDateChange} value={new Date()} />
                        </div>
                        <div className="col-md-9">
                            <div>
                                <h4 className="text-success text-center my-5">Available Booking on {selectedDate.toDateString()}</h4>
                                <div className="row d-flex justify-content-center text-center">
                                    {

                                        packagesData.map(pkd => <PackageCard isHome={isHome} pkd={pkd} date={selectedDate}></PackageCard>)

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default PackageBook;