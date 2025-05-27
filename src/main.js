import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import (/*webpackChunkName: "home"*/ "./views/Home.vue");
const TeamView = () => import (/*webpackChunkName: "team"*/ "./views/Team.vue");
const CompanyView = () => import (/*webpackChunkName: "company"*/ "./views/Company.vue");
const ContactView = () => import (/*webpackChunkName: "contact"*/ "./views/Contact.vue");
const Error404 = () => import (/*webpackChunkName: "error"*/ "./views/Error404.vue");
const CompanyHistoryView = () => import (/*webpackChunkName: "company-history"*/ "./views/CompanyHistoryView.vue");
const CompanyAwardView = () => import (/*webpackChunkName: "company-awards"*/ "./views/CompanyAwardView.vue");

const routes = [
  { 
    path: "/", 
    name: "home", 
    component: HomeView 
  },
  { 
    path: "/a-empresa", 
    redirect: "company" 
  },
  { 
    path: "/empresa", 
    name: "company", 
    component: CompanyView,
    meta: {
      sidebar: false
    },
    children: [
      {
        path: "historia",
        name: "company-history",
        component: CompanyHistoryView,
      },
      {
        path: "premios",
        name: "company-awards",
        component: CompanyAwardView,
      },
    ]
  },
  { 
    path: "/equipe/:member(\\w+)?", 
    name: "team", 
    component: TeamView, 
    props: route => (
      { color: 'green', member: route.params.member }
    )
  },
  { 
    path: "/contato", 
    name: "contact",
    component: ContactView,
    meta: {auth: true},
  },
  { 
    path: "/:pathMatch(.*)", 
    component: Error404 ,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

const isLogged = false;

router.beforeEach((to, from, next) => {
  let n = null;
  if(to.meta.auth && !isLogged) {
    n = ({name: 'home'});
  }  
    next(n);
})
createApp(App).use(router).mount("#app");
