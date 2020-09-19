<template>
    <div class="todoapp">
        <h1>todo   {{$store.getters.todoNum}}</h1>
        <div class="main">
            <input class="new-todo" type="text" v-model="todoName" @keyup.enter="addTodo">
            <List />
        </div>
    </div>
</template>


<script>
    import List from './List';

    export default {
        name: 'todo',
        data() {
            return {
                todoName: ''
            }
        },
        methods: {
            addTodo() {
                this.$store.commit('addTodo', this.todoName)
                this.todoName = ''
            }
        },
        components: {
            List
        }
    }
</script>
