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
        path: '/community',
        name: 'Community',
        component: () => import('@/views/Community.vue')
    },
    {
        path: '/community/:id',
        name: 'PostDetail',
        component: () => import('@/views/PostDetail.vue')
    },
    {
        path: '/community/create',
        name: 'CreatePost',
        component: () => import('@/views/CreatePost.vue')
    },
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
    },
    {
        path: '/news/1',
        name: 'NewsDetail1',
        component: () => import('@/views/NewsDetail1.vue')
    }
    ]
})

export  default router