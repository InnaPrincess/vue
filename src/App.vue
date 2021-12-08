<template>
<div>
  <Layout></Layout>
</div>
</template>
<script lang="ts">
import Layout from '@/components/Layout.vue';
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    Layout,
  },
  created() {
    console.log('testggg');
  }
});
</script>

<style lang="scss">
@import 'style.scss';
</style>
