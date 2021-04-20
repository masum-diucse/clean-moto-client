import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faShoppingBag,faPlusSquare,faUserPlus,faThLarge } from '@fortawesome/free-solid-svg-icons';
import './AdminSidebar.css';
const AdminSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/orderlist" className="text-white">
                        <span><FontAwesomeIcon icon={faShoppingBag} />  Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addPackage" className="text-white">
                    <span><FontAwesomeIcon icon={faPlusSquare} />  Add Package</span>
                    </Link>
                </li>
                <li>
                <Link to="/makeAdmin" className="text-white">
                    <span><FontAwesomeIcon icon={faUserPlus} />  Make Admin</span>
                    </Link>
                </li>
                <li>
                <Link to="/manageService" className="text-white">
                    <span><FontAwesomeIcon icon={faThLarge} />  Manage Service</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default AdminSidebar;