import C from '../constants';

export default function skiDay(state = null, action) {
    (action.type === C.ADD_DAY) ? {...state, ...action.payload } :
    state
}