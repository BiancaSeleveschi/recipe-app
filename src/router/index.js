import Vue from "vue";
import VueRouter from "vue-router";
import Recipes from "@/views/Recipes";
import RecipeForm from "@/views/RecipeForm";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Recipes,
  },
  {
    path: "/recipe/create",
    name: "RecipeFrom",
    component: RecipeForm,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
