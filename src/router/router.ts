
import { createRouter, createWebHashHistory, RouteRecordRaw, Router } from "vue-router";


import MainPage from "../pages/MainPage/MainPage.vue";
import AboutPage from "../pages/AboutPage/AboutPage.vue";
import ProfilePage from "../pages/ProfilePage/ProfilePage.vue";
const routes: Array<RouteRecordRaw> = [
    { name: 'MainPage', path: '/', component: MainPage },
    { name: 'AboutPage', path: '/about', component: AboutPage },
    { name: 'ProfilePage', path: '/profile', component: ProfilePage },
];

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;