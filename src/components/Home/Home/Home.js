import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import TopBar from '../../Shared/TopBar/TopBar';
import Header from '../Header/Header';

const Home = () => {
    // const {user,admin} = useContext(UserContext);
    // const [loggedInUser, setLoggedInUser]=user;
    // const [isAdmin, setIsAdmin]=admin;
    // setIsAdmin(true);
    // console.log({isAdmin});
    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
        </div>
    );
};

export default Home;