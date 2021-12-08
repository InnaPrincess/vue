<template>
<div>
  <h2>Content Created</h2>
  <slot name="C1">The page is under construction</slot>
  <slot name="C1">we appreciate your patience !</slot>
</div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';
export default defineComponent({
   name: 'ComingSoon'
})
</script>

<style>

</style>