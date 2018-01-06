<template>
    <div class="header">
        <ul>
            <li>Todos<span class="badge orange">{{ todos.length }}</span></li>
            <li>Complete<span class="badge green">{{ completed.length }}</span></li>
            <li>Incomplete<span class="badge red">{{ incompleted.length }}</span></li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Todo from '../Todo';

    export default {
        computed: {
            ...mapGetters({
                todos: Todo.module.actionTypes.TODOS,
                completed: 'completed',
                incompleted: 'incompleted'
            })
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: #555;
        // box-shadow: 2px 2px 1px 2px rgba(100, 100, 100, .75);
    }

    li {
        list-style: none;
        display: inline;
        color: #fff;
        padding: 0 10px;
    }

    .badge {
        margin-left: 5px;
        font-size: .85rem;
        padding: 3px 10px;
        color: #fff;
        background: #ccc;
        border-radius: 5px;

        &.green { background: green; }
        &.red { background: red; }
        &.orange { background: orange; }
    }
</style>