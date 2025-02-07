import C from '../constants';

export default function errors(state = [], action) {
    switch (action.type) {
        case C.ADD_ERROR:
            return [
                ...state,
                ...action.payload
            ]
        case C.CLEAR_ERROR:
            return state.filter((message, i) => i !== action.payload)
        default:
            return state
    }
}