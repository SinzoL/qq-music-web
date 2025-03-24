import Home from '../views/Home/IndexView.vue';
import Layout from '../views/LayoutView.vue';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'HomeView',
                component: Home
            },
            {
                path: '/topic',
                name: 'TopicView',
                component: () => import("../views/TopicView.vue")
            },
        
            {
                path: '/mine',
                name: 'MineView',
                component: () => import("../views/MineView.vue")
            },
        
            {
                path: '/search',
                name: 'SearchView',
                component: () => import("../views/SearchView.vue")
            },
            {
                path: '/musiclistview/:disstid',
                name: 'MusicListView',
                component: () => import("../views/Home/MusicListView.vue")
            }
        ]
    }

];



const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;