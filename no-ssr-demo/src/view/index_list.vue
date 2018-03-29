<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hello-world></hello-world>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'index',
  data () {
    return {
      msg: '这是没有ssr的首页'
    }
  },
  components:{
    HelloWorld
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
