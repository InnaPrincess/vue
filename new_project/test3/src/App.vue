<template>
<div class='app'>
 <h1>Todo applications</h1>
 <hr>
 <TodoList v-bind:todos="todos"/>
  </div>
</template>
<script>
import TodoList from '@/components/TodoList'
export default {
  // name: 'app', 
  components: { TodoList },
  data(){ return {todos:[
    {id: 1, title: 'Купить хлеб', complited: false},
    {id: 2, title: 'Купить хлеб2', complited: false}
    ]}},
  methods:{},
}
</script>
<style lang="scss">
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
#app{
  text-align: center;
  margin-top: 60px;
  color: #2c3e50;
}
</style>