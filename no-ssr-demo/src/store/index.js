import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
import axios from 'axios';
import fetchItem from '../../api/fetchItem';
export default new Vuex.Store({
  state: {
    item: []
  },
  actions: {
    fetchItem: ({commit}, {id}) => {
      //获取都id后拉去数据
      return fetchItem(id).then(item => {
        commit('fetchItem', {id: id, item: item})
      })
    }
  },
  mutations: {
    fetchItem: (state, {id,item}) => {
      state.item = item;
    },
  }
})
