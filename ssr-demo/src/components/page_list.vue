<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>这是通过router的第二个页面组件</h2>-->
    <ul>
      <li v-for="(ele, index) in item" :key="index">
       {{ ele.title|| ""}}<br/>
       {{ ele.ct || ""}}<br/>
       {{ ele.text ||""}}
      </li>
    </ul>
  </div>
</template>

<script>
  // import store from '../store/index.ssr';
export default {
  // store,
  name: 'page_list',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
  },
  asyncData ({ store, route }) {
    console.log(route.params.id)
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem', route.params.id)
  },
  computed: {
    item(){
      console.log("=================")
      console.log(this.$store.state);
      // return store.state.artList
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
  border:1px solid rebeccapurple;
}
a {
  color: #42b983;
}
</style>
