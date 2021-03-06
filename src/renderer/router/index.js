import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('../components/index.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
