import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContatoView from "../views/ContatoView.vue";
import CursosView from "../views/CursosView.vue";
import CursoView from "../views/CursoView.vue";
import AulaView from "../views/AulaView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/ContatoView",
    name: "ContatoView",
    component: ContatoView,
  },
  {
    path: "/CursosView",
    name: "CursosView",
    component: CursosView,
  },
  {
    path: "/CursosView/:MyCurso",
    name: "MyCurso",
    component: CursoView,
    props: true,
    children: [
      {
        path: ":MyAula",
        name: "MyAula",
        component: AulaView,
        props: true,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
