<template>
  <div class="main">
    <a href="#win2" class="main-title">TASKS+</a>

    <transition-group tag="ul" class="list_tasks" name="bounce">
      <li class="main-li" v-for="(aMessage, index) in aMessages" :key="index" :ref="setItemRefs">
        <TaskItem :task="aMessage" />
      </li>
    </transition-group>
   <AddTask @addNewTask="addTask"/>
  </div>
</template>
<script lang="ts">
// import * as Magick from '@/classie.js';
import TaskItem from '@/components/TaskItem.vue';
import AddTask from '@/components/AddTask.vue';
import {defineComponent, reactive, onMounted} from 'vue';
export default defineComponent({
  name: 'Tasks',
  components: {
    TaskItem,
    AddTask,
  },

  setup(props) {
    const itemRefs: HTMLElement[] = reactive([]);
    const setItemRefs = (el: HTMLElement) => {
      if (el) {
        itemRefs.push(el);
      }
    };
    onMounted(() => {
      itemRefs.forEach((item) => {
        item.classList.add('fontresize');
        setTimeout(() => {
          item.classList.remove('fontresize');
        }, 2000);
      });
      // console.log(itemRefs);
    });
    return {setItemRefs};
  },
  data() {
    return {
      aMessages: [
        {
          title: 'quam dicta',
          time: '8:40 PM',
          text: 'quam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiamnemo.',
        },
        {
          title: 'delectus sequi пропропро п  р пр п пропроп опопро опоп ропор hgjg hj',
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
// methods: {
//     addTask() {
//       this.aMessages.push({...this.newTask});
//       this.newTask = {
//         time: '',
//         text: '',
//         title: '',
//       };
//     },
//   },



  // methods: {
  //   addTask() {
  //     if (!this.newTask.text || !this.newTask.title || !this.newTask.time) {
  //       return false;
  //     }
  //     this.aMessages.push({...this.newTask});
  //     this.newTask = {
  //       time: '',
  //       text: '',
  //       title: '',
  //     };
  //   },
  // },
});
</script>

<style lang="scss">
// .fontresize{
//   font-size: 17px;
//   transition: all 2s ease-out;
// }
//   .bounce-enter-active {
//     animation: bounce-in .4s ease-out both;
//   }

//   .bounce-leave-active {
//     animation: bounce-in .4s reverse ease-in both;
//   }

//  @keyframes bounce-in {
//     0% {
//       transform: scale(.4);
//     }
//     50% {
//       transform: scale(0.6);
//     }
//     75% {
//       transform: scale(0.9);
//     }
//     100% {
//       transform: scale(1);
//     }
//   }
section {
  margin-top: -20px;
}
.main-li {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 700px;
  // flex-direction: column;
  // padding-left: 150px;
  // align-items: center;
  // outline: 1px solid #000;
}

// .main-li-title {
//   width: 461px;
//   padding: 0px 10px 0px 10px;
//   margin-right: 30px;
//   margin-left: 30px;
// }
.main-li-text1 {
  width: 550px;
  padding: 0px 10px 0px 10px;
  line-height: 20px;
  // margin-right: 30px;
  margin-left: 30px;
  margin-top: 0px;
}
.main-time-tasks {
  margin-top: -15px;
  margin-left: 60px;
  // display: flex;
  // justify-content: right;
  opacity: 0.7;
  font-family: Helvetica;
  font-size: 14px;
  color: #131313;
  text-align: right;
  line-height: 20px;
  margin-right: 30px;
}
///////////////
.list_tasks > :nth-last-child(2) {
  font-family: 'Clip';
  font-size: 16px;
}
@keyframes blink {
  75% {
  }
  33% {
    color: #fff;
    text-shadow: 0 0 1px #fff, 0 0 2px #fff, -0.2rem 0.1rem 1rem #fff, 0.2rem 0.1rem 1rem #fff, 0 -0.5rem 2rem #fff,
      0 0.5rem 3rem #fff;
  }
  75% {
    color: green;
  }
  97% {
    color: #131313;
    text-shadow: none;
  }
}

.list_tasks > :nth-last-child(1) {
  animation: shine 2s forwards;
  animation: shine 0s forwards, blink 2s 0s 1;
}
/////////////////////////
// .blink2 {
//   -webkit-animation: blink2 1s linear infinite;
//   animation: blink2 1s linear infinite;
// }
// @-webkit-keyframes blink2 {
//   100% {
//     color: rgba(34, 34, 34, 0);
//   }
// }
// @keyframes blink2 {
//   100% {
//     color: rgba(34, 34, 34, 0);
//   }
// }


///////////////////////////////////////////
.list_tasks {
  padding: 0;
  list-style: none;
}
.list_tasks li {
  // padding:6px;
}
.list_tasks li:before {
  display: flex;
  padding-right: 10px;
  font-weight: bold;
  color: #77aedb;
  content: '\2606';
  transition-duration: 0.5s;
}
.list_tasks li:hover:before {
  color: #337ab7;
  content: '\2605';
}

</style>
