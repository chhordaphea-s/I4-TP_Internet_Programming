import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ItemDash from '../views/dashboard/Item.vue'
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'home',
    component: ()=> import ('../views/Dashboard.vue'),
    children:[
      {
        path: 'category',
        component: ()=> import ('../views/dashboard/Category.vue'),
      },
      {
        path: 'item',
        component: ItemDash
      },
      {
        path: 'product',
        component: ()=> import ('../views/dashboard/Product.vue'),
      }
      
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
