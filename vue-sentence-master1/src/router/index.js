import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'



Vue.use(VueRouter)

const routes = [
  {
    path:'/Login',
    name:'Login',
    component:()=>import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../views/Home.vue')
  },
  {
    path:'/Register',
    name:'Register',
    component: ()=>import('../views/Register.vue')
  },
  {
    path:'/PersonCenter',
    name:'PersonCenter',
    component: ()=>import('../views/PersonCenter'),
  },
  {
    path:'/EditPerson',
    name:'EditPerson',
    component:()=>import('../views/EditPerson')
  },
  {
    path: '/Detail/:articleId',
    name: 'Detail',
    component: ()=> import('../views/Detail.vue')
  },
  {
    path: '/Search/:paramsName',
    name: 'Search',
    component: ()=> import('../views/Search.vue')
  }
  
  ]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
