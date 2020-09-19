<template>
  <div id="app">
    <Todo />
  </div>
</template>

<script>
import Todo from './components/todo'

export default {
  name: 'App',
  components: {
    Todo
  }
}
</script>

<style>
@import url('./style.css');
</style>