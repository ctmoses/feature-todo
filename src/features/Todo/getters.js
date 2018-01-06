//todo getters
import _ from 'lodash';

export default {
    todos: state => {
        return state.todos;
    },
    completed: state => {
        let completed = [];
        state.todos.forEach(t => {
            if(t.complete){ completed.push(t); }
        });
        return completed;
    },
    incompleted: state => {
        let notCompleted = [];
        state.todos.forEach(t => {
            if(!t.complete){ notCompleted.push(t); }
        });
        return notCompleted;
    }
}; 