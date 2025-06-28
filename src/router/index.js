import {createRouter, createWebHistory} from 'vue-router'

const router=createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/',  name:'home',  component:()=>import('../views/Home.vue')  },
        { path:'/login',  name:'login',  component:()=>import('../views/LogIn.vue')  },
    ]
})

export  default router