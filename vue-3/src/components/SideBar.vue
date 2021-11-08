<template lang="pug">
.menu
  .menu-logo
    p PROJECTUS
  .menu-user
    .user-info
      p.name Jean Gonsales
      br
      p.profesional Product Owner
    p.more ...
  .menu-tasks
    .menu-complit-tasks(v-on:click="openPopap()")
      p.tasks.tC {{ complitedTask }}
      br
      p.tasks-text Complited Tasks
    div
      p.tasks.tO {{ openTasks }}
      br
      p.tasks-text Open Tasks
  ul.menu-ul
    li.menu-decoration MENU
    li Home
    li My Tasks
    li
      | Notifikations
      span.num {{ notification }}
</template>
<script lang="ts">
export default {
  name: 'SideBar',
  data() {
    return {
      complitedTask: 372,
      openTasks: 11,
      notification: 3
    };
  },
  methods: {
    openPopap() {
      if (confirm('Are you sure you want to change the number of tasks?') && this.openTasks > 0) {
        this.complitedTask = this.complitedTask + 1;
        this.openTasks = this.openTasks - 1;
      } else if (this.openTasks === 0) {
        alert('У вас нет открытых заданий');
      }
    },
  },
};
</script>
<style lang=""></style>
