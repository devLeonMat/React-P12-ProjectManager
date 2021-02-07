import {
    FORM_PROJECT,
    OBTAIN_PROJECT,
    ADD_PROJECT,
    VALID_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT
} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            };
        case OBTAIN_PROJECT:
            return {
                ...state,
                projects: action.payload
            };
        case ADD_PROJECT:
            return {
                ...state,
                projects: [
                    ...state.projects,
                    action.payload,
                ],
                form: false,
                errorForm: false
            };
        case VALID_FORM:
            return {
                ...state,
                errorForm: true
            };
        case CURRENT_PROJECT:
            return {
                ...state,
                project: state.projects.filter(proj => proj.id === action.payload)
            };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(proj => proj.id !== action.payload),
                project: null
            };
        default:
            return state;
    }
}
