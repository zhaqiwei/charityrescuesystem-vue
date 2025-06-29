import {createRouter, createWebHistory} from 'vue-router'

const router=createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/',  name:'home',  component:()=>import('../views/Home.vue')  },
        { path:'/tiezishenhe',  name:'tiezishenhe',  component:()=>import('../views/Tiezishenhe.vue')  },
        { path:'/zhiyuanbaoming',  name:'zhiyuanbaoming',  component:()=>import('../views/Zhiyuanbaoming.vue')  },
        { path:'/login',  name:'login',  component:()=>import('../views/LogIn.vue')  },
        {path:'/Gongyizixun',name:'Gongyizixun',component:()=>import('../views/Gongyizixun.vue')}
    ]
})

export  default router