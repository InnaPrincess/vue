<template>
  <div class="main">
    <p class="main-title">TODAY</p>
    <input type="text" placeholder="Тема задания" v-model="newTask.title" required="required" />
    <input type="text" placeholder="Описание задания" v-model="newTask.text" required="required" />
    <button v-on:click="addTask">Добавить</button>
    <ul>
      <li class="main-li" v-for="(aMessage, index) in aMessages" :key="index">
        <TaskItem :task="aMessage" />
      </li>
    </ul>
    <div></div>
  </div>
</template>
<script lang="">
import TaskItem from '@/components/TaskItem.vue';
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'Tasks',
  components: {TaskItem},
  data() {
    return {
      newTask: {
        time: '8:40 PM',
        text: '',
        title: '',
      },
      aMessages: [
        {
          time: '8:40 PM',
          text: 'quam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiamnemo.',
        },
        {
          time: '7:32 PM',
          text: 'olestiae delectus sequi quos aliquid aperiam nemo.',
        },
        {
          time: '7:33 PM',
          text: 'atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiam nemo.',
        },
        {
          time: '8:52 PM',
          text: 'quisquam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquidaperiam nemo.',
        },
      ],
    };
  },
  methods: {
    addTask() {
      if (!this.newTask.text) {
        return false;
      }
      this.aMessages.push(this.newTask);
      this.newTask = {};
      t;
    },
  },
  computed: {
    taskSorted: function () {
      return this.aMessages.sort(function (a, b) {
        return b - a;
      });
    },
  },
  
});
</script>
<style lang="scss">
.main li {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  align-items: center;
}

.main-li-title {
  width: 461px;
  padding: 0px 10px 0px 10px;
  font-family: Helvetica;
  font-size: 16px;
  color: #131313;
  // line-height: 20px;
  margin-right: 30px;
  margin-left: 30px;
}
.main-li-text1 {
  width: 461px;
  padding: 0px 10px 0px 10px;
  font-family: Helvetica;
  font-size: 16px;
  color: #131313;
  line-height: 20px;
  margin-right: 30px;
  margin-left: 30px;
}
.blink2 {
  -webkit-animation: blink2 1s linear infinite;
  animation: blink2 1s linear infinite;
}
@-webkit-keyframes blink2 {
  100% {
    color: rgba(34, 34, 34, 0);
  }
}
@keyframes blink2 {
  100% {
    color: rgba(34, 34, 34, 0);
  }
}
</style>
