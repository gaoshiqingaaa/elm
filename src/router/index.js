import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/a',
    component: layout,
    children: [
        {
            path: '/manage',
            component: resolve=>(require(["@/views/home"],resolve))
        },{
            path: '/user',
            component: resolve=>(require(["@/views/user"],resolve))
        },{
            path: '/shop',
            component: resolve=>(require(["@/views/shop"],resolve))
        },{
            path: '/food',
            component: resolve=>(require(["@/views/food"],resolve))
        },{
            path: '/order',
            component: resolve=>(require(["@/views/order"],resolve))
        },{
            path: '/manager',
            component: resolve=>(require(["@/views/manager"],resolve))
        },{
            path: '/addShop',
            component: resolve=>(require(["@/views/addShop"],resolve))   
        },{
          path: '/addItem',
          component: resolve=>(require(["@/views/addItem"],resolve))   
        },{
          path: '/userDistribution',
          component: resolve=>(require(["@/views/userDistribution"],resolve))   
        },{
          path: '/edit',
          component: resolve=>(require(["@/views/edit"],resolve))   
        },{
          path: '/setting',
          component: resolve=>(require(["@/views/setting"],resolve))   
        },{
          path: '/info',
          component: resolve=>(require(["@/views/info"],resolve))   
        }
    ]
  },{
    path: '/',
    component: resolve=>(require(["@/views/login"],resolve))  
  }
]

const createRouter = () => new Router({
  routes: constantRoutes
})

const router = createRouter()


export default router