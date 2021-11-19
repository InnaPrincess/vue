<template lang="pug">
.menu
  .menu-logo
    p PROJECTUS
  .menu-user
    .user-info
      p.name {{`${user1.firstName} ${user1.lastName}`}}
      br
      p.profesional {{user1.position}}
    p.more ...
  .menu-tasks
    .menu-complit-tasks(@click="openPopap")
      p.tasks.tC {{ user1.task.complitedTask }}
      br
      p.tasks-text Complited Tasks
    div
      p.tasks.tO {{ user1.task.openTasks }}
      br
      p.tasks-text(@click="clickOpenTask") Open Tasks
  ul.menu-ul
    li.menu-decoration MENU
    li Home
    li My Tasks
    li
      | Notifikations
      span.num {{ user1.notification }}
      
</template>
<script lang="">
export default {
  name: 'Sidebar',
  props: {
    user1: {
    required: true
  }},
  methods: {
    openPopap() {
      if (confirm('Are you sure you want to change the number of tasks?') && this.user1.task.openTasks > 0) {
        this.$emit("calcOpenTask") 
      } else if (this.user1.task.openTasks === 0) {
        alert('У вас нет открытых заданий');
      }
    },
    clickOpenTask(){
      if (!this.user1.task.openTasks ){ 
        alert('У вас нет открытых заданий');
        return false;
      }
      this.$router.push({
        name: 'Tasks'
        })
    }
  },
};
</script>
<style lang=""></style>
