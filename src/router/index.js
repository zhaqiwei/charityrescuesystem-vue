import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: () => import('../views/Home.vue') },
        { path: '/tiezishenhe', name: 'tiezishenhe', component: () => import('../views/Tiezishenhe.vue') },
        { path: '/zhiyuanbaoming', name: 'zhiyuanbaoming', component: () => import('../views/Zhiyuanbaoming.vue') },
        { path: '/login', name: 'login', component: () => import('../views/LogIn.vue') },
        { path: '/Gongyizixun', name: 'Gongyizixun', component: () => import('../views/Gongyizixun.vue') },
        { path: '/gongyixingdong', name: 'gongyixingdong', component: () => import('../views/GongYiXingDong.vue') },
        { path: '/community', name: 'community', component: () => import('../views/community.vue') },
        { path: '/createpost', name: 'createpost', component: () => import('../views/CreatePost.vue') },
        { path: '/news1', name: 'news1', component: () => import('../views/NewsDetail1.vue') },
        { path: '/news2', name: 'news2', component: () => import('../views/NewDetail2.vue') },
        { path: '/news3', name: 'news3', component: () => import('../views/NewDetail3.vue') },
        { path: '/news4', name: 'news4', component: () => import('../views/NewDetail4.vue') },
        { path: '/postDetail', name: 'postDetail', component: () => import('../views/PostDetail.vue') },
    ]
})

export default router


