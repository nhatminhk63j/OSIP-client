import Vue from 'vue'
import VueRouter from 'vue-router'
import Trending from '../views/Trending.vue'
import Promotion from '../views/Promotion.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/trending',
    name: 'Trending',
    component: Trending
  },
  {
    path: '/promotion',
    name: 'Promotion',
    component: Promotion
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequied = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('access_token');

  if (authRequied && !loggedIn) {
    return next('/login');
  }
  next();
})

export default router;