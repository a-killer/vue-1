import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Project from '@/pages/Project'

Vue.use(Router)

export default new Router({
  mode: 'history', // this removed the # from urls
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    }
  ]
})
