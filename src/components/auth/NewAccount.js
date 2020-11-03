import React, {useState} from "react";
import {Link} from 'react-router-dom';


const NewAccount = () => {

    // state for init session
    const [user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    const {name, email, password, confirm} = user;

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirm">Confirmar password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="repite password"
                            value={confirm}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"/>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">Iniciar sesión</Link>
            </div>
        </div>

    )
};
export default NewAccount;
