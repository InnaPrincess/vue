<template lang="pug">
.hed-menu
  .header-block-1
    img.header-img(src="@/assets/Shapes@2x.png " alt=" ")
    p Website Redesign
    p.header-img-2 ...
  .header-block-2
    ul.header-users-icons
      li
        a(href=" ")
          img.us-icon(src="@/assets/logo1.jpg " alt=" ")
      li
        a(href=" ")
          img.us-icon(src="@/assets/logo2.jpg " alt=" ")
      li
        a(href=" ")
          img.us-icon(src="@/assets/logo3.jpg " alt=" ")
      li
        a.share(href=" ") Share
      li.chat
        a(href=" ")
          img(src="@/assets/Shape@1x.svg" alt="ico1")
          | Chat
.menu-header
  ul
    li
      router-link(:to="{name:'Tasks'}"
                 active-class="activ")
        | Tasks
    li
      router-link(:to="{name:'Kanban'}"
                 active-class="activ")
        | Kanban
    li
      router-link(:to="{name:'Activity'}"
                 active-class="activ")
        | Activity
    li
      a(href=" ") Calendar
    li
      a(href=" ") Files
    
</template>
<script lang="ts">
export default {
  name: 'Header',
};
</script>
<style lang=""></style>
