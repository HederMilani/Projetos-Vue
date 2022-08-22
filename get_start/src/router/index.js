import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('../views/HelloWordPage.vue')
  },
  {
    path: '/contador',
    name: 'contador',
    component: () => import('../views/Contador.vue')
  },
  {
    path: '/encadernar',
    name: 'encadernar',
    component: () => import('../views/EncadernarFormulario.vue')
  },
  {
    path: '/condicional',
    name: 'condicional',
    component: () => import('../views/RenderizacaoCondicional.vue')
  },
  {
    path: '/lista',
    name: 'lista',
    component: () => import('../views/RenderizacaoLista.vue')
  },
  {
    path: '/vigilante',
    name: 'vigilante',
    component: () => import('../views/Vigilante.vue')
  },
  {
    path: '/componente',
    name: 'componente',
    component: () => import('../views/Componente.vue')
  },
  {
    path: '/componente2',
    name: 'componente2',
    component: () => import('../views/Componente2.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
