<template>
<div class="wraper">
  <div class="menu">
    <div class="menu-logo">
      <p>PROJECTUS</p>
    </div>
    <div class="menu-user">
      <div class="user-info">
        <p class="name">Jean Gonsales</p><br/>
        <p class="profesional">Product Owner</p>
      </div>
      <p class="more">...</p>
    </div>
    <div class="menu-tasks">
      <div class="menu-complit-tasks" v-on:click="openPopap()">
        <p class="tasks tC">{{ complitedTask }}</p><br/>
        <p class="tasks-text">Complited Tasks</p>
      </div>
      <div>
        <p class="tasks tO">{{ openTasks }}</p><br/>
        <p class="tasks-text">Open Tasks</p>
      </div>
    </div>
    <ul class="menu-ul">
      <li class="menu-decoration">MENU</li>
      <li>Home</li>
      <li>My Tasks</li>
      <li>Notifikations<span class="num">{{ notification }}</span></li>
    </ul>
  </div>
  <div class="header">
    <div class="hed-menu">
      <div class="header-block-1"><img class="header-img" src="./assets/Shapes@2x.png " alt=" "/>
        <p>Website Redesign</p>
        <p class="header-img-2">...</p>
      </div>
      <div class="header-block-2">
        <ul class="header-users-icons">
          <li><a href=" "><img class="us-icon" src="./assets/logo1.jpg " alt=" "/></a></li>
          <li><a href=" "><img class="us-icon" src="./assets/logo2.jpg " alt=" "/></a></li>
          <li><a href=" "><img class="us-icon" src="./assets/logo3.jpg " alt=" "/></a></li>
          <li><a class="share" href=" ">Share</a></li>
          <li class="chat"><a href=" "><img src="./assets/Shape@1x.svg" alt="ico1"/>Chat</a></li>
        </ul>
      </div>
    </div>
    <div class="menu-header">
      <ul>
        <li><a href=" ">Tasks</a></li>
        <li><a href=" ">Kanban</a></li>
        <li><a class="activ" href=" ">Activity</a></li>
        <li><a href=" ">Calendar</a></li>
        <li><a href=" ">Files</a></li>
      </ul>
    </div>
    <div class="main">
      <p class="main-title">TODAY</p>
      <ul>
        <div v-for="aMessage in aMessages" :key="aMessage.id">
          <li class="main-message" v-if="aMessage.standart === 1"><span class="main-message-message" :class="aMessage.spanclas"><img :src="require('./assets/Icon@3x.svg')" alt=""/></span>
            <p class="main-message-text">{{ aMessage.text }}</p>
            <p class="main-time">{{ aMessage.time }}</p>
          </li>
          <li class="main-message" v-if="aMessage.standart === 2"><span class="main-message-message" :class="aMessage.spanclas"><img :src="require('./assets/1.png')" alt=""/></span>
            <p class="main-message-text">{{ aMessage.text }}</p>
            <p class="main-time">{{ aMessage.time }}</p>
          </li>
          <li class="main-message" v-if="aMessage.standart === 3">
            <p class="main-message-text my-write">{{ aMessage.text }}</p>
          </li>
          <li class="main-message" v-if="aMessage.standart === 4"><span class="main-message-message" :class="aMessage.spanclas"><img :src="require('./assets/3.png')" alt=""/></span>
            <p class="main-message-text">{{ aMessage.text }}<img v-for="(item, index) in collectionImg" :key="index" v-on:click="notificFunction(index)" :src="require('./assets/' + item + '.jpg')" width="100" height="100" alt=" "/></p>
            <p class="main-time">{{ aMessage.time }}</p>
          </li>
        </div>
      </ul>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'App',
  created() {
    console.log('test');
  },
  data() {
    return {
      complitedTask: 372,
      openTasks: 11,
      collectionImg: ['image_1', 'image_2', 'image_3', 'image_4'],
      notification: 3,
      aMessages: [
        {
          standart: 1,
          spanclas: 'color-send',
          time: '8:40 PM',
          text: 'quam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiamnemo.',
        },
        {
          standart: 2,
          spanclas: 'color_mess',
          time: '7:32 PM',
          text: 'olestiae delectus sequi quos aliquid aperiam nemo.',
        },
        {
          standart: 3,
          text: 'atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiam nemo.',
        },
        {
          standart: 4,
          spanclas: 'color_upload',
          time: '8:52 PM',
          text: 'quisquam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquidaperiam nemo.',
        },
      ],
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
    // imgFunc(numImage) {
    //   return require('./assets/' + numImage + '.jpg');
    // },
    notificFunction(ni) {
      this.notification = ni;
    },
  },
});
</script>

<style lang="scss">
@import 'style.scss';
</style>
