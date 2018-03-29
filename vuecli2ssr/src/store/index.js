import Vuex from 'vuex';
import Vue from 'vue';
import fetchItem from '../../api/fetchItem';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      item: [],
      id: 1
    },
    actions: {
      fetchItem: ({commit}, {id}) => {
        console.log("我获取到了前端传递的id:",id)
        //获取都id后拉去数据
        return fetchItem(id).then(item => {
          commit('setItem', {id: id, item: item})
        })
      }
    },
    mutations: {
      setItem: (state, {id, item}) => {
        state.item = item;
        Vue.set(state.item, id, JSON.stringify(item))
      },
    }
  })
}

