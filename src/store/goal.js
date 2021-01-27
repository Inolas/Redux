import C from '../constants';

export default function goal(state = 10, action) {
    (action.type === C.SET_GOAL) ?
    parseInt(action.payload):
        state
}