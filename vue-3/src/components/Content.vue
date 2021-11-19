<template lang="pug">
.main
  p.main-title TODAY
  ul
    div(v-for="fMessage in fMessages" :key="fMessage.id")
      li.main-message(v-if="fMessage.standart === 1")
        span.main-message-message(:class="fMessage.spanclas")
          img(:src="require('@/assets/Icon@3x.svg')" alt="")
        p.main-message-text {{ fMessage.text }}
        p.main-time {{ fMessage.time }}
      li.main-message(v-if="fMessage.standart === 2")
        span.main-message-message(:class="fMessage.spanclas")
          img(:src="require('@/assets/1.png')" alt="")
        p.main-message-text {{ fMessage.text }}
        p.main-time {{ fMessage.time }}
      li.main-message(v-if="fMessage.standart === 3")
        p.main-message-text.my-write {{ fMessage.text }}
      li.main-message(v-if="fMessage.standart === 4")
        span.main-message-message(:class="fMessage.spanclas")
          img(:src="require('@/assets/3.png')" alt="")
        p.main-message-text
          | {{ fMessage.text
          | }}
          img(v-for="(item, index) in collectionImg" :key="index" v-on:click="notificFunction(index)" :src="require('@/assets/' + item + '.jpg')" width="100" height="100" alt=" ")
        p.main-time {{ fMessage.time }}
  div
</template>
<script lang="">
export default {
  name: 'Content',
  data() {
    return {
      collectionImg: ['image_1', 'image_2', 'image_3', 'image_4'],
      fMessages: [
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
      this.$emit('notificationIndex', index);
    },
  },
};
</script>
<style lang=""></style>
