import React from 'react';
import headerPic from '../../../images/banner/car-hand-wash.jpg';
const Header = () => {
    return (
        <section className="bg-light">
            <main className="container">
              <div style={{ height: '600px' }} className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6 ">
                    <h1 className="text-uppercase" >Your car is always <br /> In great hand with us</h1>
                    <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima sit unde laborum doloremque veritatis. Corporis quas voluptatum nisi expedita id!</p>
                    <button className="btn btn-dark text-uppercase">Get Service</button>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    <img style={{ height: '600px' }} className="img-fluid rounded float-right" src={headerPic} alt="" />
                </div>
              </div>
            </main>
        </section>
    );
};

export default Header;