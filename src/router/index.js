import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Auth/Login'
import Register from '../views/Auth/Register'
import Profile from '../views/Profile'
import NotFound from '../views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile/:id', component: Profile },
    { path: '/not-found', component: NotFound },
    { path: '*', component: NotFound }
  ]
})
