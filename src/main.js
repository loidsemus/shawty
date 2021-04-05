import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    shortenedLink: null,
  },
  mutations: {
    setShortenedLink(state, link) {
      state.shortenedLink = link;
    }
  }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
