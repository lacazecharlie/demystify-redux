import {TITLE} from "./actions";

const initialState = {
    title: 'default value'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TITLE: {
            return {
                ...state,
                title: action.payload,
            }
        }
        default:
            return {
                ...state,
            }
    }
}