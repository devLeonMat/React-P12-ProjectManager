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
            <Project />
        </ul>

    );
};

export default ListProjects;
