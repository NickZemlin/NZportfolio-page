import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contacts from '../views/Contacts.vue'
import Portfolio from '../views/Portfolio.vue'
import PathNotFound from '../views/PathNotFound'

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {}
        },
        {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts,
        meta: {}
        },
        {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
        meta: {}
        },
        {
        path: '/:pathMatch(.*)*', 
        name: '404',
        component: PathNotFound,
        meta: {}
        }
    ]
    })

export default router