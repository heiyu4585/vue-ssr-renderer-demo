<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <HelloWorld></HelloWorld>
    <ul>
      <li>
        <router-link :to="{ name: 'pageList', params: { id: 1 }}">pageList</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'index_list',
  data () {
    return {
      msg: '这是router-index页面'
    }
  },
  components:{
    HelloWorld
  }
}
</script>

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
