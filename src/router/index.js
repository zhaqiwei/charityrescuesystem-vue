

import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/views/Home.vue'
// import Community from '@/views/Community.vue'
import News from '@/views/News.vue'
import Volunteer from '@/views/Volunteer.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: () => import('../views/Home.vue') },
        { path: '/tiezishenhe', name: 'tiezishenhe', component: () => import('../views/Tiezishenhe.vue') },
        { path: '/zhiyuanbaoming', name: 'zhiyuanbaoming', component: () => import('../views/Zhiyuanbaoming.vue') },
        { path: '/login', name: 'login', component: () => import('../views/LogIn.vue') },
        { path: '/register', name: 'register', component: () => import('../views/Register.vue') },
        { path: '/Gongyizixun', name: 'Gongyizixun', component: () => import('../views/Gongyizixun.vue') },
        { path: '/gongyixingdong', name: 'gongyixingdong', component: () => import('../views/GongYiXingDong.vue') },
        { path: '/community', name: 'community', component: () => import('../views/community.vue') },
        { path: '/createpost', name: 'createpost', component: () => import('../views/CreatePost.vue') },
        { path: '/news', name: 'News',component: News},
        { path: '/volunteer',name: 'Volunteer',component: Volunteer},
        { path: '/personal', name: 'personal', component: () => import('../views/PersonalHome.vue') },
        // {path: '/community/post1',name: 'PostDetail',component: () => import('@/views/PostDetail.vue')},
        { path: '/community/create',name: 'CreatePost', component: () => import('@/views/CreatePost.vue')},
        { path: '/:pathMatch(.*)*',name: 'NotFound',component: () => import('@/views/404.vue')},
        { path: '/news1', name: 'news1', component: () => import('../views/NewsDetail1.vue') },
        { path: '/news2', name: 'news2', component: () => import('../views/NewDetail2.vue') },
        { path: '/news3', name: 'news3', component: () => import('../views/NewDetail3.vue') },
        { path: '/news4', name: 'news4', component: () => import('../views/NewDetail4.vue') },
        { path: '/news5', name: 'news5', component: () => import('../views/NewsDetail5.vue') },
        { path: '/postDetail', name: 'postDetail', component: () => import('../views/PostDetail.vue') },
        { path: '/ai', name: 'ai', component: () =>import('../views/ai.vue')  },
        { path: '/Admin', name: 'Admin', component: () =>import('../views/Admin.vue')  }
    ]
})

export default router
