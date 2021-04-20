import React, { useEffect, useState } from 'react';
import carWash from '../../../images/package-logo/regular-car-wash.png';
import minivanWash from '../../../images/package-logo/minivan-wash.png';
import truckWash from '../../../images/package-logo/truck-wash.png';
import PackageCard from '../PackageCard/PackageCard';
// const packagesData=[
//     {
//         packageName:"Regular Car Wash",
//         packageImage:carWash,
//         packagePrice:20,
//         packageDescription:"Dolor diam justo accusam sanctus rebum diam magna. Ipsum est."
//     },
//     {
//         packageName:"Minivan Wash",
//         packageImage:minivanWash,
//         packagePrice:50,
//         packageDescription:"Dolor diam justo accusam sanctus rebum diam magna. Ipsum est."
//     },
//     {
//         packageName:"Truck Wash",
//         packageImage:truckWash,
//         packagePrice:75,
//         packageDescription:"Dolor diam justo accusam sanctus rebum diam magna. Ipsum est."
//     }
// ]

const Packages = () => {
    const [packagesData,setPackagesData]= useState([]);
    const [isHome,setIsHome]= useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/getAllPackage')
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