<template lang="">
<div class="hed-menu">
  <div class="header-block-1"><img class="header-img" src="@/assets/Shapes@2x.png " alt=" "/>
    <p>Website Redesign</p>
    <span class="header-img-2"></span>
  </div>
  <div class="header-block-2">
    <ul class="header-users-icons">
      <li><a href=" "><img class="us-icon" src="@/assets/logo1.jpg " alt=" "/></a></li>
      <li><a href=" "><img class="us-icon" src="@/assets/logo2.jpg " alt=" "/></a></li>
      <li><a href=" "><img class="us-icon" src="@/assets/logo3.jpg " alt=" "/></a></li>
      <li><a class="share" href=" ">Share</a></li>
      <li class="chat"><a href=" "><img src="@/assets/Shape@1x.svg" alt="ico1"/>Chat</a></li>
    </ul>
  </div>
</div>
<div class="menu-header">
  <ul>
    <li><router-link :to="{name:'Tasks'}" active-class="activ">Tasks</router-link></li>
    <li><router-link :to="{name:'Kanban'}" active-class="activ">Kanban</router-link></li>
    <li><router-link :to="{name:'Activity'}" active-class="activ">Activity</router-link></li>
    <li><router-link :to="{name:'Calendar'}" active-class="activ">Calendar</router-link></li>
    <li><router-link :to="{name:'Files'}" active-class="activ">Files</router-link></li>
  </ul>
</div>
</template>
<script lang="ts">
export default {
  name: 'Header',
};
</script>
<style lang=""></style>
