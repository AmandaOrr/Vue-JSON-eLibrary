//importing create router and create web history
import {createRouter, createWebHistory } from "vue-router";

//import views
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import FAQView from '../views/FAQView.vue';
import LibraryView from '../views/LibraryView.vue';


//setting up the router const, paths and views
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //each view is an object
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/library',
            name: 'library',
            component: LibraryView,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/faq',
            name: 'FAQs',
            component: FAQView,
        }
    ],
});

export default router;