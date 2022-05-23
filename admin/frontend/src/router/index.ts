import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login.vue'),
    },
    {
      path: '/backend',
      name: 'backend',
      component: () => import('@/pages/Backend.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/pages/Dashboard.vue'),
        },
        {
          path: 'change-password',
          name: 'changePassword',
          component: () => import('@/pages/ChangePassword.vue'),
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('@/pages/Product.vue'),
        },
        {
          path: 'product/:productId',
          name: 'productForm',
          component: () => import('@/pages/ProductForm.vue'),
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/pages/User.vue'),
        },
        {
          path: 'user/:userId',
          name: 'userForm',
          component: () => import('@/pages/UserForm.vue'),
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('@/pages/Order.vue'),
        },
      ],
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/pages/NotFound.vue'),
    },
  ],
})

export default router
