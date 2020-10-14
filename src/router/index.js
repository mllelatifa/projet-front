import Vue from "vue";
import VueRouter from "vue-router";
import Connexion from "../views/Connexion.vue";

//importé une fois
Vue.use(VueRouter);
//creation des views
const routes = [{
    path: "/",
    name: "Connexion",
    
    
    component: Connexion,
  },
  {
    path: "/about",
    name: "About",
     beforeEnter(to, from, next) {
      const storage = JSON.parse(localStorage.getItem("currentUser"));
      console.log(storage)
      if (!storage || (storage && storage.user.role !== 'animateur')) next("/");
      else next()
    },
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/accueil",
    name: "Accueil",
    beforeEnter(to, from, next) {
      const storage = JSON.parse(localStorage.getItem("currentUser"));
      console.log(storage)
      if (!storage || (storage && storage.user.role !== 'animateur')) next("/");
      else next()
    },
    component: () => import( /* webpackChunkName: "accueil" */ "../views/Accueil.vue"),
  }, {
    path: "/modificationUser/:id",
    name: "modificationUser",
    beforeEnter(to, from, next) {
      const storage = JSON.parse(localStorage.getItem("currentUser"));
      console.log(storage)
      if (!storage || (storage && storage.user.role !== 'animateur')) next("/");
      else next()
    },
    component: () => import( /* webpackChunkName: "accueil" */ "../views/modificationUser.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
beforeEnter(to, from, next) {
      const storage = JSON.parse(localStorage.getItem("currentUser"));
      console.log(storage)
      if (!storage || (storage && storage.user.role !== 'directeur')) next("/");
      else next()
    },
    component: () => import( /* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },

  {
    path: "/dashboard",
    name: "Dashboard",
 beforeEnter(to, from, next) {
      const storage = JSON.parse(localStorage.getItem("currentUser"));
      console.log(storage)
      if (!storage || (storage && storage.user.role !== 'animateur')) next("/");
      else next()
    },
    component: () => import( /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
  },

  {
    path: "/dashboardAdmin",
    name: "DashboardAdmin",
    beforeEnter(to, from, next) {
      const storage = JSON.parse(localStorage.getItem("currentUser"));
      console.log(storage)
      if (!storage || (storage && storage.user.role !== 'directeur')) next("/");
      else next()
    },
    component: () => import( /* webpackChunkName: "dashboardAdmin" */ "../views/DashboardAdmin.vue")
  },

  {
    path: "/Editusers/:id",
    name: "Editusers",
 beforeEnter(to, from, next) {
      const storage = JSON.parse(localStorage.getItem("currentUser"));
      console.log(storage)
      if (!storage || (storage && storage.user.role !== 'directeur')) next("/");
      else next()
    },
    component: () => import( /* webpackChunkName: "editUsers" */ "../views/Editusers.vue"),
  },

  {
    path: "/Inscription",
    name: "Inscription",
 beforeEnter(to, from, next) {
      const storage = JSON.parse(localStorage.getItem("currentUser"));
      console.log(storage)
      if (!storage || (storage && storage.user.role !== 'directeur')) next("/");
      else next()
    },
    component: () => import( /* webpackChunkName: "insscription" */ "../views/Inscription.vue"),
  },
  {
    path: "/TableauConger",
    name: "TableauConger",
beforeEnter(to, from, next) {
      const storage = JSON.parse(localStorage.getItem("currentUser"));
      console.log(storage)
      if (!storage || (storage && storage.user.role !== 'directeur')) next("/");
      else next()
    },
    component: () => import( /* webpackChunkName: "insscription" */ "../views/CongerAccepterReffuser.vue"),
  },
  {
    path: "*",
    name: "NotFound",

    component: () => import( /* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
  },
];

//pour enlever le #de l url
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;