<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png")
  helloworld(msg="Welcome to Your Vue.js + TypeScript App")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>
