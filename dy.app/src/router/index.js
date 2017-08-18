import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Fav from '@/components/Fav'
import Me from '@/components/Me'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/fav',
      name: 'Fav',
      component: Fav
    },{
      path: '/me',
      name: 'Me',
      component: Me
    },{
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ]
})
