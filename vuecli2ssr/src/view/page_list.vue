<template>
  <div class="hello">
    <router-link :to="{ path: '/'}">返回首页</router-link>
    <ul>
      <li v-for="(ele, index) in item"  :key="index">
        {{ ele.title|| ""}}<br/>
        {{ ele.ct || ""}}<br/>
        {{ ele.text ||""}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // store,
  name: 'page_list',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  },
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem', {id:route.params.id})
  },
  computed: {
    item(){
      return this.$store.state.item //zhge这个写法也可以
    }
  },

  mounted: function () {
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
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
