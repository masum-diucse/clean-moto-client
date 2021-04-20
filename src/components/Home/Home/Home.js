import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import TopBar from '../../Shared/TopBar/TopBar';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Packages from '../Packages/Packages';
import Projects from '../Projects/Projects';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    document.title="Clean Moto";
    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
            <Projects></Projects>
            <Blogs></Blogs>
            <Packages></Packages>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;