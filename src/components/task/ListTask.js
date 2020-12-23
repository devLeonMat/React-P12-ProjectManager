import React, {Fragment} from "react";
import Task from "./Task";


const ListTask = () => {
    const taskProject = [
        {name: 'Elegir plataforma', status: false},
        {name: 'Elegir colores', status: true},
        {name: 'Elegir plataforma de pagos', status: false},
        {name: 'Elegir hosting', status: true}
    ];

    return (
        <Fragment>
            <h2>Proyecto: Tienda virtual</h2>
            <ul className="listado-tareas">
                {
                    taskProject.length === 0
                        ? (<li className="tarea"><p>No hay tareas</p></li>)
                        : taskProject.map(tk => (
                            <Task task={tk}/>
                        ))
                }
            </ul>
            <button className="btn btn-eliminar">Eliminar proyecto</button>
        </Fragment>

    );

};

export default ListTask;
