<template lang="">
  <p class="main-li-title"><b>{{ task.title }}</b></p>
  <p class="main-li-text1">{{ task.text }}</p>
  <p class="main-time">{{ task.time }}</p>
  <!-- <button @click="tasks.splice(index, 1)">Удалить</button> -->
</template>
<script>
import {defineComponent} from 'vue';
export default defineComponent({
    name: 'TaskItem',
    props: {
        task: {
            required: true,
            type: Object
        }
    }
})
</script>
<style lang="">

</style>
