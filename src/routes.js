import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";
import NotFound from "./components/404";


const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/posts",
        name: "posts",
        component: Posts
    },
    {
        path: "/post/:id",
        name: "post",
        component: Post
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
