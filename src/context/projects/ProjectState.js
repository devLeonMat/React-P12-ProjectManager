import React, {useReducer} from "react";
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import {v4 as uuidv4} from 'uuid';
import {
    FORM_PROJECT,
    OBTAIN_PROJECT,
    ADD_PROJECT,
    VALID_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT
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
        form: false,
        errorForm: false,
        project: null
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
    const addProject = project => {
        project.id = uuidv4();

        //insert project in the state
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })

    };

    // valid form by errors
    const showError = () => {
        dispatch({
            type: VALID_FORM
        })
    };

    // select the project
    const currentProject = projectId => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        })
    };

    //  Delete project
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    };

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                errorForm: state.errorForm,
                project: state.project,
                showForm,
                obtainProjects,
                addProject,
                showError,
                currentProject,
                deleteProject
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
};

export default ProjectState;
