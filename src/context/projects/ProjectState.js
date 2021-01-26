import React, {useReducer} from "react";
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import {FORM_PROJECT} from "../../types";


const ProjectState = props => {
    const initialState = {
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


    return (
        <ProjectContext.Provider
            value={{
                form: state.form,
                showForm
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
};

export default ProjectState;
