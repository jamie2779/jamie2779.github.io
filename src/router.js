import { createWebHashHistory, createRouter } from "vue-router";
import NotFound from "./components/NotFound.vue"
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import PostsPage from "./components/PostsPage.vue";
import ProjectsPage from "./components/ProjectsPage.vue";
import PostView from "./components/PostView";
import ProjectView from "./components/ProjectView";


const routes = [
    
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/About",
        component: AboutPage,
    },
    {
        path: "/Posts",
        component: PostsPage,
    },
    {
        path: "/Projects",
        component: ProjectsPage,
    },
    {
        path: "/Post/:page_id",
        component: PostView,
    },
    {
        path: "/Project/:page_id",
        component: ProjectView,
    },
    {
        path: "/404",
        component: NotFound,
    }
    ,
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
        //redirect: "/",
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    mode:'hash',
    routes,
});

export default router; 