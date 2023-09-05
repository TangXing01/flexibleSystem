export const constenceRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/Login.vue')
  }
]