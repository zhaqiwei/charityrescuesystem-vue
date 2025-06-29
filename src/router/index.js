import {createRouter, createWebHistory} from 'vue-router'

const router=createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/',  name:'home',  component:()=>import('../views/Home.vue')  },
        { path:'/login',  name:'login',  component:()=>import('../views/LogIn.vue')  },
        {path:'/Gongyizixun',name:'Gongyizixun',component:()=>import('../views/Gongyizixun.vue')},
        {path:'/gongyixingdong',name:'gongyixingdong',component:()=>import('../views/GongYiXingDong.vue')}
    ]
})

export  default router

