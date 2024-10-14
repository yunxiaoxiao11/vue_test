import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex)

const actions = {
  addOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('add', value);
    }
  },
  addWait(context, value) {
    setTimeout(() => {
      context.commit('add', value)
    }, 500)
  }
}
const mutations = {
  add(state, value) {
    state.sum += value
  },
  sub(state, value) {
    state.sum -= value
  },
}

const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}
const state = {
  sum: 0,
  school: '海洋大学',
  subject: 'vue'
}
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});