import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import UserSidebar from '../UserSidebar/UserSidebar';
import jwt_decode from "jwt-decode";
const Sidebar = () => {
    const {user,admin} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [isAdmin, setIsAdmin]=admin;
    const token = sessionStorage.getItem('token');
    let decodedToken;
    if(token){
       decodedToken = jwt_decode(token);
    }
    useEffect(()=>{
        const url = 'http://localhost:5000/checkAdmin';
        fetch(url, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email:loggedInUser.email || decodedToken?.email})
        }).then(res => res.json())
            .then(result => {
                setIsAdmin(result);
            })
    },[])
    return (
        <section>
            {
                isAdmin?
                <AdminSidebar></AdminSidebar>
                :
                <UserSidebar></UserSidebar>
            }
           
        </section>
    );
};

export default Sidebar;