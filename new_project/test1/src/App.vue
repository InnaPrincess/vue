<template lang="pug">
.wraper
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
  .header
    .hed-menu
      .header-block-1
        img.header-img(src="./assets/Shapes@2x.png " alt=" ")
        p Website Redesign
        p.header-img-2 ...
      .header-block-2
        ul.header-users-icons
          li
            a(href=" ")
              img.us-icon(src="./assets/logo1.jpg " alt=" ")
          li
            a(href=" ")
              img.us-icon(src="./assets/logo2.jpg " alt=" ")
          li
            a(href=" ")
              img.us-icon(src="./assets/logo3.jpg " alt=" ")
          li
            a.share(href=" ") Share
          li.chat
            a(href=" ")
              img(src="./assets/Shape@1x.svg" alt="ico1")
              | Chat
    .menu-header
      ul
        li
          a(href=" ") Tasks
        li
          a(href=" ") Kanban
        li
          a.activ(href=" ") Activity
        li
          a(href=" ") Calendar
        li
          a(href=" ") Files
    .main
      p.main-title TODAY
      ul
        li.main-message
          span.main-message-message.color-send
            img(src="./assets/Icon@3x.svg" alt=" ")
          p.main-message-text
            | quam dicta, corporis atque amet iure veritatis, repellat,
            | molestiae delectus sequi quos aliquid aperiam nemo.
          p.main-time 8:40 PM
        li.main-message
          span.main-message-message.color_mess
            img(src="./assets/1.png" width="12" height="11" alt=" ")
          p.main-message-text
            | olestiae delectus sequi quos aliquid aperiam nemo.
          p.main-time 7:32 PM
        li.main-message
          p.main-message-text.my-write
            | atque amet iure veritatis, repellat, molestiae delectus sequi quos
            | aliquid aperiam nemo.
        li.main-message
          span.main-message-message.color_upload
            img(src="./assets/3.png" alt=" ")
          p.main-message-text
            | quisquam dicta, corporis atque amet iure veritatis, repellat,
            | molestiae delectus sequi quos aliquid aperiam nemo.
            img(v-for="(item, index) in collectionImg" :key="index" v-on:click="notificFunction(index)" :src="imgFunc(item)" width="100" height="100" alt=" ")
          p.main-time 8:40 PM
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "App",
    created() {
      console.log("test");
    },
    data() {
      return {
        complitedTask: 372,
        openTasks: 11,
        collectionImg: ["image_1", "image_2", "image_3", "image_4"],
        notification: 3,
      };
    },
    methods: {
      openPopap() {
        if (
          confirm("Are you sure you want to change the number of tasks?") &&
          this.openTasks > 0
        ) {
          this.complitedTask = this.complitedTask + 1;
          this.openTasks = this.openTasks - 1;
        } else if (this.openTasks === 0) {
          alert("У вас нет открытых заданий");
        }
      },
      imgFunc(numImage) {
        return require("./assets/" + numImage + ".jpg");
      },
      notificFunction(ni) {
        this.notification = ni;
      },
    },
  });
</script>

<style lang="scss">
  @import "style.scss";
</style>
