import {createRouter, createWebHistory} from "vue-router";

import Buttons from "../views/Buttons.vue";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/buttons', component: Buttons,
    },
    {
        path: '/', component: Home,
    },
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})