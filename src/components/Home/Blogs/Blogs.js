import React from 'react';
import redCar from '../../../images/banner/banner1.jpg';
const Blogs = () => {
    return (
        <section className="bg-light pt-5 my-5">
            <div className="container">
                <div className="text-center text-uppercase">
                    <h2>Who is Clean Moto</h2>
                    <hr style={{ width: '150px', backgroundColor: 'lightgray' }} />
                </div>
                <div  className="row my-3 py-3">
                    <div className="col-md-5 d-none d-md-block">
                        <img className="img-fluid" src={redCar} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h4>Car wash & detailling service</h4>
                        <p className="text-secondary my-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eaque quaerat itaque impedit similique iste dolores minus natus necessitatibus ullam eveniet eos, iusto ducimus eum quae. Soluta, ducimus ratione? Numquam ad quasi tenetur fuga error voluptate ex possimus, recusandae dolore consequatur deserunt officiis sunt laborum id, provident sapiente qui a ducimus quas voluptatem asperiores corporis. Et odio omnis dignissimos consequuntur a, voluptate ab doloribus perferendis sit ex tempora. Exercitationem tenetur esse qui autem, ratione ducimus, quaerat officiis, nisi explicabo quasi cupiditate atque. Asperiores ipsam quod vero, nostrum vel dolorem temporibus ea repellendus ipsa nihil fuga adipisci, doloribus blanditiis numquam? Molestiae.
                        </p>
                        <button className="btn btn-dark ">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;