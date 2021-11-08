<template lang="pug">
.wraper
    SideBar
    .header
        Header
        Content
</template>
<script lang="ts">

import SideBar from "@/components/SideBar.vue"; // SideBar компоненты боковой панели
import Header from "@/components/Header.vue"; // Header заголовок 
import Content from "@/components/Content.vue"; // Content содержимое 

export default {
    name: 'Layout',
    data() {
        return {
            
        }
    },
    components: {
        SideBar,
        Header,
        Content
    },
    
}
</script>
<style lang="">
    
</style>