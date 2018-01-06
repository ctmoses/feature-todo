//todo actions
import * as todo from './actionTypes';

export default {
    [todo.CREATE]: ({commit}, payload) => {
        commit(todo.CREATE, payload);
    },
    [todo.DELETE]: ({commit}, payload) => {
        commit(todo.DELETE, payload);
    },
    [todo.COMPLETE]: ({commit}, payload) => {
        commit(todo.COMPLETE, payload);
    },
    [todo.REOPEN]: ({commit}, payload) => {
        commit(todo.REOPEN, payload);
    }
}; 