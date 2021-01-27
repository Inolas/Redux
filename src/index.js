import C from './constants';
import goal from './store/goal';
import skiDay from './store/skiDay';
import errors from './store/errors';
import state from './initialState.json'
import { combineReducers } from 'redux'

export default combineReducers({
    skiDay,
    errors,
    goal
})
const store = createStore(combineReducers)
console.log(store.getState())
    // {
    //   counter: 0,
    //   todos: []
    // }

store.dispatch({
    type: 'SET_GOAL',
    text: 15
})
console.log(store.getState())
    // {
    //   setgoal: 0,
    //   todos: [ 'Use Redux' ]
    // }

console.log("InitialState");

console.log(`These are the Actions\n
    ${Object.keys(C).join('\n')}
`)

// const state = 10;
// const action = {
//     type: C.SET_GOAL,
//     payload: 15
// }

// const state = ;

const action = {
    type: C.ADD_DAY,
    payload: {
        "resort": "BigBear",
        "date": "03-12-2020",
        "powder": true,
        "backcountry": false
    }
}
const calling = skiDay(state, action)
console.log(`skiDay 1
    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(calling)}
`);

// const state = [
//     "user not authrized",
//     "server not found"
// ];
// const action = {
//     type: C.ADD_ERROR,
//     payload: [
//         "connenction error"
//     ]
// }
// console.log(`addError 0
//     initial state: ${state}
// `);

// const nextState1 = addErrors(state, action)
// console.log(`addError 1
//     initial state: ${state}
//     action: ${JSON.stringify(action)}
//     new state: ${JSON.stringify(nextState1)}
// `);


// const action2 = {
//     type: C.CLEAR_ERROR,
//     payload: 0
// }

// const nextState = addErrors(nextState1, action2)

// console.log(`addError 2
//     initial state: ${state}
//     action: ${JSON.stringify(action2)}
//     new state: ${JSON.stringify(nextState)}
// `);

console.log(`
`)