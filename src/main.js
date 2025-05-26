import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/Home.vue'
import CompanyView from './views/Company.vue'
import ContactView from './views/Contact.vue'


const routes = [
    { path: '/', component: HomeView },
    { path: '/empresa', component: CompanyView },
    { path: '/contato', component: ContactView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
