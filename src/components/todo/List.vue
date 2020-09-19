<template>
    <ul class="todo-list">
        <li v-for="todo in $store.state.todoList" :key="todo.id">
            <span>{{todo.name}}</span>
            <span class="destory" @click="removeTodo(todo.id)">&times;</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'TodoList',
        created() {
            this.$store.dispatch('fetchTodoList')
        },
        methods: {
            removeTodo(id) {
                this.$store.commit('removeTodo', id)
            }
        },
    }
</script>
