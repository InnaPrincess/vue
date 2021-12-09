<template>
  <div class="main">
    <p class="main-title">TODAY</p>
    <input type="text" placeholder="Тема задания" v-model="newTask.title" required="required" />
    <input type="text" placeholder="Описание задания" v-model="newTask.text" required="required" />
    <input type="date" v-model="newTask.time" />
    <button @click="addTask">Добавить</button>
    <transition-group tag="ul" name="bounce">
          <li class="main-li" v-for="(aMessage, index) in aMessages" :key="index" :ref="setItemRefs">
            <TaskItem :task="aMessage" />
          </li>
    </transition-group>
    <div></div>
  </div>
</template>
<script lang="ts">
import TaskItem from '@/components/TaskItem.vue';
import {defineComponent, reactive, onMounted} from 'vue';
export default defineComponent({
  name: 'Tasks',
  components: {TaskItem},
  setup(props) {
    const itemRefs: HTMLElement[] = reactive([]);
    const setItemRefs = (el: HTMLElement) => {
      if (el) {
        itemRefs.push(el);
      }
    }
    onMounted(() => {
      itemRefs.forEach((item) => {
        item.classList.add('fontresize')
        setTimeout(() => {
          item.classList.remove('fontresize')
        }, 2000);
      })
      // console.log(itemRefs);
    })
    return {setItemRefs}
  },
  data() {
    return {
      newTask: {
        time: '',
        text: '',
        title: '',
      },
      aMessages: [
        {
          title: 'quam dicta',
          time: '8:40 PM',
          text: 'quam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiamnemo.',
        },
        {
          title: 'delectus sequi',
          time: '7:32 PM',
          text: 'olestiae delectus sequi quos aliquid aperiam nemo.',
        },
        {
          title: 'repellat, molestiae',
          time: '7:33 PM',
          text: 'atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiam nemo.',
        },
        {
          title: 'corporis atque',
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
    },
  },
});
</script>
<style lang="scss">

.fontresize{
  font-size: 1.3em; 
  transition: all 2s ease-out;
}
  .bounce-enter-active {
    animation: bounce-in .4s ease-out both;
  }

  .bounce-leave-active {
    animation: bounce-in .4s reverse ease-in both;
  }

 @keyframes bounce-in {
    0% {
      transform: scale(.4);
    }
    50% {
      transform: scale(0.6);
    }
    75% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

.main li {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  align-items: center;
}

.main-li-title {
  width: 461px;
  padding: 0px 10px 0px 10px;
  // font-family: Helvetica;
  // font-size: 16px;
  // color: #131313;
  // line-height: 20px;
  margin-right: 30px;
  margin-left: 30px;
}
.main-li-text1 {
  width: 461px;
  padding: 0px 10px 0px 10px;
  // font-family: Helvetica;
  // font-size: 16px;
  // color: #131313;
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
