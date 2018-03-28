import Vuex from 'vuex';
import Vue from 'vue';
import fetchItem from '../../api/fetchItem';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      item:[],
      id:1
    },
    actions: {
      fetchItem: ({commit}, id) => {

        //获取都id后拉去数据
        return fetchItem(id).then(item => {
          console.log("wo获取到了数据,大爷的")
          // console.log(JSON.parse(item))
          commit('setItem', { id:id, item:item})
        })
      }},
    mutations: {
      setItem: (state, { id, item }) => {
        console.log("我接收到了id"+id);
        // console.log(item)
        state.item = item;
        Vue.set(state.item, id, JSON.stringify(item))
      },
    }
  })
}

