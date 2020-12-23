import React from "react";

const Task = ({task}) => {

    return (

        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {
                    task.status ? (<button className="completo"> Completo</button>)
                        : (<button className="incompleto"> Incompleto</button>)
                }
            </div>
            <div className="acciones">
                <button className="btn btn-primario">Editar</button>
                <button className="btn btn-secundario">Eliminar</button>
            </div>
        </li>

    )

};

export default Task;
