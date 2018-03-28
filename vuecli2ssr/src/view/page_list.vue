<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>这是通过router的第二个页面组件</h2>-->
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
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  },
  computed: {
    item(){
      return this.$store.state.item //zhge这个写法也可以
    }
  },

  mounted: function () {
    //获取页数后 同步数据
    this.$store.dispatch('fetchItem',{
      id:this.$route.params.id
    })
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
