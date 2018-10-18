import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tickets from '@/components/Tickets/Tickets'
import MyTickets from '@/components/Tickets/MyTickets'
import CreateTicket from '@/components/Tickets/CreateTicket'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ingressos',
      name: 'Tickets',
      component: Tickets
    },
    {
      path: '/meus',
      name: 'MyTickets',
      component: MyTickets
    },
    {
      path: '/ingressos/novo',
      name: 'CreateTicket',
      component: CreateTicket
    },
    {
      path: '/perfil',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/entrar',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/registrar',
      name: 'Signup',
      component: Signup
    }
  ],
  mode: 'history'
})
