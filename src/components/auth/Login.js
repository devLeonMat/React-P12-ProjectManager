import React, {useState} from "react";
import {Link} from 'react-router-dom';


const Login = () => {

    // state for init session
    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    const {email, password} = user;

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
                <h1>Iniciar Sesión</h1>
                <form onSubmit={onSubmit}>
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
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"/>
                    </div>
                </form>
                <Link to={'/new-account'} className="enlace-cuenta"> Obtener Cuenta</Link>
            </div>
        </div>

    )
};
export default Login;
