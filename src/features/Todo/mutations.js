//todo mutations
import * as todo from './actionTypes';

export default {
    [todo.CREATE]: (state, payload) => {
        let newState = {...state};
        newState.todos.push({text: payload, complete: false});
    },
    [todo.DELETE]: (state, payload) => {
        let newState = {...state};
        newState.todos.splice(payload, 1);
        return newState;   
    },
    [todo.COMPLETE]: (state, payload) => {
        let newState = {...state};
        newState.todos[payload].complete = true;
        return newState;
    },
    [todo.REOPEN]: (state, payload) => {
        let newState = {...state};
        newState.todos[payload].complete = false;
        return newState;
    }
};