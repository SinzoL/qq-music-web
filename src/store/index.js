// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    musicListData: null, // 存储歌单数据
    musicListsData: null
  },
  mutations: {
    // 设置歌单数据
    setMusicListData(state, data) {
      state.musicListData = data;
    },
    setMusicListsData(state, data) {
      state.musicListsData = data;
    }
  },
  actions: {
    // 提供给组件调用的 action
    setMusicListData({ commit }, data) {
      commit('setMusicListData', data);
    },
    setMusicListsData({ commit }, data) {
      commit('setMusicListsData', data);
    }
  }
});