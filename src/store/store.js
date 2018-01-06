import Vue from 'vue';
import Vuex from 'vuex';

import Features from '../features';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        [Features.Todo.module.actionTypes.TODO]: Features.Todo.module
    }
});