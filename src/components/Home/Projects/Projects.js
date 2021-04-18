import React from 'react';
import img1 from '../../../images/projects/img1.jpg'
import img2 from '../../../images/projects/img2.jpg'
import img3 from '../../../images/projects/img3.jpg'
import ProjectCard from '../ProjectCard/ProjectCard';
const projectsData=[
    {
        name:"Ford Dirty Trailer",
        img:img1
    },
    {
        name:"Mercedes Car",
        img:img2
    },
    {
        name:"Toyota Water Tanker Truck",
        img:img3
    }
]

const Projects = () => {
    return (
        <section className="mt-5">
            <div className="container">
                    <div className="text-center text-uppercase my-4">
                        <h2>Our Latest Projects</h2>
                        <hr style={{width:'150px',backgroundColor:'lightgray'} }/>
                    </div>
                    <div className="row my-3 py-3">
                        {
                            projectsData.map(pd=><ProjectCard project={pd}></ProjectCard>)
                        }
                    </div>
            </div>
        </section>
    );
};

export default Projects;