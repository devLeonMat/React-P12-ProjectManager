import React, {useReducer} from "react";
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import {
    FORM_PROJECT,
    OBTAIN_PROJECT,
    ADD_PROJECT
} from "../../types";


const ProjectState = props => {
    const projects = [
        {id: 1, name: 'tienda virtual'},
        {id: 2, name: 'intranet'},
        {id: 3, name: 'tienda virtual'},
        {id: 4, name: 'MERN'},
    ];
    const initialState = {
        projects: [],
        form: false
    };

    // dispatch for actions
    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    //functions for crud
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    };

    // obtain projects
    const obtainProjects = () => {
        dispatch({
            type: OBTAIN_PROJECT,
            payload: projects
        })
    };

    // add projects

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm,
                obtainProjects
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
};

export default ProjectState;
