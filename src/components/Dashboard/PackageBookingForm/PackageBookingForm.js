import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SinglePayment from './SinglePayment';
const stripePromise = loadStripe('pk_test_51Ied5eGYwpjiTa8Sd3gyhxfFafa9skjZaPeGN4PJJthYh48la015HSFeOSweljzhx7x8nn3fyp8sbE9HkfMss8fF00rpFP0bYC');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '500px'
    }
};
Modal.setAppElement('#root');
const PackageBookingForm = ({ modalIsOpen, closeModal, packageName, date,packageImageURL }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const token = sessionStorage.getItem('token');
    let decodedToken;
    if (token) {
        decodedToken = jwt_decode(token);
    }
    const onSubmit = data => {
        data.packageName = packageName;
        data.packageImageURL = packageImageURL;
        data.bookingDate = date.toDateString();
        data.bookingCreated = (new Date()).toDateString();
        data.taskStatus = "Pending";
        data.paymentStatus = "Done";

        fetch('https://secret-scrubland-36797.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert('Your payment and order completion is successful');
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

                <h2 className="text-dark text-center">{packageName}</h2>
                <p className="text-secondary text-center"><small>On {date.toDateString()}</small></p>
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
                        <input type="text" {...register('email', { required: true })} placeholder="Email" className="form-control" value={decodedToken?.email} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div style={{ border: '1px solid lightgray', padding: '10px' }}>
                        <input type="radio" name="payment" className="mb-3" /> Credit Card
                        <input type="radio" name="payment" className="ml-3 mb-3" /> Debit Card
                        <Elements stripe={stripePromise}>
                            <SinglePayment></SinglePayment>
                        </Elements>
                    </div>

                    <div className="form-group text-right mt-3">
                        <button type="submit" className="btn btn-success">Pay</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default PackageBookingForm;