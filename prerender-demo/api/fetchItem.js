import axios from "axios/index";

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

export  default  function fetchItem (id){
  console.log("当前页数为",id)
  return new Promise(function (resolve, reject) {
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
        "page":id,
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
  });
}



