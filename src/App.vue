<template>
    <div id="main">
        <Navbar></Navbar>
        <div id="content">
            <Todo></Todo>
        </div>
    </div>
</template>

<script>
    import Features from './features/index';

    export default {
        components: {
            Navbar: Features.Common.Header,
            Todo: Features.Todo.components.TodoMain
        }
    }
</script>

<style lang="scss">
    #content {
        position: fixed;
        top: 50px;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
