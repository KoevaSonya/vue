import { createRouter, createWebHistory } from 'vue-router'
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import All_requests from "./components/All_requests.vue";
import Check_requests from "./components/Check_requests.vue";
import Database from "./components/Database.vue";
import Form from "./components/Form.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login },
        { path: '/register', component: Register },
        { path: '/requests', component: All_requests },
        { path: '/check', component: Check_requests },
        { path: '/database', component: Database },
        { path: '/form', component: Form }
    ]
});

export default router;
