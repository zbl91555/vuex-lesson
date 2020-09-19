import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        todoList: []
    },
    mutations: {
        initialTodoList(state, todoList) {
            state.todoList = todoList
        },
        addTodo(state, name) {
            state.todoList = state.todoList.concat({
                id: state.todoList.length + 1,
                name
            })
        },
        removeTodo(state, id) {
            state.todoList = state.todoList.filter(todo => todo.id !== id)
        }
    },
    actions: {
        fetchTodoList(store) {
            fetch('todo')
                .then(data => data.json())
                .then(value => {
                    store.commit('initialTodoList', value)
                })
        }
    },
    getters: {
        todoNum(state) {
            return state.todoList.length
        }
    }
})

export default store
