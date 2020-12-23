import React from "react";
import Project from "./Project";

const ListProjects = () => {

    const projects = [
        {name: 'tienda virtual'},
        {name: 'intranet'},
        {name: 'tienda virtual'}
    ];

    return (
        <ul className="listado-proyectos">
            {projects.map(value => (
                <Project project={value}/>
            ))}
        </ul>

    );
};

export default ListProjects;
