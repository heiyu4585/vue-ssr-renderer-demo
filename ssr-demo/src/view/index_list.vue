<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    这是router-index页面
  </div>
</template>

<script>

  import $ from "jquery";
  import axios from "axios";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    //以下代码仅为演示用,具体传入参数请参看接口描述详情页.
//需要引用jquery库

    function formatterDateTime() {
      var date=new Date()
      var month=date.getMonth() + 1
      var datetime = date.getFullYear()
        + ""// "年"
        + (month >= 10 ? month : "0"+ month)
        + ""// "月"
        + (date.getDate() < 10 ? "0" + date.getDate() : date
          .getDate())
        + ""
        + (date.getHours() < 10 ? "0" + date.getHours() : date
          .getHours())
        + ""
        + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
          .getMinutes())
        + ""
        + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
          .getSeconds());
      return datetime;
    }

    // $.ajax({
    //   type: 'post',
    //   url: 'http://route.showapi.com/341-1',
    //   dataType: 'json',
    //   data: {
    //     "showapi_timestamp": formatterDateTime(),
    //     "showapi_appid": 60393, //这里需要改成自己的appid
    //     "showapi_sign": '2dc80bc3efd6461da1bdcb693939dc7b',  //这里需要改成自己的应用的密钥secret
    //     "page":"1",
    //     "maxResult":"20"
    //
    //   },
    //
    //   error: function(XmlHttpRequest, textStatus, errorThrown) {
    //     alert("操作失败!");
    //   },
    //   success: function(result) {
    //     console.log(result) //console变量在ie低版本下不能用
    //   }
    // });

    axios({
      method: 'post',
      dataType: 'json',
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      data: {
        "showapi_timestamp": formatterDateTime(),
        "showapi_appid": 60393, //这里需要改成自己的appid
        "showapi_sign": '2dc80bc3efd6461da1bdcb693939dc7b',  //这里需要改成自己的应用的密钥secret
        "page":"1",
        "maxResult":"20"

      },
      url: 'http://route.showapi.com/341-1',
    })
      .then(function (response) {
        console.log("=================")
        console.log(response)

        resolve(response.data.showapi_res_body.contentlist);
      }).catch(err=>{
      console.log(err)
    })
  }
}

  function formatterDateTime() {
    var date=new Date()
    var month=date.getMonth() + 1
    var datetime = date.getFullYear()
      + ""// "年"
      + (month >= 10 ? month : "0"+ month)
      + ""// "月"
      + (date.getDate() < 10 ? "0" + date.getDate() : date
        .getDate())
      + ""
      + (date.getHours() < 10 ? "0" + date.getHours() : date
        .getHours())
      + ""
      + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
        .getMinutes())
      + ""
      + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
        .getSeconds());
    return datetime;
  }
</script>
<style >
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
