<template>
    <div id="todo-input">
        <input v-model="todo" @keyup.enter="save"/>
        <button @click="save" >Save</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import * as actionTypes from '../actionTypes';

    export default {
        data: function(){
            return {
                todo: ""
            };
        },
        methods: {
            ...mapActions({
                create: actionTypes.CREATE
            }),
            save() {
                this.create(this.todo);
                this.todo = "";
            }
        }
    }
</script>

<style lang="scss" scoped>
    #todo-input {
        margin: 0 auto;
        width: 75%;
        text-align: center;

        input {
            width: 75%;
            height: 25px;
            line-height: 30px;
            margin: 0 auto;
            border-radius: 5px;
            border: 1px solid #ccc;
            text-align: left;
            font-size: 1rem;

            &:focus { outline: none; border: 1px solid green; }
        }

        button {
            border: none;
            border-radius: 5px;
            background: green;
            margin-left: 10px;
            padding-left: 15px;
            padding-right: 15px;
            height: 30px;
            color: #fff;
            box-sizing: border-box;
        }
    }
</style>