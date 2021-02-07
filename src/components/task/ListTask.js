import React, {Fragment, useContext} from "react";
import Task from "./Task";
import ProjectContext from "../../context/projects/ProjectContext";


const ListTask = () => {

    // get projects from initial state
    const projectsContext = useContext(ProjectContext);
    const {project, deleteProject} = projectsContext;

    // if project is null
    console.log(project);
    if (!project) return <h2>Selecciona un proyecto</h2>;

    const [currentProject] = project;


    const taskProject = [
        {id: 1, name: 'Elegir plataforma', status: false},
        {id: 2, name: 'Elegir colores', status: true},
        {id: 3, name: 'Elegir plataforma de pagos', status: false},
        {id: 4, name: 'Elegir hosting', status: true}
    ];

    // delete project
    const onClickDeleteProject = () => {
        deleteProject(currentProject.id)
    };


    return (
        <Fragment>
            <h2>Proyecto: {currentProject.name}</h2>
            <ul className="listado-tareas">
                {
                    taskProject.length === 0
                        ? (<li className="tarea"><p>No hay tareas</p></li>)
                        : taskProject.map(tk => (
                            <Task
                                key={tk.id}
                                task={tk}
                            />
                        ))
                }
            </ul>
            <button
                onClick={onClickDeleteProject}
                className="btn btn-eliminar"
            >Eliminar proyecto
            </button>
        </Fragment>

    );

};

export default ListTask;
