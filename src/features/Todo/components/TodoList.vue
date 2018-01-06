<template>
    <div id="todo-list">
        <TodoCard 
            v-for="(todo, index) in todos" 
            :text="todo.text"
            :complete="todo.complete" 
            :index="index"
            :key="todo">
        </TodoCard>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import TodoCard from './TodoCard.vue';
    import * as actionTypes from '../actionTypes';

    export default {
        components: {
            TodoCard
        },
        computed: {
            ...mapGetters({
                todos: actionTypes.TODOS
            })
        }
    }
</script>

<style lang="scss" scoped>
    #todo-list {
        width: 100%;
        text-align: center;
    }
</style>