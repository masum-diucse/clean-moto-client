import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShoppingCart, faCommentAlt,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const UserSidebar = () => {
    const handleLogout=()=>{
        // sessionStorage.removeItem("token");
    }
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/book" className="text-white">
                        <span><FontAwesomeIcon icon={faShoppingCart} />  Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookingList" className="text-white">
                        <span><FontAwesomeIcon icon={faShoppingBag} />  Booking list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white">
                        <span><FontAwesomeIcon icon={faCommentAlt} />  Add Review</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={handleLogout}>Logout</span></Link>
            </div>
        </div>
    );
};

export default UserSidebar;