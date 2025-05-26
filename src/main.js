import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/Home.vue";
import TeamView from "./views/Team.vue";
import CompanyView from "./views/Company.vue";
import ContactView from "./views/Contact.vue";
import Error404 from "./views/Error404.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/a-empresa", redirect: "company" },
  { path: "/empresa", name: "company", component: CompanyView },
  { path: "/equipe/:member(\\w+)?", name: "team", component: TeamView, props: route => ({ color: 'green', member: route.params.member })},
  { path: "/contato", name: "contact", component: ContactView },
  { path: "/:pathMatch(.*)", component: Error404 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
