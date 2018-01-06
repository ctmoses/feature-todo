<template>
    <div class="card" :class="{ complete: complete }">
        <div class="text-wrapper">
            <div class="text" :class="{strike: complete}">{{ text }}</div>
        </div>
        <div class="btn-wrapper">            
            <button 
                class="btn green" 
                v-if="!complete"
                @click="setComplete">
                    Complete
            </button>
            <button 
                class="btn orange" 
                v-else
                @click="markOpen">
                    Not Complete
            </button>
            <button class="btn red" @click="remove">Delete</button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import * as actionTypes from '../actionTypes';

    export default {
        props: {
            text: String, 
            index: Number,
            complete: Boolean
        },
        methods: {
            ...mapActions({
                delete: actionTypes.DELETE,
                markComplete: actionTypes.COMPLETE,
                reopen: actionTypes.REOPEN
            }),
            remove() {
                this.delete(this.index);
            },
            setComplete(){
                this.markComplete(this.index);
            },
            markOpen(){
                this.reopen(this.index);
            }

        }
    }
</script>

<style lang="scss" scoped>
    .card {
        position: relative;
        margin: 10px auto;
        width: 65%;
        height: 50px;
        box-shadow: 2px 2px 2px 1px rgba(100, 100, 100, .3);
        display: inline-block;
        &.complete {
            opacity: .25;
        }
    }

    .text-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 75%;
        height: 100%;
        padding: 0;
        margin: 0;
        display: inline-block;

        .text {
            text-align: left;
            padding-left: 20px;
            line-height: 50px; 
            font-size: 1.25rem;
        }

        .strike {
            text-decoration: line-through;
        }
    }

    .btn-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 25%;
        padding: 0;
        margin: 0;
        display: inline-block;

        .btn {
            color: #fff;
            font-size: 1rem;
            vertical-align: middle;
            border:none;
            border-radius: 5px;
            margin-top: 15px;
            transition: all .25s ease;
            // box-shadow: 1px 1px 1px 1px rgba(100, 100, 100, .5);

            &.green { background: green; }
            &.orange { background: orange; }
            &.red { background: red; }

            &:active {
                border: 1px solid red;
                transform: translateY(3px);
            }

            &:focus {
                outline: none;
            }
        }
    }
</style>