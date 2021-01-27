import React, {Fragment} from "react";
import Task from "./Task";


const ListTask = () => {
    const taskProject = [
        {id: 1, name: 'Elegir plataforma', status: false},
        {id: 2, name: 'Elegir colores', status: true},
        {id: 3, name: 'Elegir plataforma de pagos', status: false},
        {id: 4, name: 'Elegir hosting', status: true}
    ];

    return (
        <Fragment>
            <h2>Proyecto: Tienda virtual</h2>
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
            <button className="btn btn-eliminar">Eliminar proyecto</button>
        </Fragment>

    );

};

export default ListTask;
