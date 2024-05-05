import HomePage from "./pages/HomePage.vue";
import GamePage from "./pages/GamePage.vue";
import LocationPage from "./pages/LocationPage.vue";
import {  createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/game',
    name: 'game',
    component: GamePage
  },
  {
    path: '/location',
    name: 'location',
    component: LocationPage
  }
]

const router = createRouter({
  routes:  routes,
  history: createWebHistory(),
})

export { router };