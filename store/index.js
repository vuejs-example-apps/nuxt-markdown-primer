import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pages: {
      'about': {
        id: 'about',
        title: 'About',
        content: require('../docs/about.md')
      },       
      'intro': {
        id: 'intro',
        title: 'Intro',
        content: require('../docs/intro.md')
      }
    }
  }
})

export default store
