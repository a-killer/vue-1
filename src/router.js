import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Work from '@/pages/Work'
import About from '@/pages/About'
import Project from '@/pages/Project'
//import Example1 from '@/pages/Example1'
//import Example2 from '@/pages/Example2'

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
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    }
    /*
    {
      path: '/example1',
      name: 'Example1',
      component: Example1
    },
    {
      path: '/example2',
      name: 'Example2',
      component: Example2
    }
    */
  ]
})
