import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width:'500px'
    }
};
Modal.setAppElement('#root');
const PackageBookingForm = ({ modalIsOpen, closeModal, packageName, date }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const token = sessionStorage.getItem('token');
    let decodedToken;
    if(token){
       decodedToken = jwt_decode(token);
    }
    const onSubmit = data => {
        data.packageName = packageName;
        data.bookingDate = date.toDateString();
        data.bookingCreated = (new Date()).toDateString();
        data.taskStatus="Pending";
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert('Your Book is Added.');
                }
            })
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Package Booking Modal"
            >

                <h2 className="text-primary text-center">{packageName}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" {...register('name', { required: true })} placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" {...register('phone', { required: true })} placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" {...register('email', { required: true })} placeholder="Email" className="form-control" value={decodedToken?.email}/>
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" {...register('gender', { required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default PackageBookingForm;