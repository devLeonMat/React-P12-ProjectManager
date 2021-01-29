import {
    FORM_PROJECT,
    OBTAIN_PROJECT,
    ADD_PROJECT
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
                form: false
            };
        default:
            return state;
    }
}
