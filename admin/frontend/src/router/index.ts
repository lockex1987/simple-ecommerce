import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import checkAuthentication from './checkAuthentication'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes,
})

router.beforeEach(checkAuthentication)

/*
router.beforeEach(async () => {
  console.log('Check permission')
})
*/

export default router
