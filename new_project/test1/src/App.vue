<template>
    <div class="wraper">
        <div class="menu">
            <div class="menu-logo">
                <p>PROJECTUS</p>
            </div>
            <div class="menu-user">
                <div class="user-info">
                    <p class="name">Jean Gonsales</p><br>
                    <p class="profesional">Product Owner</p>
                </div>
                <p class="more">...</p>
            </div>
            <div class="menu-tasks">
                <div class="menu-complit-tasks" v-on:click="openPopap()">
                    <p class="tasks tC" >{{complitedTask}}</p><br><p class="tasks-text">Complited Tasks</p>
                </div>
                <div>
                    <p class="tasks tO">{{openTasks}}</p><br><p class="tasks-text">Open Tasks</p>
                </div>
            </div>
            <ul class="menu-ul">
                <li class="menu-decoration">MENU</li>
                <li>Home</li>
                <li>My Tasks</li>
                <li>Notifikations<span class="num">{{notification}}</span>
                </li>
            </ul>
        </div>
        <div class="header"><div class="hed-menu">
                <div class="header-block-1">
                    <img class="header-img" src="./assets/Shapes@2x.png " alt=" ">
                    <p>Website Redesign </p><p class="header-img-2">...</p>
                </div>
                <div class="header-block-2"><ul class="header-users-icons">
                        <li><a href=' '><img class="us-icon" src="./assets/logo1.jpg " alt=" "></a>
                        </li><li><a href=' '><img class="us-icon" src="./assets/logo2.jpg " alt=" "></a>
                        </li><li><a href=' '><img class="us-icon" src="./assets/logo3.jpg " alt=" "></a>
                        </li><li><a class='share' href=' '>Share</a>
                        </li><li class="chat">
                         <a href=' '><img src='./assets/Shape@1x.svg' alt='ico1'>Chat</a>
                        </li></ul></div></div>
            <div class="menu-header">
                <ul>
                    <li><a href=' '>Tasks</a></li>
                    <li><a href=' '>Kanban</a></li>
                    <li><a class='activ' href=' '>Activity</a></li>
                    <li><a href=' '>Calendar</a></li>
                    <li><a href=' '>Files</a></li>
                </ul>
             </div>
            <div class="main">
                <p class="main-title">TODAY</p>
                <ul>
                    <li class='main-message'>
                        <span class='main-message-message color-send'><img  src="./assets/Icon@3x.svg" alt=" "></span>
                        <p class='main-message-text'>quam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiam nemo.
                        </p>
                        <p class='main-time'>8:40 PM</p>
                    </li>
                    <li class='main-message'>
                        <span class='main-message-message color_mess'><img  src="./assets/1.png" width='12' height='11' alt=" "></span>
                        <p class='main-message-text'>olestiae delectus sequi quos aliquid aperiam nemo.</p>
                        <p class='main-time'>7:32 PM</p>
                    </li>
                    <li class='main-message'>
                        <p class='main-message-text my-write'>atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiam nemo.</p>
                    </li>
                    <li class='main-message'>
                       <span class='main-message-message color_upload'><img src="./assets/3.png" alt=" "></span> 
                        <p class='main-message-text'>quisquam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiam nemo.
                            <img  v-for="(item, index) in collectionImg" :key="index" v-on:click="notificFunction(index)" :src=imgFunc(item) width="100" height="100" alt=" ">
                        </p>
                        <p class='main-time'>8:40 PM</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
        export default defineComponent({
            name: 'App',
            created() {
            console.log('test')
        },
    data() {
        return {
           complitedTask: 372,
           openTasks: 11,
           collectionImg: ["image_1", "image_2", "image_3", "image_4"],
           notification: 3,
        }
    },
    methods: {
        openPopap(){ 
            if (confirm('Are you sure you want to change the number of tasks?') && this.openTasks > 0){
                this.complitedTask = this.complitedTask + 1
                this.openTasks = this.openTasks - 1;
            }
            else if (this.openTasks === 0){
                alert("У вас нет открітіх заданий");   
            }
        },
        imgFunc(numImage){
            return require ('./assets/' + numImage + '.jpg');
        },
        notificFunction(ni){
            this.notification = ni;
        }
    }
})
</script>

<style lang="scss">
    @import "style.scss";
</style>
