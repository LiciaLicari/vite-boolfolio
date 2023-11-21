import { createWebHashHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import ContactsView from "./views/ContactsView.vue";
import NotFoundView from "./views/NotFoundView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
    },
    {
        path: '/Projects',
        name: 'projects',
        component: ProjectsView,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export { router }