import React from 'react';

const ProjectCard = ({ project }) => {
    const { name, img } = project;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card shadow-sm border-0 bg-transparent">
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                </div>

            </div>
        </div>

    );
};

export default ProjectCard;