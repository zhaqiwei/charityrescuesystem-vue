import {createRouter, createWebHistory} from 'vue-router'

const router=createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/',  name:'home',  component:()=>import('../views/Home.vue')  },
        { path:'/tiezishenhe',  name:'tiezishenhe',  component:()=>import('../views/Tiezishenhe.vue')  },
        { path:'/zhiyuanbaoming',  name:'zhiyuanbaoming',  component:()=>import('../views/Zhiyuanbaoming.vue')  },
        { path:'/login',  name:'login',  component:()=>import('../views/LogIn.vue')  },
        {path:'/Gongyizixun',name:'Gongyizixun',component:()=>import('../views/Gongyizixun.vue')},
        {
        path: '/news/2',
        name: 'NewsDetail2',
        component: () => import('@/views/NewsDetail2.vue')
    },
    {
        path: '/news/3',
        name: 'NewsDetail3',
        component: () => import('@/views/NewsDetail3.vue')
    },
    {
        path: '/news/4',
        name: 'NewsDetail4',
        component: () => import('@/views/NewsDetail4.vue')
    }
    ]
})

export  default router