import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => {
  return import(/* webpackChunkName: "about" */ './views/About.vue')
}

const News = () => {
  return import(/* webpackChunkName: "news" */ './views/News.vue')
}

const Service = () => {
  return import(/* webpackChunkName: "news" */ './views/Service.vue')
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    }
  ]
})
