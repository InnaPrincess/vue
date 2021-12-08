<template>
<div class="main">
  <p class="main-title">TODAY</p>
  <ul>
    <div v-for="aMessage in aMessages" :key="aMessage.id">
      <li class="main-message" v-if="aMessage.standart === 1"><span class="main-message-message" :class="aMessage.spanclas"><img :src="require('@/assets/Icon@3x.svg')" alt=""/></span>
        <p class="main-message-text">{{ aMessage.text }}</p>
        <p class="main-time">{{ aMessage.time }}</p>
      </li>
      <li class="main-message" v-if="aMessage.standart === 2"><span class="main-message-message" :class="aMessage.spanclas"><img :src="require('@/assets/1.png')" alt=""/></span>
        <p class="main-message-text">{{ aMessage.text }}</p>
        <p class="main-time">{{ aMessage.time }}</p>
      </li>
      <li class="main-message" v-if="aMessage.standart === 3">
        <p class="main-message-text my-write">{{ aMessage.text }}</p>
      </li>
      <li class="main-message" v-if="aMessage.standart === 4"><span class="main-message-message" :class="aMessage.spanclas"><img :src="require('@/assets/3.png')" alt=""/></span>
        <p class="main-message-text">{{ aMessage.text }}<img v-for="(item, index) in collectionImg" :key="index" v-on:click="notificFunction(index)" :src="require('@/assets/' + item + '.jpg')" width="100" height="100" alt=" "/></p>
        <p class="main-time">{{ aMessage.time }}</p>
      </li>
    </div>
  </ul>
  <div></div>
</div>
</template>
<script lang="">
export default {
  name: 'Content',
  data() {
    return {
      collectionImg: ['image_1', 'image_2', 'image_3', 'image_4'],
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
    notificFunction(index) {
      this.$emit('notificationIndex', index)
  }
  },
};
</script>
<style lang=""></style>
