<template lang="">
    <div>
       <ul>
           {{ todos}}
           <TodoItem v-for="todo of todos"
           v-bind:todo="todo"
           />
        </ul>
    </div>
</template>
<script>
import TodoItem from '@/components/TodoItem'
export default {
    props: ['todos'],
    components:{ TodoItem }
}
</script>
<style lang="">
    
</style>