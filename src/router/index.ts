import { createRouter, createWebHashHistory } from 'vue-router'
import { constenceRoutes as routes } from './routes'

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior() {
    return {
      top: 0,
      left: 0
    }
  }
})

export default router

