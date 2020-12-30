import React, {useReducer} from "react";
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';


const ProjectState = props => {
    const initialState = {
        form: false
    };

    // dispatch for actions
    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    //functions for crud


    return (
        <ProjectContext.Provider
            value={{
                form: state.form
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
};

export default ProjectState;
