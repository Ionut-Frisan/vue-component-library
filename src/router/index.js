import {createRouter, createWebHistory} from "vue-router";

import Buttons from "../views/Buttons.vue";
import Inputs from "../views/Inputs.vue";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/', component: Home,
    },
    {
        path: '/buttons', component: Buttons,
    },
    {
        path: '/inputs', component: Inputs,
    },
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})