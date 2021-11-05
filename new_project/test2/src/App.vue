<template>
<div class='app'>
  <post-form
  @create="createPost"
  />
  <post-list 
  :posts="posts"
  />
  </div>
</template>
<script>
import PostForm from "./components/PostForm"
import PostList from "@/components/PostList"

export default {
    components: { 
PostList, PostForm
    
    },
  data() {
    return {
      posts: [
        {id: 1, title: 'Javascript',  body: 'Описание поста'},
        {id: 2, title: 'Javascript2', body: 'Описание поста2'},
        {id: 3, title: 'Javascript3', body: 'Описание поста3'},
        {id: 4, title: 'Javascript4', body: 'Описание поста4'},
      ],
    }
  },
  methods: {
    createPost(post, second, third) {
      console.log(post);
      console.log(second);
      console.log(third);
    },
  }
}
</script>
<style lang="scss">
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

</style>