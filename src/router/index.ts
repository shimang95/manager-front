import { createRouter, createWebHashHistory } from "vue-router";

const routers = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home.vue'),

    },
    
]