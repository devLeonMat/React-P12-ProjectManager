import React, {useContext} from "react";
import ProjectContext from "../../context/projects/ProjectContext";


const Project = ({project}) => {
// obtain states of projects
    const projectsContext = useContext(ProjectContext);
    const {currentProject} = projectsContext;


    return (
        <li>
            <button
                className="btn btn-blank"
                onClick={() => currentProject(project.id)}
            >{project.name} </button>
        </li>
    )
};

export default Project;
