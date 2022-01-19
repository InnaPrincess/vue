<template>
  <div class="menu">
    <div class="menu-logo">
      <p>PROJECTUS</p>
      <form id="demo-b">
        <input placeholder="" type="search" class="pos" />
      </form>
    </div>
    <div class="menu-user" @click="ppk">
      <div class="user-info">
        <p class="name">{{ `${user1.firstName} ${user1.lastName}` }}</p>
        <br />
        <p class="profesional">{{ user1.position }}</p>
      </div>
      <p class="more"></p>
    </div>
    <div class="menu-tasks">
      <div class="menu-complit-tasks" @click="openPopap">
        <p class="tasks tC">{{ user1.task.complitedTask }}</p>
        <br />
        <p class="tasks-text">Complited Tasks</p>
      </div>
      <div>
        <p class="tasks tO">{{ user1.task.openTasks }}</p>
        <br />
        <p class="tasks-text" @click="clickOpenTask">Open Tasks</p>
      </div>
    </div>
    <ul class="menu-ul">
      <li class="menu-decoration">MENU</li>
      <li>Home</li>
      <li>My Tasks</li>
      <li>
        Notifikations<span class="num">{{ user1.notification }}</span>
      </li>
    </ul>
  </div>
</template>
<script lang="">
export default {
  name: 'Sidebar',
  props: {
    user1: {
      required: true,
    },
  },
  methods: {
    openPopap() {
      if (confirm('Are you sure you want to change the number of tasks?') && this.user1.task.openTasks > 0) {
        this.$emit('calcOpenTask');
      } else if (this.user1.task.openTasks === 0) {
        alert('У вас нет открытых заданий');
      }
    },
    clickOpenTask() {
      if (!this.user1.task.openTasks) {
        alert('У вас нет открытых заданий');
        return false;
      }
      this.$router.push({
        name: 'Tasks',
      });
    },
    ppk() {
      console.log(this.user1.lastName);
    },
  },
};
</script>
<style lang="scss">
.pos{
  margin-right: -20px;
  float:right;
}
input {
  outline: none;
}
input[type='search'] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none; 
/* remove the search and cancel icon */
}

/* search input field */
input[type='search'] {
  background: url('~@/assets/Search@3x.svg') no-repeat 11px center;
  // border: solid 1px #ccc;
  border: none;
  
  padding: 9px 10px 9px 32px;
  width: 55px;

  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;

  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
// input[type='search']:focus {
//   width: 130px;
//   background-color: #fff;
//   border-color: #6dcff6;

//   -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
//   -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
//   box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
// }

/* placeholder */
input:-moz-placeholder {
  color: #999;
}
input::-webkit-input-placeholder {
  color: #999;
}
#demo-b {
  width: 80px;
  // outline: 1px solid red;
}

#demo-b input[type='search'] {
  width: 18px;
  padding-left: 10px;
  color: transparent;
  cursor: pointer;
}
#demo-b input[type='search']:hover {
  background-color: #202020;
}
#demo-b input[type='search']:focus {
  width: 210px;
  padding-left: 32px;
  color: #ACACAC;
  background-color: #202020;
  cursor: auto;
}
#demo-b input:-moz-placeholder {
  color: transparent;
}
#demo-b input::-webkit-input-placeholder {
  color: transparent;
}
</style>
