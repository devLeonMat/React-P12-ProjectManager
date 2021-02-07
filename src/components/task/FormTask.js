import React, {useContext} from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const FormTask = () => {

    // get projects if project is active
    const projectsContext = useContext(ProjectContext);
    const {project} = projectsContext;

    if (!project) return null;

    const [currentProject] = project;

    return (
        <div className="formulario">
            <form action="">
                <div className="contenedor-input">
                    <input type="text"
                           className="input-text"
                           placeholder="Nombre de tarea"
                           name="name"/>
                </div>
                <div className="contenedor-input">
                    <input type="submit"
                           className="btn btn-primario btn-submit btn-block"
                           value="Agregar tarea"/>
                </div>
            </form>
        </div>
    )
};

export default FormTask;
