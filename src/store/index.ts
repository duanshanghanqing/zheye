import { createStore } from 'vuex'

export interface StoreState {
    count: number;
}

// Create a new store instance.
const store = createStore<StoreState>({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
      countLarge3 (state) { // 可抽象逻辑
          return state.count > 3;
      }
  }
});

// console.log('count', store.state.count);
// store.commit('increment'); // 触发mutations
// console.log('count', store.state.count);

export default store;