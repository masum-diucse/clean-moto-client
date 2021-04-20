import React, { useEffect, useState } from 'react';
import PackageCard from '../PackageCard/PackageCard';


const Packages = () => {
    const [packagesData,setPackagesData]= useState([]);
    const [isHome,setIsHome]= useState(true);
    useEffect(()=>{
        fetch('https://secret-scrubland-36797.herokuapp.com/getAllPackage')
        .then(res => res.json())
        .then(data=>setPackagesData(data))
    },[])
    return (
        <section id="services" className="mt-5">
        <div className="container">
                <div className="text-center text-uppercase">
                    <h2>Our Best Packages</h2>
                    <hr style={{width:'150px',backgroundColor:'lightgray'} }/>
                </div>
                <div className="row my-3 py-3">
                    {
                        packagesData.map(pkd=><PackageCard isHome={isHome} pkd={pkd}></PackageCard>)
                    }
                </div>
        </div>
    </section>
    );
};

export default Packages;