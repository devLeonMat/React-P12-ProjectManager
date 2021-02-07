import React, {useContext, useEffect} from "react";
import Project from "./Project";
import ProjectContext from './../../context/projects/ProjectContext';

const ListProjects = () => {

    // extract projects from initial state
    const projectsContext = useContext(ProjectContext);
    const {projects, obtainProjects} = projectsContext;

    useEffect(() => {
        obtainProjects();
    }, []);

    // check if projects container
    if (projects.length === 0) return <p>No hay proyectos, comienza creando uno</p>;


    return (
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>

    );
};

export default ListProjects;
