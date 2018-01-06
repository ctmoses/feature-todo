<template>
    <div>
        <h1 class="title">My Todo List</h1>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import * as actionTypes from '../actionTypes';

    import TodoList from './TodoList.vue';
    import TodoInput from './TodoInput.vue';

    export default {
        components: {
            TodoList,
            TodoInput
        }
    }
</script>

<style lang="scss" scoped>
    .title {   
        padding: 30px;
    }
</style>